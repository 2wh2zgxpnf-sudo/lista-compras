# Lista de compras de la casa

Página estática (GitHub Pages) que se abre desde una etiqueta NFC. La lista se sincroniza entre
los celulares de la familia con Firebase Realtime Database.

- `index.html` — la app.
- `config.js` — configuración pública de Firebase (`null` = modo local, solo en el celular).
- `database.rules.json` — reglas de seguridad para pegar en Firebase.

La clave de la lista va en el enlace del NFC (`#k=...`) y **no** está en este repositorio.
