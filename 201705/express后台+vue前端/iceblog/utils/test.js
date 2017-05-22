function foo() {
    var res = [];
    for (var i = 0; i < 10; i++) {
        setTimeout(function () {
            res[i] = i;
            console.log(res);
        }, 200);
    }
}

function bar() {
    var res = [];
    for (var i = 0; i < 10; i++) {
        (function (index) {//通过传参方式解决变量引用问题
            setTimeout(function () {
                res[index] = index;
                console.log(res);
            }, 200);
        })(i)
    }
}

foo();
//bar();
