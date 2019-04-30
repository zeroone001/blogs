function testfn1 (a, b, c) {
    console.log(arguments);
    var aArgs = Array.prototype.slice.call(arguments, 1);
    console.log(aArgs);
}
testfn1(1,23,4,5,6);