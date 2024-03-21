import hljs from 'https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.9.0/build/es/highlight.min.js';
import jsMd5 from 'https://cdn.jsdelivr.net/npm/js-md5@0.8.3/+esm'
// import ts from 'https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.9.0/build/es/languages/typescript.min.js';
// hljs.registerLanguage('ts', ts);

let menuState = {}

async function CST_MenuConstructor() {
    // open menu.yml from uri
    var menu = "menu.json";
    var url = menu;
    const res = await fetch(url).then(res => res.json())
    const data = res["menu"];
    let template = recrusiveMenu(data, 0)
    document.getElementById('menus').innerHTML = template;
}

function recrusiveMenu(data, num) {
    let template = "";
    data.map((item, index) => {
        let subtemp = "";
        if (typeof item.menu !== "undefined") {
            subtemp = recrusiveMenu(item.menu, num);
        }
        if (item.mode === "menu") {
            const fleId = jsMd5(item.file + num.toString() + item.title)
            const hasSub = subtemp.length > 0;
            let subtemps = '';
            if (hasSub) {
                subtemps = `
                <div class="submenu" style="position:relative;" id="sub-${fleId}">
                    ${subtemp}
                </div>
                `
            }
            template += `
            <div style="width: 100%;" id="par-${fleId}" data-z="${num}">
                <div class="pile" page="${item.file}.md" id="${fleId}" data-sub="${hasSub}" onClick="window.openMenu(this);">
                    ${item.title} - ${hasSub ? "sub" : ""}
                </div>
                ${subtemps}
            </div>`
        }
        if (item.mode === "sparator") {
            template += `<div class="sparator"></div>`
        }
        num += 1;
    })
    return template;
}

function updateMenuState(id) {
    const state = menuState[id];
    const subId = `sub-${id}`;
    const parentId = `par-${id}`;
    const menutitle = document.getElementById(id);
    const submenu = document.getElementById(subId);
    const parent = document.getElementById(parentId);
    const dataZ = parseInt(parent.getAttribute('data-z') ?? "0") * 100;

    // <div>  <- how to get this
    // -- <div>
    // -- -- <div> <- from this
    const parentParent = parent.parentElement.parentElement;
    // now get all the children of the parentParent
    const children = parentParent.children;
    // loop through all the children
    let choosenChild = null;
    for (let i = 0; i < children.length; i++) {
        // check if there is a child with id without sub- or par-
        if (children[i].id !== undefined) {
            if (!children[i].id.includes("-") && children[i].id.length > 10) {
                console.log(children[i].id)
                choosenChild = children[i];
                break;
            }
        }
    }

    if (state === undefined) {
        menuState[id] = 0;
    }
    if (menuState[id] === 0) {
        menuState[id] = 1;

        if(choosenChild){
            choosenChild.style.display = "none";
        }

        submenu.classList.remove('inactive-submenu');
        submenu.classList.add('active-submenu');
        submenu.style.zIndex = dataZ;

        parent.classList.add('active-menu');
    } else if (menuState[id] === 1) {
        menuState[id] = 0;

        submenu.classList.remove('active-submenu');
        submenu.style.removeProperty('z-index');
        submenu.classList.add('inactive-submenu');

        parent.classList.remove('active-menu');


        if(choosenChild){
            choosenChild.style.display = "flex";
        }
    }
}

window.openMenu = (e) => {
    // get html element id
    const id = e.id;
    // get data-sub
    const sub = e.getAttribute('data-sub');
    if (sub === "true") {
        updateMenuState(id)
    }
}

async function CST_ContentConstructor(page = "pages/index.md") {
    const res = await fetch(page).then(res => res.text()).catch(err => console.error(err))
    const md = window.markdownit();
    const result = md.render(res);
    document.getElementById('root').innerHTML = result;
    hljs.highlightAll()
}

(async () => {
    await CST_MenuConstructor()
    await CST_ContentConstructor()
})()

document.addEventListener('click', (e) => {
    if (e.target.classList.contains('pile')) {
        const page = e.target.getAttribute('page');
        if (page) {
            (async () => {
                await CST_ContentConstructor(page)
            })()
        }
    }
})