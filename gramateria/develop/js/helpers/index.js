import JSZip from 'jszip';
import { saveAs } from 'file-saver';
import {exportTemplate} from '../config/exportTemplate';

export const checkExtension = (fname) => {
    let ext = /^.+\.([^.]+)$/.exec(fname);
    return ext == null ? "" : ext[1];
}

export const exportZip = (content) => {
    let zip = new JSZip();
    const data = {
        title:"Untitle project",
        html:content.html
    }
    zip.file("index.html", exportTemplate(data));  

    let css = zip.folder("css");
    css.file("style.css", content.css);


    zip.generateAsync({type:"blob"})
    .then(function(content) {
        let fileName = Date.now()+'-export.zip';
        saveAs(content, fileName);
    });   
}