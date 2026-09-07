# PROMEZA CRM — Traspaso de contexto (para Claude Code)

> Documento para continuar el trabajo en otra máquina (MacBook). Léelo completo antes de tocar nada. Última actualización: **v236** (2026-08-10).

## Qué es
CRM de la organización PROMEZA. Es una **app web (SPA en React)** servida por **GitHub Pages**, con **Airtable** como base de datos. La usuaria (Vanessa) NO es técnica — explícale todo en español, simple, y verifica antes de desplegar.

- **Repo:** https://github.com/promezamg/PROMEZA-CRM  (el remoto usa `promezamg` en minúsculas)
- **App en vivo:** https://promezamg.github.io/PROMEZA-CRM/
- **Se sirve desde la rama `gh-pages`.** Cada cambio se hace push a **main Y gh-pages** (las dos).

## Arquitectura
- La app está **precompilada**: se escribe en archivos `.jsx` y se transpilan a un solo `bundle.NNN.js` (sin Babel en el navegador — eso fue el gran arreglo de velocidad).
  - Archivos fuente `.jsx` (orden del bundle): `ui, auth, shell, map, home, lists, profile, forms, duplicates, interactions, tasks, pipeline, projects, attachments, campaigns, calendar, goals, county, app`.
  - Utilidades planas (NO en el bundle, scripts sueltos): `airtable.js`, `data.js`, `data_churches.js`, `i18n.js`.
  - Estilos: `styles.css` (tampoco va en el bundle).
- **Airtable:** base `app0MYHVyhTYFsDqV`. Tablas: `PERSONAS PROMEZA CRM`, `ENTIDADES PROMEZA CRM`, `ESTADO PROMEZA CRM` (clave-valor). El **PAT de Airtable va embebido en `airtable.js`** (base64) — no hay que configurar nada aparte.
- **Modelo de datos:** cada registro guarda TODO en la columna `_data` (JSON). Las columnas visibles de Airtable (Teléfono, Email, Dirección, Ciudad…) son un espejo legible. Al cargar, **`_data` manda** sobre las columnas.
  - Los teléfonos/correos viven en `phones[]` / `emails[]` (arreglos de `{value,label}`) + un `phone`/`email` singular (el principal). SIEMPRE hay que mantener el singular en sync con el arreglo — hay 4 sitios que derivan eso (crear/editar × persona/entidad).
- **Sincronización:** al abrir hace un delta ligero (4s) y un pull COMPLETO diferido (40s). Luego cada ~2 min un delta, y cada ~8 min un pull completo (red de seguridad que atrapa lo que el delta se saltó, p.ej. por retraso de indexación de Airtable). Borrados se propagan con una lista de "tombstones" en ESTADO (`deletedIds`) + purga de fantasmas en el pull completo.
- **PWA auto-actualizable:** el service worker (`sw.js`) toma control y recarga una vez (con guardia en sessionStorage para no hacer bucle). Por eso las nuevas versiones se aplican solas.

## Cómo desplegar un cambio (IMPORTANTE)
1. Editar el/los `.jsx` (o `styles.css` / `airtable.js`).
2. Si cambió un `.jsx` → **recompilar el bundle**. `_build.html` transpila con Babel en el navegador y hace `POST /save` para escribir `bundle.NNN.js` en el disco; necesita un servidor local que sirva la carpeta y acepte ese POST.
   - **En Mac/Linux** (no hace falta PowerShell ni Node): `python3 build_server.py` (puerto 5177) y abrir `http://localhost:5177/_build.html`. Al terminar dice `POST /save -> 200`.
   - **En Windows**: `build_server.ps1` (mismo puerto 5177) — ese script vive en la máquina Windows, no en el repo.
   - VERIFICA siempre que el bundle pasa `new Function(text)` sin error de sintaxis ANTES de hacer push (no hay error boundary global: un `.jsx` malo = pantalla en blanco para todos). En la consola del navegador, con el servidor corriendo:
     ```js
     fetch('/bundle.229.js?c='+Date.now()).then(r=>r.text()).then(t=>{try{new Function(t);return 'OK '+t.length}catch(e){return 'ERROR: '+e.message}})
     ```
   - Ojo: el nombre del archivo sigue siendo `bundle.229.js` (está fijo en `_build.html` y en `index.html`); el cache-busting real lo hace `?v=NNN`.

3. Subir versión: en `index.html` cambia todos los `?v=NNN` — **incluido el del `<script src="bundle.229.js?v=NNN">`**, que hasta la v237 iba sin `?v=` y hacía que los navegadores siguieran usando el bundle viejo (síntoma: despliegas y "no se ve el cambio"); en `sw.js` cambia `promeza-vNNN` y el nombre del bundle. (Convención: sube el número.)
4. `git add` de lo cambiado, commit, y **push a `main` y a `gh-pages`**:
   ```
   git push origin main
   git push origin main:gh-pages
   ```
5. Verifica en vivo que `index.html` ya sirve el bundle y `?v=` nuevos (con un cache-buster).

