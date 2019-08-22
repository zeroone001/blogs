import 'package:flutter/material.dart';

void main() => runApp(
  MaterialApp(
    title: 'Naviagtor',
    initialRoute: '/',
    routes: {
      '/': (context) => FirstRoute(),
      '/second': (context) => SecondRoute()
    }
  ));

class FirstRoute extends StatelessWidget {
  @override 
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('First Route'),
      ),
      body: Center(
        child: RaisedButton(
          child: Text('open route'),
          onPressed: () {
            Navigator.pushNamed(context, '/second');
          },
        ),
      ),
    );
  }
}

class SecondRoute extends StatelessWidget {
  @override 
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('second Route~'),
      ),
      body: Center(
        child: RaisedButton(
          child: Text('open First Route'),
          onPressed: () {
            Navigator.pop(context);
          },
        )
      ),
    );
  }
}
