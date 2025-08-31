

//Latest Trends_Start
let products = null;
fetch('json/product.json')
    .then(response => response.json())
    .then(data => {
        products = data;
        addDataToHTML();
})

function addDataToHTML(){
    let listProductHTML = document.querySelector('.listProduct');
    listProductHTML.innerHTML = '';
    if(products != null)
    {
        products.forEach(product => {
            let newProduct = document.createElement('div');
            newProduct.classList.add('latestitem');
            newProduct.innerHTML = 
            `<div class="product-image-container">
                <img src="${product.image}" alt="">
            </div>
            <div class="product-text-container">
                <h2>${product.name}</h2>
                <p class="brand"><strong>Brand:</strong>${product.brand}</p>
                <p class="collection"><strong>Collection:</strong>${product.collection}</p>
                <p class="reference"><strong>Ref:</strong>${product.reference}</p>
                <p class="price"><strong>Price:</strong>$${product.price}</p>
                <button id="buy-button" class="buybutton"  onclick="addCart(${product.id})">Add To Cart</button>
            </div>`;

            listProductHTML.appendChild(newProduct);

        });
    }
}
//Latest Trends_End

//RolexProducts_Start
let rolexproducts = null;
fetch('json/rolex.json')
    .then(response => response.json())
    .then(data => {
        rolexproducts = data;
        addrolexDataToHTML();
})

function addrolexDataToHTML(){

    let rolexlistProductHTML = document.querySelector('.rolexlistProduct');
    rolexlistProductHTML.innerHTML = '';

    if(rolexproducts != null)
    {
        rolexproducts.forEach(rolex => {
            let rolexnewProduct = document.createElement('div');
            rolexnewProduct.classList.add('rolexitem');
            rolexnewProduct.innerHTML = 
            `<div class="rolexproduct-image-container">
                <img src="${rolex.image}" alt="">
            </div>
            <div class="rolexproduct-text-container">
                <h2>${rolex.name}</h2>
                <p class="rolexbrand"><strong>Brand:</strong>${rolex.brand}</p>
                <p class="rolexcollection"><strong>Collection:</strong>${rolex.collection}</p>
                <p class="rolexreference"><strong>Ref:</strong>${rolex.reference}</p>
                <p class="rolexprice"><strong>Price:</strong>$${rolex.price}</p>
                <button id="rolexbuy-button" class="buybutton" onclick="addCart(${rolex.id})">Add To Cart</button>
            </div>`;

            rolexlistProductHTML.appendChild(rolexnewProduct);

        });
    }
}
//RolexProducts_End

//SeikoProducts_Start
let seikoproducts = null;
fetch('json/seiko.json')
    .then(response => response.json())
    .then(data => {
        seikoproducts = data;
        addseikoDataToHTML();
})

function addseikoDataToHTML(){

    let seikolistProductHTML = document.querySelector('.seikolistProduct');
    seikolistProductHTML.innerHTML = '';

    if(seikoproducts != null)
    {
        seikoproducts.forEach(seiko => {
            let seikonewProduct = document.createElement('div');
            seikonewProduct.classList.add('seikoitem');
            seikonewProduct.innerHTML = 
            `<div class="seikoproduct-image-container">
                <img src="${seiko.image}" alt="">
            </div>
            <div class="seikoproduct-text-container">
                <h2>${seiko.name}</h2>
                <p class="seikobrand"><strong>Brand:</strong>${seiko.brand}</p>
                <p class="seikocollection"><strong>Collection:</strong>${seiko.collection}</p>
                <p class="seikoreference"><strong>Ref:</strong>${seiko.reference}</p>
                <p class="seikoprice"><strong>Price:</strong>$${seiko.price}</p>
                <button id="seikobuy-button" class="buybutton" onclick="addCart(${seiko.id})">Add To Cart</button>
            </div>`;

            seikolistProductHTML.appendChild(seikonewProduct);

        });
    }
}
//SeikoProducts_End

