import * as dayjs from "dayjs";

export function formatDate(value) {
    return dayjs(value).format("MMM DD, YYYY");
}