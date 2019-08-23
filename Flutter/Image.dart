
void Test () {
  Image(
    image: AssetImage("images/avatar.png"),
    width: 100.0
  )

  Image.asset("images/avatar.png", width: 100.0);

  Image.network("https://avatars2.githubusercontent.com/u/20411648?s=460&v=4", width: 100.0);

}
