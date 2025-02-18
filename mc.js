const mcards = [
    { title: "Card 1", description: "This is the first card.", link: "carousel2.html", backgroundImage: 'url("https://i.ibb.co/WNrX9VYH/0c912ce42f6d3d657d240c760d879a46.jpg")' },
    { title: "Card 2", description: "This is the second card.", link: "carousel2.html", backgroundImage: 'url("https://i.ibb.co/WNrX9VYH/0c912ce42f6d3d657d240c760d879a46.jpg")' },
    { title: "Card 3", description: "This is the third card.", link: "carousel2.html", backgroundImage: 'url("https://i.ibb.co/WNrX9VYH/0c912ce42f6d3d657d240c760d879a46.jpg")' },
    { title: "Card 4", description: "This is the fourth card.", link: "carousel2.html", backgroundImage: 'url("https://i.ibb.co/WNrX9VYH/0c912ce42f6d3d657d240c760d879a46.jpg")' },
    { title: "Card 5", description: "This is the fifth card.", link: "carousel2.html", backgroundImage: 'url("https://i.ibb.co/WNrX9VYH/0c912ce42f6d3d657d240c760d879a46.jpg")' }
];

let mcurrentIndex = 0;

document.getElementById("mcard").style.backgroundImage = mcards[mcurrentIndex].backgroundImage;
document.getElementById("mcard-link").href = mcards[mcurrentIndex].link;


function mupdateCard() {
    const mcard = document.getElementById("mcard");
    const mcardContent = document.querySelector(".mcard-content");

    mcardContent.style.opacity = 0;

    setTimeout(() => {
        mcard.style.backgroundImage = mcards[mcurrentIndex].backgroundImage;
    }, 300);

    setTimeout(() => {
        document.getElementById("mcard-title").textContent = mcards[mcurrentIndex].title;
        document.getElementById("mcard-description").textContent = mcards[mcurrentIndex].description;
        document.getElementById("mcard-link").href = mcards[mcurrentIndex].link;
        mcardContent.style.opacity = 1;
        mcard.classList.remove("mflip");
    }, 600);

    mcard.classList.add("mflip");
}

function mnextCard() {
    mcurrentIndex = (mcurrentIndex + 1) % mcards.length;
    mupdateCard();
}

function mprevCard() {
    mcurrentIndex = (mcurrentIndex - 1 + mcards.length) % mcards.length;
    mupdateCard();
}
