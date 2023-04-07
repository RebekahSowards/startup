function sl() {
    const galleryEl = document.querySelector("#gallery");
    galleryEl.scrollBy({
        top: 0,
        left: -galleryEl.clientWidth,
        behavior: "smooth",
    });
};

function sr() {
    const galleryEl = document.querySelector("#gallery");
    galleryEl.scrollBy({
        top: 0,
        left: galleryEl.clientWidth,
        behavior: "smooth",
    });
};


function loadImages() {
    let imageSrc = [];
    const images = localStorage.getItem("gallery");
    if (images) {
        imageSrc = JSON.parse(images);
    }

    const galleryEl = document.querySelector("#gallery");

    if (imageSrc.length) {
        for (const [i, url] of imageSrc.entries()) {
            const itemDivEl = document.createElement("div");
            const imgEl = document.createElement("img");
            const pEl = document.createElement("p");
            const spanEl = document.createElement("span");

            imgEl.src = url;
            spanEl.textContent = `${i+1}/${imageSrc.length}`;
            itemDivEl.classList.add("gallery_item");

            itemDivEl.appendChild(imgEl);
            itemDivEl.appendChild(pEl);
            pEl.appendChild(spanEl);

            galleryEl.appendChild(itemDivEl);
        }
    } else {
        galleryEl.innerHTML = '<div class="gallery_item"><img src="images/nativity.jpg"><p><span>1/1</span></p></div>';
    }
}

localStorage.setItem('gallery', JSON.stringify(['images/nativity.jpg', 'images/nativity_2.jpg', 'images/nativity_3.jpg']));

loadImages();
