function Test () {
    this.mm = function () {
        console.log('1');
    }
}

Test.prototype.a = function () {
    console.log('2');
}

Test.a = function() {
    console.log('3')
}
console.log(Test);

