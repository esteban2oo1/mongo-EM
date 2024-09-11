// 1. Todos los libros que han sido prestados a un usuario especifico

db.prestamos.aggregate([
  { $match: { usuario_id: 1 } },
  { $lookup: {
    from: "libros",
    localField: "libro_id",
    foreignField: "_id",
    as: "detalle_libro"
  }},
  { $unwind: "$detalle_libro" },
  { $project: {
    _id: 1,
    titulo: "$detalle_libro.titulo",
    fecha_prestamo: 1,
    fecha_devolucion: 1
  }}
]);

// 2. Todos los libros que aun no han sido devueltos de un usuario especifico.

db.prestamos.aggregate([
  { $match: { usuario_id: 1, fecha_devolucion: { $exists: false } } }, 
  { $lookup: { 
    from: "libros",             
    localField: "libro_id",     
    foreignField: "_id",        
    as: "detalle_libro"         
  }},
  { $unwind: "$detalle_libro" },  
  { $project: { 
    _id: 1,                           
    titulo: "$detalle_libro.titulo",  
    fecha_prestamo: 1                 
  }}
]);

// 3. Todos los libros que han sido devueltos de un usuario especifico.

db.prestamos.aggregate([
  { $match: { usuario_id: 1, fecha_devolucion: { $exists: true } } },  
  { $lookup: { 
    from: "libros",             
    localField: "libro_id",    
    foreignField: "_id",        
    as: "detalle_libro"         
  }},
  { $unwind: "$detalle_libro" },  
  { $project: { 
    _id: 1,                           
    titulo: "$detalle_libro.titulo",  
    fecha_prestamo: 1,                
    fecha_devolucion: 1               
  }}
]);
