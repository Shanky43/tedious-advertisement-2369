var acc = document.getElementsByClassName("accordion");
var i;
let span2=document.getElementsByClassName('span2')
for (i = 0; i < acc.length; i++) {
 acc[i].addEventListener("click", function() {   
   this.classList.toggle("active");
   var panel = this.nextElementSibling;
   if (panel.style.display === "block") {
     panel.style.display = "none";
     span2[0].style.color='black'
   } else {
     panel.style.display = "block";
     span2[0].style.color='orange'
   }
 });
}

//=======getting data from local storage=========
let itemCount=document.getElementById('item-count')
let delCount=document.getElementById('del-count')
let totalP=document.getElementById('total')
let proCount=document.getElementById('pro-count')
let finalVal=document.getElementById('final-value')
let gData=JSON.parse(localStorage.getItem('checkdata'))||[]
let ans=0
let dcount=40
let pro=-40
gData.forEach(element => {
    ans+=element.price
});
itemCount.innerHTML='₹ '+ans
delCount.innerHTML='₹ '+dcount
totalP.innerHTML='₹ '+((+ans)+(+dcount))
proCount.innerHTML='₹ '+pro
finalVal.innerHTML='₹ '+((+ans)+(+dcount)+(+pro))


//================================================
let btnDiv=document.getElementById('btnbtn')
let go=document.getElementById('go')
let final=document.getElementById('final')
let rightbtn=document.getElementById('rightbtn')
let topbtn=document.getElementById('topbtn')
let pan=document.getElementById('pan')
let end=document.getElementById('end')
let head=document.getElementById('head')
let mainDiv=document.getElementById('mainDiv')
// end.addEventListener('')
topbtn.addEventListener('click',()=>{
 pan.style.display='block'
})
let a=0
let forCheck
function gopi(){   
    let radio=document.querySelectorAll('input[name="pay"]')
    for(let i=0; i<radio.length; i++){
        if(radio[i].checked){
            a=1
            forCheck=radio[i].target
            break
        }
    }
}
gopi()
console.log(forCheck)
//cash part here==================
let radi=document.querySelector('input[name="cash"]')
rightbtn.addEventListener('click',()=>{
    if(radi.checked){
        head.style.opacity=0.3
        mainDiv.style.opacity=0.3
        end.style.display='block'
        end.addEventListener('click',()=>{
            gData.splice(0)
            localStorage.setItem('checkdata',JSON.stringify(gData))
            window.location.href='cart.html'
            // window.location.reload()
        })
    }
})
btnDiv.addEventListener('click',()=>{
    if(radi.checked){
        head.style.opacity=0.3
        mainDiv.style.opacity=0.3
        end.style.display='block'
        end.addEventListener('click',()=>{
            gData.splie(0)
            localStorage.setItem('checkdata',JSON.stringify(gData))
            window.location.href='cart.html'
            // window.location.reload()
        })
    }
})
//=========================till here

rightbtn.addEventListener('click',()=>{
    gopi()
    if(a){
        head.style.opacity=0.3
        mainDiv.style.opacity=0.3
        go.style.display='block'
    }else{
        go.style.display='none'
    }
})
btnDiv.addEventListener('click',()=>{
    gopi()
    if(a){
        head.style.opacity=0.3
        mainDiv.style.opacity=0.3
        go.style.display='block'
    }else{
        go.style.display='none'
    }
})

//payment popup=============function
final.addEventListener('click',()=>{
    go.style.display='none'
    // alert('your order placed successfully..')
    setTimeout(()=>{
        end.style.display='block'
    },1000)
    end.addEventListener('click',()=>{
        gData.splice(0)
        localStorage.setItem('checkdata',JSON.stringify(gData))
  window.location.href='cart.html'
    })
  
})

let addressData=JSON.parse(localStorage.getItem('address'))||[]
//address part here ==============================
let coName= document.getElementById('coname')
let adName= document.getElementById('address-value')
let adName1= document.getElementById('address-value1')
let pin= document.getElementById('pincode')
let streat=document.getElementById('streat')
addressData.forEach(elem=>{
    coName.innerHTML=elem.nameValue
    adName.innerHTML=elem.flatHouseValue 
    adName1.innerHTML=elem.selectAddressTypeValue
    streat.innerHTML=elem.mobileValue
    pin.innerHTML=elem.pincodeValue
})