// import 'dart:math';
// #enddocregion ShakeCurve
// import 'package:flutter/animation.dart';
import 'package:flutter/material.dart';

void main() => runApp(
  MaterialApp(
    title: 'Naviagtor',
    home: FirstRoute(),
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
            Navigator.push(
              context,
              MaterialPageRoute(builder: (context) => SecondRoute()),
            );
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
        title: Text('second Route'),
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
