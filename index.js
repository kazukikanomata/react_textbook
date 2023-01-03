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

