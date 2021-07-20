import blockManager from './config/blockManager'
import styleManager from './config/styleManager'
import commands from './config/commands'
import assetManager from './config/assetManager'
import buttons from './config/buttons'
class Gramateria {
    constructor(){
        this.editor = grapesjs.init({
            allowScripts: 1,
            showOffsets: 1,
            autorender: 0,
            noticeOnUnload: 0,
            container: '#gjs',
            height: '100%',
            fromElement: true,
            clearOnRender: 0,
            canvas: {
                styles: [
                    'https://cdnjs.cloudflare.com/ajax/libs/bootswatch/5.0.2/materia/bootstrap.min.css'
                ],
                scripts: [
                    'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.0.2/js/bootstrap.min.js'
                ],
            },
            commands,
            assetManager,
            blockManager,
            styleManager,
            storageManager: {
                id: 'gjs-',
                type: 'local',
                autosave: 1,
                autoload: 1,
                stepsBeforeSave: 1,
                storeComponents: 1,
                storeStyles: 1,
                storeHtml: 1,
                storeCss: 1,
            }
        });

        this.editor.Panels.addButton('options', buttons);
    }
    checkExtension (fname) {
        let ext = /^.+\.([^.]+)$/.exec(fname);
        return ext == null ? "" : ext[1];
    }
    editModal() {        

        // ---------------------
        // Import/Edit
        // ---------------------
        let prefix = this.editor.getConfig().stylePrefix;
        let modal = this.editor.Modal;

        let modal_content_wrapper = document.createElement("div");
        modal_content_wrapper.id = "modal-wrapper";

        let btnEdit = document.createElement("button");
        let copyHtml = document.createElement("button");
        let copyCss = document.createElement("button");
        let exportTxt = document.createElement("button");
        let loadTxt = document.createElement("button");
        let fileLoader = document.createElement("form");
        let anchor = document.createElement("a");


     

        let htmlCodeEditor   = this.buildCodeEditor('html');
        let cssCodeEditor    = this.buildCodeEditor('css');

        btnEdit.innerHTML    = '<i class="fa fa-code"></i> Apply';
        exportTxt.innerHTML  = '<i class="fa fa-download"></i> Save as .gram file';
        loadTxt.innerHTML    = '<i class="fa fa-upload"></i> Load .gram file';
        copyHtml.innerHTML   = '<i class="fa fa-copy"></i> Copy HTML';
        copyCss.innerHTML    = '<i class="fa fa-copy"></i> Copy CSS';
        fileLoader.innerHTML = '<input type="file" id="fileToLoad">';

        fileLoader.className = prefix + 'import-file';
        btnEdit.className    = prefix + 'btn-prim ' + prefix + 'btn-import';
        copyHtml.className   = prefix + 'btn-prim ' + prefix + 'btn-html';
        copyCss.className    = prefix + 'btn-prim ' + prefix + 'btn-css';
        exportTxt.className  = prefix + 'btn-prim ' + prefix + 'btn-export';
        loadTxt.className    = prefix + 'btn-prim ' + prefix + 'btn-load';

        // import button inside import editor
        btnEdit.onclick =  () => {
            let htmlCode = htmlCodeEditor.editor.getValue();
            let cssCode = cssCodeEditor.editor.getValue();
            this.editor.DomComponents.getWrapper().set('content', '');
            this.editor.setComponents(htmlCode.trim() + '<style>' + cssCode.trim() + '</style>');
            modal.close();
        };

        // onclick load file button inside import editor
        loadTxt.onclick =  (e) =>{
            e.preventDefault();
            let fileToLoad = document.getElementById("fileToLoad").files[0];
            let fType = this.checkExtension(fileToLoad['name']);
            if (fileToLoad === undefined) {
                alert('Please select a file');
                return;
            }
            if (fType === 'gram' || fType === 'txt') {
                let reader = new FileReader();
                reader.onload = (e) =>{
                    let fileData = e.target.result;
                    this.editor.DomComponents.getWrapper().set('content', '');
                    this.editor.setComponents(fileData);
                    modal.close();
                }
                reader.readAsText(fileToLoad);
            } else {
                alert('You can only import .gram or .txt extension');
            }
        }

        copyHtml.onclick =  () => {
            let htmlCodes = htmlCodeEditor.editor.getValue();
            let dummy = document.createElement("input");
            document.body.appendChild(dummy);
            dummy.setAttribute('value', htmlCodes);
            dummy.select();
            document.execCommand("copy");
            document.body.removeChild(dummy);
            document.execCommand('copy');
            alert('You have copied HTML codes!');
        };

        copyCss.onclick = function () {
            let cssCodes = cssCodeEditor.editor.getValue();
            let dummy = document.createElement("input");
            document.body.appendChild(dummy);
            dummy.setAttribute('value', cssCodes);
            dummy.select();
            document.execCommand("copy");
            document.body.removeChild(dummy);
            document.execCommand('copy');
            alert('You have copied CSS codes!');
        };

        // onclick save as button inside import editor
        exportTxt.onclick =  () => {
            let InnerHtml = this.editor.getHtml();
            let Css = this.editor.getCss();
            let text = InnerHtml + "<style>" + Css + '</style>';
            let blob = new Blob([text], {
                type: "text/plain"
            });
            anchor.download = "download.gram";
            anchor.href = window.URL.createObjectURL(blob);
            anchor.target = "_blank";
            anchor.style.display = "none"; // just to be safe!
            document.body.appendChild(anchor);
            anchor.click();
            document.body.removeChild(anchor);
        }

        // import nav button click event
        this.editor.Commands.add('html-edit', {
            run: (editor, sender) => {
                sender && sender.set('active', 0);

                let html_textarea_box = document.createElement('textarea');
                let css_textarea_box = document.createElement('textarea');

                let htmlBox = document.createElement('div');
                htmlBox.className = 'html-wrapper';
                htmlBox.innerHTML = "<h4>HTML</h4>";
                htmlBox.appendChild(html_textarea_box);

                let cssBox = document.createElement('div');
                cssBox.className = 'css-wrapper';
                cssBox.innerHTML = "<h4>CSS</h4>";
                cssBox.appendChild(css_textarea_box);

                let headline = document.createElement('div');
                headline.className = 'clear-fix';

                if (!htmlCodeEditor.editor && !cssCodeEditor.editor) {
                    modal_content_wrapper.appendChild(fileLoader);
                    modal_content_wrapper.appendChild(loadTxt);
                    modal_content_wrapper.appendChild(exportTxt);
                    modal_content_wrapper.appendChild(headline);
                    modal_content_wrapper.appendChild(htmlBox);
                    modal_content_wrapper.appendChild(cssBox);
                    modal_content_wrapper.appendChild(copyCss);
                    modal_content_wrapper.appendChild(copyHtml);
                    modal_content_wrapper.appendChild(btnEdit);
                    htmlCodeEditor.init(html_textarea_box);
                    cssCodeEditor.init(css_textarea_box);
                }

                modal.setTitle('Edit and Import');
                modal.setContent('');
                modal.setContent(modal_content_wrapper);
                htmlCodeEditor.setContent(editor.getHtml());
                cssCodeEditor.setContent(editor.getCss({ avoidProtected: true }));
                modal.open();
                htmlCodeEditor.editor.refresh();
                cssCodeEditor.editor.refresh();
            }
        });

    }

    buildCodeEditor = (type) => {
        let codeEditor = this.editor.CodeManager.getViewer('CodeMirror').clone();
        codeEditor.set({
            codeName: type === 'html' ? 'htmlmixed' : 'css',
            readOnly: 0,
            theme: 'hopscotch',
            autoBeautify: true,
            autoCloseTags: true,
            autoCloseBrackets: true,
            lineWrapping: true,
            styleActiveLine: true,
            smartIndent: true,
            indentWithTabs: true
        });
        return codeEditor;
    }

    init(){
        this.editModal();
        this.editor.Panels.removeButton('options', 'export-template');        
        this.editor.on('load', (editor)=>{ 
            editor.Panels.getButton('views', 'open-blocks').set('active', true) 
            editor.BlockManager.getCategories().each(function (ctg) {
                if(ctg.attributes.id == 'Section'){
                    return;
                }
                ctg.set('open', false);
            });
        });
        this.editor.render();
    }
}

(new Gramateria()).init();