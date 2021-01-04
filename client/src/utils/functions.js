// *** *** *** *** *** *** *** *** *** *** *** ***
// *** DATE AND TIME FUNCTIONS                 ***
// *** *** *** *** *** *** *** *** *** *** *** ***
// ?
export function ordinal(n) {
  var s = ["th", "st", "nd", "rd"];
  var v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
}

// ?
// d = date, n = day
export function getMonday(n) {
  const d = new Date();
  const day = d.getDay(),
    diff = d.getDate() - day + (day == 0 ? -6 + n : 1 + n); // adjust when day is sunday
  return new Date(d.setDate(diff));
}

// ?
export function formatDate(d) {
  const day = ordinal(d.getDate());
  return `${day} ${d.toUTCString().substr(8, 3)} ${d.getFullYear()}`;
}

// ? format unix to clock time
export function clockTime(unix) {
  const hours = new Date(unix).getHours();
  const mins = new Date(unix).getMinutes();
  return `${hours < 10 ? `0${hours}` : hours}:${mins < 10 ? `0${mins}` : mins}`;
}

// ? return time of day
export function timeOfDay(unix) {
  var today = new Date(unix);
  var curHr = today.getHours();

  if (curHr < 12) {
    return "Good Morning";
  } else if (curHr < 18) {
    return "Good Afternoon";
  } else {
    return "Good Evening";
  }
}

// *** *** *** *** *** *** *** *** *** *** *** ***
// *** APPLICATION FUNCTIONS                   ***
// *** *** *** *** *** *** *** *** *** *** *** ***
// ? click outside
export function clickOutside(node) {
  const handleClick = (event) => {
    if (node && !node.contains(event.target) && !event.defaultPrevented) {
      node.dispatchEvent(new CustomEvent("click_outside", node));
    }
  };

  document.addEventListener("click", handleClick, true);

  return {
    destroy() {
      document.removeEventListener("click", handleClick, true);
    },
  };
}

// ? fetch tasks
// fetch all tasks from database
export const fetchTasks = async (from, to) => {
  const query = `?from=${from}&to=${to}`;
  const url = "http://localhost:3000";
  const res = await fetch(`${url}${from && to ? query : "/"}`);
  const data = await res.json();
  return data.tasks;
};
