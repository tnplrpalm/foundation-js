/*
const callMe = () => {
  console.log("Hello from call back function");
};

const greeting = (callback) => {
  console.log("Hello world");
  callback();
};

const palm = (callback2) => {
  console.log("ง่วงสุดๆไปเลยจ้า");
  callback2();
};
*/

// * Anonymous function

//greeting(() => {
//console.log("ทำไมง่วงนอนขนาดนี้");
//});

//palm(() => {
//console.log("หรือจริงๆแล้วเราควรกลับไปนอน");
//});

//* Callback Function with Parameter

/*const greeting2 = (callback) => {
  console.log("hello world");
  callback("Palm");
};

greeting2((name) => {
  console.log(`hello from ${name}`);
}); */

/*const originalArrex = [1, 2, 3, 4];

const loopThroughArrayV2 = (arr, cb) => {
  for (let i = 0; i < arr.length; i++) {
    cb(arr[i]);
  }
};

loopThroughArrayV2(originalArr, (item) => {
  console.log(item);
}); */

/*const originalArr = [1, 2, 3, 4];
const mapArray = (arr, cb) => {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    const newItem = cb(arr[i]);
    result.push(newItem);
  }

  return result;
};

const newArr = mapArray(originalArr, (item) => {
  return item * 3;
});

console.log(newArr); */

function filterArray(arr, cb) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    const isKeeping = cb(arr[i]);
    if (isKeeping) {
      result.push(arr[i]);
    }
  }

  return result;
}

const beforeFilter = [-1, 3, 20, -24];

const afterFilter = filterArray(beforeFilter, (item) => {
  return item > 0;
});

console.log(afterFilter);
