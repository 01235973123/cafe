

// Lắng nghe sự kiện khi người dùng nhấp vào nút "Buy"
const buyButtons = document.querySelectorAll(".buy-button");
buyButtons.forEach((button, index) => {
  button.addEventListener("click", function() {
    const productInfo = getProductInfoFromButton(button,index);
    saveProductToLocalstorage(productInfo);
  });
});

// Hàm lấy thông tin sản phẩm từ nút "Buy"
function getProductInfoFromButton(button,index) {
  const productBox = button.closest(".product-right");
  const productName = productBox.querySelector(".product-name a").textContent;
  const productPrice = productBox.querySelector(".price-box .woocommerce-Price-amount").textContent;
  const productImages = document.querySelectorAll(".images");
  const imageUrl = productImages[index].src;
  console.log(imageUrl)

  return {
    name: productName,
    price: productPrice,
    image: imageUrl,
  };
}

// Hàm lưu thông tin sản phẩm vào Local Storage
function saveProductToLocalstorage(productInfo) {
  let existingProducts = JSON.parse(localStorage.getItem("cartProducts")) || [];
  const existPrd = existingProducts?.find(item => item.name === productInfo.name);

  if (existPrd) {
    const existNotPrdCurrent = existingProducts.filter(it => it.name !== productInfo.name);
    existingProducts = [{...existPrd, total: existPrd?.total ? existPrd?.total + 1 : 2}];
    existNotPrdCurrent?.length > 0 && existingProducts.push(...existNotPrdCurrent);
  } else {
    existingProducts.push(productInfo);
  }
  localStorage.setItem("cartProducts", JSON.stringify(existingProducts));
}
