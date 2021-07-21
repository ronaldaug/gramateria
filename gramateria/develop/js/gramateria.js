import blockManager from './config/blockManager'
import styleManager from './config/styleManager'
import commands from './config/commands'
import assetManager from './config/assetManager'
import buttons from './config/buttons'
import { checkExtension } from './helpers/index.js'
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css'; // for React, Vue and Svelte

class Gramateria {
    constructor() {

        this.msg = new Notyf({
            duration: 3000,
            position: {
              x: 'center',
              y: 'top'
            }
        });
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
                    'https://cdnjs.cloudflare.com/ajax/libs/bootswatch/5.0.2/materia/bootstrap.min.css',
                    'https://cdn.statically.io/gh/gramateria/readyui-free/main/css/style.min.css'
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
        this.modal = this.editor.Modal;

    }

    codeImportModal() {

        // ---------------------
        // Import/Edit
        // ---------------------
        let prefix = this.editor.getConfig().stylePrefix;

        let modal_content_wrapper = document.createElement("div");
        modal_content_wrapper.id = "modal-wrapper";

        let btnEdit = document.createElement("button");
        let copyHtml = document.createElement("button");
        let copyCss = document.createElement("button");
        let exportTxt = document.createElement("button");
        let fileLoader = document.createElement("label");
        let anchor = document.createElement("a");
        let header_menus = document.createElement("div");
        let fileLoadInput = document.createElement("input");
        fileLoadInput.style.display = 'none';
        fileLoadInput.setAttribute('type','file');

        let htmlCodeEditor = this.buildCodeEditor('html');
        let cssCodeEditor = this.buildCodeEditor('css');

        btnEdit.innerHTML = '<i class="fa fa-code"></i> Apply & close';
        exportTxt.innerHTML = '<i class="fa fa-download"></i> Save as .gram file';
        copyHtml.innerHTML = '<i class="fa fa-copy"></i> Copy HTML';
        copyCss.innerHTML = '<i class="fa fa-copy"></i> Copy CSS';
        fileLoader.innerHTML = '<span class="fa fa-file"></span> Load .gram file';
        fileLoader.appendChild(fileLoadInput);

        header_menus.className = 'header-menus';
        fileLoader.className = prefix + 'import-file';
        btnEdit.className = 'btn ' + prefix + 'btn-import';
        copyHtml.className = 'btn ' + prefix + 'btn-html';
        copyCss.className = 'btn ' + prefix + 'btn-css';
        exportTxt.className = 'btn ' + prefix + 'btn-export';


        fileLoadInput.onchange = (e) =>{
            let currentFile = e.target.files[0];
            let fType = checkExtension(currentFile['name']);
            if (currentFile === undefined) {
                this.msg.error('Please select a file');
                return;
            }
            const allowFileType = ['gram','txt'];
            if (!allowFileType.includes(fType)) {
                this.msg.error('You can only import .gram or .txt extension');
                return;
            }
            let reader = new FileReader();
            reader.onload = (e) => {
                let fileData = e.target.result;
                this.editor.DomComponents.getWrapper().set('content', '');
                this.editor.setComponents(fileData);
                this.modal.close();
            }
            reader.readAsText(currentFile);
        }

        // import button inside import editor
        btnEdit.onclick = () => {
            let htmlCode = htmlCodeEditor.editor.getValue();
            let cssCode = cssCodeEditor.editor.getValue();
            this.editor.DomComponents.getWrapper().set('content', '');
            this.editor.setComponents(htmlCode.trim() + '<style>' + cssCode.trim() + '</style>');
            this.modal.close();
        };

        copyHtml.onclick = () => {
            let htmlCodes = htmlCodeEditor.editor.getValue();
            let dummy = document.createElement("input");
            document.body.appendChild(dummy);
            dummy.setAttribute('value', htmlCodes);
            dummy.select();
            document.execCommand("copy");
            document.body.removeChild(dummy);
            document.execCommand('copy');
            this.msg.success('You have copied HTML codes!');
        };

        copyCss.onclick =  () => {
            let cssCodes = cssCodeEditor.editor.getValue();
            let dummy = document.createElement("input");
            document.body.appendChild(dummy);
            dummy.setAttribute('value', cssCodes);
            dummy.select();
            document.execCommand("copy");
            document.body.removeChild(dummy);
            document.execCommand('copy');
            this.msg.success('You have copied CSS codes!');
        };

        // onclick save as button inside import editor
        exportTxt.onclick = () => {
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


        header_menus.appendChild(fileLoader);
        header_menus.appendChild(exportTxt)
        header_menus.appendChild(copyCss);
        header_menus.appendChild(copyHtml);
        header_menus.appendChild(btnEdit);

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
                    modal_content_wrapper.appendChild(header_menus);
                    modal_content_wrapper.appendChild(headline);
                    modal_content_wrapper.appendChild(htmlBox);
                    modal_content_wrapper.appendChild(cssBox);
                    htmlCodeEditor.init(html_textarea_box);
                    cssCodeEditor.init(css_textarea_box);
                }

                this.modal.setTitle('Edit and Import');
                this.modal.setContent('');
                this.modal.setContent(modal_content_wrapper);
                htmlCodeEditor.setContent(editor.getHtml());
                cssCodeEditor.setContent(editor.getCss({ avoidProtected: true }));
                this.modal.open();
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
    
    init() {
        this.codeImportModal();
        this.editor.Panels.removeButton('options', 'export-template');
        this.editor.on('load', (editor) => {
            editor.Panels.getButton('views', 'open-blocks').set('active', true)
            editor.BlockManager.getCategories().each( (ctg) => {
                if (ctg.attributes.id === 'Sections') {
                    return;
                }
                ctg.set('open', false);
            });
        });
        this.editor.render();
    }
}

(new Gramateria()).init();