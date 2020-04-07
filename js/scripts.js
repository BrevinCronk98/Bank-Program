function Customer(name) {
    this.name = name,
    this.balance = 0
}

Customer.prototype.greeting = function(){
    return this.name + ' ' + this.balance;
}

$(document).ready(function(){
    let customer
    $(" form#register").submit(function(event){
        event.preventDefault();
        customer = new Customer($("#name-input".val()))
        $("#display").text(customer.name)
    })
})