//HublotProducts_Start
let hublotproducts = null;
fetch('json/hublot.json')
    .then(response => response.json())
    .then(data => {
        hublotproducts = data;
        addhublotDataToHTML();
})

function addhublotDataToHTML(){

    let hublotlistProductHTML = document.querySelector('.hublotlistProduct');
    hublotlistProductHTML.innerHTML = '';

    if(hublotproducts != null)
    {
        hublotproducts.forEach(hublot => {
            let hublotnewProduct = document.createElement('div');
            hublotnewProduct.classList.add('hublotitem');
            hublotnewProduct.innerHTML = 
            `<div class="hublotproduct-image-container">
                <img src="${hublot.image}" alt="">
            </div>
            <div class="hublotproduct-text-container">
                <h2>${hublot.name}</h2>
                <p class="hublotbrand"><strong>Brand:</strong>${hublot.brand}</p>
                <p class="hublotcollection"><strong>Collection:</strong>${hublot.collection}</p>
                <p class="hublotreference"><strong>Ref:</strong>${hublot.reference}</p>
                <p class="hublotprice"><strong>Price:</strong>$${hublot.price}</p>
                <button id="hublotbuy-button" class="buybutton"  onclick="addCart(${hublot.id})">Add To Cart</button>
            </div>`;

            hublotlistProductHTML.appendChild(hublotnewProduct);

        });
    }
}
//SeikoProducts_End

//OmegaProducts_Start
let omegaproducts = null;
fetch('json/omega.json')
    .then(response => response.json())
    .then(data => {
        omegaproducts = data;
        addomegaDataToHTML();
})

function addomegaDataToHTML(){

    let omegalistProductHTML = document.querySelector('.omegalistProduct');
    omegalistProductHTML.innerHTML = '';

    if(omegaproducts != null)
    {
        omegaproducts.forEach(omega => {
            let omeganewProduct = document.createElement('div');
            omeganewProduct.classList.add('omegaitem');
            omeganewProduct.innerHTML = 
            `<div class="omegaproduct-image-container">
                <img src="${omega.image}" alt="">
            </div>
            <div class="omegaproduct-text-container">
                <h2>${omega.name}</h2>
                <p class="omegabrand"><strong>Brand:</strong>${omega.brand}</p>
                <p class="omegacollection"><strong>Collection:</strong>${omega.collection}</p>
                <p class="omegareference"><strong>Ref:</strong>${omega.reference}</p>
                <p class="omegaprice"><strong>Price:</strong>$${omega.price}</p>
                <button id="omegabuy-button" class="buybutton" onclick="addCart(${omega.id})">Add To Cart</button>
            </div>`;

            omegalistProductHTML.appendChild(omeganewProduct);

        });
    }
}
//OmegaProducts_End

//patekProducts_Start
let patekproducts = null;
fetch('json/patek.json')
    .then(response => response.json())
    .then(data => {
        patekproducts = data;
        addpatekDataToHTML();
})

function addpatekDataToHTML(){

    let pateklistProductHTML = document.querySelector('.pateklistProduct');
    pateklistProductHTML.innerHTML = '';

    if(patekproducts != null)
    {
        patekproducts.forEach(patek => {
            let pateknewProduct = document.createElement('div');
            pateknewProduct.classList.add('patekitem');
            pateknewProduct.innerHTML = 
            `<div class="patekproduct-image-container">
                <img src="${patek.image}" alt="">
            </div>
            <div class="patekproduct-text-container">
                <h2>${patek.name}</h2>
                <p class="patekbrand"><strong>Brand:</strong>${patek.brand}</p>
                <p class="patekcollection"><strong>Collection:</strong>${patek.collection}</p>
                <p class="patekreference"><strong>Ref:</strong>${patek.reference}</p>
                <p class="patekprice"><strong>Price:</strong>$${patek.price}</p>
                <button id="patekbuy-button" class="buybutton" onclick="addCart(${patek.id})">Add To Cart</button>
            </div>`;

            pateklistProductHTML.appendChild(pateknewProduct);

        });
    }
}
//PatekProducts_End

