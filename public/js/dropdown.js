const dropdowns = document.querySelectorAll('.dropdown-new');

dropdowns.forEach( dropdown => {
    const selectMenu = dropdown.querySelector(".select-button");
    const caret = dropdown.querySelector(".caret");
    const dropDownMenuNew = dropdown.querySelector(".dropdown-menu-new");
    const dropDownOptions = dropdown.querySelectorAll(".dropdown-menu-new li");
    const selectedOption = dropdown.querySelector(".menu-item-active");

    console.log("%cListeners added.", 'color: red;');
    selectMenu.addEventListener('click', () => {
        selectMenu.classList.toggle(".select-button-clicked");
        caret.classList.toggle(".caret-reverse");
        dropDownMenuNew.classList.toggle(".menu-open");
    });
    console.log("%cMenu Listener.", 'color: green;');

    dropDownOptions.forEach( option => {
    });
    dropDownOptions.forEach( option => { 
        selectMenu.innerText = option.innerText;
        selectMenu.classList.remove('select-clicked');
        caret.classList.remove(".caret-reverse");
        dropDownMenuNew.classList.remove(".menu-open");
    });
    console.log("%cMenu Listener.", 'color: green');

    // options.forEach( option => {
    //     option.classList.remove(".menu-item-active");
    // });
    
    // option.classList.add(".menu-item-active");
});
