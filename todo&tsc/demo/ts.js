// 1.用两种方式创建boolean类型的数组
var flag1 = [true, true, false];
console.log(flag1);
var flag2 = [true, false];
console.log(flag2);
// 2.(1)工厂模式创建对象(new object())
function gc(name, age) {
    var o = new Object();
    o.name = name;
    o.age = age;
    o.sayname = function () {
        console.log(this.name);
    };
    return o;
}
var gc1 = gc('cuiyutong', 19);
console.log(gc1);
//   (2)构造函数创建对象
function gz(name, age) {
    this.name = name;
    this.age = age;
    this.sayname = function () {
        console.log(this.name);
    };
}
var gz1 = new gz('libo', 21);
console.log(gz1);
// 3.将对象造个句子
var obj2;
obj2 = { name: '李博', age: 21 };
var arr2 = "my name is  ".concat(obj2.name, " age is ").concat(obj2.age);
console.log(arr2);
document.write(arr2);
// 4.找一个数组中的修改原数组的方式，找一下数组中哪些方式可以使用，哪些不能使用
// push()  //尾添加
// unshift() //头添加
// splice() //替换截取
// pop() //尾删除
// shift() //头删除
// 5.为什么类型断言最后是number
// 6.函数类型有哪几种
// (1)匿名函数:定义时候咩有任何变量引用的函数
// (2)回调函数:一个函数作为对象交给其他函数使用
// (3)递归函数:循环调用函数本身
// (4)构造函数:构造函数习惯上首字母大写，用来新建实例对象
