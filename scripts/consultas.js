// 4. Todos los prestamos realizados a los usuarios  

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
  
  // 5. Todos los prestamos realizados a los usuarios no devueltos
  
  db.prestamos.aggregate([
  
    { $match: { fecha_devolucion: { $exists: false } } },
  
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
  
  // 6. Historial de préstamos de un libro específico
  
  db.prestamos.aggregate([
    { $match: { libro_id: 4 } },  
    { $lookup: {
      from: "usuarios",
      localField: "usuario_id",
      foreignField: "_id",
      as: "usuario_info"
    }},
    { $unwind: "$usuario_info" },
    { $project: {
      _id: 1,
      usuario_nombre: "$usuario_info.nombre",
      fecha_prestamo: 1,
      fecha_devolucion: 1
    }}
  ]);
  