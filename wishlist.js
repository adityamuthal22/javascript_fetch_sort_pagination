var productdata=JSON.parse(localStorage.getItem("wish"));
console.log(productdata)

productdata.map(function (el) {
    let main = document.createElement("div");
    main.setAttribute("class", "main");
    let wish = document.createElement("img");
    wish.src =
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/800px-Heart_coraz%C3%B3n.svg.png";
    wish.setAttribute("class", "wish");
    wish.addEventListener("click", function () {
      addtowishlist(el);
    });
    let imgdiv = document.createElement("div");
    imgdiv.setAttribute("class", "imgdiv");
    let image = document.createElement("img");
    image.src = el.image;
    image.setAttribute("class", "img");
    let title = document.createElement("h3");
    title.textContent = el.title;
    let brand = document.createElement("h5");
    brand.textContent = el.brand;
    let category = document.createElement("p");
    category.textContent = el.category;
    let price = document.createElement("h5");
    price.textContent = el.price;
    imgdiv.append(image);
    main.append(imgdiv, title,wish, brand, category, price );
    document.querySelector("#container").append(main);
  });
