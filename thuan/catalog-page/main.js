
// img catalog array
// Mảng chứa thông tin của 6 card
// Mảng chứa thông tin của 6 card
{
    let cataCards = [
        {
            image: "../assets/images/item-img-1.png",
            name: "1.3 Chair",
            price: "$69.90"
        },
        {
            image: "../assets/images/item-img-2.png",
            name: "Kuyu Desk",
            price: "$79.90"
        },
        {
            image: "../assets/images/item-img-3.png",
            name: "Neat Noon",
            price: "$89.90"
        },
        {
            image: "../assets/images/item-img-4.png",
            name: "1.3 Chair",
            price: "$99.90"
        },
        {
            image: "../assets/images/item-img-5.png",
            name: "Morph",
            price: "$109.90"
        },
        {
            image: "../assets/images/item-img-6.png",
            name: "1.3 Chair",
            price: "$119.90"
        }
    ];
    
    // Gọi phần tử trong card container và grid container
    let cardContainer = document.querySelector('.card-items');
    let gridCardsContainer = document.getElementById('grid-item-cards');
    
    // gọi card mẫu BÊN TRONG card container
    let cardTemplate = cardContainer.querySelector('.card');
    
    // Dùng forEach(function(){}) để tạo card mới và thêm vào grid
    /*
    array.forEach(function(currentValue, index, array) {
        // Code xử lý cho mỗi phần tử của mảng
    });
     */
    cataCards.forEach(function(cardInfor){
        // clone card mẫu từ cardTemplate
        let cardClone = cardTemplate.cloneNode(true);
    
        // Thêm thông tin vào card clone
        cardClone.querySelector('.card-img').src = cardInfor.image;
        cardClone.querySelector('.card-name').textContent = cardInfor.name;
        cardClone.querySelector('.card-price').textContent = cardInfor.price;
    
        // Hiển thị card mới
        cardClone.style.display = 'block';
    
        // Thêm card mới vào grid
        gridCardsContainer.appendChild(cardClone);
    })
    // Ẩn card mẫu
    cardTemplate.style.display = 'none';
    
    const tags = document.querySelectorAll('.tags');
    function hideTags(n) {
        if (n > 0 && n <= tags.length) {
            let targetTag = tags[n];
            if (targetTag.style.display === "none") {
                targetTag.style.display = "block"; // Hiển thị phần tử
            } else {
                targetTag.style.display = "none"; // Ẩn phần tử
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

// catalog page
{
    const sideMenu = document.getElementById('side-menu');
    const showSideMenu = document.getElementById('toggle-menu');
    const hideSideMenu = document.getElementById('close-menu');
    
    const overlay = document.getElementById('overlay');
    
    showSideMenu.onclick = () => {
        sideMenu.classList.toggle('show-side-menu');
        overlay.style.display = 'block';
    }
    
    hideSideMenu.onclick = () => {
        sideMenu.classList.remove('show-side-menu');
        overlay.style.display = 'none';
    }
}

