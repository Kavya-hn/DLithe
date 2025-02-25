document.addEventListener("DOMContentLoaded", function () {
    // Filter functionality
    document.getElementById("websiteFilter").addEventListener("change", function () {
        filterWebsite();
    });
});

function filterWebsite() {
    let selectedCategory = document.getElementById("websiteFilter").value.toLowerCase();
    let cards = document.querySelectorAll(".card");
    
    cards.forEach(card => {
        let category = card.getAttribute("data-category").toLowerCase();
        if (selectedCategory === "all" || category.includes(selectedCategory)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}

document.addEventListener("DOMContentLoaded", function () {
    const openAdBtn = document.getElementById("openAd");
    const adPopup = document.getElementById("adPopup");
    const closeAdBtn = document.getElementById("closeAd");
    
    openAdBtn.addEventListener("click", function () {
        adPopup.style.display = "flex";
    });
    
    closeAdBtn.addEventListener("click", function () {
        adPopup.style.display = "none";
    });
    
    window.addEventListener("click", function (event) {
        if (event.target === adPopup) {
            adPopup.style.display = "none";
        }
    });
});

function showMessage(message) {
    document.getElementById('messageText').innerText = message;
    document.getElementById('messageBox').style.display = 'block';
}

function closeMessage() {
    document.getElementById('messageBox').style.display = 'none';
}

document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll(".card").forEach(card => {
        card.addEventListener("click", function() {
            let message = this.getAttribute("data-category") + " - Explore and enjoy the beauty!";
            showMessage(message);
        });
    });

    // Ad Popup Click Event
    document.getElementById("adPopup").addEventListener("click", function() {
        window.open("file:///C:/DLithe/news/index.html", "_blank");
    });

    // Full-screen and Half-screen toggle
    const fullScreenBtn = document.createElement("button");
    fullScreenBtn.innerHTML = "&#x26F6;"; // Unicode for toggle icon
    fullScreenBtn.style.position = "fixed";
    fullScreenBtn.style.top = "10px";
    fullScreenBtn.style.right = "650px";
    fullScreenBtn.style.padding = "10px";
    fullScreenBtn.style.zIndex = "1000";
    fullScreenBtn.style.border = "none";
    fullScreenBtn.style.background = "transparent";
    fullScreenBtn.style.fontSize = "24px";
    fullScreenBtn.style.cursor = "pointer";
    document.body.appendChild(fullScreenBtn);

    fullScreenBtn.addEventListener("click", function() {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            }
        }
    });
});
