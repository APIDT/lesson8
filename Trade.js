const prompt = require('prompt-sync')();
let pushToExit = null

const menu = [
    sushi = {
     title: "Hollow",
     price: 70000,
     weight: '1kg',
     ingredients:['rice', 'nori', 'avokado','salmon']
 },
 frenchfries = {
     title: "Hollow",
     price: 40000,
     weight: '200g',
     ingredients:['potato', 'sauce']
 },

 ice = {
     title: "Hollow",
     price: 3000,
     weight: '500g',
     ingredients:['milk', 'fruits', 'waffle']
 },

 pizza = {
     title: "Hollow",
     price: 70000,
     weight: '600g',
     ingredients:['tomatoes', 'salami', 'champingnoes','cheese']
}
]

console.clear()

let name = prompt('Введіть ім\'я: ')    
let email = prompt("Введіть електронну пошту: ")    
let phone = prompt('Введіть ваш номер телефону: ')
let adress = prompt('Введіть вашу адрессу: ')

console.clear()

console.log('==================================');
console.log('Ваш намер телефону ' + name);
console.log('Ваша пошта ' + email);
console.log('Ваш номер телефону' + phone);
console.log('Ваш адрес' + adress);
console.log('----------------------------------');
console.log("Виберіть ваше замовлення:\n1. Sushi \n2. Frenchfries \n3. Ice \n4. Pizza")
console.log('==================================');

const user = prompt("Введіть код замовлення: ");
switch (user){
     case "1": console.log("ви замовели суші", menu[0]); break
     case "2": console.log("ви замовели картоплю-фрі", menu[1]); break
     case "3": console.log("ви замовели морозиво", menu[2]); break
     case "4": console.log("ви замовели піцю", menu[3]); break
     return
     case "5": console.log("інгредієнти вашого замовлення"); break
     default: console.log("хиба. ви промазели по кнопці, побробуйте ще раз або сидіть голодні:)");
} 


pushToExit = prompt("Push to Enter for continue...")

console.clear()
console.log("Є хороша та погана новина! Хороша замовлення в дорозі,\nПогана - після того як ви обрали продукт ви його отримаєте)\nОчікуйте замовлення!")

setTimeout(()=>{
     console.log("STATUS: IN Procces")
}, 3000)

setTimeout(()=>{
     console.log("STATUS: Succes")
     console.log("Дякую за покупку", name + "! Сподіваюсь ви не в обіді, СМАЧНОГО!!!")
}, 8000)