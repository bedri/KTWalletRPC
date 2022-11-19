module.exports = {
    success(result = undefined, message = "") {
        return {
            success: true,
            message,
            result
        };
    },

    error(message) {
        return {
            success: false,
            message
        };
    }
}