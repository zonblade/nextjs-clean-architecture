import hljs from 'https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.9.0/build/es/highlight.min.js';
// import ts from 'https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.9.0/build/es/languages/typescript.min.js';
// hljs.registerLanguage('ts', ts);

async function CST_MenuConstructor() {
    // open menu.yml from uri
    var menu = "menu.json";
    var url = menu;
    const res = await fetch(url).then(res => res.json())
    console.log(res)
}

async function CST_ContentConstructor() {
    const res = await fetch("pages/intro.md").then(res => res.text()).catch(err => console.error(err))
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