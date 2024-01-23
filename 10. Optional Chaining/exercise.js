/* Original code:
const order = {};

if (order && order.customer && order.customer.address && !order.customer.address.city) {
  console.log('City is required');
}
*/

const order = {
  customer: {
    address: {
      city: "El dorado"
    }
  }
};

order.customer.address.city ? console.log("Graet siti 8)") : console.log("City is required")

//Tried again using Object.xxx method:
let values = Object.values(order.customer.address.city);
if (values == "") {
  console.log("City is required");
} else {
  console.log("Graet siti 8)");
}

//Tried Optional chaining operator method in suggested article:
let optionalMethod = order.customer.address.city ?
  console.log("Graet siti 8)") :
  console.log("City is required");
