import 'package:flutter/material.dart';

void main() => runApp(
  MaterialApp(
    title: 'Returning Data Demo',
    home: HomeScreen(),
  ));

class HomeScreen extends StatelessWidget {
  @override 
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Returning Data Demo'),
      ),
      body: Center(child: SelectionButton(),),
    );
  }
}

class SelectionButton extends StatelessWidget {
  @override 
  Widget build(BuildContext context) {
    // TODO: implement build
    return RaisedButton(
      onPressed: () {
        _navigateAndDisplaySelection(context);
      },
      child:  Text('Pick an option, any option!'),
    );
  }
  _navigateAndDisplaySelection (BuildContext context) async {
    final result = await Navigator.push(context, 
      MaterialPageRoute(builder: (context) => SelectionScreen())
    );

    Scaffold.of(context)..removeCurrentSnackBar()..showSnackBar(SnackBar(content: Text("$result")));
  } 
}

class SelectionScreen extends StatelessWidget {
  @override 
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Pick an option')),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Padding(
              padding: const EdgeInsets.all(8.0),
              child: RaisedButton(
                onPressed: () {
                  Navigator.pop(context, 'Yep!');
                },
                child: Text('Yep!!'),
              ),
            ),
            Padding(
              padding: const EdgeInsets.all(8.0),
              child: RaisedButton(
                onPressed: () {
                  Navigator.pop(context, 'Nope!');
                },
                child: Text('Nope!'),
              ),
            )
          ],
        ),
      ),
    );
  }
}