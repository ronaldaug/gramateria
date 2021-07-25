import JSZip from 'jszip';
import { saveAs } from 'file-saver';
import { exportTemplate } from '../config/exportTemplate';
import { Notyf } from 'notyf';

const msg = new Notyf({
    position:{
        x:'center',
        y:'top'
    }
});

export const checkExtension = (fname) => {
    let ext = /^.+\.([^.]+)$/.exec(fname);
    return ext == null ? "" : ext[1];
}

const buildZipFolder = (data) => {
    let zip = new JSZip();
    zip.file("index.html", exportTemplate(data));

    let css = zip.folder("css");
    css.file("style.css", data.css);
    css.file("global.css", data.global.css);

    let js = zip.folder("js");
    js.file("script.js", `// all your script goes here `);
    js.file("global.js", data.global.js);
    return zip;
}

export const exportZip = (data) => {
    let zip = buildZipFolder(data)
    zip.generateAsync({ type: "blob" })
        .then(function (content) {
            let fileName = 'gram-'+Date.now() + '-export.zip';
            saveAs(content, fileName);
        });
}

export const existingSites = () =>{
    let sites = localStorage.getItem("gram-sites");
    sites = sites?JSON.parse(sites):[];
    return sites;
}

export const toggleActiveOfDomainList = () =>{
    const removeActiveClass = () => {
        const radios = document.querySelectorAll(".existing-sites input[name='deploy-domain']");
        radios.forEach(e=>{
            e.parentNode.classList.remove("active");
        })
    }

    const allRadios = document.querySelectorAll(".existing-sites input[name='deploy-domain']");
    allRadios.forEach(radio=>{
        radio.addEventListener("change",e=>{
            removeActiveClass();
            if(e.target.checked){
                localStorage.setItem('gram-deploying-site',e.target.parentNode.id);
                e.target.parentNode.classList.add("active");
            }
        })
    })
}

export const listOfSites = () =>{
    let sites = existingSites();
    if(sites.length == 0) return '';
    let siteList = '<ul>';
    siteList += sites.map(site=>{
        return `<li id="${site.id}"><input name="deploy-domain" value="${site.id}" type="radio"> <a href="${site.domain}" target="_blank">${site.domain}</a> <span class="fa fa-trash remove-domain"></span></li>`;
    }).join("");
    siteList += '</ul>';
    return siteList;
}

export const saveSites = (res) =>{
    const domain = 'https://'+ res.subdomain+'.netlify.app';
    const id = res.id;
    const sites = existingSites();
    sites.push({domain,id});
    localStorage.setItem('gram-sites', JSON.stringify(sites))
}

export const deployToNetlify = (type,url,content) =>{
    console.log(type,url,content);return;
    fetch(url, {
        method: type,
        headers: {
            'Content-Type': 'application/zip',
            'Authorization': 'Bearer '+content.token
        },
        body: content
    }).then(e => e.json())
    .then(async (res) => {
                
            saveSites(res);

            const status = type === 'POST'?'Deployed':'Updated';

            modalMessage({
                message:`${status} domain - <a href="https://${res.subdomain}.netlify.app" target="_blank">https://${res.subdomain}.netlify.app</a>`,
                type:'success'
            })
        

            msg.success({
                message: 'Successfully '+status
            })

    }).catch(err=>{
            msg.error({
                message: String(err)
            })
    })
}

export const modalMessage = (obj) =>{
    const modalMessage     = document.querySelector(".modal-message");
    modalMessage.innerHTML = `<p class="msg-${obj.type}">${obj.message}</p>
    <p style="text-align:center;"><small>Please close and re-open this modal.</small></p>`;
    const gramForm     = document.querySelector(".gram-form");
    gramForm.classList.add("hide");

}

export const prepareDeployContent = (data) => {
    let zip = buildZipFolder(data);
     zip.generateAsync({ type: "blob" })
        .then(function (content) {

            if(data.type === 'POST'){
                deployToNetlify(data.type,'https://api.netlify.com/api/v1/sites',content);
            }else{
                deployToNetlify(data.type,'https://api.netlify.com/api/v1/sites/'+data.site_id,content);
            }

        })
}

export const loadingSpinner = () => {

        let spinner_wrapper = document.querySelector(".spinner-wrapper")
        spinner_wrapper.classList.remove('hide');
        window.addEventListener('load', () => {
            setTimeout(()=>{
                spinner_wrapper.classList.add('hide');
            },700)
        })

}

export const getGlobalJsCss = async () =>{
    const global_css_url = 'gramateria/dist/global.css';
    const global_js_url  = 'gramateria/dist/global.js';
    
    const cssRes = await fetch(global_css_url);
    const css    = await cssRes.text();
    
    const jsRes  = await fetch(global_js_url);
    const js     = await jsRes.text();
    return {css,js};
}