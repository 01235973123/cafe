
document.addEventListener("DOMContentLoaded", function() {
  renderDom();
});

function renderDom() {
// Lấy dữ liệu từ Local Storage
const cartProducts = JSON.parse(localStorage.getItem("cartProducts")) || [];
  
// Lấy phần tử để hiển thị dữ liệu
const cartProductsContainer = document.getElementById("cart-products");

const tbody = document.getElementById("cart-products");
while (tbody.firstChild) {
  tbody.removeChild(tbody.firstChild);
}

// Hiển thị dữ liệu trong phần tử HTML
cartProducts.forEach(product => {
  const productInfo = `
    <tr>
            <td style="width: 0px;"><img style="width: 70px;border:0px" src="${product.image}" alt=""></td>
            <td >${product.name}</td>
            <td><p style="color:coral;font-weight: bold;><span style="color:coral;font-weight: bold; class="spanPrice"><span>${product.price}</span>VND</p></td>
            <td><input style="width: 30px;" type="number" value="${product.total || 1}" onchange="handleNumberChange(this, '${product.name}')" min="1"></td>
            <td><p style="color:coral;font-weight: bold;><span style="color:coral;font-weight: bold; ><span>${Number(product.price) * (product.total || 1) *1000}</span>VND</p></td>
            <td style="cursor: pointer;"><span class="cart-delete" onClick="deleteCart('${product.name}')">X</span></td>
        </tr>
  `;
  cartProductsContainer.insertAdjacentHTML("beforeend", productInfo);
  cartotal()
});
}

function handleNumberChange(inputElement, name) {
  var enteredNumber = inputElement.value;
  
  let existingProducts = JSON.parse(localStorage.getItem("cartProducts")) || [];
  const existPrd = existingProducts?.find(item => item.name === name);

  if (existPrd) {
    const existNotPrdCurrent = existingProducts.filter(it => it.name !== name);
    existingProducts = enteredNumber > 0 ? [{...existPrd, total: enteredNumber}] : [];
    existingProducts.push(...existNotPrdCurrent);
    localStorage.setItem("cartProducts", JSON.stringify(existingProducts));
  }
  renderDom();
}

function deleteCart(name){
let existingProducts = JSON.parse(localStorage.getItem("cartProducts")) || [];
localStorage.setItem("cartProducts", JSON.stringify(existingProducts.filter(item => item.name !== name)));
renderDom();
cartotal()
}
function cartotal(){
var cartItem = document.querySelectorAll("tbody tr") 
console.log(cartItem);
var totalC = 0
for (var i=0; i < cartItem.length; i++){
  var inputValue = cartItem [i].querySelector("input").value
  var productPrice = cartItem [i].querySelector(".spanPrice span").innerHTML
  var totalX = inputValue* productPrice*1000
  totalC = totalC + totalX
}
var carttotalA = document.querySelector(".total-price span")
carttotalA.innerHTML= totalC.toLocaleString('de-DE')
}  
