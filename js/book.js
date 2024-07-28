const prevBtn = document.querySelector('#prev-btn');
const nextBtn = document.querySelector('#next-btn');
const book = document.querySelector('#book');
const papers = Array.from(document.querySelectorAll('.paper'));

const numOfPapers = papers.length;
const maxLocation = numOfPapers + 1;
let currentLocation = 1;

prevBtn.addEventListener("click", goPrevPage);
nextBtn.addEventListener("click", goNextPage);

function openBook() {
    book.style.transform = "translateX(50%)";
    prevBtn.style.transform = "translateX(-300px)";
    nextBtn.style.transform = "translateX(300px)";
}

function closeBook(isAtBeggining) {
    if(isAtBeggining) {
        book.style.transform = "translateX(0%)";
    }
    else {
        book.style.transform = "translateX(100%)";
    }
    prevBtn.style.transform = "translateX(0px)";
    nextBtn.style.transform = "translateX(0px)";
}

function updatePaper(paper, flipped) {
    if(flipped) {
        paper.classList.add("flipped");
    }
    else {
        paper.classList.remove("flipped");
    }
    // Assign the highest z-index to the flipped page and decrement the z-index of all the remaining pages
    // This ensures the flipped page has a higher z-index than the page it covers, but lower than the page it reveals,
    // so the revealed page does not "pop through" the flipped page
    papers.forEach(paper => paper.style.zIndex = parseInt(window.getComputedStyle(paper).zIndex) - 1);
    paper.style.zIndex = numOfPapers;
}

function goNextPage() {
    if(currentLocation < maxLocation) {
        if(currentLocation === 1) {
            openBook();
        }
        updatePaper(papers[currentLocation - 1], true);
        if(currentLocation === numOfPapers) {
            closeBook(false);
        }
        currentLocation++;
    }
}

function goPrevPage() {
    if(currentLocation > 1) {
        if(currentLocation === 2) {
            closeBook(true);
        }
        updatePaper(papers[currentLocation - 2], false);
        if(currentLocation === numOfPapers + 1) {
            openBook();
        }
        currentLocation--;
    }
}