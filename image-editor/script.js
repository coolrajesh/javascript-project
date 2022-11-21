const fileInput = document.querySelector(".file-input"),
chooseImgBtn = document.querySelector(".choose-img");
const loadImage = () => {
    let file = fileInput.files[0];
    if(!file) return;
    previewImg.src = URL.createObjectURL(file);
    console.log(previewImg.src)
    previewImg.addEventListener("load", () => {
        //resetFilterBtn.click();
        //document.querySelector(".container").classList.remove("disable");
    });
}

chooseImgBtn.addEventListener("click", () => fileInput.click());