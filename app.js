angular.module('TodoApp',[])
  .service('TodoService', function(){
    var self = this
    self.todos  = [
      {title:'massage',done:false},
      {title:'test',done:true}
    ]

    self.list = function () {
      return self.todos
    }

    self.add = function (todo) {
      self.todos.push(todo);
    }

    self.update = function (item){
      if(item.done === false){
        item.done = true
      }
      else if(item.done === true){
        item.done = false
      }
    }
  })
  .controller('ListTodoController', function ($scope, TodoService) {
    $scope.todos = TodoService.list();
  })
  .controller('AddTodoController', function ($scope, TodoService) {
    $scope.title = ''
    $scope.add = function () {
      if($scope.title !== ''){
        var todo = {
        title: $scope.title,
        done: false
        }
        TodoService.add(todo)
        resetTodo()
      }
    }
    function resetTodo(){
      $scope.title = ''
    }
  })
  .controller('UpdateCheckboxController', function ($scope, TodoService) {
    $scope.update = function (item){
    TodoService.update(item)
    }
  })
