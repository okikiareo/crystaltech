import { useLayoutEffect } from "react"

export const useStyle = (props) => {
    const { name, value } = props;
    useLayoutEffect(() => {
        document.body.setAttribute(
            name,
            value
        );
        return () => {
            document.body.removeAttribute(
                name
            );
        }
    }, [name, value]);
}