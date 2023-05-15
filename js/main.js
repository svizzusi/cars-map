const cars = [
    {
        id: 1,
        image: 'https://images.pexels.com/photos/10549262/pexels-photo-10549262.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        make: 'Tesla',
        model: 'Model S',
        year: 2022,
        miles: '10,000',
        color: 'Turquise',
        price: '$91,380.00'
    },
    {
        id: 2,
        image: 'https://images.pexels.com/photos/3954401/pexels-photo-3954401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        make: 'Tesla',
        model: 'Model 3',
        year: 2020,
        miles: '30,000',
        color: 'Blue',
        price: '$39,990.00'
    },
    {
        id: 3,
        image: 'https://images.pexels.com/photos/14674442/pexels-photo-14674442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        make: 'Tesla',
        model: 'Model X',
        year: 2021,
        miles: '20,000',
        color: 'Red',
        price: '$94,990.00'
    },
    {
        id: 4,
        image: 'https://images.pexels.com/photos/9300916/pexels-photo-9300916.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        make: 'Tesla',
        model: 'Model Y',
        year: 2019,
        miles: '40,000',
        color: 'White',
        price: '$56,990.00'
    },
    {
        id: 5,
        image: 'https://images.pexels.com/photos/14473126/pexels-photo-14473126.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        make: 'Tesla',
        model: 'Roadster',
        year: 2023,
        miles: 0,
        color: 'Black',
        price: '$200,000.00'
    },
    {
        id: 6,
        image: 'https://images.pexels.com/photos/12825910/pexels-photo-12825910.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        make: 'Tesla',
        model: 'Cyber Truck',
        year: 2024,
        miles: 0,
        color: 'Gray',
        price: '$78,990.00'
    }
]

let dataContainer = document.querySelector('.data-container')

dataContainer.innerHTML= cars.map(car => ` 
<div class="data">
    <div class="image-container">
        <img class="image" src="${car.image}" alt="#">
    </div>
    <p class="make">${car.make}</p>
    <p class="model">${car.model}</p>
    <p class="year">${car.year}</p>
    <p class="miles">${car.miles}</p>
    <p class="color">${car.color}</p>
    <p class="price">${car.price}</p>
</div>
`)
