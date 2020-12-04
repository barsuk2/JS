const products = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ]
    },
    {
        id: 5,
        price: 499,
        photos: []
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg"
        ]
    },
    {
        id: 8,
        price: 78,
    },
];
console.log('1. Получить все товары, у которых есть фотографии')
for (i = 0; i < products.length;i++) {
    if (products[i].photos &&products[i].photos.length !==0){
        console.table(products[i])
    }

}
console.log('2. Сортировка товаров по цене')
products.sort(function (a,b) {
return a.price - b.price;
})
console.table(products)
