/* Math Magic UI — funções reutilizáveis dos menus de seleção */

/** Abre ou fecha um menu e atualiza a seta do botão. */
function ToggleDisplay(element, list, name) {
    if (getComputedStyle(list).display === "none") {
        list.style.display = "flex";
        element.innerText = name + " ▼";
    } else {
        list.style.display = "none";
        element.innerText = name + " ▲";
    }
}

/** Marca ou desmarca todos os checkboxes recebidos. */
function SelectAll(buttonAll, checkboxes) {
    for (let i = 0; i < checkboxes.length; i++) {
        checkboxes[i].checked = buttonAll.checked;
    }
}

/** Atualiza o checkbox geral conforme o estado dos checkboxes individuais. */
function UpdateSelectAll(buttonAll, checkboxes) {
    let allChecked = true;

    for (let i = 0; i < checkboxes.length; i++) {
        if (!checkboxes[i].checked) {
            allChecked = false;
            break;
        }
    }

    buttonAll.checked = allChecked;
}
