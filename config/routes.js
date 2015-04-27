"use strict";

module.exports = function(router, controllers){
  router.namespace('/:locale', function(router){
    router.get('/', controllers.todos_controller, 'index');    
    router.post('/', controllers.todos_controller, 'create');    
    router.get('/:id', controllers.todos_controller, 'show');
    router.put('/:id', controllers.todos_controller, 'update');
    router.del('/:id', controllers.todos_controller, 'remove');
  });
};