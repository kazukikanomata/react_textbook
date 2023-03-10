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

// 分割代入
// 従来の書き方
// const myProfile = {
//     name: "kazuki",
//     age: 24,
// };
// const message1 = `私の名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`;
// console.log(message1);

// オブジェクト分割代入
const myProfile = {
    name2: "kazuki",
    age1: 24,
};
const {name2, age1} = myProfile;
const message1 = `私の名前は${name2}です。年齢は${age1}歳です。`;

// 抽出したプロパティの別の名前をつける
const myProfile1 = {
    name2: "fuog",
    age1: 25,
};
const {name2: newName, age1: newAge} = myProfile1;
const message2 = `私の名前は${newName}です。年齢は${newAge}歳です。`;
console.log(message2);

const yourProfile = ["azuki", 32];
const [name3, age3] = yourProfile;
const message3 = `私の名前は${name3}です。年齢は${age3}歳です`;
console.log(message3);

// デフォルト値
// オブジェクトの時でも使える
// const sayHello = (your_name) => console.log(`こんにちは!${your_name}さん。`);

// これはundefinedさんになってしまう。
// sayHello();

// デフォルト値を＝で入れていく
const sayHello = (your_name = 'ゲスト') => console.log(`こんにちは!${your_name}さん。`);
sayHello();

// スプレッド構文
// console.log(...arr2);
// 12345;
const arr2 = [1,2,3,4,5];
const[num1,num2, ...arr3] = arr2;
console.log(num1);
console.log(num2);
console.log(arr3);
// copy
const arr4 = [10,20];
const arr8 = [...arr4];
arr8[0] = 100;
console.log(arr4);
console.log(arr8);

// オブジェクト省略表記ほう

// const name = "山田";
// const age24 = 24;
// const user ={
//     name: name,
//     age: age,
// };
// console.log(user);

const name = "山田";
const age24 = 24;
const user ={
    name,
    age24,
};
console.log(user);
// map関数
// 従来のfor文を省略できる

// 従来のfor文
const nameArr1 = ["山田","田中","後藤"];
// for(let i=0; i <  nameArr1.length; i++){
//     console.log(nameArr1[i]);
// }

// map使用
const nameArr2 = nameArr1.map((name) => {
    return name;
});
console.log(nameArr2);

// filter
const newNumArr = arr2.filter((num) =>{
    return num % 2 === 1;
});

console.log(newNumArr);

// 3項演算子
// ある条件? trueの時の処理 : 条件がfalseの時の処理

// まる1
const val1 = 1 > 0 ? "trueです。": "falseです。";
console.log(val1);

// まる2
// 変数系の型を判定してくれる　typeof
const printFormattedNum = (num) => {
    const formattedNum = typeof num === "number" ? num.toLocaleString(): "数値を入力してください";
    console.log(formattedNum);
};
printFormattedNum(1300);
printFormattedNum("1300");

// まる3
const checkSumOver100 = (num1, num2) =>{
    return num1 + num2 > 100 ? "100を超えています": "許容範囲内です";
};
console.log(checkSumOver100(100, 200));
console.log(checkSumOver100(0,3));

// かつ　または
const flag1 = true;
const flag2 = false;

// 右側がfalseなら右側を返す
if (flag1 || flag2){
    console.log("フラグのどちらかはtrueです。");
}
// 左側がtrueなら右側を返す
if (flag1 && flag2){
    console.log("フラグの両方がtrueです。");
}