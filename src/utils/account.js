async function login() {
    ;
};

async function logout() {
    localStorage.removeItem("token")
};

module.exports = {login, logout}