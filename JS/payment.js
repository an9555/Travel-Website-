/*window.onload=()=>{
    if(!sessionStorage.user){
        location.replace("/login")
    }
}*/

//select place order button
const placeOrderBtn = document.querySelector('#place-order-btn');
placeOrderBtn.addEventListener('click',() => {
    let address = getAddress();
    console.log(address)
})
    
   
const getAddress=()=>{
    let address = document.querySelector("#address").value;
    let street = document.querySelector("#street").value;
    let city = document.querySelector("#city").value;
    let state = document.querySelector("#state").value;
    let pincode = document.querySelector("#pincode").value;
    let landmark = document.querySelector("#landmark").value;

if(!address.lenght || !street.lenght || !city.lenght ||!state.lenght ||!pincode.lenght|| !landmark.lenght){
    return{address,street,city,state,pincode,landmark}
}else{
    console.log("Error")
}

}
