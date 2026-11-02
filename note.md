# TypeScript Module 01 – Hand Notes

## 01. Primitive Data Types
TypeScript-এর মৌলিক Data Types:

- `string` – Text রাখার জন্য
- `number` – Number রাখার জন্য
- `boolean` – `true` অথবা `false`
- `symbol` – Unique value তৈরি করতে
- `bigint` – বড় Integer Number রাখার জন্য

## 02. Variable & Type Declaration

Variable-এর Type নির্ধারণ করা।

```ts
let name: string = "Arman";
let age: number = 23;
let isStudent: boolean = true;
```

## 03. Function

### Normal Function

```ts
function add(a: number, b: number): number {
  return a + b;
}
```

### Arrow Function

```ts
const add = (a: number, b: number): number => {
  return a + b;
};
```

### Function Parameter & Return Type
- Parameter Type: Function কী ধরনের Input নেবে।
- Return Type: Function কী ধরনের Output দেবে।

### Void
কোনো Value Return না করলে `void` ব্যবহার করা হয়।

```ts
function greet(): void {
  console.log("Hello Arman");
}
```

### Optional Parameter

```ts
function user(name: string, age?: number): void {
  console.log(name, age);
}
```

### Default Parameter

```ts
function greet(name: string = "Guest"): void {
  console.log(name);
}
```

### Rest Parameter

একটি Function-এ একাধিক Argument গ্রহণ করতে Rest Parameter ব্যবহার করা হয়।

```ts
function total(...numbers: number[]): void {
  console.log(numbers);
}
```

## 04. Object

Object-এর মধ্যে একাধিক Property ও Value রাখা যায়।

```ts
const student: {
  name: string;
  age: number;
} = {
  name: "Arman",
  age: 23
};
```

## 05. Interface

Interface দিয়ে Object-এর Structure নির্ধারণ করা হয়।

```ts
interface Student {
  id: number;
  name: string;
  age: number;
  email?: string;
  readonly roll: number;
}
```

### Optional Property (`?`)
কোনো Property থাকা বাধ্যতামূলক নয়।

### Readonly Property
একবার Value সেট করার পর পরিবর্তন করা যায় না।

## 06. Type Alias

`type` ব্যবহার করে Custom Type তৈরি করা হয়।

```ts
type Address = {
  city: string;
  country: string;
};

type User = {
  name: string;
  age: number;
  address: Address;
};
```

## 07. Array

Array-তে একই ধরনের একাধিক Value রাখা যায়।

```ts
const names: string[] = ["Arman", "Rana"];

const numbers: number[] = [10, 20, 30];

const users: Array<string> = ["Arman", "Abir"];
```

## 08. Tuple

Tuple-তে নির্দিষ্ট Type এবং নির্দিষ্ট Position অনুযায়ী Value রাখতে হয়।

```ts
const user: [string, number, boolean] = [
  "Arman",
  23,
  true
];
```

### Readonly Tuple

```ts
const user: readonly [string, number] = [
  "Arman",
  23
];
```

## 09. Conditional Logic

### if

```ts
if (age >= 18) {
  console.log("Adult");
}
```

### if – else

```ts
if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}
```

### if – else if – else

```ts
if (marks >= 80) {
  console.log("A+");
} else if (marks >= 60) {
  console.log("A");
} else {
  console.log("Fail");
}
```

## 10. Array Method – reduce()

`reduce()` ব্যবহার করে Array-এর সব Value থেকে একটি Result তৈরি করা যায়।

```ts
const numbers: number[] = [10, 20, 30];

const total = numbers.reduce((sum, current) => {
  return sum + current;
}, 0);

console.log(total);
```

## 11. Problem Solving Practice

যেসব সমস্যা অনুশীলন করেছি:

1. Student Object তৈরি করা।
2. Product Interface তৈরি করা।
3. Function দিয়ে Product-এর Name ও Price দেখানো।
4. Optional Property চেক করা।
5. Array-এর সব Number যোগ করা।
6. Object Array থেকে Total বের করা।
7. Discount Calculator তৈরি করা।

---

**Revision Checklist**

- [ ] Primitive Data Types
- [ ] Variable & Type Declaration
- [ ] Normal Function
- [ ] Arrow Function
- [ ] Parameter & Return Type
- [ ] Void
- [ ] Optional Parameter
- [ ] Default Parameter
- [ ] Rest Parameter
- [ ] Object
- [ ] Interface
- [ ] Type Alias
- [ ] Optional & Readonly
- [ ] Array
- [ ] Tuple
- [ ] Conditional Logic
- [ ] reduce()
- [ ] Problem Solving
