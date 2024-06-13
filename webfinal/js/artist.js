document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const resultLists = document.querySelectorAll('#resultList');

    searchInput.addEventListener('input', function() {
        const searchText = searchInput.value.toLowerCase().trim();

        resultLists.forEach(resultList => {
            const items = Array.from(resultList.getElementsByTagName('li'));
            items.forEach(item => {
                const itemClassList = item.classList;
                if (itemClassList.contains(searchText) || searchText === '') {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
});

const colors = ['#02580230'];

function initializeSvg(containerId, lines) {
    const container = document.getElementById(containerId);
    for (let i = 0; i < lines; i++) {
        const p = document.createElementNS("http://www.w3.org/2000/svg", "path");
        const c = i % colors.length; // makes it loop through colors array
        container.appendChild(p);
        gsap.set(p, { attr: { id: `line${i + 1}`, class: 's', stroke: colors[c], 'stroke-width': rand(0.5, 4.5), fill: 'none', d: getPts(i, lines) } });
    }

    window.addEventListener('mousemove', function (e) {
        const l = Math.ceil(e.clientY / window.innerHeight * lines);
        gsap.to(`#line${l}`, { duration: 1, attr: { d: getPts(l - 1, lines, e.clientX), 'stroke-width': rand(0.5, 4.5) }, ease: "back.out(2)" });
    });

    window.onresize = window.onclick = function (e) {
        for (let i = 0; i < lines; i++) gsap.to(`#line${i + 1}`, { duration: 0.4, attr: { d: getPts(i, lines) }, ease: "back.out(4)" });
    };
}

function getPts(i, lines, x) {
    x = x || window.innerWidth - window.innerWidth / lines * i;
    const w = window.innerWidth,
        y = window.innerHeight / lines * i;

    return `M 0,${y}
        s ${w / 10},30 ${w / 4 * 1.5},${rand(10, 20)}
        s ${w / 5 * 1.5},-60 ${w / 3 * 1.5},${rand(-10, 0)}
        s ${(x / w * 118 * 1.5)},-51 ${(x / w * 253 * 1.5)},-16
        s ${w * 1.5},32 ${w * 1.5},0`;
}

function rand(min, max) {
    min = min || 0;
    max = max || 1;
    return min + (max - min) * Math.random();
}

// Initialize SVG elements
initializeSvg('container2', 40);
initializeSvg('container3', 40);


document.addEventListener("DOMContentLoaded", function() {
    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("fade-in");
                } else {
                    entry.target.classList.remove("fade-in");
                }
            });
        },
        { threshold: 0.1 }
    );

    const targetElements = document.querySelectorAll(".fade-wrap");
    targetElements.forEach((element) => {
        observer.observe(element);
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("fade-in");
                } else {
                    entry.target.classList.remove("fade-in");
                }
            });
        },
        { threshold: 0.1 }
    );

    const targetElements = document.querySelectorAll(".fade-wrap2");
    targetElements.forEach((element) => {
        observer.observe(element);
    });
});
