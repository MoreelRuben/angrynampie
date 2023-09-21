
    const slider = document.getElementById("slider");
    const body = document.body;

    slider.addEventListener("input", function () {
        const sliderValue = slider.value;
        if (sliderValue === "0") {
            body.classList.remove("dark-mode");
        } else {
            body.classList.add("dark-mode");
        }
    });
