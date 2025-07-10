const imageSets = {
    wunderlust: [
        "img/Wunderlust.png",
        "img/Wunderlust_2.jpg",
        "img/Wunderlust_3.png",
        "img/Wunderlust_4.png"
    ],
    portfolio: [
        "img/Dulce_Portfolio_.png",
        "img/Dulce_Portfolio_2.png",
        "img/Dulce_Portfolio_3.png",
        "img/Dulce_Portfolio_4.jpg"
    ],
    pueblito: [
        "img/Pueblito.png",
        "img/Pueblito_2.png",
        "img/Pueblito_3.jpg",
        "img/Pueblito_4.png"
    ]
};

const imageIndices = {
    wunderlust: 0,
    portfolio: 0,
    pueblito: 0
};

function setupImageSwitcher(sectionId, imgElementId, buttonId) {
    const imgElement = document.getElementById(imgElementId);
    const button = document.getElementById(buttonId);

    button.addEventListener("click", () => {
        const images = imageSets[sectionId];
        imageIndices[sectionId] = (imageIndices[sectionId] + 1) % images.length;
        imgElement.src = images[imageIndices[sectionId]];
    });
}

// Initialize switchers for each case study
setupImageSwitcher("wunderlust", "wunderlust-img", "wunderlust-btn");
setupImageSwitcher("portfolio", "portfolio-img", "portfolio-btn");
setupImageSwitcher("pueblito", "pueblito-img", "pueblito-btn");
