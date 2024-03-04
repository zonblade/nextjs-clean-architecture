import hljs from 'https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.9.0/build/es/highlight.min.js';
// import ts from 'https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.9.0/build/es/languages/typescript.min.js';
// hljs.registerLanguage('ts', ts);

async function CST_MenuConstructor() {
    // open menu.yml from uri
    var menu = "menu.json";
    var url = menu;
    const res = await fetch(url).then(res => res.json())
    const data = res["menu"];
    let template = "";
    data.map((item, index) => {
        let subtemp = "";
        if(typeof item.menu !== "undefined"){
            item["menu"].map((subitem, subindex) => {
                subtemp += `<div class="pile">${subitem.title}</div>`
            })
        }
        if (item.mode === "menu") {
            template += `
            <div style="width: 100%; min-height: 20px; overflow-y: hidden;">
                <div class="pile" page="${item.file}.md">
                    ${item.title}
                </div>
                <div style="padding-left: 20px;">
                    ${subtemp}
                </div>
            </div>`
        }
        if (item.mode === "sparator") {
            template += `<div class="sparator"></div>`
        }
    })
    console.log("t: ", template)
    document.getElementById('menus').innerHTML = template;
}

async function CST_ContentConstructor(page = "pages/index.md") {
    const res = await fetch(page).then(res => res.text()).catch(err => console.error(err))
    console.log(res)
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