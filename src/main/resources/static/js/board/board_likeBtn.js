// 좋아요 클릭 이벤트
// 클릭 전 아이콘
const $prevHeart = document.querySelectorAll('.like-icons .fa-regular');

const heart_h = e => {
    e.stopPropagation();
    const target = e.target;
    if (target.className == "fa-regular fa-heart") {
        target.classList.remove("fa-regular", "fa-heart");
        target.classList.add("fa-solid", "fa-heart");
    } else if (target.className == "fa-solid fa-heart") {
        target.classList.remove("fa-solid", "fa-heart");
        target.classList.add("fa-regular", "fa-heart");
    }
};

for (const ele of $prevHeart) {
    ele.addEventListener('click', heart_h, false);
}
