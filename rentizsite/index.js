const header = document.querySelector("header");

window.addEventListener("scroll", function(ScrollDaTela){
    header.classList.toggle("sticky", window.scrollY > 80)
});

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('open');
};
document.getElementById("openPopupBtn").onclick = function () {
    document.getElementById("popup").style.display = "flex";
};

document.getElementById("closePopupBtn").onclick = function () {
    document.getElementById("popup").style.display = "none";
};

document.getElementById("loginToggle").onclick = function () {
    document.getElementById("loginForm").style.display = "flex";
    document.getElementById("signupForm").style.display = "none";
    this.classList.add("active");
    document.getElementById("signupToggle").classList.remove("active");
};

document.getElementById("signupToggle").onclick = function () {
    document.getElementById("signupForm").style.display = "flex";
    document.getElementById("loginForm").style.display = "none";
    this.classList.add("active");
    document.getElementById("loginToggle").classList.remove("active");
};
document.getElementById("produt1").onclick = function () {
    document.getElementById("popprodut1").style.display = "flex";
};

document.getElementById("closeprodut1").onclick = function () {
    document.getElementById("popprodut1").style.display = "none";
};
document.getElementById("produt2").onclick = function () {
    document.getElementById("popprodut2").style.display = "flex";
};

document.getElementById("closeprodut2").onclick = function () {
    document.getElementById("popprodut2").style.display = "none";
};
document.getElementById("produt3").onclick = function () {
    document.getElementById("popprodut3").style.display = "flex";
};

document.getElementById("closeprodut3").onclick = function () {
    document.getElementById("popprodut3").style.display = "none";
};
document.getElementById("produt4").onclick = function () {
    document.getElementById("popprodut4").style.display = "flex";
};

document.getElementById("closeprodut4").onclick = function () {
    document.getElementById("popprodut4").style.display = "none";
};

document.getElementById("sobre").onclick = function () {
    document.getElementById("popsobre").style.display = "flex";
};

document.getElementById("closesobre").onclick = function () {
    document.getElementById("popsobre").style.display = "none";
};

document.getElementById("polit").onclick = function () {
    document.getElementById("poppolit").style.display = "flex";
    document.body.classList.add("body-no-scroll");
};

document.getElementById("closepolit").onclick = function () {
    document.getElementById("poppolit").style.display = "none";
    document.body.classList.remove("body-no-scroll");
};

document.getElementById("priva").onclick = function () {
    document.getElementById("poppriva").style.display = "flex";
    document.body.classList.add("body-no-scroll");
};

document.getElementById("closepriva").onclick = function () {
    document.getElementById("poppriva").style.display = "none";
    document.body.classList.remove("body-no-scroll");
};

document.getElementById("central").onclick = function () {
    document.getElementById("popcentral").style.display = "flex";
};

document.getElementById("closecentral").onclick = function () {
    document.getElementById("popcentral").style.display = "none";
};

document.getElementById("garantias").onclick = function () {
    document.getElementById("popgarantias").style.display = "flex";
};

document.getElementById("closegarantias").onclick = function () {
    document.getElementById("popgarantias").style.display = "none";
};

document.getElementById("devorebo").onclick = function () {
    document.getElementById("popdevorebo").style.display = "flex";
};

document.getElementById("closedevorebo").onclick = function () {
    document.getElementById("popdevorebo").style.display = "none";
};

document.getElementById("cookies").onclick = function () {
    document.getElementById("popcookies").style.display = "flex";
};

document.getElementById("closecookies").onclick = function () {
    document.getElementById("popcookies").style.display = "none";
};


window.onclick = function (event) {
    if (event.target == document.getElementById("popup")) {
        document.getElementById("popup").style.display = "none";
    }
    if (event.target == document.getElementById("popprodut1")) {
        document.getElementById("popprodut1").style.display = "none";
    }
    if (event.target == document.getElementById("popprodut2")) {
        document.getElementById("popprodut2").style.display = "none";
    }
    if (event.target == document.getElementById("popprodut3")) {
        document.getElementById("popprodut3").style.display = "none";
    }
    if (event.target == document.getElementById("popprodut4")) {
        document.getElementById("popprodut4").style.display = "none";
    }
    if (event.target == document.getElementById("popsobre")) {
        document.getElementById("popsobre").style.display = "none";
    }
    if (event.target == document.getElementById("poppolit")) {
        document.getElementById("poppolit").style.display = "none";
        document.body.classList.remove("body-no-scroll");
    }
    if (event.target == document.getElementById("poppriva")) {
        document.getElementById("poppriva").style.display = "none";
        document.body.classList.remove("body-no-scroll");
    }
    if (event.target == document.getElementById("popcentral")) {
        document.getElementById("popcentral").style.display = "none";
    }
    if (event.target == document.getElementById("popgarantias")) {
        document.getElementById("popgarantias").style.display = "none";
    }
    if (event.target == document.getElementById("popdevorebo")) {
        document.getElementById("popdevorebo").style.display = "none";
    }
    if (event.target == document.getElementById("popcookies")) {
        document.getElementById("popcookies").style.display = "none";
    }
};

const quantityDisplay = document.getElementById('quantity');
const decrementButton = document.getElementById('decrement');
const incrementButton = document.getElementById('increment');

let quantity = 1;

function updateQuantity() {
    quantityDisplay.textContent = quantity < 10 ? `0${quantity}` : quantity;
    decrementButton.disabled = quantity <= 1;
    incrementButton.disabled = quantity >= 99;
}

