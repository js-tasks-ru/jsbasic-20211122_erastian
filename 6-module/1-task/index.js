/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {
  constructor(rows) {
    this.tableData = rows;
    this.finalTable = null;
  }

  render() {
    const targetTable = document.createElement('TABLE');
    const tableHeader = `<thead><tr><th>Имя</th><th>Возраст</th><th>Зарплата</th><th>Город</th><th></th></tr></thead>`;
    const tableBody = document.createElement('TBODY');

    for (let dataRow of this.tableData) {
      let tr = document.createElement('TR');
      tr.innerHTML = `<td>${dataRow.name}</td><td>${dataRow.age}</td><td>${dataRow.salary}</td><td>${dataRow.city}</td><td><button>X</button></td>`;
      tableBody.appendChild(tr);
    }

    targetTable.innerHTML = tableHeader;
    targetTable.appendChild(tableBody);

    targetTable.addEventListener('click', function (e) {
      if (e.target.tagName === 'BUTTON') {
        e.target.closest('TR').remove();
      }
    });

    this.finalTable = targetTable;
  }

  get elem() {
    if (this.finalTable) {
      return this.finalTable;
    } else {
      this.render();
      return this.finalTable;
    }
  }

}
