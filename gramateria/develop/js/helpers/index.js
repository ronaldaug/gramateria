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

export const publishToNetlify = (data) => {
    let zip = buildZipFolder(data)

    zip.generateAsync({ type: "blob" })
        .then(function (content) {
            fetch('https://api.netlify.com/api/v1/sites', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/zip',
                    'Authorization': 'Bearer '+data.token
                },
                body: content
            }).then(e => e.json())
                .then(res => {
                    if(res){
                        msg.success({
                            duration:200000,
                            message: 'URL - https://'+ res.subdomain+'.netlify.app',
                            dismissible: true
                        })
                        msg.success({
                            message: 'Successfully deployed'
                        })
                    }
                }).catch(err=>{
                    msg.error({
                        message: String(err)
                    })
                })
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