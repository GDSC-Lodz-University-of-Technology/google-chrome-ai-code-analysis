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
            // Add data attributes to identify the cell
            html += `<td contenteditable="true" data-row="${i}" data-col="${j}">${tableData[i][j]}</td>`;
        }
        html += '</tr>';
    }
    html += '</tbody></table>';

    // PERFORMANCE BOTTLENECK:
    // This is extremely inefficient. Instead of updating one cell, we are
    // rebuilding the HTML for the entire table and replacing the innerHTML.
    // This causes a long task, especially for large tables.
    tableContainer.innerHTML = html;
}

// Use event delegation to handle edits
tableContainer.addEventListener('input', (event) => {
    const target = event.target;
    if (target.tagName === 'TD' && target.isContentEditable) {
        const row = parseInt(target.dataset.row, 10);
        const col = parseInt(target.dataset.col, 10);

        // Update the data model
        tableData[row][col] = target.textContent;

        // Trigger the inefficient re-render
        renderTable();

        // This is a hacky way to restore focus after re-render.
        // In a real app, you'd solve this differently.
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
