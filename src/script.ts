let myString: string = "Armaan"
let myNumber: number = 164
let myBoolean: boolean = true
let mySymbol: symbol = Symbol()
let myBigInt: bigint = 100n

const addTwo = (a: number, b: number): number => {
  return a + b
}
console.log(addTwo(5, 10))

const addSum = (a: number, b: number): number => a + b
console.log(addSum(45, 55))
let user = {
  name: "Armaan",
  age: 25
}
let boyAge: number = 25

interface Product {
  id: number
  name: string
  price: number
  description?: string
}

const myProduct1: Product = {
  id: 135,
  name: "arman",
  price: 100,
  description: "amar sonar bangla ami tumay vlobashe"

}

console.log(myProduct1)

const myProduct2: Product = {
  id: 144,
  name: "sabbir",
  price: 178
}
console.log(myProduct2)


// array and Tuple an readonly modifier
const arr: string[] = ["programming", "arman"]
arr.push('rabby')
console.log(arr)

const numberArr: number[] = [45, 15, 678, 1254, 11]
numberArr.pop()
console.log(numberArr)

const brr: Array<string> = ["arman"]
const Crr: Array<number> = [556, 4, 45]

// Tuple and readonly 
const dhakaLatLong: readonly [number, number] = [23.8103, 90.4125]

const personalInfo: [string, string, number, boolean] = ["arman", "arman@gmail.com", 25, true]


interface User {
  name: string;
  email: string;
  age: number;
  isActive: boolean;
}
const personalInformation: User = {
  name: "arman",
  email: "arman@gmail.com",
  age: 25,
  isActive: true
}

// optional, default parameters, rest parameters
const conCateName = (firstName: string, lastName?: string) => {
  if (!lastName) {
    return firstName;
  }
  return firstName + " " + lastName
}
console.log(conCateName('arman',))

// void
const greetings = (greeting: string, fullName: string): void => {
  console.log(greeting + " " + fullName)
}

// default parameters

const message = (fullName: string, msg = "hello") => {
  console.log(msg + " " + fullName)
}
message("arman", "hi")

// rest parameters

const addNumbers = (...numbers: number[]) => {
  let sum = 0;
  for (let num of numbers) {
    sum = sum + num;
  }
  return sum

}
console.log(addNumbers(45, 55, 10, 10))

const studentName = (...names: string[]) => {
  console.log(names)
}
studentName("arman,rabby,rana")

const shoppingCalculate = (discount: number, ...prices: number[]) => {

  if (discount < 0 || discount > 100) {
    return "Invalid Discount";
  }

  let totalPrice = 0;

  for (let price of prices) {
    totalPrice = totalPrice + price


  }

  const discountPrice = totalPrice * discount / 100;
  const finalPrice = totalPrice - discountPrice
  return finalPrice
}
console.log(shoppingCalculate(100, 451, 555,))

// Object, Type Alias and Interface
type Address = {
  streetName: string
  holdingNumber: number
}
type Users = {
  name: string;
  age: number;
  isActive: boolean;
  action: () => void;
  badges: string[];
  adress: Address
};

const userr: Users = {
  name: "arman",
  age: 25,
  isActive: true,
  action: () => console.log("hello"),
  badges: ["arman", "rana"],
  adress: {
    holdingNumber: 123,
    streetName: "bongram"
  }
};



// reduce

type items = {
  name: string;
  price: number
}

const cart: items[] = [
  { name: "Keyboard", price: 500 },
  { name: "Mouse", price: 250 },
  { name: "PenDrive", price: 950 },
]
const totalPrice = cart.reduce((total, item) => {
  return total + item.price
}, 0)

console.log(totalPrice)


// practice day 1
// task 1
interface Information {
  name: string;
  age: number;
  isDeveloper: boolean;
  bio: string
}

const personalInfor: Information = {
  name: "arman",
  age: 25,
  isDeveloper: true,
  bio: "ami arman fakir amar basha narail"

}
console.log(personalInfor)

