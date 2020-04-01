// function biasa, dari awal udah ada
// async function test() {
//   // console.log("ini function biasa");

//   return 'Fullfilled'
//   // throw 'rejectted'
// }
// function myAsyncFunction() {
//   return Promise.resolve('Fulfilled Promise')
// }
// myAsyncFunction().then(result => console.log(result))

// arrow function, ini mulai dari es6

// deklarasi async
// const condition = true
// testAsync = async () => {
//   // console.log("ini arrow function");
//   if (condition){
//     return 'Fullfilled'
//   } else {
//     throw 'rejected'
//   }
// };
// test2().then(v => console.log(v));

// cara pakainya async

// const run = async (condition) => {
//   try{
//     const message = await testAsync(condition)
//     const message2 = await (message + '!')
//     console.log(message2);

//     console.log(message);
//   } catch(err){
//     console.log(err);
//   }
// }
// run(true)

// console.log(test2());
// test();

// async deklarasi
// const orderSchedule = async () => {
//   try{
//     const dateSchedule = await new Date()
//     // const message = await orderSomething(dateSchedule)
//     console.log(dateSchedule);
//     return dateSchedule;
//   } catch (error){
//     return error
//   }
// }

// orderSchedule()
// .then(message => console.log(message))
// .catch(error => console.log(error))

// const run = async () => {
//   try {
//     const message = await orderSchedule()
//     console.log(message);
//   } catch(error){
//     console.log(error);
//   }
// }

// run()
