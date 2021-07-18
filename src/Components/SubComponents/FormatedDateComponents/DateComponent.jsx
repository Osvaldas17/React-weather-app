import dateFormat from "dateformat";

const currentDate = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
const day = currentDate.getDate()
const month = currentDate.getMonth() + 1
const year = currentDate.getFullYear()
const dateTomorrow = `${year}-${('0' + month).slice(-2)}-${day}`

const dateToday = dateFormat("yyyy-mm-dd")
const timeNow = dateFormat("yyyy-mm-dd HH")
const timeNowRounded = timeNow + ':00:00'

export const dateObj = {
    dateTomorrow,
    dateToday,
    timeNowRounded
}