var controller = {
    test: function (req, res) {
        return res.status(200).send({
            message: 'Hello World!'
        });
    },
};

module.exports = controller;