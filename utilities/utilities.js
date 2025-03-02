function getInnerTextByID(id) {
  const value = document.getElementById(id).innerText;
  const convertedValue = Number(value);
  return convertedValue;
}
function setInnerTextByIDandValue(id, value) {
  document.getElementById(id).innerText = value;
}
// Calendar setup
const today = new Date();
const options = { month: "short", day: "numeric", year: "numeric" };
const formattedDate = today
  .toLocaleDateString("en-US", options)
  .replace(",", "");
setInnerTextByIDandValue("today-date", formattedDate);
const weekDayOption = { weekday: "long" };
const weekDayName = today.toLocaleDateString("en-US", weekDayOption);
setInnerTextByIDandValue("week-day-name", weekDayName);