decrementButton.addEventListener('click', () => {
    if (quantity > 1) {
        quantity--;
        updateQuantity();
    }
});

incrementButton.addEventListener('click', () => {
    if (quantity < 99) {
        quantity++;
        updateQuantity();
    }
});

updateQuantity();

const quantity2Display = document.getElementById('quantity2');
const decrement2Button = document.getElementById('decrement2');
const increment2Button = document.getElementById('increment2');

let quantity2 = 1;


function updateQuantity2() {
    quantity2Display.textContent = quantity2 < 10 ? `0${quantity2}` : quantity2;
    decrement2Button.disabled = quantity2 <= 1;
    increment2Button.disabled = quantity2 >= 99;
}

decrement2Button.addEventListener('click', () => {
    if (quantity2 > 1) {
        quantity2--;
        updateQuantity2();
    }
});

increment2Button.addEventListener('click', () => {
    if (quantity2 < 99) {
        quantity2++;
        updateQuantity2();
    }
});

updateQuantity2();

const quantity3Display = document.getElementById('quantity3');
const decrement3Button = document.getElementById('decrement3');
const increment3Button = document.getElementById('increment3');

let quantity3 = 1;


function updateQuantity3() {
    quantity3Display.textContent = quantity3 < 10 ? `0${quantity3}` : quantity3;
    decrement3Button.disabled = quantity3 <= 1;
    increment3Button.disabled = quantity3 >= 99;
}

decrement3Button.addEventListener('click', () => {
    if (quantity3 > 1) {
        quantity3--;
        updateQuantity3();
    }
});

increment3Button.addEventListener('click', () => {
    if (quantity3 < 99) {
        quantity3++;
        updateQuantity3();
    }
});

updateQuantity3();

const quantity4Display = document.getElementById('quantity4');
const decrement4Button = document.getElementById('decrement4');
const increment4Button = document.getElementById('increment4');

let quantity4 = 1;


function updateQuantity4() {
    quantity4Display.textContent = quantity4 < 10 ? `0${quantity4}` : quantity4;
    decrement4Button.disabled = quantity4 <= 1;
    increment4Button.disabled = quantity4 >= 99;
}

decrement4Button.addEventListener('click', () => {
    if (quantity4 > 1) {
        quantity4--;
        updateQuantity4();
    }
});

increment4Button.addEventListener('click', () => {
    if (quantity4 < 99) {
        quantity4++;
        updateQuantity4();
    }
});

updateQuantity4();

const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");
const popup = document.getElementById("popup");
const loginButton = document.getElementById("openPopupBtn");
const closePopupBtn = document.getElementById("closePopupBtn");

let loggedInUser = JSON.parse(localStorage.getItem("loggedInUser")) || null;

function updateUI() {
    if (loggedInUser) {
        loginButton.innerHTML = `<span>Oi ${loggedInUser.name}!</span> Quer fazer Logout?`;
        loginButton.classList.add("logout-btn");
        loginButton.onclick = logout;
    } else {
        loginButton.innerHTML = "Login / Cadastro";
        loginButton.classList.remove("logout-btn");
        loginButton.onclick = function () {
            popup.style.display = "flex";
        };
    }
}

closePopupBtn.onclick = function () {
    popup.style.display = "none";
};

signupForm.onsubmit = function (e) {
    e.preventDefault();
    const name = signupForm.querySelector('input[placeholder="Nome"]').value;
    const email = signupForm.querySelector('input[placeholder="E-mail"]').value;
    const password = signupForm.querySelector('input[placeholder="Senha"]').value;

    const users = JSON.parse(localStorage.getItem("users")) || [];
    if (users.some(user => user.email === email)) {
        alert("E-mail j� cadastrado!");
        return;
    }

    users.push({ name, email, password });
    localStorage.setItem("users", JSON.stringify(users));
    alert("Cadastro realizado com sucesso!");
    signupForm.reset();
};

loginForm.onsubmit = function (e) {
    e.preventDefault();
    const name = loginForm.querySelector('input[placeholder="Nome"]').value;
    const password = loginForm.querySelector('input[placeholder="Senha"]').value;

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(user => user.name === name && user.password === password);

    if (user) {
        loggedInUser = user;
        localStorage.setItem("loggedInUser", JSON.stringify(user));
        alert(`Bem-vindo, ${user.name}!`);
        popup.style.display = "none";
        updateUI();
    } else {
        alert("Usuario ou senha incorretos!");
    }
};

function logout() {
    loggedInUser = null;
    localStorage.removeItem("loggedInUser");
    updateUI();
}

updateUI();

const buttonroupas = document.getElementById("scrollroupas");
const buttoneletro = document.getElementById("scrolleletro");
const buttonacessorios = document.getElementById("scrollacessorios");
const buttonbeleza = document.getElementById("scrollbeleza");
const buttondomesticos = document.getElementById("scrolldomesticos");
const buttonferramentas = document.getElementById("scrollferramentas");
const section4 = document.getElementById("produt4");
const section1 = document.getElementById("produt1");

buttonroupas.addEventListener("click", () => {
    section4.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
});

buttoneletro.addEventListener("click", () => {
    section1.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
});

buttonacessorios.addEventListener("click", () => {
    section1.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
});

buttonbeleza.addEventListener("click", () => {
    section4.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
});

buttondomesticos.addEventListener("click", () => {
    section1.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
});

buttonferramentas.addEventListener("click", () => {
    section1.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
});