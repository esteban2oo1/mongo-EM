use biblioteca

db.createCollection("libros");
db.createCollection("usuarios");
db.createCollection("prestamos");

db.libros.insertMany([
  { _id: 1, "titulo": "Cien Años de Soledad", "autor": "Gabriel García Márquez", "año_publicacion": 1967, "genero": "Realismo Mágico" },
  { _id: 2, "titulo": "1984", "autor": "George Orwell", "año_publicacion": 1949, "genero": "Distopía" },
  { _id: 3, "titulo": "El Gran Gatsby", "autor": "F. Scott Fitzgerald", "año_publicacion": 1925, "genero": "Ficción" },
  { _id: 4, "titulo": "Matar a un Ruiseñor", "autor": "Harper Lee", "año_publicacion": 1960, "genero": "Drama" },
  { _id: 5, "titulo": "Orgullo y Prejuicio", "autor": "Jane Austen", "año_publicacion": 1813, "genero": "Romántico" },
  { _id: 6, "titulo": "El Hobbit", "autor": "J.R.R. Tolkien", "año_publicacion": 1937, "genero": "Fantasía" },
  { _id: 7, "titulo": "Los Pilares de la Tierra", "autor": "Ken Follett", "año_publicacion": 1989, "genero": "Histórico" },
  { _id: 8, "titulo": "Crimen y Castigo", "autor": "Fiódor Dostoyevski", "año_publicacion": 1866, "genero": "Drama" },
  { _id: 9, "titulo": "El Nombre de la Rosa", "autor": "Umberto Eco", "año_publicacion": 1980, "genero": "Misterio" },
  { _id: 10, "titulo": "El Código Da Vinci", "autor": "Dan Brown", "año_publicacion": 2003, "genero": "Thriller" },
  { _id: 11, "titulo": "La Sombra del Viento", "autor": "Carlos Ruiz Zafón", "año_publicacion": 2001, "genero": "Misterio" }
]);

db.usuarios.insertMany([
  { _id: 1, "nombre": "Juan Pérez", "email": "juan.perez@gmail.com", "direccion": "Calle 123 A", "telefono": "3001234567" },
  { _id: 2, "nombre": "Ana Gómez", "email": "ana.gomez@gmail.com", "direccion": "Avenida 45 B", "telefono": "3009876543" },
  { _id: 3, "nombre": "Luis Rodríguez", "email": "luis.rodriguez@gmail.com", "direccion": "Calle 78 A", "telefono": "3111239876" },
  { _id: 4, "nombre": "Marta Fernández", "email": "marta.fernandez@gmail.com", "direccion": "Carrera 20 C", "telefono": "3206541234" },
  { _id: 5, "nombre": "Carlos García", "email": "carlos.garcia@gmail.com", "direccion": "Calle 15 D", "telefono": "3123459876" },
  { _id: 6, "nombre": "Laura Martínez", "email": "laura.martinez@gmail.com", "direccion": "Avenida 50 B", "telefono": "3141237654" },
  { _id: 7, "nombre": "Pedro Gómez", "email": "pedro.gomez@gmail.com", "direccion": "Carrera 60 A", "telefono": "3219876543" },
  { _id: 8, "nombre": "Isabel Díaz", "email": "isabel.diaz@gmail.com", "direccion": "Calle 100 E", "telefono": "3137654321" },
  { _id: 9, "nombre": "Andrés Sánchez", "email": "andres.sanchez@gmail.com", "direccion": "Carrera 10 F", "telefono": "3223456789" },
  { _id: 10, "nombre": "Sofía Castro", "email": "sofia.castro@gmail.com", "direccion": "Avenida 70 G", "telefono": "3156549876" }
]);

