const Cache = {
    get: function (props) {
        const { key } = props;
        return JSON.parse(
            localStorage.getItem(
                key
            )
        );
    },
    pop: function (props) {
        const { key } = props;
        localStorage.removeItem(
            key
        );
    },
    set: function (props) {
        const { key, value } = props;
        localStorage.setItem(
            key,
            JSON.stringify(value)
        );
    }
}

export default Cache;