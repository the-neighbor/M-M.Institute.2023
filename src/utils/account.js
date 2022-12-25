export async function login() {
    ;
};

export async function logout() {
    localStorage.removeItem("token")
};

module.exports = {login, logout}