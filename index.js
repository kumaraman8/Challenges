const submitBtn = document.querySelector(".sub");
const defaultScene = document.querySelector(".default");
const aman = document.querySelector(".aman");
const ratingBtns = document.querySelectorAll('.num');
const score = document.querySelector("#score");


btnListener();
submitBtn.addEventListener("click", (e) => {
    if(aman.classList.contains("hidden")) {
        const isBtnContainingActiveClass = Array.from(ratingBtns).some(item => item.classList.contains("active"));

        if(!isBtnContainingActiveClass) {
            alert("You haven't selected any rating, please select one!!");
            return;
        } else {
            aman.classList.remove("hidden");
            defaultScene.classList.add("hidden");
        }

    } else {
        aman.classList.add("hidden");
        defaultScene.classList.remove("hidden");
    }
});


function btnListener() {
    ratingBtns.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            ratingBtns.forEach(item => item.classList.remove("active"));
            e.target.classList.add("active");
            
            score.innerText = `You selected ${e.target.innerText} out of 5`;
        })
    })
}