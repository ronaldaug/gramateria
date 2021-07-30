import blockManager from './config/blockManager'
import styleManager from './config/styleManager'
import customScripts from './config/customScripts'
import {addLocal, getLocal} from './helpers/index'
import assetManager from './config/assetManager'
import buttons from './config/buttons'
import { checkExtension, loadingSpinner } from './helpers/index.js'
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css'; // for React, Vue and Svelte

// Section that has dependency
let sectionDependencies = [
    {
        name:'testimonial',
        dependencies:['splidejs']
    },
    {
        name:'contact',
        dependencies:['contactjs']
    }
]

const dependencyScripts = [
    {
        name:'splidejs',
        css:'https://cdn.jsdelivr.net/npm/@splidejs/splide@latest/dist/css/splide.min.css',
        js:'https://cdn.jsdelivr.net/npm/@splidejs/splide@latest/dist/js/splide.min.js'
    }
]

class Gramateria {
    constructor() {

        this.msg = new Notyf({
            duration: 3000,
            position: {
                x: 'center',
                y: 'top'
            }
        });
        this.config = {
            allowScripts: 1,
            showOffsets: 1,
            autorender: 0,
            noticeOnUnload: 0,
            container: '#gjs',
            height: '100%',
            fromElement: true,
            clearOnRender: 0,
            protectedCss:'.iframe-wrapper{padding-bottom:30px;}section:last-child{margin-bottom:30px}',
            canvas: {
                styles: [
                    'https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap',
                    'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.0.2/css/bootstrap.min.css',
                    'https://cdnjs.cloudflare.com/ajax/libs/line-awesome/1.3.0/font-awesome-line-awesome/css/all.min.css',
                    'gramateria/dist/global.css'
                ],
                scripts: [
                    'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.0.2/js/bootstrap.min.js',
                    'gramateria/dist/global.js'
                ],
            },
            // commands,
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
        }

        this.appendDependencies();

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
        fileLoadInput.setAttribute('type', 'file');

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


        fileLoadInput.onchange = (e) => {
            let currentFile = e.target.files[0];
            let fType = checkExtension(currentFile['name']);
            if (currentFile === undefined) {
                this.msg.error('Please select a file');
                return;
            }
            const allowFileType = ['gram', 'txt'];
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

        copyCss.onclick = () => {
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
            let Css = this.editor.getCss({ avoidProtected:true });
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

    appendDependencies (){

        let dependencies = getLocal("gram-dependencies");

        let links   = dependencies.map(d=>d.css);
        let scripts = dependencies.map(d=>d.js);

        // Append dependencies 

        for(let l of links){      
            this.config.canvas.styles.push(l);
        }

       for(let s of scripts){
            this.config.canvas.scripts.push(s);
        }

    }

    
    runCustomScript = () =>{
        // Append Custom Script
       let doc = this.editor.Canvas.getDocument();
       let gjsScripts = getLocal("gjs-scripts");
       for(let s of gjsScripts){
        const scriptEl     = document.createElement('script');
         scriptEl.className = `${s.name}-script`;
         scriptEl.innerHTML = s.script;
         doc.body.appendChild(scriptEl);
       }
     
    }

    addDependency = (dependency) =>{

            let doc = this.editor.Canvas.getDocument();
            const appendDependency = () => {
                return new Promise((resolve,reject)=>{
                  
                  let dependencies = getLocal('gram-dependencies');                  
                  let isDependencyExit = dependencies.filter(d=>d.name === dependency);
      
                  if(isDependencyExit.length !== 0){
                     resolve(dependency);
                     return;
                  }
      
                 let ds = dependencyScripts.find(d => d.name === dependency );

                 if(!ds){
                     resolve('done');
                     return;
                 }

                    const link     = document.createElement("link");
                    link.rel       = 'stylesheet';
                    link.className = ds.name+'-script';
                    link.href      = ds.css;
                    doc.head.appendChild(link)
        
                    const script     = document.createElement("script");
                    script.src       = ds.js;
                    script.className = ds.name+'-script';
                    doc.body.appendChild(script);

                    dependencies.push(ds)
      
      
                  addLocal('gram-dependencies',dependencies)
      
                  resolve('done');
      
                })
              }
      
              appendDependency().then((dep)=>{
                if(dep === dependency) return;
            

                let cScripts           = getLocal('gjs-scripts');                  
                let isCustomScriptExit = cScripts.filter(d=>d.name === dependency);
    
                if(isCustomScriptExit.length !== 0){
                   return;
                }

                setTimeout(()=>{
                    const customScript = document.createElement("script");
                    customScript.innerHTML = customScripts(dependency);
                    customScript.className = `${dependency}-script`;
                    doc.body.appendChild(customScript);
                    let custom = customScript.innerHTML;
      
                   const storeCustomScripts = (name,script) =>{
                      
                      let customScriptArr = getLocal('gjs-scripts');                      
                          customScriptArr.push({
                            name,
                            script
                          })
                          
                          addLocal('gjs-scripts',customScriptArr);
                    }
      
                    storeCustomScripts(dependency,custom);
      
                },2000)
              })        
    }

    removeDependency (dependency){
        let doc = this.editor.Canvas.getDocument();

        let customScript = getLocal('gjs-scripts');
       // Custom scripts
        for(let custom of customScript){
            let allCustomScripts = doc.querySelectorAll(`.${custom.name}-script`);
            allCustomScripts.forEach(e=>e.outerHTML = '')
        }
        customScript = customScript.filter(c=>c.name !== dependency);
        addLocal('gjs-scripts',customScript);


        // Dependencies / plugins
        let dependencies = getLocal('gram-dependencies');
        if(dependencies.length == 0) return;

        for(let dp of dependencies){
            let allScripts = doc.querySelectorAll(`.${dp.name}-script`);
            allScripts.forEach(e=>e.outerHTML = '')
        }
        
        dependencies = dependencies.filter(d=>d.name !== dependency);
        addLocal('gram-dependencies',dependencies);

    }

    listenAddDependencies = () =>{

        this.editor.on('component:add', component => {
            let section = component.attributes.attributes.id;

            let hasDependency = sectionDependencies.filter(e=>e.name === section);
            if(hasDependency.length !== 0){
                let dependency = hasDependency[0].dependencies[0];
                this.addDependency(dependency);
            }
        });

        
    }

    listenRemoveDependencies = () =>{
        this.editor.on('component:remove', component => {
            let section = component.attributes.attributes.id;
            let hasDependency = sectionDependencies.filter(e=>e.name === section);
            if(hasDependency.length !== 0){
                let dependency = hasDependency[0].dependencies[0];
                this.removeDependency(dependency);
            }
        });
    }

    init() {
        this.editor = grapesjs.init(this.config);
        this.editor.Panels.addButton('options', buttons);
        this.modal = this.editor.Modal;
        this.codeImportModal();
        this.editor.Panels.removeButton('options', 'export-template');
        this.editor.on('load', (editor) => {

            editor.Panels.getButton('views', 'open-blocks').set('active', true)
            editor.BlockManager.getCategories().each((ctg) => {
                if (ctg.attributes.id === 'Sections') {
                    return;
                }
                ctg.set('open', false);
            });


            // ----------------------------------------
            // Load and show settings and style manager
            // ----------------------------------------
            let openTmBtn = editor.Panels.getButton('views', 'open-tm');
            openTmBtn && openTmBtn.set('active', 1);
            let openSm = editor.Panels.getButton('views', 'open-sm');
            openSm && openSm.set('active', 1);

            // Add Settings Sector
            let traitsSector = document.createElement('div');
            traitsSector.innerHTML = '<div class="gjs-sm-sector no-select">' +
                '<div class="gjs-sm-title"><span class="icon-settings fa fa-cog"></span> Settings</div>' +
                '<div class="gjs-sm-properties" style="display: none;"></div></div>';
            let traitsProps = traitsSector.querySelector('.gjs-sm-properties');
            traitsProps.append(document.querySelector('.gjs-trt-traits'));
            document.querySelector('.gjs-sm-sectors').insertAdjacentElement('beforebegin', traitsSector);
            traitsSector.querySelector('.gjs-sm-title').addEventListener('click', () => {
                let traitStyle = window.getComputedStyle(traitsProps);
                let hidden = traitStyle.display == 'none';
                if (hidden) {
                    traitsProps.style.display = 'block';
                } else {
                    traitsProps.style.display = 'none';
                }

            });

            this.runCustomScript();
        });

        this.editor.getWrapper().addClass('iframe-wrapper');
        this.editor.render();
        this.listenAddDependencies();
        this.listenRemoveDependencies();
    }
}

(new Gramateria()).init();

loadingSpinner();