// task2
interface Book {
  readonly id: number;
  title: string;
  price: number;
  author?: string
}

const bookInfo1: Book = {
  id: 135,
  title: 'The Book',
  price: 250,
  author: "arman"
}

const bookInfo2: Book = {
  id: 136,
  title: 'Alex Life',
  price: 240,
}

// task3
const myLocationDhaka: readonly [city: string, zipcode: number] = ["Narail", 7500]
// myLocationDhaka[0] = "dhaka" error dibe karon eta readonly data change hobe na

// task4
const makeGreeting = (name: string, greeting = "hello", age?: number) => {
  if (age) {
    console.log(`${greeting}, ${name} your age in ${age}`)
  } else {
    console.log(`${greeting}, ${name}`)
  }

}
makeGreeting("arman", undefined, 25,)
makeGreeting("arman")

// task 5
// rest perameters
const calculateTotal = (tax: number, ...prices: number[]) => {
  let sum = 0;
  for (let price of prices) {
    sum = sum + price

  }
  let discountPrice = sum * tax / 100
  let finalTotal = sum - discountPrice
  return finalTotal
}
calculateTotal(10, 450, 550)

//  const discountPrice = totalPrice * discount / 100;
// const finalPrice = totalPrice - discountPrice
// return finalPrice

// task 6
interface ite {
  name: string;
  price: number;
}
const movies: ite[] = [
  { name: "Inception", price: 300 },
  { name: "Done", price: 250 },
  { name: "The King", price: 700 }
]
// reduce
const totalPriceMovie = movies.reduce((total, item) => {
  return total + item.price
}, 0)
if (totalPriceMovie > 900) {
  let discount = totalPriceMovie * 10 / 100
  let finalPrice = totalPriceMovie - discount
  console.log(finalPrice)
}

console.log(totalPriceMovie)


// probelm
/*
Product-এর id, name, price এবং optional discount থাকবে।
একাধিক Product-এর Array তৈরি করবে।
reduce() দিয়ে সব Product-এর মোট দাম বের করবে।
মোট দাম ২০০০-এর বেশি হলে ১৫% Discount দেবে।
Final Price Return করবে।
কোনো Product না থাকলে 0 Return করবে।
*/
interface Ponnos {
  readonly id: number;
  name: string;
  price: number;
  discount?: number;
}

const ponnoGulo: Ponnos[] = [
  { id: 130, name: "Pendrive", price: 250 },
  { id: 131, name: "Mouse", price: 200 },
  { id: 132, name: "KeyBoard", price: 500 },
  { id: 133, name: "Pendrive", price: 150 },
]

const ponnoGuloPrice = ponnoGulo.reduce((totalDam, ponno) => totalDam + ponno.price, 0)

const discountForMinimumBuy = 2000;
const discountPersentage = 15

if (ponnoGulo.length === 0) {
  console.log('Your cart is empty!')

} else if (ponnoGuloPrice > discountForMinimumBuy) {
  let discount = ponnoGuloPrice * discountPersentage / 100
  let finalTotal = ponnoGuloPrice - discount
  console.log(`Congratulations! Discounted Price: ${finalTotal} BDT`)
} else {
  console.log(`Total Price: ${ponnoGuloPrice} BDT (No discount applied)`)
}

// Practice Task 1: Student Information
interface Student {
  readonly id: number;
  name:string;
  age:number;
  email?:string;
  isActive:boolean;
}

const student1 : Student = {
  id: 132,
  name: "arman",
  age:25,
  email:"arman@gmail.com",
  isActive: true
}

const student2 : Student = {
  id: 133,
  name: "rana",
  age:25,
  email:"rana@gmail.com",
  isActive: false
}

// Practice Task 2: Product Information

interface ProDuct {
  readonly id: number;
  name: string;
  price:number;
  description?:string
}

const showProduct : ProDuct = (name,price) =>{
  console .log(showProduct)
}
showProduct('rana', 250)