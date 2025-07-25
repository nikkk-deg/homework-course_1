// #1
// У тебя есть объект, в котором ключи — имена студентов, а значения — ещё один объект с их
// предметами и оценками. Нужно написать функцию getTopStudent(subject, studentsObj), которая вернёт
// имя студента с самой высокой оценкой по указанному предмету (если таких несколько — любого из них).


const students = {
    Alice: {math: 92, physics: 87, literature: 81},
    Bob: {math: 75, physics: 90, literature: 88},
    Charlie: {math: 92, physics: 93, literature: 85},
    Diana: {math: 89, physics: 91, literature: 90},
};

function getTopStudent(subject, studentsObj) {
    let topStudent = null;
    let topGrade = -Infinity;

    for (const [name, grades] of Object.entries(studentsObj)) {
        if (subject in grades) {
            if (grades[subject] > topGrade) {
                topGrade = grades[subject];
                topStudent = name;
            }
        }
    }

    return topStudent;
}

console.log(getTopStudent('physics', students)) // ) 'Charlie'
console.log(getTopStudent('literature', students)) // → 'Diana' или 'Bob' )оба по 90)
console.log(getTopStudent('biology', students)) // → null

// #2
// Отображение названий продуктов Получите все продукты и вывести их названия на консоль.


let inventory = [
    {id: 1, name: "Apple", price: 0.50, quantity: 200},
    {id: 2, name: "Banana", price: 0.30, quantity: 150},
    {id: 3, name: "Cherry", price: 0.90, quantity: 50}
]


const inventories = []

for (inv in inventory) {
    inventories.push(inventory[inv].name);
}

inventories.map(item => console.log(item));


// #3
// Обновление инвентаря Напишите функцию updateInventory(productId, amount), которая обновляет
// количество определенного ID товара. Количество может быть положительной (добавление к инвентарю)
// или отрицательной (вычитание из инвентаря). Убедитесь, что функция не позволяет инвентарю опуститься
// ниже 0.


function updateInventory(productId, amount) {
    const newInventory = inventory.map(item => {
        if (item.id === productId) {
            item.quantity += amount;
            if (item.quantity < 0) item.quantity = 0
        }
        return item
    });

    return (newInventory);
}

console.log(updateInventory(3, -200))


// #4
// Поиск товаров с низким запасом Напишите функцию findLowStock(threshold), которая возвращает
// массив названий товаров, количество которых ниже определенного порога.


function findLowStock(threshold) {
    const newInventory = []
    inventory.forEach(item => {
        if (item.quantity < threshold) {
            newInventory.push(item)
        }
    })
    return (newInventory);
}

console.log(findLowStock(40))


// #5
// Меняем на объект и теперь нужно выполнить используя Object.entries() для работы с ключом и данными каждого товара.


// #6
// Вычислить общую стоимость запасов Напишите функцию totalInventoryValue(),которая вычисляет и возвращает общую стоимость запасов.

function totalInventoryValue(){
    return inventory.reduce((total, item) => {
        return total + item.price * item.quantity;
    },0 )
}

console.log(totalInventoryValue())