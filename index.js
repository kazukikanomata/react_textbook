// 基本はconstを使う。　変化にはletが良い
const arr1 = ["dog", "cat"];
console.log(arr1);

arr1.push("money");
console.log(arr1);

// テンプレート文字列の使用を可能にした
const first_name = "kazuki";
const age = 24;
const message = `私の名前は${first_name}です。年齢は${age}です。`;
console.log(message);

// 従来の関数
function func1(value){
    return value;
}
console.log(func1("func1です"));

// アロー関数
// const func2 = (value) =>{
//     return value;
// }
// console.log(func2("func2です。"));

// 注意

// 引数が1つのときはかっこを省略することができる
const func2 = value =>{
    return value;
};
console.log(func2("func2です。"));

// 引数が2つ以上だとエラー
// ちゃんと（）でくくりましょう
// const func3 = value1, value2 =>{
//     return value1 + value2;
// };

// 処理が単一ぎょうのときは省略(括弧とreturn)できるのは良い
const func4 = (num1, num2) => num1 + num2;
console.log(func4(10,20));

// 返却値が複数行に及ぶ場合は()で囲むことで単一行のようにまとめて返却することができる。
const func5 = (val1, val2)=>(
    {
        first_name1: val1,
        age: val2,
    }
)
console.log(func5("kazuki", 24));