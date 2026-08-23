#!/usr/bin/env python3
# Servidor de compilacion para Mac/Linux (equivalente a build_server.ps1 de Windows).
# Sirve la carpeta del proyecto en http://localhost:5177 y acepta POST /save?name=archivo
# para que _build.html guarde el bundle directamente en el disco.
#
#   python3 build_server.py            (Ctrl+C para parar)
#   luego abre http://localhost:5177/_build.html
import os, re, sys
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from urllib.parse import urlparse, parse_qs

ROOT = os.path.dirname(os.path.abspath(__file__))
PORT = int(sys.argv[1]) if len(sys.argv) > 1 else 5177

class Handler(SimpleHTTPRequestHandler):
    def __init__(self, *a, **kw):
        super().__init__(*a, directory=ROOT, **kw)

    def do_POST(self):
        parts = urlparse(self.path)
        if parts.path != '/save':
            self.send_error(404, 'solo /save')
            return
        name = (parse_qs(parts.query).get('name') or [''])[0]
        # Solo nombres simples dentro de la carpeta del proyecto.
        if not re.fullmatch(r'[A-Za-z0-9._-]+', name):
            self.send_error(400, 'nombre invalido')
            return
        body = self.rfile.read(int(self.headers.get('Content-Length') or 0))
        with open(os.path.join(ROOT, name), 'wb') as f:
            f.write(body)
        msg = f'guardado {name} ({len(body)} bytes)'.encode()
        self.send_response(200)
        self.send_header('Content-Type', 'text/plain; charset=utf-8')
        self.send_header('Content-Length', str(len(msg)))
        self.end_headers()
        self.wfile.write(msg)
        print(msg.decode())

    def end_headers(self):
        self.send_header('Cache-Control', 'no-store')
        super().end_headers()

if __name__ == '__main__':
    print(f'PROMEZA build server -> http://localhost:{PORT}/_build.html  (carpeta: {ROOT})')
    ThreadingHTTPServer(('127.0.0.1', PORT), Handler).serve_forever()
