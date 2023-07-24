const pwShowHide = document.querySelectorAll("#pwShow");

pwShowHide.forEach((icon) => {
    const getPwInput = icon.parentElement.querySelector("input");

    // Function to update the visibility of the icon
    const updateIconVisibility = () => {
        if (getPwInput.value === "") {
            icon.style.visibility = "hidden";
        } else {
            icon.style.visibility = "visible";
        }
    };

    icon.addEventListener("click", () => {
        if (getPwInput.value !== "") {
            if (getPwInput.type === "password") {
                getPwInput.type = "text";
                icon.setAttribute("icon", "ph:eye");
                icon.style.color = "#750000";
            } else {
                getPwInput.type = "password";
                icon.setAttribute("icon", "ph:eye-slash");
                icon.style.color = "";
            }
        }
    });

    getPwInput.addEventListener("input", () => {
        updateIconVisibility();
        if (getPwInput.value === "") {
            getPwInput.type = "password";
            icon.setAttribute("icon", "ph:eye-slash");
            icon.style.color = "";
        }
    });
});