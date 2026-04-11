const users = [];

module.exports = class User {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }

    save() {
        users.push(this);
    }

    static fetchAll() {
        return users;
    }
}