// let x = { name: 'John', age: 30 };
// let y = { ...x };
// let y = x;
// x.age = 50;
// console.log("y",y);
// console.log("X",x);
// const obj1 =head= { 
//     name: 'John', 
//     age: 30, 
//     address: { 
//       street: '123 Main St', 
//       city: 'Anytown', 
//       state: 'CA' 
//     } 
//   };
//   const obj2 = { ...obj1 };
//   const obj3=JSON.parse(JSON.stringify(obj1))
//  obj3.address.street = '456 Second St';
//   obj2.name = '456 Second St';
//   console.log("result",obj1.address.street,obj3.address.street); // Output: '456 Second St'
//   const fruits = ['apple', 'banana', 'orange', 'pear', 'grape'];

// const subset1 = fruits.slice(0, 3);
// console.log(subset1); // ["banana", "orange"]

// const subset2 = fruits.slice(2);
// console.log(subset2); // ["orange", "pear", "grape"]
// const arr1 = [{ name: 'John' }, { name: 'Mary' }];
// const arr2 = JSON.parse(JSON.stringify(arr1));
// console.log("coppy test array",arr2)
// const arrsplice = [1, 2, 3, 4, 5];
// const removed = arrsplice.splice(2,3,"a",'b');
// console.log(arrsplice);      // [1, 2, 5]
// console.log(removed);
const arr = [
    { name: 'John', age: 30, address: '123 Main St', },
    { name: 'Mary', age: 25, address: '456 Oak Ave' },
    { name: 'Bob', age: 40, address: '789 Elm St' }
  ];
  function a(){
    var x=1;
    function b(){
    function c(){
    function D (){
    console.log(x)
    
    }
    D()
    }
    c();
    }
    b();    
}
    a();