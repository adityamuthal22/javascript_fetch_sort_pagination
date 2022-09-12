window.addEventListener("load", function () {
    product(page, order);
  });
  
  let wishlist = JSON.parse(localStorage.getItem("wish")) || [];
  let page = 1;
  let num = document.querySelector("#num");
  num.textContent = page;
  let order = "asc";
  let totalpages = 4;
  
  function product(page, order) {
    const url = `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products?page=${page}&limit=12&orderBy=${order}`;
  
    fetch(url)
      .then(function (res) {
        return res.json();
      })
      .then(function (res) {
        console.log(res.data);
        append(res.data);
      })
      .catch(function (err) {
        console.log(err);
        // appenderr(err)
      });
  }
  product(page, order);
  
  function inc() {
    if (page < 4) {
      page = page + 1;
      num.textContent = page;
      product(page, order);
    } else {
      alert("page limit over");
    }
  }
  function dec() {
    if (page > 1) {
      page = page - 1;
      num.textContent = page;
      product(page, order);
    } else {
      alert("page cant less than 1");
    }
  }
  
  function append(data) {
    document.querySelector("#container").innerHTML = "";
    data.map(function (el) {
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
      let div1 = document.createElement("div");
      div1.setAttribute("class", "div1");
      div1.append(title,wish)
      main.append(imgdiv, div1,brand, category, price);
      document.querySelector("#container").append(main);
    });
  }
  
  function addtowishlist(el) {
    console.log(el);
    wishlist.push(el);
    localStorage.setItem("wish", JSON.stringify(wishlist));
    alert("Item added to wishlist");
  }

  function handlePrice(){
    let order= document.querySelector("#sortPrice").value;
    console.log("Order: " + order);

    product(page, order)
}
