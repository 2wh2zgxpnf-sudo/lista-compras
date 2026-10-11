// Configuración de Firebase (Realtime Database).
// Mientras FIREBASE_CONFIG sea null, la página funciona en "modo local":
// la lista se guarda solo en el celular que la abre.
// Para Realtime Database sin inicio de sesión basta con databaseURL.
window.FIREBASE_CONFIG = {
  databaseURL: "https://compras-98812-default-rtdb.firebaseio.com",
  projectId: "compras-98812",
};
