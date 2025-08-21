const book = {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    genre: 'Fiction',
    pages: 180,
    languages: ['English', 'Spanish', 'French'],
    isbn: '978-0-7432-7356-5'
}
console.log(book)

console.log('Book Title:', book.title)
console.log('Author:', book.author)
console.log('Total Pages:', book.pages)
console.log('Available Languages:', book.languages)



const {title, author, pages} = book
console.log('Title:', title)
console.log('Author:', author)
console.log('Pages:', pages)


const calculator = {
    calculate: function(){
        let num1 = Number(prompt('Enter first number'))
        let num2 = Number(prompt('Enter second number'))
        let operation = prompt('Enter operation (Add/Subtract/Multiply/Divide)')
        
        if(operation === 'Add'){
            let result = num1 + num2
            console.log(`add result`,result)
        }else if(operation === 'Subtract'){
            let result = num1 - num2
            console.log(`sub result`,result)
        }else if(operation === 'Multiply'){
            let result = num1 * num2
            console.log(`mul result`,result)
        }else if(operation === 'Divide'){
            let result = num1 / num2
            console.log(`div result`, result)
        }else{
            console.log('Invalid operation')
        }
    }
    
}

calculator.calculate()

const smartphone = {
    brand: 'Samsung',
    model: 'Galaxy S24'
}

smartphone.storage = '256GB'
smartphone.storage = '12GB'
smartphone['colors'] = ['Black', 'White', 'Purple']
smartphone.price = 89999

console.log(smartphone)


smartphone.sendMessage = () => {
    let recipient = prompt('Enter recipient name')
    let message = prompt('Enter your message')
    console.log(`Message sent to : `,recipient)
    console.log('the message is ', message)
}

console.log(smartphone)



const car = {
    make: 'Toyota',
    model: 'Camry',
    year: 2023,
    color: 'Silver',
    features: ['GPS', 'Bluetooth', 'Backup Camera'],
    mileage: 15000
}
console.log(car)

console.log('Car Make:', car.make)
console.log('Model:', car.model)
console.log('Year:', car.year)
console.log('Features:', car.features)

const {make, model, year, color} = car
console.log(`Car: ${make} ${model} (${year}) in ${color}`)

const restaurant = {
    name: 'Spice Garden',
    cuisine: 'Indian'
}

restaurant.location = 'Downtown'
restaurant['capacity'] = 80
restaurant['menu'] = ['Biryani', 'Curry', 'Tandoori', 'Naan']
restaurant.rating = 4.5
restaurant['timings'] = '11:00 AM - 11:00 PM'

console.log(restaurant)

restaurant.takeOrder = function(){
    let customerName = prompt('Customer name')
    let dish = prompt('Which dish would you like to order?')
    let quantity = Number(prompt('How many plates?'))
    
    console.log(`Order received from `,customerName)
    console.log(quantity, ` of plate(s) of `, dish)
    console.log('Your order will be ready in 20 minutes')
}

restaurant.makeReservation = () => {
    let name = prompt('Name for reservation')
    let date = prompt('Date (DD/MM/YYYY)')
    let time = prompt('Time (HH:MM)')
    let guests = prompt('Number of guests')
    
    console.log(`Reservation confirmed for ${name}`)
    console.log(`Date: ${date}, Time: ${time}, Guests: ${guests}`)
}

console.log(restaurant)
restaurant.takeOrder()
restaurant.makeReservation()