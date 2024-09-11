# BD NoSQL Biblioteca 

## Descripción

Este proyecto simula la gestión de una biblioteca, utilizando MongoDB como base de datos NoSQL para almacenar información sobre libros, usuarios y préstamos de libros. MongoDB permite almacenar datos estructurados de manera flexible, lo que es ideal para manejar la variedad de información que maneja este sistema.

## Requisitos

- MongoDB 
- MongoDB Compass 
- MongoDB Tools

## Estructura de la Base de Datos

### Coleccion: libros

```bash
{
  "_id": 1,
  "titulo": "Cien Años de Soledad",
  "autor": "Gabriel García Márquez",
  "año_publicacion": 1967, 
  "genero": "Realismo Mágico"
}
```

### Coleccion: usuarios

```bash
{ 
 "_id": 1, 
 "nombre": "Juan Pérez",
 "email": "juan.perez@gmail.com",
 "direccion": "Calle 123 A",
 "telefono": "3001234567"
},
```

### Coleccion: prestamos

```bash
{
  "_id": 1,
  "usuario_id": ObjectId("..."),
  "libro_id": ObjectId("..."),
  "fecha_prestamo": "2024-09-01T00:00:00Z",
  "fecha_devolucion": "2024-09-15T00:00:00Z"
}
```

## Consulta

- Todos los prestamos realizados a los usuarios 

```bash
db.prestamos.aggregate([
  { $group: {
    _id: "$usuario_id",
    total_prestamos: { $sum: 1 },
    libros: { $push: "$libro_id" } 
  }},
  
  { $sort: { total_prestamos: -1 } },
  
  { $lookup: {
    from: "usuarios",
    localField: "_id",
    foreignField: "_id",
    as: "usuario_info"
  }},
  { $unwind: "$usuario_info" },

  { $lookup: {
    from: "libros",
    localField: "libros",
    foreignField: "_id",
    as: "libro_info"
  }},
  
  { $project: {
    _id: 0,
    nombre_usuario: "$usuario_info.nombre",
    total_prestamos: 1,
    libros: {
      $map: {
        input: "$libro_info",
        as: "libro",
        in: "$$libro.titulo"
      }
    }
  }}
]);

```