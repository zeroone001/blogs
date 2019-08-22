import 'package:flutter/material.dart';

void main() => runApp(
  MaterialApp(
    title: 'Naviagtor',
    home: TodoScreen(
      todos: todos
    ),
  ));

class Todo {
  final String title;
  final String description;

  Todo(this.title, this.description);
}

final todos = List<Todo>.generate(20, (i) => Todo(
  'Todo $i', 
  'A description of what needs to be done for Todo $i'
  )
);

class TodoScreen extends StatelessWidget {
  final List<Todo> todos;

  TodoScreen({Key key, @required this.todos}) : super(key: key);

  @override 
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Todos'),
      ),
      body: ListView.builder(
        itemCount: todos.length,
        itemBuilder: (context, index) {
          return ListTile(
            title: Text(todos[index].title),
            onTap: () {
              Navigator.push(context,
              MaterialPageRoute(builder: (context) => DetailScreen(todo: todos[index]))
              );
            },
          );
        },
      ),
    );
  }
}

class DetailScreen extends StatelessWidget {
  final Todo todo;
  DetailScreen({Key key, @required this.todo}) : super(key: key);

  @override 
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(todo.title),
      ),
      body: Padding(
        padding: EdgeInsets.all(16.0),
        child: Text(todo.description)
      ),
    );
  }
}

