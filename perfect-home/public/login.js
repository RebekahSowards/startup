(async () => {
    let authenticated = false;
    const userName = localStorage.getItem("userName");
    if (userName) {
        const nameEl = document.querySelector("#userName");
        console.log(nameEl);
        nameEl.value = userName;
        const user = await getUser(nameEl.value);
        authenticated = user?.authenticated;
    }

    console.log(authenticated);

  
    if (authenticated) {
        document.querySelector("#playerName").textContent = userName;
        setDisplay("loginControls", "none");
        setDisplay("playControls", "block");
        displayRandomSeedWord();
    } else {
        setDisplay("loginControls", "block");
        setDisplay("playControls", "none");
    }
})();
  
async function loginUser() {
    loginOrCreate(`/api/auth/login`);
}
  
async function createUser() {
    loginOrCreate(`/api/auth/create`);
}
  
async function loginOrCreate(endpoint) {
    console.log(endpoint);
    const userName = document.querySelector("#userName")?.value;
    const password = document.querySelector("#userPassword")?.value;
    const response = await fetch(endpoint, {
        method: "post",
        body: JSON.stringify({ email: userName, password: password }),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
    });
    const body = await response.json();
  
    if (response?.status === 200) {
        localStorage.setItem("userName", userName);
        window.location.href = "login.html";
    } else {
        console.log(document);
        const modalEl = document.querySelector("#msgModal");
        modalEl.querySelector(".modal-body").textContent = `⚠ Error: ${body.msg}`;
        const msgModal = new bootstrap.Modal(modalEl, {});
        msgModal.show();
    }
}
  
function displayRandomSeedWord() {
    fetch("https://random-word-api.herokuapp.com/word")
    .then((response) => response.json())
    .then((data) => {
        const seedWordEl = document.querySelector("#seed-word");
        seedWordEl.value = data[0];
    });
}

function play() {
    const seedWordEl = document.querySelector("#seed-word");
    localStorage.setItem("seed-word", seedWordEl.value);
    window.location.href = "play.html";
}
  
function logout() {
    fetch(`/api/auth/logout`, {
        method: "delete",
    }).then(() => (window.location.href = "/"));
}
  
async function getUser(email) {
    let scores = [];
    // See if we have a user with the given email.
    const response = await fetch(`/api/user/${email}`);
    if (response.status === 200) {
        return response.json();
    }
  
    return null;
}
  
function setDisplay(controlId, display) {
    const playControlEl = document.querySelector(`#${controlId}`);
    if (playControlEl) {
        playControlEl.style.display = display;
    }
}
  