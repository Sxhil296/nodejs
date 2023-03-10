// const EventEmitter = require("node:events")

// const emitter = new EventEmitter()


// emitter.on("order-pizza", (size, topping) => {
//     console.log(`Order received! Baking a ${size} pizza with ${topping}.`)
// })

// emitter.on("order-pizza", (size) => {
//     if(size === "large") {
//         console.log("Serving complimentary drink!")
//     }
// })
// emitter.emit("order-pizza", "large", "corn")


const PizzaShop = require("./pizza-shop")

const pizzaShop = new PizzaShop();

pizzaShop.on("order", (size, topping) => {
    console.log(`Order received! Baking a ${size} pizza with ${topping}`);
});

pizzaShop.order("large", "corn")
pizzaShop.displayOrderNumber()