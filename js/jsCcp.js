document.querySelectorAll("img").forEach(function(img) {
    img.addEventListener("mouseover", function() {
        img.style.transform = "scale(1.2)";
    });

    img.addEventListener("mouseout", function() {
        img.style.transform = "scale(1)";
    });
});

document.querySelectorAll("video").forEach(function(img) {
    img.addEventListener("mouseover", function() {
        img.style.transform = "scale(1.2)";
    });

    img.addEventListener("mouseout", function() {
        img.style.transform = "scale(1)";
    });
});


