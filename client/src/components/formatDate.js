export default function formatDate(date) {
    var newDate = `${date.getFullYear()}`;
    if (date.getMonth() + 1 < 10)
        newDate = `${newDate}-0${date.getMonth() + 1}`;
    else
        newDate = `${newDate}-${date.getMonth() + 1}`;
    if (date.getDate() < 10)
        newDate = `${newDate}-0${date.getDate()}`;
    else
        newDate = `${newDate}-${date.getDate()}`;
    return newDate;
}