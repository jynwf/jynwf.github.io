console.log("Hello World");

const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';


let num1 = 1;

console.log(num1+1);

let array = ["a","bcd","c"];


let num = 5
if( num > 2) {
    console.log("hihi");
    alert('hello!')    
} else if (num === 5 ) {
    console.log("hi");
} else {
    console.log('fuck')
}


// function sayhello() {
//     axios.get('localhost:8080/get',{
//         password: 1234;
//     }).then((res) => {
//         if(res.status === 404) {
//             alert('Cannot found')
//         } else if (res.status === 200) {
//             res.data[0];
//         } else {
//             alert('')
//         }

//     })
// }




console.log(array[1]);

let mybutton = document.querySelector('.btn1')
mybutton.onclick = sayhello();