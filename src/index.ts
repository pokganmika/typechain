const sayHi = (name: string, age: number, gender: string): string => {
  return `Hello ${name}, you are ${age}, you are a ${gender}`;
};

console.log(sayHi('M', 24, 'male'));
// void => 빈 공간 같은 것
// return 이기 때문에 => void 사용 불가!!

export {};

//-----

// const sayHi = (name: string, age: number, gender: string): void => {
//   console.log(`Hello ${name}, you are ${age}, you are a ${gender}`);
// };

// sayHi('M', 24, 'male');
// // void => 빈 공간 같은 것
// // function에서 아무 값도 안나오게 하기 위해서 사용 => console.log이기 때문에

// export {};

//-----

// const name = 'M',
//   age = 24,
//   gender = 'male';

// const sayHi = (name, age, gender?) => {
//   // gender paraeter is optional because of "?"
//   console.log(`Hello ${name}, you are ${age}, you are a ${gender}`);
// };

// // sayHi(name, age, gender)
// sayHi(name, age);

// export {};
