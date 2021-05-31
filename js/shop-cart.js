// Count Length
let items = document.querySelectorAll(".main-cart .item-box");
document.querySelector(".stuf-item").innerHTML= items.length;

// click on pluse Button 

let plus = document.querySelectorAll(".plus");

let itemCostShow = document.querySelector(".total-prod");

let itemCost = document.querySelectorAll(".item-cost-price");

let tax = document.querySelector(".tax-prod");

let finalPrice = document.querySelector(".final-total");

// get Items value 

let emptyArr = [];

itemCost.forEach(item => {

    emptyArr.push(item.textContent)
    
});

let calcAll = emptyArr.reduce((a,b)=> parseInt(a) + parseInt(b))

itemCostShow.innerHTML = calcAll;
finalPrice.innerHTML = parseInt(itemCostShow.innerHTML) + parseInt(tax.innerHTML);
let parent = [];
function getParent(ele) {
    while (ele.parentNode && ele.parentNode.nodeName.toLowerCase() != 'body') {
        ele = ele.parentNode;
        parent.push(ele)
    }
    return parent;
}

function showItemInPluse (ele) {
    parent = [];
    getParent(ele)
    itemCostShow.innerHTML = parseInt(itemCostShow.innerHTML) +  parseInt(parent[5].getAttribute("data-cost"));
    finalPrice.innerHTML = parseInt(itemCostShow.innerHTML) + parseInt(tax.innerHTML);
}

function showItemInminus (ele) {
    parent = [];
    getParent(ele)
    itemCostShow.innerHTML = parseInt(itemCostShow.innerHTML) -  parseInt(parent[5].getAttribute("data-cost"));
    finalPrice.innerHTML = parseInt(itemCostShow.innerHTML) - parseInt(tax.innerHTML);
}

plus.forEach(pls => {

    pls.addEventListener("click", function(){
        
        if (parseInt(this.parentElement.querySelector(".specail-li input").value) < 5) {
            this.parentElement.querySelector(".specail-li").classList.remove("disable");
            this.parentElement.querySelector(".specail-li input").value = parseInt(this.parentElement.querySelector(".specail-li input").value) + 1;
            showItemInPluse(this);
        } else if (parseInt(this.parentElement.querySelector(".specail-li input").value) === 5) {
            this.parentElement.querySelector(".specail-li").classList.add("disable")
        }
    });
});

// click on Minus Button 

let minus = document.querySelectorAll(".minus");
minus.forEach(min => {
    min.addEventListener("click", function(){
        if (parseInt(this.parentElement.querySelector(".specail-li input").value) >= 2) {
            this.parentElement.querySelector(".specail-li input").value = parseInt(this.parentElement.querySelector(".specail-li input").value) - 1;
            this.parentElement.querySelector(".specail-li").classList.remove("disable");
            showItemInminus(this);
        }
    });
});

// click On Code Applay 

let discountCode = document.getElementById("discount-code");
let smallText = document.getElementById("error-text");
let showDis = document.getElementById("discCode");

document.getElementById("apply").onclick = function (){

    if(discountCode.value.trim().toUpperCase() === "DIS-50") {

        smallText.textContent = `تم تقعيل الكود ${discountCode.value} بنجاح خصم 50%`
        smallText.style.color = "#007bff";

        let discount = parseInt((50 / 100) * finalPrice.innerHTML);
        finalPrice.innerHTML = discount;

        showDis.style.display = "flex";

        document.getElementById("disc").innerHTML = `- ${discount}`


    } else {

        smallText.textContent = `الكود غير صالح للاستخدام ${discountCode.value}`
        smallText.style.color = "#dc3545";
    }

    

}




































