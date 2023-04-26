let baseFee = 10;
let cities = ["Chennai", "Coimbatore", "Trichy", "Madurai"];
let uberRates = [55, 40, 35, 20]
let gender = ["Male", "Female"]


let customerName = "Hema"
let customerCity = "Coimbatore"
let customerGender = "Female" 

console.log(`Hai, ${customerName} Welcome to Uber`)
function getRate(customerCity){
    function uberRate(customerCity, index){
        if(customerGender=="Female"){
            //Rupees 50 discount for Female customers
            let rate = ((uberRates[index] * baseFee) - 50)
        return rate;
        }
        else{
            let rate = (uberRates[index] * baseFee)
        return rate;
        }
    }
    console.log(customerCity, "rate is", uberRate(customerCity,cities.indexOf(customerCity)))
}
getRate(customerCity)