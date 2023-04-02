const productAPI = 'http://localhost:3000/Products'

const $ = document.querySelector.bind(document)
const listProducts = document.querySelector('.row')
const btnCreate = document.querySelector('#js-btnCreate')

function start() {
    getProducts(renderProducts);
    handleCreateForm();
}

start()

// Call API
function getProducts(callback) {
    fetch(productAPI)
        .then(response => response.json())
        .then(callback)
}

// render Product
function renderProducts(products) {
    let htmls = products.map((product) => {
        return `
        <div class="col-sm-3 ">
            <div>
                <img src="${product.img}" class="rounded" alt="Cinque Terre" width="250" height="200">
                <p>Tên sản phẩm: ${product.name}</p>
                <p>Giá: ${product.price}</p>
            </div>
        </div>
        `;
    })
    listProducts.innerHTML = htmls.join('')
}
// Functions
function creatProduct(data, cb) {
    let option = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    }
    fetch(productAPI, option)
        .then((response) => response.json())
        .then(cb)
}

// handle
function handleCreateForm() {
    btnCreate.onclick = function() {
        let name = $('input[name="name"]').value
        let htmlImg = $('input[name="img"]').value
        let img = `./Image/${htmlImg}`
        let price = $('input[name="price"]').value
        let formData = {
            name,
            img,
            price
        }
        creatProduct(formData, function() {
            getProducts(renderProducts)
        })
    }
}