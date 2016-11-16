var ToDo = require ('./models/todo');

module.exports = function(app){

	//to display all the todos
	app.get('/api/todos', function(req, res){
		ToDo.find(function(err,todos){
			if (err)
   			return res.send(err)
   			res.json(todos);
		});
	});
		//to create a new todo
	app.post('/api/todos', function(req, res){

		ToDo.create({
			text: req.body.text,
			done:false
		},function(err, todos){
			 if (err)
			 	res.send(err);
			 ToDo.find(function(err, todos){
			 	if (err)
   				return res.send(err)
   				res.json(todos);
			 });	
		});
	});

	//to delete a todo
		app.delete('/api/todos/:todoId', function(req, res){
			ToDo.remove({
				_id : req.params.todoId;
			}, function (err, todos){
				if (err)
					res.send(err);
				ToDo.find(function(err,todos){
					if (err)
   					return res.send(err)
   					res.json(todos);
				});
			});
		});
};
