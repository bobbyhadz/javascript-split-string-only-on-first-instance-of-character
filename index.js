// // EXAMPLE 1 - Split a String only on the First Occurrence of a Character

// const str = 'bobby-hadz-com';
// const [first, ...rest] = str.split('-');

// console.log(first); // 👉️ bobby
// console.log(rest); // 👉️ ['hadz', 'com']

// const remainder = rest.join('-');
// console.log(remainder); // 👉️ hadz-com

// ------------------------------------------------------------------

// // EXAMPLE 2 - Split a String only on the First Occurrence of a Character using limit

// const arr = 'bobby-hadz-com'.split('-', 1);

// console.log(arr); // 👉️ [ 'bobby' ]

// console.log(arr[0]); // 👉️ bobby

// ------------------------------------------------------------------

// // EXAMPLE 3 - Split a String only on the First Occurrence of a Character using Array.slice()

// const str = 'bobby-hadz-com';

// const after = str.slice(str.indexOf('-') + 1);
// console.log(after); // 👉️ hadz-com

// const before = str.slice(0, str.indexOf('-'));
// console.log(before); // 👉️ bobby

// ------------------------------------------------------------------

// // EXAMPLE 4 - Split a String only on the First Occurrence of a Character using regex

// const str = 'bobby-hadz-com';

// const arr = str.split(/-(.*)/);
// console.log(arr); // 👉️ [ 'bobby', 'hadz-com', '' ]

// const [before, after] = arr;

// console.log(before); // 👉️ bobby
// console.log(after); // 👉️ hadz-com

// ------------------------------------------------------------------
