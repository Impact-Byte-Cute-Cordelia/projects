// ini cara buat promise
const newPromise = new Promise((resolve, reject) => {
  if (true) {
    resolve("Terpenuhi");
  } else {
    reject("Pokoknya semuanya direject");
  }
});

console.log("Wake up");

setTimeout(() => {
  console.log("take a bath");
}, 0);
// ini cara pakai promise
newPromise
  .then(resultFirst => {
    console.log(resultFirst + "!");
    return resultFirst + "!";
  })
  .then(resultSecond => {
    console.log(resultSecond + "?");
    return resultSecond;
  })
  .then(resultThird => {
    console.log(resultThird + ">>>>>");
  })
  .catch(error => {
    console.log(error);
  });

newPromise.then(resultFirst => {
  console.log(resultFirst + "PROMISE BARU");
});
console.log("Run a jog");
