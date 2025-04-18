
const truncate = (param) => {
    const { value, limit } = param;
    if (value.length > limit) {
        let empty = value[limit].trimLeft();
        let slice = value.slice(0, limit);
        if (empty === "") {
            slice = `${slice}...`;
        } else {
            let index;
            index = slice.lastIndexOf(" ");
            if (index > 0) {
                slice = value.slice(0, index);
                slice = `${slice}...`;
            }
        }
        return slice;
    } else {
        return value;
    }
}

export default truncate;