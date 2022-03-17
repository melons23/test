/**const,let変数宣言 */
// var vall = "var変数";
// console.log(vall);

// //var変数は上書き可能
// vall = "var変数を上書き"
// console.log(vall);

// // var変数は再宣言可能
// var vall = "var変数を再宣言"
// console.log(vall);

// let let2 = "let変数";
// console.log(let2);

// //letは上書きが可能
// let2 = "let上書き";
// console.log(let2);

// //letは再宣言が不可能
// let let2 = "let再宣言"

// const val3 = "const変数";
// console.log(val3);

// //const変数は上書き不可
// val3 = "const上書き";

// //const変数は再宣言不可
// const val3 = "const再宣言"

//constで定義したオブジェクトはプロパティの変更が可能
// const val4 = {
//   name: "メロン",
//   age: 20
// };
// val4.name = "いちご";
// val4.address = "hiroshima";
// console.log(val4);

// //constで定義した配列はオブジェクトはプロパティの変更が可能
// const val5 = ["dog", "cat"];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

//テンプレート文字列
// const name = "メロン";
// const age = 28;
// // [私の名前はメロンです。年齢は28歳です。]

// //従来の方法
// const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";
// console.log(message1);

// //テンプレート文字列を用いた方法
// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);

//アロー関数
//従来の関数の書き方
// function hunc1(str){
//   return str;
// }
// const func1 = function (str) {
//   return str;
// };
// console.log(func1);

// //アロー関数
// // const func2 = (str) => {
// const func2 = (str) => str
// console.log(func2("func2です。"));

// const func3 = (num1,num2) => num1 + num2;
// console.log(func3(10,20));

//分割代入
// const myProfile = {
//   name:"メロン",
//   age:28,
// };

// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`;
// console.log(message1);

// const {name,age} = myProfile;
// const message2 = `名前は${name}です。年齢は${age}歳です。`;

// const myProfile = ["メロン", "20"];
// const message3 = `私の名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です。`;
// console.log(message3);

// const [name, age] = myProfile;
// const message4 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(message4);

//デフォルト値
// const sayHello = (name = "ゲスト") => console.log(`こんにちは!${name}さん`);
// sayHello();

//スプレッド構文 ...
//配列の展開
// const arr1 = [1,2];
// // console.log(arr1);
// // console.log(...arr1);

// const sumFunc = (num1,num2) => console.log(num1 + num2);
// sumFunc(arr1[0],arr1[1]);

// sumFunc(...arr1);

//まとめる
// const arr2 = [1,2,3,4,5];
// const [num1,num2,...arr3] = arr2;
// console.log(arr3)
// console.log(arr2);

//配列のコピーや結合
// const arr4 = [10,20];
// const arr5 = [30,40];
// const arr6 = [...arr4];
// console.log(arr6);
// const arr7 = [...arr4,...arr5];
// console.log(arr7);

// const arr8 = arr4;
// console.log(arr8);
// arr8[0] = 100;
// console.log(arr4);

//mapやfilterを使った配列の処理
const nameArr = ["田中", "山田", "メロン"];
// for (let index = 0;index < nameArr.length;index++){
//   console.log(nameArr[index]);
// }

// const nameArr2 = nameArr.map((name)=>{
//   return name;
// })

// console.log(nameArr2);

// nameArr.map((name)=>console.log(name));

// const numArr = [1,2,3,4,5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 0;
// })
// console.log(`${index +1}番目は${nameArr[index]}です`);

// nameArr.map((name,index) => console.log(`${index +1}番目は${name}です`));
const newNameArr = nameArr.map((name) => {
  if (name === "メロン") {
    return name;
  } else {
    return `${name}さん`;
  }
});
console.log(newNameArr);
