function highlight(table) {

  // Есть ли решение изящнее чем пучок if`ов?

  for (const row of table.rows) {
    if (row.parentNode.nodeName !== 'TBODY') continue;

    let state = row.lastElementChild.dataset.available;

    if (state === undefined) {
      row.setAttribute('hidden', true);
    }

    if (state === 'false') {
      row.classList.add('unavailable');
    } else {
      row.classList.add('available');
    }

    if (row.cells[2].textContent === 'm') {
      row.classList.add('male');
    } else if (row.cells[2].textContent === 'f') {
      row.classList.add('female');
    }

    if (row.cells[1].textContent < 18) { row.style.textDecoration = 'line-through'; }
  }
}
