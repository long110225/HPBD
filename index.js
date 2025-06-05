// Nội dung chữ
const contentLetterStartActived = "Tadaa! Hú hà, hong biết hôm nay là sinh thần của ai vậy ta...";
const mainContentLetter = "Happy Birthday, sinh nhật vui vẻ nè, vậy là 20 tuổi rồi ha, lại thêm một tuổi mới nha. WISH YOU ALL THE BEST - Bé Lông";

// Khởi tạo hình ảnh
const imgStart = document.querySelector(".myAI");
const imgLetter = document.querySelector(".img");

if (imgStart) imgStart.src = "./img/anhmeme-removebg-preview.png";
if (imgLetter) imgLetter.src = "./img/GT-removebg-preview.png";

// Tách nội dung thành mảng ký tự
const splitContentLetterStartActived = contentLetterStartActived.split("");
const splitMainContentLetter = mainContentLetter.split("");

// Sự kiện click vào sticker
const sticker = document.querySelector(".sticker");
if (sticker) {
    sticker.addEventListener("click", function () {
        console.log("Sticker clicked");
        const contentLetter = document.querySelector(".contentLetter");
        const startLetter = document.querySelector(".startLetter");
        const recieve = document.querySelector(".recieve");

        if (contentLetter && startLetter) {
            contentLetter.innerHTML = "";
            startLetter.classList.add("active");

            let index = 0;
            const interval = setInterval(() => {
                if (index < splitContentLetterStartActived.length) {
                    contentLetter.innerHTML += splitContentLetterStartActived[index];
                    index++;
                } else {
                    clearInterval(interval);
                    if (recieve) {
                        setTimeout(() => {
                            recieve.style.opacity = "1";
                            recieve.style.transition = ".5s";
                        }, 1000);
                    }
                }
            }, 50);
        } else {
            console.error("ContentLetter or StartLetter not found");
        }
    });
}

// Sự kiện thay đổi checkbox #mess
const messCheckbox = document.querySelector("#mess");
if (messCheckbox) {
    messCheckbox.addEventListener("change", function () {
        console.log("Checkbox #mess changed:", this.checked); // Log để kiểm tra
        const content = document.querySelector(".content");
        const mainContent = document.querySelector(".mainContent");
        const img1 = document.querySelector(".img1");

        if (this.checked && content && mainContent && img1) {
            content.classList.add("actived");
            mainContent.innerHTML = "";
            let index = 0;

            const interval = setInterval(() => {
                if (index < splitMainContentLetter.length) {
                    mainContent.innerHTML += splitMainContentLetter[index];
                    index++;
                } else {
                    clearInterval(interval);
                    img1.style.opacity = "1";
                    img1.style.transition = ".5s";
                }
            }, 50);
        } else if (content && mainContent && img1) {
            content.classList.remove("actived");
            img1.style.opacity = "0";
            img1.style.transition = ".5s";
            mainContent.innerHTML = "";
        } else {
            console.error("Content, mainContent, or img1 not found");
        }
    });
} else {
    console.error("Checkbox #mess not found");
}

// Sự kiện click vào nút nhận (recieve)
const recieve = document.querySelector(".recieve");
if (recieve) {
    recieve.addEventListener("click", () => {
        console.log("Recieve clicked");
        const startLetter = document.querySelector(".startLetter");
        const startForm = document.querySelector(".startForm");

        if (startLetter && startForm) {
            startLetter.classList.add("close");
            setTimeout(() => {
                startForm.classList.add("close");
                setTimeout(() => {
                    startForm.style.bottom = "100%";

                    const getTypeDevice = document.documentElement.clientWidth;
                    if (getTypeDevice <= 768) {
                        createBubbles(20);
                    } else {
                        createBubbles(40);
                    }
                }, 500);
            }, 500);
        } else {
            console.error("StartLetter or StartForm not found");
        }
    });
}

// Hàm tạo bong bóng
function createBubbles(count) {
    const container = document.querySelector(".backgroundParty");
    if (!container) {
        console.error("BackgroundParty not found");
        return;
    }

    const colors = [
        "rgba(135, 206, 235, 0.8)", // Xanh trời nhạt
        "rgba(255, 192, 203, 0.8)", // Hồng nhạt
        "rgba(255, 215, 0, 0.8)"    // Vàng nhạt
    ];
    const sizes = ["small", "medium", "large"];
    const width = container.offsetWidth;
    const height = container.offsetHeight;

    for (let i = 0; i < count; i++) {
        const bubble = document.createElement("div");
        const sizeClass = sizes[Math.floor(Math.random() * sizes.length)];
        const size = sizeClass === "small" ? 50 : sizeClass === "medium" ? 80 : 120;

        const left = Math.random() * width;
        const delay = Math.random() * 5;
        const duration = 5 + Math.random() * 5;

        bubble.classList.add("bubble", sizeClass);
        bubble.style.width = `${size}px`;
        bubble.style.height = `${size}px`;
        bubble.style.left = `${left}px`;
        bubble.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        bubble.style.animation = `floatUp ${duration}s ease-in-out infinite`;
        bubble.style.animationDelay = `${delay}s`;
        bubble.style.opacity = "0";
        bubble.style.transition = "opacity 0.5s";

        setTimeout(() => {
            bubble.style.opacity = "0.6";
        }, 0);

        container.appendChild(bubble);
    }
}