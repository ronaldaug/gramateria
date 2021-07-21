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

export const exportZip = (data) => {
    let zip = new JSZip();
    zip.file("index.html", exportTemplate(data));

    let css = zip.folder("css");
    css.file("style.css", data.css);


    zip.generateAsync({ type: "blob" })
        .then(function (content) {
            let fileName = Date.now() + '-export.zip';
            saveAs(content, fileName);
        });
}

export const publishToNetlify = (data) => {
    let zip = new JSZip();
    zip.file("index.html", exportTemplate(data));

    let css = zip.folder("css");
    css.file("style.css", data.css);

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