## Reglas / cosas que NO hacer
- **Cold start pide login de Microsoft** (a propósito, por seguridad). La clave de sesión va en `sessionStorage`, no se persiste. No lo rompas.
- **NO** construir respaldos por email a Betty (`betty@promeza.com`) — es la jefa, ya tiene acceso a Airtable.
- **Puerto Rico es su propio país** en los datos.
- Antes de operaciones masivas/destructivas en Airtable, respalda o verifica.
- Los **comentarios** son locales por dispositivo (no se sincronizan). Los **favoritos**, cambios/historial, tareas-de-datos SÍ dependen de la base.
- Ojo con PowerShell 5.1 (Windows): lee `.ps1` como ANSI (acentos con códigos `[char]`), y `@($null).Count` da 1 (no 0). En Mac ya no se usan los `.ps1` para compilar (ver `build_server.py`); los scripts de importación `.ps1` del repo siguen siendo de Windows.

## Token de GitHub
**Ya NO se usan tokens.** Los tokens clásicos caducaron y dieron problemas. Desde 2026-09-07 la MacBook se autentica con una **llave SSH** (`~/.ssh/id_ed25519`, sin contraseña, registrada en la cuenta con el título "promeza mg"). El remoto es `git@github.com:PromezaMG/PROMEZA-CRM.git` — ojo con las mayúsculas, `promezamg` en minúsculas funciona pero GitHub avisa de redirección.

`git push` funciona directo, sin pedir nada. Para comprobar la llave: `ssh -T git@github.com` debe contestar "Hi PromezaMG!". Si algún día hay que revocarla: github.com/settings/keys → Delete (y se genera otra con `ssh-keygen -t ed25519 -f ~/.ssh/id_ed25519 -N ""`, pegando la parte `.pub` en esa misma página).

## Qué se hizo en la última sesión (v237)
- **Parentesco entre contactos** (`profile.jsx`): nueva pestaña "Parentesco" + tarjeta en Detalles. Se guarda en `relations: [{id, type, typeOther}]` dentro de `_data` (no hizo falta tocar Airtable). Se lee como "<el otro> es <tipo> de este contacto".
  - **Se escribe en las DOS fichas** (con el tipo inverso: padre↔hijo, abuelo↔nieto, tío↔sobrino, suegro↔yerno; cónyuge/hermano/primo/cuñado son simétricos), así aparece desde cualquier lado. Borrar desde una ficha lo quita de las dos.
  - Las **etiquetas se adaptan al campo "Sexo"** del otro contacto (Padre/Madre, Hijo/Hija, Esposo/Esposa…) y usan la forma neutra ("Padre / Madre") si el sexo no está puesto. No hay que escribir el género a mano.
  - El buscador de familiares **exige 2 letras y muestra 10 resultados como mucho** (la base tiene ~18k personas).

## Qué se hizo en la última sesión (v218 → v236)
- Comentarios **editables/borrables** (con marca "editado"). Siguen siendo locales por dispositivo.
- **Móvil:** arreglado el desbordamiento horizontal (`@media ≤768px` en styles.css) + zonas seguras del notch (`viewport-fit=cover` + `env(safe-area-inset-*)`).
- **Velocidad de apertura:** primer sync ligero + pull completo diferido a 40s + librerías pesadas (SheetJS/EmailJS/Leaflet) con `defer` + splash instantáneo en `index.html`.
- **PWA auto-actualiza** (SW `clients.claim()` + recarga guardada una vez).
- **Todo clickeable como enlace real** (`<GoLink>` en `ui.jsx` + `window.PROMEZA_GO`/`PROMEZA_HASH`): menú lateral, tarjetas, filas, nombres en duplicados, etc. → permiten "abrir en pestaña nueva". Regla CSS `.golink-reset` (menor prioridad) para no pisar el color de `.nav-item`/`.btn`. Y `.sidebar .nav-item` a prueba de balas para el color del menú.
- **Calendario:** flechas ‹ › de mes (los iconos `chevron-left/right` no existían; ahora flechas de texto) + botón "Hoy". Se agregó icono `chev-left` en ui.jsx.
- **Tareas de datos pendientes:** chips (Sin teléfono/email/nombre/dirección/Entidades repetidas vinculadas) que inyectan tareas virtuales 📝 con tope 300 y contador; botón "Completar datos".
- **Fusión "conservar los dos":** en teléfono/email/web del editor de fusión (contactos Y entidades) puedes marcar A, B o ambos (casillas). Union + dedupe en `phones[]`/`emails[]`.
- **Favoritos ⭐:** estrella junto al nombre en perfil de contacto y entidad (`favorite` en el registro, se sincroniza); sección "Favoritos" en el menú (`FavoritesView` en lists.jsx, ruta `favorites`, cuenta en el sidebar).
- **Mostrar TODO:** el perfil de ENTIDAD ahora lista todos los teléfonos/correos (antes solo el principal). Y las **columnas de Airtable** (Teléfono/Email/Dirección) ahora guardan TODOS los valores (helpers `joinAll`/`joinAddresses` en airtable.js). Se hizo backfill de 110 contactos + 5 entidades con múltiples valores.

## Pendientes / ideas abiertas
- Entidades solo tienen **un** campo de dirección (los contactos tienen "direcciones adicionales"). Falta habilitar direcciones múltiples para entidades si lo piden.
- Migrar de Airtable a otra base: se recomendó **quedarse en Airtable**; si hay que ahorrar, Supabase/NocoDB antes que Google Sheets (Sheets no aguanta bien 24 mil registros con app).
- La base tiene ~17.9k personas + ~5.7k entidades. Cuidado con operaciones O(n²) y con inundar vistas (usar topes/paginación).