db.prestamos.insertMany([
  // Usuario 1
  { _id: 1, usuario_id: 1, libro_id: 1, fecha_prestamo: new Date('2024-01-01'), fecha_devolucion: new Date('2024-01-10') },
  { _id: 2, usuario_id: 1, libro_id: 4, fecha_prestamo: new Date('2024-02-05')}, // Aún no devuelto
  { _id: 3, usuario_id: 1, libro_id: 7, fecha_prestamo: new Date('2024-03-10')}, // Aún no devuelto

  // Usuario 2
  { _id: 4, usuario_id: 2, libro_id: 2, fecha_prestamo: new Date('2024-04-05'), fecha_devolucion: new Date('2024-04-20') },
  { _id: 5, usuario_id: 2, libro_id: 6, fecha_prestamo: new Date('2024-05-10')}, // Aún no devuelto
  { _id: 6, usuario_id: 2, libro_id: 3, fecha_prestamo: new Date('2024-06-15'), fecha_devolucion: new Date('2024-06-25') },

  // Usuario 3
  { _id: 7, usuario_id: 3, libro_id: 5, fecha_prestamo: new Date('2024-07-01'), fecha_devolucion: new Date('2024-07-15') },
  { _id: 8, usuario_id: 3, libro_id: 8, fecha_prestamo: new Date('2024-08-01'), fecha_devolucion: new Date('2024-08-20') },
  { _id: 9, usuario_id: 3, libro_id: 9, fecha_prestamo: new Date('2024-09-01')}, // Aún no devuelto

  // Usuario 4
  { _id: 10, usuario_id: 4, libro_id: 6, fecha_prestamo: new Date('2024-02-15'), fecha_devolucion: new Date('2024-03-01') },
  { _id: 11, usuario_id: 4, libro_id: 7, fecha_prestamo: new Date('2024-03-05'), fecha_devolucion: new Date('2024-03-20') },
  { _id: 12, usuario_id: 4, libro_id: 2, fecha_prestamo: new Date('2024-04-10'), fecha_devolucion: new Date('2024-04-25') },

  // Usuario 5
  { _id: 13, usuario_id: 5, libro_id: 1, fecha_prestamo: new Date('2024-05-05'), fecha_devolucion: new Date('2024-05-20') },
  { _id: 14, usuario_id: 5, libro_id: 3, fecha_prestamo: new Date('2024-06-10')}, // Aún no devuelto
  { _id: 15, usuario_id: 5, libro_id: 4, fecha_prestamo: new Date('2024-07-15'), fecha_devolucion: new Date('2024-07-25') },

  // Usuario 6
  { _id: 16, usuario_id: 6, libro_id: 8, fecha_prestamo: new Date('2024-08-01'), fecha_devolucion: new Date('2024-08-15') },
  { _id: 17, usuario_id: 6, libro_id: 9, fecha_prestamo: new Date('2024-09-05')}, // Aún no devuelto
  { _id: 18, usuario_id: 6, libro_id: 5, fecha_prestamo: new Date('2024-10-10'), fecha_devolucion: new Date('2024-10-20') },

  // Usuario 7
  { _id: 19, usuario_id: 7, libro_id: 2, fecha_prestamo: new Date('2024-11-01'), fecha_devolucion: new Date('2024-11-15') },
  { _id: 20, usuario_id: 7, libro_id: 7, fecha_prestamo: new Date('2024-12-05')}, // Aún no devuelto

  // Usuario 8
  { _id: 21, usuario_id: 8, libro_id: 3, fecha_prestamo: new Date('2024-12-01'), fecha_devolucion: new Date('2024-12-20') },
  { _id: 22, usuario_id: 8, libro_id: 4, fecha_prestamo: new Date('2024-11-15')}, // Aún no devuelto

  // Usuario 9
  { _id: 23, usuario_id: 9, libro_id: 5, fecha_prestamo: new Date('2024-10-01'), fecha_devolucion: new Date('2024-10-15') },
  { _id: 24, usuario_id: 9, libro_id: 6, fecha_prestamo: new Date('2024-11-01'), fecha_devolucion: new Date('2024-11-10') },

  // Usuario 10
  { _id: 25, usuario_id: 10, libro_id: 1, fecha_prestamo: new Date('2024-07-01'), fecha_devolucion: new Date('2024-07-10') },
  { _id: 26, usuario_id: 10, libro_id: 9, fecha_prestamo: new Date('2024-08-15'), fecha_devolucion: new Date('2024-08-25') },
  { _id: 27, usuario_id: 10, libro_id: 8, fecha_prestamo: new Date('2024-09-01')} // Aún no devuelto
]);

