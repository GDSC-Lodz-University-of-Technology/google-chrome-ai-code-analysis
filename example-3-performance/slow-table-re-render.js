const tableContainer = document.getElementById('table-container');
const ROWS = 50;
const COLS = 20;
let tableData = [];

function generateTableData() {
    for (let i = 0; i < ROWS; i++) {
        const row = [];
        for (let j = 0; j < COLS; j++) {
            row.push(`Row ${i+1}, Col ${j+1}`);
        }
        tableData.push(row);
    }
}

function renderTable() {
    let html = '<table><thead><tr>';
    for (let j = 0; j < COLS; j++) {
        html += `<th>Header ${j+1}</th>`;
    }
    html += '</tr></thead><tbody>';

    for (let i = 0; i < ROWS; i++) {
        html += '<tr>';
        for (let j = 0; j < COLS; j++) {
            html += `<td contenteditable="true" data-row="${i}" data-col="${j}">${tableData[i][j]}</td>`;
        }
        html += '</tr>';
    }
    html += '</tbody></table>';
    tableContainer.innerHTML = html;
}

tableContainer.addEventListener('input', (event) => {
    const target = event.target;
    if (target.tagName === 'TD' && target.isContentEditable) {
        const row = parseInt(target.dataset.row, 10);
        const col = parseInt(target.dataset.col, 10);

        tableData[row][col] = target.textContent;
        renderTable();
        const newCell = tableContainer.querySelector(`[data-row="${row}"][data-col="${col}"]`);
        if (newCell) {
            const range = document.createRange();
            const sel = window.getSelection();
            range.selectNodeContents(newCell);
            range.collapse(false);
            sel.removeAllRanges();
            sel.addRange(range);
        }
    }
});

export function setupSlowTableReRender() {
    generateTableData();
    renderTable();
}
