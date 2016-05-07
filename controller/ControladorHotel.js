module.exports=function(modelo){
	return {
		add:function(req,res){
			modelo.hotel.create({
				idHotel: null,
				nombre:req.body.nombre,
				descripcion:req.body.descripcion,
				precio:req.body.precio,
				idRol: req.body.idRol
			}).then(function(){
					res.json({"mensaje":"Hotel Agregado"});
			}).error(function(err){
					res.json({"mensaje":"El Hotel no se pudo agregar."});
				throw err;
			});
		},
		delete:function(req,res){
			modelo.hotel.destroy({
				where:{
					idHotel: req.params.id
				}
			}).then(function(){
				res.json({"mensaje":"Hotel eliminado, asesino! :v "});
			}).error(function(){
				throw err;
			});			
		},
		list:function(req,res){
			modelo.hotel.findAll({
				where:{
					idHotel: req.params.id
				}
			}).then(function(data){
				res.json(data);
			}).error(function(){
				res.json({"mensaje":"Error al listar los Hoteles ","status":500});
			});
		},
		edit:function(req,res){
			modelo.hotel.find({
				where:{
					idHotel:req.params.id
				}
			}).then(function(hotel){
				if(hotel){
					hotel.updateAttributes({
						idHotel: null,
				nombre:req.body.nombre,
				descripcion:req.body.descripcion,
				precio:req.body.precio,
				idRol: req.body.idRol
					}).then(function(hotel){
						res.json({"mensaje":"El hotel "+hotel.nombre+" fue modificado de manera correcta."});
					});
				}
			}).error(function(error){
						res.json({"mensaje":"El hotel no se pudo editar "+error,"status":500});
			});
		}
	}
}