fetch("https://fakestoreapi.com/products")
  .then((data) => {
    //   console.log(data);
    return data.json();
  })
  .then((objData) => {
    console.log(objData[0].title);
    let tableData = "";
    objData.map((values) => {
      tableData += `
      
      <div class="column">
      <div
      class="card"
      style="width: 18rem"
     
    >
      <img src="${values.image}" class="card-img-top" alt="..." style="width: 200px; margin-left: 20px;
      " />
      <div class="card-body">
        <h4 class="card-title">${values.title}</h4>
        <p class="card-text">${values.description}</p>
        <h5>${values.price} $</h5>

        <a href="shop.html?title=${values.title}" class="btn btn-primary">SHOP NOW</a>
      </div>
    </div>
      </div>
      `;
    });
    document.getElementById("mid").innerHTML = tableData;
  })
  .catch((error) => {
    console.log(error);
  });
