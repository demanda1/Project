function showproduct(category){
    let catalogcategory=category
    url=`http://localhost:3000/productroute/productdetails`
    fetch(url,{
        headers:{
            category:catalogcategory,
        }
    }).then(res=>res.json()).then((res)=>{
        createCards(res.products,category)
    })
}

let cards="'"
function createCards(product,category){
   let idcounter=0;
    product.forEach((p)=>{
        idcounter++;
        cards+=`<div class="col-md-3 col-sm-6" >
                  <div class="product-grid6">
                    <div class="product-image6">
                      <a href="#">
                        <img id="${category}image${idcounter}" class="pic-1" src="${p.image}" alt="laptop photo">
                       </a>
                    </div>
                    <div class="product-content">
                      <h6 ><a href="#" id="${category}name${idcounter}">${p.name}</a></h6>
                        <div id="${category}price${idcounter}" class="price">₹${p.price}
                            <span id="${category}discount${idcounter}">₹${((parseInt(p.price)*100)/(100-p.discount)).toFixed(2)}</span>
                        </div>
                    </div>
                    <ul class="social">
                        <li><a href="" data-tip="See Product"><i class=" glyphicon glyphicon-search"></i></a></li>
                    </ul>
                </div>
            </div>`
        })
        console.log(cards)
    createCatalog(cards,category)
}

function createCatalog(cards,category){
        document.getElementById(`${category}catalog`).innerHTML=cards
}
