(function () {
  {
    //    Thêm card sản phẩm trong catalogpage
    // img catalog array
    const cataCards = [
      {
        image: "../assets/images/item-img-1.png",
        name: "1.3 Chair",
        price: "$69.90",
      },
      {
        image: "../assets/images/item-img-2.png",
        name: "Kuyu Desk",
        price: "$79.90",
      },
      {
        image: "../assets/images/item-img-3.png",
        name: "Neat Noon",
        price: "$89.90",
      },
      {
        image: "../assets/images/item-img-4.png",
        name: "1.3 Chair",
        price: "$99.90",
      },
      {
        image: "../assets/images/item-img-5.png",
        name: "Morph",
        price: "$109.90",
      },
      {
        image: "../assets/images/item-img-6.png",
        name: "1.3 Chair",
        price: "$119.90",
      },
      // Thêm các phần tử khác vào mảng tương tự như trên
    ];

    const gridCardsContainer = document.getElementById("grid-item-cards");
    const cardTemplate = document.querySelector(".card");

    if (cardTemplate) {
      cataCards.forEach(function (cardInfor) {
        let cardClone = cardTemplate.cloneNode(true);
        cardClone.querySelector(".card-img").src = cardInfor.image;
        cardClone.querySelector(".card-name").textContent = cardInfor.name;
        cardClone.querySelector(".card-price").textContent = cardInfor.price;
        cardClone.style.display = "block";
        gridCardsContainer.appendChild(cardClone);
      });
      cardTemplate.style.display = "none";
    }

    const tags = document.querySelectorAll(".tags");
    function hideTags(n) {
      if (n > 0 && n <= tags.length) {
        let targetTag = tags[n - 1];
        if (targetTag.style.display === "none") {
          targetTag.style.display = "block";
        } else {
          targetTag.style.display = "none";
        }
      } else {
        console.log("Không tìm thấy phần tử thứ " + n);
      }
    }

    console.log(hideTags(3));
    console.log(hideTags(5));
    console.log(hideTags(6));
    console.log(hideTags(7));
    console.log(hideTags(8));
  }
  {
    // Ẩn hiển side menu

    const sideMenu = document.getElementById("side-menu");
    const showSideMenu = document.getElementById("toggle-menu");
    const hideSideMenu = document.getElementById("close-menu");
    const overlay = document.getElementById("overlay");

    if (showSideMenu && hideSideMenu && sideMenu && overlay) {
      showSideMenu.onclick = () => {
        sideMenu.classList.toggle("show-side-menu");
        overlay.style.display = "block";
      };

      hideSideMenu.onclick = () => {
        sideMenu.classList.remove("show-side-menu");
        overlay.style.display = "none";
      };
    }
  }
})();

//function toggle cho 2 btn trong phần subheader

(function () {
  const btnShipping = document.getElementById("btn-shipping");
  const btnTakeAway = document.getElementById("btn-take-away");
  console.log(btnShipping, btnTakeAway)

  if (btnShipping && btnTakeAway) {
    btnShipping.onclick = () => {
      if (
        !btnShipping.classList.contains("btn-active") &&
        btnTakeAway.classList.contains("btn-active")
      )
        btnTakeAway.classList.remove("btn-active");
      btnShipping.classList.add("btn-active");
    };
    btnTakeAway.onclick = () => {
      if (
        btnShipping.classList.contains("btn-active") &&
        !btnTakeAway.classList.contains("btn-active")
      )
        btnShipping.classList.remove("btn-active");
      btnTakeAway.classList.add("btn-active");
    };
  }
})();
