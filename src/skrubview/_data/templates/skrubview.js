function updateColSelection(event) {
    updateSelectedColsSnippet(event.target.dataset.reportId);
}

function isSelectedCol(columnElem) {
    const checkboxElem = columnElem.querySelector("input.dataview-select-column-checkbox[type='checkbox']");
    return checkboxElem && checkboxElem.checked;
}

function updateSelectedColsSnippet(reportId) {
    const reportElem = document.getElementById(reportId);
    const allCols = reportElem.querySelectorAll(".skrubview-column-summary");
    const selectedCols = Array.from(allCols).filter(c => isSelectedCol(c));
    const snippet = selectedCols.map(col => col.dataset.nameRepr).join(", ");
    const selectedColsElem = reportElem.querySelector(".dataview-selected-columns");
    selectedColsElem.textContent = "[" + snippet + "]";
}

function clearSelectedCols(reportId) {
    const reportElem = document.getElementById(reportId);
    reportElem.querySelectorAll("input.dataview-select-column-checkbox[type='checkbox']").forEach(
        box => {box.checked = false;}
    );
    updateSelectedColsSnippet(reportId);
}

function selectAllCols(reportId) {
    const reportElem = document.getElementById(reportId);
    reportElem.querySelectorAll("input.dataview-select-column-checkbox[type='checkbox']").forEach(
        box => {box.checked = true;}
    );
    updateSelectedColsSnippet(reportId);
}

function copyTextToClipboard(elementID) {
    var elem = document.getElementById(elementID);
    elem.setAttribute("data-is-being-copied", "");
    navigator.clipboard.writeText(elem.textContent);
    setTimeout(function() {
        elem.removeAttribute("data-is-being-copied");
    }, 200);
}