//ZenithProducts_Start
let zenithproducts = null;
fetch('json/zenith.json')
    .then(response => response.json())
    .then(data => {
        zenithproducts = data;
        addzenithDataToHTML();
})

function addzenithDataToHTML(){

    let zenithlistProductHTML = document.querySelector('.zenithlistProduct');
    zenithlistProductHTML.innerHTML = '';

    if(zenithproducts != null)
    {
        zenithproducts.forEach(zenith => {
            let zenithnewProduct = document.createElement('div');
            zenithnewProduct.classList.add('zenithitem');
            zenithnewProduct.innerHTML = 
            `<div class="zenithproduct-image-container">
                <img src="${zenith.image}" alt="">
            </div>
            <div class="zenithproduct-text-container">
                <h2>${zenith.name}</h2>
                <p class="zenithbrand"><strong>Brand:</strong>${zenith.brand}</p>
                <p class="zenithcollection"><strong>Collection:</strong>${zenith.collection}</p>
                <p class="zenithreference"><strong>Ref:</strong>${zenith.reference}</p>
                <p class="zenithprice"><strong>Price:</strong>$${zenith.price}</p>
                <button id="zenithbuy-button" class="buybutton" onclick="addCart(${zenith.id}); confirmAdd();">Add To Cart</button>
            </div>`;

            zenithlistProductHTML.appendChild(zenithnewProduct);

        });
    }
}
//ZenithProducts_End



let listCart = [];
function checkCart(){
  var cookieValue = document.cookie
    .split('; ')
    .find(row => row.startsWith('listCart='));
  if(cookieValue){
    listCart = JSON.parse(cookieValue.split('=')[1]);
  }else{
    listCart = [];
  }
}
checkCart();

function addCart($idProduct) {
    let productCopy = JSON.parse(JSON.stringify(products)); 
    let rolexCopy = JSON.parse(JSON.stringify(rolexproducts));
    let seikoCopy = JSON.parse(JSON.stringify(seikoproducts));
    let hublotCopy = JSON.parse(JSON.stringify(hublotproducts));
    let omegaCopy = JSON.parse(JSON.stringify(omegaproducts));
    let patekCopy = JSON.parse(JSON.stringify(patekproducts));
    let zenithCopy = JSON.parse(JSON.stringify(zenithproducts));
    
    if (products.find(product => product.id === $idProduct)) {
      if (listCart[$idProduct]) {
        listCart[$idProduct].quantity++;
        alert("Quantity increased!"); 
      } else {
        listCart[$idProduct] = productCopy.filter(product => product.id == $idProduct)[0];
        listCart[$idProduct].quantity = 1;
        alert("Product successfully added in your cart."); 
      }
    } else if (rolexproducts.find(product => product.id === $idProduct)) {
      if (listCart[$idProduct]) {
        listCart[$idProduct].quantity++;
        alert("Quantity Increased"); 
      } else {
        listCart[$idProduct] = rolexCopy.filter(product => product.id == $idProduct)[0];
        listCart[$idProduct].quantity = 1;
        alert("Product successfully added in your cart."); 
      }
    } else if (seikoproducts.find(product => product.id === $idProduct)) {
      if (listCart[$idProduct]) {
        listCart[$idProduct].quantity++;
        alert("Quantity increased!"); 
      } else {
        listCart[$idProduct] = seikoCopy.filter(product => product.id == $idProduct)[0];
        listCart[$idProduct].quantity = 1;
        alert("Product successfully added in your cart."); 
      }
    } else if (hublotproducts.find(product => product.id === $idProduct)) {
      if (listCart[$idProduct]) {
        listCart[$idProduct].quantity++;
        alert("Quantity increased!"); 
      } else {
        listCart[$idProduct] = hublotCopy.filter(product => product.id == $idProduct)[0];
        listCart[$idProduct].quantity = 1;
        alert("Product successfully added in your cart."); 
      }
    } else if (omegaproducts.find(product => product.id === $idProduct)) {
      if (listCart[$idProduct]) {
        listCart[$idProduct].quantity++;
        alert("Quantity increased!"); 
      } else {
        listCart[$idProduct] = omegaCopy.filter(product => product.id == $idProduct)[0];
        listCart[$idProduct].quantity = 1; 
        alert("Product successfully added in your cart."); 
      }
    } else if (patekproducts.find(product => product.id === $idProduct)) {
      if (listCart[$idProduct]) {
        listCart[$idProduct].quantity++;
        alert("Quantity increased!"); 
      } else {
        listCart[$idProduct] = patekCopy.filter(product => product.id == $idProduct)[0];
        listCart[$idProduct].quantity = 1;
        alert("Product successfully added in your cart."); 
      }
    } else if (zenithproducts.find(product => product.id === $idProduct)) {
      if (listCart[$idProduct]) {
        listCart[$idProduct].quantity++;
        alert("Quantity increased!"); 
      } else {
        listCart[$idProduct] = zenithCopy.filter(product => product.id == $idProduct)[0];
        listCart[$idProduct].quantity = 1; 
        alert("Product successfully added in your cart."); 
      }
    } else {
      console.error("Product not found!");
      return;
    }
  
    document.cookie = "listCart=" + JSON.stringify(listCart) + "; expires=Thu, 31 Dec 2025 23:59:59 UTC; path=/;";
    addCartToHTML();
    confirmAdd();
    
  }


