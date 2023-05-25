export function kata() {
  const listH2 = document.querySelectorAll('section > h2');
  listH2.forEach((h2) => {
    h2.classList.add('title');
  })
}
