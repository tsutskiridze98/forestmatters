import { baza } from './data.js';

const jishi = document.getElementById('jishi');
const diametri = document.getElementById('diam');
const btn = document.getElementById('btn');
const table = document.getElementById('cxrili');
const tanrigi = document.getElementById('tanrigi');
const div = document.getElementById('div');


const saxeobebi = [ 
    {eng: 'akacia', geo: 'აკაცია'},
    {eng: 'fiWvi', geo: 'ფიჭვი'},
    {eng: 'muxa', geo: 'მუხა'},
    {eng: 'muxaqarTuli', geo: 'მუხა ქართული'},
    {eng: 'naZvi', geo: 'ნაძვი'},
    {eng: 'rcxila', geo: 'რცხილა'},
    {eng: 'soWi', geo: 'სოჭი'},
    {eng: 'Txmela', geo: 'თხმელა'},
    {eng: 'wifeli', geo: 'წიფელი'},
]

btn.addEventListener('click', ()=> {
    const treeGeo = jishi.value;
    let treeEng = '';

    saxeobebi.forEach(x => {
        if(treeGeo === x.geo) {
            treeEng = x.eng;
        }
    });

    const treeType = baza[treeEng];

    for(let i = 0; i < treeType.length; i++) {
        if(diametri.value === treeType[i].diametri && tanrigi.value === treeType[i].tanrigi) {
            const data = {
                treeName: treeGeo,
                diametri: treeType[i].diametri,
                sakmisi: treeType[i].sakmisi,
                shesha: treeType[i].shesha,
                gasacemi: Math.round((Number(treeType[i].shesha) + Number(treeType[i].sakmisi)) * 100) / 100,
            }
            renderData(data);
            //console.log(data);
            break;
        } 
    }
    
    
});

let number = 1

function renderData(data) {
    const html = `
    <tr>
        <td>${number++}</td>
        <td>${data.treeName}</td>
        <td>${data.diametri}</td>
        <td>${data.sakmisi}</td>
        <td>${data.shesha}</td>
        <td>${data.gasacemi}</td>
    <tr>
    `
    table.insertAdjacentHTML('beforeend', html)
}

function renderError(message) {
	div.insertAdjacentText("beforeend", message);
}