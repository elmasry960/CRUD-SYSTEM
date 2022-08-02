

var productName = document.getElementById("pn");
var productPrice = document.getElementById("pp");
var productCaregory = document.getElementById("pc");
var productDescription = document.getElementById("pd");
var addProdact = document.getElementById("addProdact");
var btnUpdate = document.getElementById("update");
var temp;
var allProduct = [];

let curentIndexUpdate


if(localStorage.getItem("allProduct") == null){

  allProduct = []
}
else {

  allProduct = JSON.parse(localStorage.getItem("allProduct"));
  displayProducts();
}


function getInputValues() {

  var product = {
    productName: productName.value,
    productPrice: Number(productPrice.value),
    productCaregory: productCaregory.value,
    productDescription: productDescription.value

  }

  allProduct.push(product);
  localStorage.setItem( "allProduct" , JSON.stringify( allProduct ));
  displayProducts();
  clearForm();

}

function getUpdate(){

  var product = {
    productName: productName.value,
    productPrice: Number(productPrice.value),
    productCaregory: productCaregory.value,
    productDescription: productDescription.value
  }

  allProduct[temp] = product;
  localStorage.setItem( "allProduct" , JSON.stringify( allProduct ));
  displayProducts();
  clearForm()

  addProdact.classList.replace('d-none' , 'd-block')
  btnUpdate.classList.replace("d-block" , "d-none")


}

console.log(allProduct)


function displayProducts(){
  var outProudct = ""
  for (var i=0 ; i<allProduct.length ; i++){
    outProudct += `<tr>
          <td>${i+1}</td>
          <td>${allProduct[i].productName}</td>
          <td>${allProduct[i].productPrice}</td>
          <td>${allProduct[i].productCaregory}</td>
          <td>${allProduct[i].productDescription}</td>
          
          <td>
            <button onclick="updateForm(${i})" class="btn btn-warning">Update</button>
          </td>
          <td>
            <button onclick="deletElement(${i})" class="btn btn-danger">Delet</button>
          </td>
        </tr>`
  }

  document.getElementById("data").innerHTML = outProudct;

}


function clearForm(){
  productName.value = ""
  productPrice.value = ""
  productCaregory.value = ""
  productDescription.value = ""
}


function deletElement(index){
  allProduct.splice(index,1)
  displayProducts()
  localStorage.setItem( "allProduct" , JSON.stringify( allProduct ));
}


function updateForm(index){
  productName.value = allProduct[index].productName;
  productPrice.value = allProduct[index].productPrice;
  productCaregory.value = allProduct[index].productCaregory;
  productDescription.value = allProduct[index].productDescription;

  
  btnUpdate.classList.replace('d-none' , 'd-block')
  addProdact.classList.add("d-none")
  temp = index
}



function search(term) {

  var searchProduct = ''

  for ( var i=0 ; i< allProduct.length ; i++) {

    if (allProduct[i].productName.toLocaleLowerCase().includes(term.toLocaleLowerCase()) ) {

      searchProduct += `<tr>
          <td>${i+1}</td>
          <td>${allProduct[i].productName}</td>
          <td>${allProduct[i].productPrice}</td>
          <td>${allProduct[i].productCaregory}</td>
          <td>${allProduct[i].productDescription}</td>
          
          <td>
            <button onclick="updateForm(${i})" class="btn btn-warning">Update</button>
          </td>
          <td>
            <button onclick="deletElement(${i})" class="btn btn-danger">Delet</button>
          </td>
        </tr>`
    }
  }

  document.getElementById("data").innerHTML = searchProduct;
}