var Name =document.getElementById('name') 
var mobile =document.getElementById('mobile') 
var pincode =document.getElementById('pincode')
var flatHouse =document.getElementById('flatHouse')
var areaStreat =document.getElementById('areaStreat')
var city =document.getElementById('city')
let selectAddressType=document.getElementById('select')
var checkbox =document.getElementById('checkbox')

let button=document.getElementById('button')

button.addEventListener('click',(e)=>{
    e.preventDefault()
    addressValidate()
})
var nameValue,mobileValue,pincodeValue,flatHouseValue,areaStreatValue,cityValue,selectAddressTypeValue;
cityValue=city.value
selectAddressTypeValue=selectAddressType.value
function addressValidate(){
    let flag=false, sign=1;
    if(Name.value.length='' && Name.value.length<4){
        sign=0
    }else{
        nameValue=Name.value
    }
    if(mobile.value.length<10 && mobile.value.length>10){
        sign=0
    }else{
        mobileValue=mobile.value
    }
    if(pincode.value.length<6 && pincode.value.length>6){
        sign=0
    }else{
        pincodeValue=pincode.value
    }
    if(flatHouse.value.length<4){
        sign=0
    }else{
        flatHouseValue=flatHouse.value
    }
    if(areaStreat.value.length<4){
        sign=0
    }else{
        areaStreatValue=areaStreat.value
    }
    if(!checkbox.checked){
        sign=0
    }

    let obj={nameValue,mobileValue,flatHouseValue,areaStreatValue,pincodeValue,cityValue,selectAddressTypeValue}
    let arr=[]
    arr.push(obj)
    localStorage.setItem('address',JSON.stringify(arr))
    window.location.href='checkout.html'
}