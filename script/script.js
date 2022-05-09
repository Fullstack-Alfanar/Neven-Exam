let arr = [];
function addItem(productName, Productprice, category, img, actions) {
    let tboddy = document.getElementById("tbodyy");

    let tr = document.createElement("tr");
    let tdProName = document.createElement("td");
    let tdProPrice = document.createElement("td");
    let tdcategory = document.createElement("td");
    let tdimg = document.createElement("td");
    let tdactions = document.createElement("td");



    let labelproName = document.createElement("label");
    let labelProPrice = document.createElement("label");
    let categorySelect = document.createElement("label");
    let imgholder = document.createElement("img");
    let labelActions = document.createElement("button");


    labelproName.textContent = productName;
    labelProPrice.textContent = Productprice;
    categorySelect.textContent = category;
    imgholder.src = img;
    labelActions.innerHTML = "Remove Item";


    tboddy.appendChild(tr);
    tr.appendChild(tdProName);
    tr.appendChild(tdProPrice);
    tr.appendChild(tdcategory);
    tr.appendChild(tdimg);
    tr.appendChild(tdactions);

    tdProName.appendChild(labelproName);
    tdProPrice.appendChild(labelProPrice);
    tdcategory.appendChild(categorySelect);
    tdimg.appendChild(imgholder);
    tdactions.appendChild(labelActions);

    labelProPrice.className = "priceStyle";
    labelActions.className = "actions";
    imgholder.className = "holderimg";
    labelproName.className = "namestyle";

}


function checkvalues() {
    let ProName = document.getElementById("productName");
    let ProPrice = document.getElementById("productPrice");
    let categoryy = document.getElementById("select");
    let imgg = document.getElementById("urlImg");

    if (ProName.value == "" || ProName.value == null || ProPrice.value == "" || ProPrice.value == null || categoryy.value == "" || categoryy.value == null || imgg.value == "" || imgg.value == null) {
        alert(" You should fill the inputs ");
    }
    if (ProPrice.value < 0) {
        alert(" the price should be more than 0 ");
    }
    else {
        let obj = {
            Nameproduct: ProName.value,
            PriceProduct: ProPrice.value,
            categories: categoryy.value,
            photo: imgg.value
        }
        addItem(ProName.value, ProPrice.value, categoryy.value, imgg.value);
        setItemtoLocal(obj);
    }
}

function setItemtoLocal(obj) {
    arr.push(obj);
    localStorage.setItem("lista", JSON.stringify(arr));
}

function getItemfromLocal() {
    if (localStorage.getItem("lista")) {
        arr = JSON.parse(localStorage.getItem("lista"))
        for (let i = 0; i < arr.length; i++) {
            addItem(arr[i].Nameproduct, arr[i].PriceProduct, arr[i].categories, arr[i].photo)
        }
    }
}


getItemfromLocal();





