var api = {
    fetchUsers(cb) {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(json => {
                cb(json, null);
            })
            .catch(err => {
                cb(null, err);
            });
    }
};

module.exports = api;