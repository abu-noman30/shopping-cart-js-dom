let productListArray = [];

function addToCart(element) {
    // console.log(element);

    let targetProductName = element.parentNode.parentNode.children[0];
    let productName = targetProductName.innerText;
    //  console.log(targetProductName);
     console.log(productName);

    let targetProductPrice = element.parentNode.parentNode.children[1].children[0];
    let productPrice = targetProductPrice.innerText;
        // console.log(targetProductPrice);
        console.log(productPrice);

        let productList = {
            productName : productName,
            productPrice : productPrice
        };
        // console.log(product);

        // Sending products Object to products Array
        productListArray.push(productList);
        // console.log(productListArray);
        // console.log(productListArray.length);

        document.querySelector('#total-added-product').innerHTML = productListArray.length;
        showCart(productListArray);
}

function showCart(productsArray){
    console.log(productsArray);

    let targetTableBody = document.getElementById("cart-table-body");
    targetTableBody.innerHTML = ``;
    let productTotalPrice = 0;
    for (let i = 0; i < productsArray.length; i++) {
        const element = productsArray[i];
        // console.log(element);

        let productName = element.productName;
        let productPriceStr = element.productPrice;
        let productPriceInt = parseInt(productPriceStr);

        // console.log(typeof(productPriceInt));
        productTotalPrice += productPriceInt;
        // console.log(productTotalPrice);

        let tr = document.createElement("tr");
            tr.innerHTML = `<th class="z-0">${i+1}</th>
            <td>${productName}</td>
            <td>${productPriceStr}$</td>`;
            targetTableBody.appendChild(tr); 
        }

        let totaltr = document.createElement("tr");
            totaltr.innerHTML = `<th></th>
            <th>Total Price</th>
            <td>${productTotalPrice}$</td>`;

            targetTableBody.appendChild(totaltr);

}