addCartToHTML();

function addCartToHTML(){

    let listCartHTML = document.querySelector('.listCart');
    listCartHTML.innerHTML = '';

    let totalHTML = document.querySelector('.total');
    let totalQuantity = 0;
  
    if(listCart){
        listCart.forEach(product => {
            if(product){
                let newCart = document.createElement('div');
                newCart.classList.add('item');
                newCart.innerHTML = 
                    `<img src="${product.image}">
                    <div class="content">
                        <div class="name">${product.name}</div>
                        <div class="price">$${product.price} / 1 product</div>
                    </div>
                    <div class="quantity">
                        <button onclick="changeQuantity(${product.id}, '-')">
                        <svg width="20px" height="20px" viewBox="0 0 24.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="4.8"> <circle opacity="0.5" cx="12" cy="12" r="10" stroke="#8a0000" stroke-width="1.5"></circle> <path d="M15 12H9" stroke="#8a0000" stroke-width="1.5" stroke-linecap="round"></path> </g><g id="SVGRepo_iconCarrier"> <circle opacity="0.5" cx="12" cy="12" r="10" stroke="#8a0000" stroke-width="1.5"></circle> <path d="M15 12H9" stroke="#8a0000" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>
                        </button>

                        <span class="value">${product.quantity}</span>

                        <button onclick="changeQuantity(${product.id}, '+')">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" fill="none" stroke="#296600" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle cx="12" cy="12" r="10"></circle> <line x1="12" y1="8" x2="12" y2="16"></line> <line x1="8" y1="12" x2="16" y2="12"></line> </g></svg>
                        </button>
                    </div>`;
                listCartHTML.appendChild(newCart);
                totalQuantity = totalQuantity + product.quantity;
            }
        })
    }
    totalHTML.innerText = totalQuantity;
}
function changeQuantity($idProduct, $type){
    switch ($type) {
        case '+':
            listCart[$idProduct].quantity++;
            break;
        case '-':
            listCart[$idProduct].quantity--;

            if(listCart[$idProduct].quantity <= 0){
                delete listCart[$idProduct];
            }
            break;
    
        default:
            break;
    }
    document.cookie = "listCart=" + JSON.stringify(listCart) + "; expires=Thu, 31 Dec 2025 23:59:59 UTC; path=/;";
    addCartToHTML();
}



