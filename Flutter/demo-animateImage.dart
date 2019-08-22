import 'package:flutter/material.dart';

void main() => runApp(
  MaterialApp(
    title: 'Returning Data Demo',
    home: MainScreen(),
  ));

class MainScreen extends StatelessWidget {
  @override 
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Main Screen'),
      ),
      body: GestureDetector(
        child: Hero(
          tag: 'ImageHero',
          child: Image.network('https://picsum.photos/250?image=9'),
        ),
        onTap: () {
          Navigator.push(context, 
          MaterialPageRoute(builder: (context) => DetailScreen())
          );
        },
      ),
    );
  }
}

class DetailScreen extends StatelessWidget {
  @override 
  Widget build(BuildContext context) {
    return Scaffold(
      body: GestureDetector(
        onTap: () {
          Navigator.pop(context);
        },
        child: Center(
          child: Hero(
            child: Image.network('https://picsum.photos/250?image=9'),
            tag: 'ImageHero',
            ),
        ),
      ),
    );
  }
}