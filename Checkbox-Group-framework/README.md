# Math Magic UI

Pequeno conjunto de componentes CSS e funções JavaScript para criar menus de seleção com checkboxes, baseado nos componentes desenvolvidos para o projeto Math Magic.

## O que inclui

- Menu de seleção que abre e fecha.
- Estilo visual para botão, menu e opções.
- Checkbox para selecionar ou desmarcar todas as opções.
- Atualização automática do checkbox geral quando as opções individuais mudam.
- Demonstração funcional em `demo/index.html`.

## Requisitos

Nenhuma biblioteca é necessária. O componente pode ser usado com HTML, CSS e JavaScript puros. O Bootstrap é opcional.

## Como testar

Baixe ou clone o repositório e abra `demo/index.html` no navegador.

## Como usar em seu projeto

Copie `src/math-magic.css` e `src/math-magic.js` para o seu projeto e importe os arquivos:

```html
<link rel="stylesheet" href="css/math-magic.css">
<script src="js/math-magic.js"></script>
```

Exemplo de estrutura HTML:

```html
<div class="filter-group">
    <button type="button" class="filter-toggle"
        onclick="ToggleDisplay(this, document.getElementById('listaExemplo'), 'Opções')">
        Opções ▲
    </button>

    <div id="listaExemplo" class="filter-menu">
        <label class="filter-option">
            <input id="TodasOpcoes" class="form-check-input" type="checkbox"
                onclick="SelectAll(this, document.getElementsByClassName('opcao'))">
            Todas as opções
        </label>

        <label class="filter-option">
            <input class="form-check-input opcao" type="checkbox" value="a"
                onclick="UpdateSelectAll(document.getElementById('TodasOpcoes'), document.getElementsByClassName('opcao'))">
            Opção A
        </label>

        <label class="filter-option">
            <input class="form-check-input opcao" type="checkbox" value="b"
                onclick="UpdateSelectAll(document.getElementById('TodasOpcoes'), document.getElementsByClassName('opcao'))">
            Opção B
        </label>
    </div>
</div>
```

### Importante ao criar vários menus

- Cada `id` deve ser único na página.
- Use uma classe própria para os checkboxes individuais de cada menu (como `opcao` no exemplo), para que um menu não selecione os itens de outro.
- Passe o nome do menu em `ToggleDisplay`, por exemplo, `'Anos'` ou `'Matérias'`.

## Funções disponíveis

### `ToggleDisplay(element, list, name)`
Abre ou fecha o menu e atualiza a seta do botão.

### `SelectAll(buttonAll, checkboxes)`
Marca ou desmarca todos os checkboxes da coleção informada.

### `UpdateSelectAll(buttonAll, checkboxes)`
Marca o checkbox geral quando todos os checkboxes individuais estão marcados e o desmarca quando pelo menos um deles não está marcado.

## Estrutura

```text
math-magic-framework/
├── src/
│   ├── math-magic.css
│   └── math-magic.js
├── demo/
│   └── index.html
├── README.md
├── LICENSE
└── .gitignore
```

## Licença

MIT. Consulte o arquivo `LICENSE`.
