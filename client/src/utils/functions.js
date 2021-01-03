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
