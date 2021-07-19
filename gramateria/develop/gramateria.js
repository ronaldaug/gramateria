const blocks = require('./blocks');

let editor = grapesjs.init({
    allowScripts: 1,
    showOffsets: 1,
    autorender: 0,
    noticeOnUnload: 0,
    container: '#gjs',
    height: '100%',
    fromElement: true,
    clearOnRender: 0,
    plugins: [
        'gjs-plugin-export'
    ],
    pluginsOpts: {
        'gjs-plugin-export': {
            btnLabel: 'Download Zip',
            preHtml: `<!doctype html>
                        <html>
                        <head>
                        <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
                        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
                        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/css/materialize.min.css">
                        <link rel="stylesheet" href="css/style.css">
                            <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
                            <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/js/materialize.min.js"></script>
                        </head>
                        <body>`,
            postHtml: `<!-- this page is generateded by Gramateria -->
                        </body>
                        </html>`
        }
    },
    canvas: {
        styles: ['https://fonts.googleapis.com/css?family=Roboto', 'https://fonts.googleapis.com/icon?family=Material+Icons', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css', 'https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/css/materialize.min.css'],
        scripts: ['https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js', 'https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.1/js/materialize.min.js']
    },
    commands: {
        defaults: [
//              {
//              id: 'open-github',
//              run: function (editor, sender) {
//                  sender.set('active', false);
//                  window.open('https://github.com/ronaldaug/gramateria', '_blank');
//              }
//                }, 
            {
                id: 'undo',
                run: function (editor, sender) {
                    sender.set('active', false);
                    editor.UndoManager.undo(true);
                }
            }, {
                id: 'redo',
                run: function (editor, sender) {
                    sender.set('active', false);
                    editor.UndoManager.redo(true);
                }
            }, {
                id: 'clean-all',
                run: function (editor, sender) {
                    sender.set('active', false);
                    if (confirm('Are you sure to clean the canvas?')) {
                        let comps = editor.DomComponents.clear();
                    }
                }
            }],
    },

    assetManager: {
        upload: 'https://test.page',
        params: {
            _token: 'pCYrSwjuiV0t5NVtZpQDY41Gn5lNUwo3it1FIkAj',
        },
        assets: [
            {
                type: 'image',
                src: 'https://res.cloudinary.com/ronaldaug/image/upload/v1515419443/background_ckgyqe.jpg',
                date: '2015-02-01',
                height: 808,
                width: 1440
            },
            {
                type: 'image',
                src: 'https://res.cloudinary.com/ronaldaug/image/upload/v1515419441/background2_gjvaxs.jpg',
                date: '2015-02-01',
                height: 800,
                width: 1600
            },
            {
                type: 'image',
                src: 'https://res.cloudinary.com/ronaldaug/image/upload/v1515419443/background3_d0ghix.jpg',
                date: '2015-02-01',
                height: 743,
                width: 1440
            },
            {
                type: 'image',
                src: 'https://res.cloudinary.com/ronaldaug/image/upload/v1515419446/background4_pzh5ou.jpg',
                date: '2015-02-01',
                height: 808,
                width: 1440
            },
            {
                type: 'image',
                src: 'http://via.placeholder.com/250x350/0174DF/ffffff/',
                height: 350,
                width: 250
            },
            {
                type: 'image',
                src: 'http://via.placeholder.com/250x350/5FB404/ffffff/',
                height: 350,
                width: 250
            },
            {
                type: 'image',
                src: 'http://via.placeholder.com/250x350/BF00FF/ffffff/',
                height: 350,
                width: 250
            },
            {
                type: 'image',
                src: 'http://via.placeholder.com/250x350/B40431/ffffff/',
                height: 350,
                width: 250
            },
            {
                type: 'image',
                src: 'http://via.placeholder.com/250x350/088A68/ffffff/',
                height: 350,
                width: 250
            },
            {
                type: 'image',
                src: 'http://via.placeholder.com/250x350/DF7401/ffffff/',
                height: 350,
                width: 250
            },
            {
                type: 'image',
                src: 'http://via.placeholder.com/250x350/00BFFF/ffffff/',
                height: 350,
                width: 250
            }
        ]
    },
    blockManager: {
        blocks
    },
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
    },
    customStyleManager: [{
        name: 'General',
        buildProps: ['float', 'display', 'position', 'top', 'right', 'left', 'bottom'],
        properties:[{
            name: 'Alignment',
            property: 'float',
            type: 'radio',
            defaults: 'none',
            list: [
                { value: 'none', className: 'fa fa-times'},
                { value: 'left', className: 'fa fa-align-left'},
                { value: 'right', className: 'fa fa-align-right'}
            ],
        },
            { property: 'position', type: 'select'}
        ],
    },{
        name: 'Dimension',
        open: false,
        buildProps: ['width', 'flex-width', 'height', 'max-width', 'min-height', 'margin', 'padding'],
        properties: [{
            id: 'flex-width',
            type: 'integer',
            name: 'Width',
            units: ['px', '%'],
            property: 'flex-basis',
            toRequire: 1,
        },{
            property: 'margin',
            properties:[
                { name: 'Top', property: 'margin-top'},
                { name: 'Right', property: 'margin-right'},
                { name: 'Bottom', property: 'margin-bottom'},
                { name: 'Left', property: 'margin-left'}
            ],
        },{
            property  : 'padding',
            properties:[
                { name: 'Top', property: 'padding-top'},
                { name: 'Right', property: 'padding-right'},
                { name: 'Bottom', property: 'padding-bottom'},
                { name: 'Left', property: 'padding-left'}
            ],
        }],
    },{
        name: 'Typography',
        open: false,
        buildProps: ['font-family', 'font-size', 'font-weight', 'letter-spacing', 'color', 'line-height', 'text-align', 'text-decoration', 'text-shadow'],
        properties:[
            { name: 'Font', property: 'font-family'},
            { name: 'Weight', property: 'font-weight'},
            { name:  'Font color', property: 'color'},
            {
                property: 'text-align',
                type: 'radio',
                defaults: 'left',
                list: [
                    { value : 'left',  name : 'Left',    className: 'fa fa-align-left'},
                    { value : 'center',  name : 'Center',  className: 'fa fa-align-center' },
                    { value : 'right',   name : 'Right',   className: 'fa fa-align-right'},
                    { value : 'justify', name : 'Justify',   className: 'fa fa-align-justify'}
                ],
            },{
                property: 'text-decoration',
                type: 'radio',
                defaults: 'none',
                list: [
                    { value: 'none', name: 'None', className: 'fa fa-times'},
                    { value: 'underline', name: 'underline', className: 'fa fa-underline' },
                    { value: 'line-through', name: 'Line-through', className: 'fa fa-strikethrough'}
                ],
            },{
                property: 'text-shadow',
                properties: [
                    { name: 'X position', property: 'text-shadow-h'},
                    { name: 'Y position', property: 'text-shadow-v'},
                    { name: 'Blur', property: 'text-shadow-blur'},
                    { name: 'Color', property: 'text-shadow-color'}
                ],
            }],
    },{
        name: 'Decorations',
        open: false,
        buildProps: ['opacity', 'background-color', 'border-radius', 'border', 'box-shadow', 'background'],
        properties: [{
            type: 'slider',
            property: 'opacity',
            defaults: 1,
            step: 0.01,
            max: 1,
            min:0,
        },{
            property: 'border-radius',
            properties  : [
                { name: 'Top', property: 'border-top-left-radius'},
                { name: 'Right', property: 'border-top-right-radius'},
                { name: 'Bottom', property: 'border-bottom-left-radius'},
                { name: 'Left', property: 'border-bottom-right-radius'}
            ],
        },{
            property: 'box-shadow',
            properties: [
                { name: 'X position', property: 'box-shadow-h'},
                { name: 'Y position', property: 'box-shadow-v'},
                { name: 'Blur', property: 'box-shadow-blur'},
                { name: 'Spread', property: 'box-shadow-spread'},
                { name: 'Color', property: 'box-shadow-color'},
                { name: 'Shadow type', property: 'box-shadow-type'}
            ],
        },{
            property: 'background',
            properties: [
                { name: 'Image', property: 'background-image'},
                { name: 'Repeat', property:   'background-repeat'},
                { name: 'Position', property: 'background-position'},
                { name: 'Attachment', property: 'background-attachment'},
                { name: 'Size', property: 'background-size'}
            ],
        },],
    },{
        name: 'Extra',
        open: false,
        buildProps: ['transition', 'perspective', 'transform'],
        properties: [{
            property: 'transition',
            properties:[
                { name: 'Property', property: 'transition-property'},
                { name: 'Duration', property: 'transition-duration'},
                { name: 'Easing', property: 'transition-timing-function'}
            ],
        },{
            property: 'transform',
            properties:[
                { name: 'Rotate X', property: 'transform-rotate-x'},
                { name: 'Rotate Y', property: 'transform-rotate-y'},
                { name: 'Rotate Z', property: 'transform-rotate-z'},
                { name: 'Scale X', property: 'transform-scale-x'},
                { name: 'Scale Y', property: 'transform-scale-y'},
                { name: 'Scale Z', property: 'transform-scale-z'}
            ],
        }]
    },{
        name: 'Flex',
        open: false,
        properties: [{
            name: 'Flex Container',
            property: 'display',
            type: 'select',
            defaults: 'block',
            list: [
                { value: 'block', name: 'Disable'},
                { value: 'flex', name: 'Enable'}
            ],
        },{
            name: 'Flex Parent',
            property: 'label-parent-flex',
            type: 'integer',
        },{
            name      : 'Direction',
            property  : 'flex-direction',
            type    : 'radio',
            defaults  : 'row',
            list    : [{
                value   : 'row',
                name    : 'Row',
                className : 'icons-flex icon-dir-row',
                title   : 'Row',
            },{
                value   : 'row-reverse',
                name    : 'Row reverse',
                className : 'icons-flex icon-dir-row-rev',
                title   : 'Row reverse',
            },{
                value   : 'column',
                name    : 'Column',
                title   : 'Column',
                className : 'icons-flex icon-dir-col',
            },{
                value   : 'column-reverse',
                name    : 'Column reverse',
                title   : 'Column reverse',
                className : 'icons-flex icon-dir-col-rev',
            }],
        },{
            name      : 'Justify',
            property  : 'justify-content',
            type    : 'radio',
            defaults  : 'flex-start',
            list    : [{
                value   : 'flex-start',
                className : 'icons-flex icon-just-start',
                title   : 'Start',
            },{
                value   : 'flex-end',
                title    : 'End',
                className : 'icons-flex icon-just-end',
            },{
                value   : 'space-between',
                title    : 'Space between',
                className : 'icons-flex icon-just-sp-bet',
            },{
                value   : 'space-around',
                title    : 'Space around',
                className : 'icons-flex icon-just-sp-ar',
            },{
                value   : 'center',
                title    : 'Center',
                className : 'icons-flex icon-just-sp-cent',
            }],
        },{
            name      : 'Align',
            property  : 'align-items',
            type    : 'radio',
            defaults  : 'center',
            list    : [{
                value   : 'flex-start',
                title    : 'Start',
                className : 'icons-flex icon-al-start',
            },{
                value   : 'flex-end',
                title    : 'End',
                className : 'icons-flex icon-al-end',
            },{
                value   : 'stretch',
                title    : 'Stretch',
                className : 'icons-flex icon-al-str',
            },{
                value   : 'center',
                title    : 'Center',
                className : 'icons-flex icon-al-center',
            }],
        },{
            name: 'Flex Children',
            property: 'label-parent-flex',
            type: 'integer',
        },{
            name:     'Order',
            property:   'order',
            type:     'integer',
            defaults :  0,
            min: 0
        },{
            name    : 'Flex',
            property  : 'flex',
            type    : 'composite',
            properties  : [{
                name:     'Grow',
                property:   'flex-grow',
                type:     'integer',
                defaults :  0,
                min: 0
            },{
                name:     'Shrink',
                property:   'flex-shrink',
                type:     'integer',
                defaults :  0,
                min: 0
            },{
                name:     'Basis',
                property:   'flex-basis',
                type:     'integer',
                units:    ['px','%',''],
                unit: '',
                defaults :  'auto',
            }],
        },{
            name      : 'Align',
            property  : 'align-self',
            type      : 'radio',
            defaults  : 'auto',
            list    : [{
                value   : 'auto',
                name    : 'Auto',
            },{
                value   : 'flex-start',
                title    : 'Start',
                className : 'icons-flex icon-al-start',
            },{
                value   : 'flex-end',
                title    : 'End',
                className : 'icons-flex icon-al-end',
            },{
                value   : 'stretch',
                title    : 'Stretch',
                className : 'icons-flex icon-al-str',
            },{
                value   : 'center',
                title    : 'Center',
                className : 'icons-flex icon-al-center',
            }],
        }]
    }
    ]});

let pnm = editor.Panels;
pnm.addButton('options', [{
    id: 'undo',
    className: 'fa fa-undo icon-undo',
    command: function (editor, sender) {
        sender.set('active', 0);
        editor.UndoManager.undo(1);
    },
    attributes: {
        title: 'Undo (CTRL/CMD + Z)'
    }
},
    {
        id: 'redo',
        className: 'fa fa-repeat icon-redo',
        command: function (editor, sender) {
            sender.set('active', 0);
            editor.UndoManager.redo(1);
        },
        attributes: {
            title: 'Redo (CTRL/CMD + SHIFT + Z)'
        }
    },
    {
        id: 'import',
        className: 'fa fa-edit',
        command: 'html-edit',
        attributes: {
            title: 'Edit and Import'
        }
    }, {
        id: 'clean-all',
        className: 'fa fa-trash icon-blank',
        command: function (editor, sender) {
            if (sender) sender.set('active', false);
            if (confirm('Are you sure to clean the canvas?')) {
                editor.DomComponents.clear();
                setTimeout(function () {
                    localStorage.setItem('gjs-assets', '');
                    localStorage.setItem('gjs-components', '');
                    localStorage.setItem('gjs-html', '');
                    localStorage.setItem('gjs-css', '');
                    localStorage.setItem('gjs-styles', '');
                }, 0);
            }
        },
        attributes: {
            title: 'Empty canvas'
        }
    },
    {
        id: 'clear-local',
        className: 'fa fa-close',
        command: function () {
            if (confirm('Reset to original?')) {
                localStorage.setItem('gjs-assets', '');
                localStorage.setItem('gjs-components', '');
                localStorage.setItem('gjs-html', '');
                localStorage.setItem('gjs-css', '');
                localStorage.setItem('gjs-styles', '');
                location.reload();
            }
        },
        attributes: {
            title: 'Reset'
        }
    },
    {
        id: 'save-project',
        className: 'fa fa-save',
        command: function (editor, sender) {
            sender.set('active', 0);
            alert('No database for this version but your work is automatically saved in localstorage.');
        },
        attributes: {
            title: 'github'
        }
    }
]);


// ---------------------
// Import/Edit
// ---------------------
let gra = {
    // append in container
    _a: function (appendName) {
        return container.appendChild(appendName);
    },
    // create elements
    _c: function (tagName) {
        return document.createElement(tagName);
    },
    // check extensions
    _e: function (fname) {
        let ext = /^.+\.([^.]+)$/.exec(fname);
        return ext == null ? "" : ext[1];
    },
    // select id
    _d: function (name, tag) {
        switch (tag) {
            case 'class':
                return document.getElementsByClassName(name);
                break;
            case 'id':
                return document.getElementById(name);
                break;
            default:
                return document.getElementById(name);
        }
    }
}

let pmodel = gra._d("modelPopup", "class");
let pfx = editor.getConfig().stylePrefix;
let modal = editor.Modal;
let cmdm = editor.Commands;
let container = gra._c("div");
let fileform = gra._c("div");
let btnEdit = gra._c("button");
let copyHtml = gra._c("button");
let copyCss = gra._c("button");
let btnZip = gra._c("button");
let exportTxt = gra._c("button");
let loadTxt = gra._c("button");
let fileLoader = gra._c("form");
let anchor = gra._c("a");


function buildCodeEditor(type) {
    let codeEditor = editor.CodeManager.getViewer('CodeMirror').clone();
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
let htmlCodeEditor = buildCodeEditor('html');
let cssCodeEditor = buildCodeEditor('css');

btnEdit.innerHTML = '<i class="fa fa-code"></i> Apply';
btnZip.innerHTML = '<i class="fa fa-download"></i> Download Project (zip)';
exportTxt.innerHTML = '<i class="fa fa-download"></i> Save as .gram file';
loadTxt.innerHTML = '<i class="fa fa-upload"></i> Load .gram file';
copyHtml.innerHTML = '<i class="fa fa-copy"></i> Copy HTML';
copyCss.innerHTML = '<i class="fa fa-copy"></i> Copy CSS';
fileLoader.innerHTML = '<input type="file" id="fileToLoad">';
fileform.innerHTML = '<input id="file_name" value="" type="text" placeholder="Enter file Name" name="filename"><button class="exportgram" onclick="exportgramfile()">Save</button>';

fileform.className = 'modelPopup';
fileLoader.className = pfx + 'import-file';
btnEdit.className = pfx + 'btn-prim ' + pfx + 'btn-import';
copyHtml.className = pfx + 'btn-prim ' + pfx + 'btn-html';
copyCss.className = pfx + 'btn-prim ' + pfx + 'btn-css';
btnZip.className = pfx + 'btn-prim ' + pfx + 'btn-zip';
exportTxt.className = pfx + 'btn-prim ' + pfx + 'btn-export';
loadTxt.className = pfx + 'btn-prim ' + pfx + 'btn-load';

// import button inside import editor
btnEdit.onclick = function () {
    let htmlCode = htmlCodeEditor.editor.getValue();
    let cssCode = cssCodeEditor.editor.getValue();
    editor.DomComponents.getWrapper().set('content', '');
    editor.setComponents(htmlCode.trim() + '<style>' + cssCode.trim() + '</style>');
    modal.close();
};

btnZip.onclick = function() {
    editor.runCommand('gjs-export-zip');
};

// onclick load file button inside import editor
loadTxt.onclick = function (e) {
    e.preventDefault();
    let fileToLoad = document.getElementById("fileToLoad").files[0];
    let fType = gra._e(fileToLoad['name']);
    if (fileToLoad === undefined) {
        alert('Please select a file');
        return;
    }
    if (fType !== 'gram' || fType !== 'txt') {
        alert('You can only import .gram or .txt extension');
    }
    
    let reader = new FileReader();
    reader.onload = function (e) {
        let fileData = e.target.result;
        editor.DomComponents.getWrapper().set('content', '');
        editor.setComponents(fileData);
        modal.close();
    }
    reader.readAsText(fileToLoad);
}

copyHtml.onclick = function(){
    let htmlCodes = htmlCodeEditor.editor.getValue();
    let dummy = gra._c("input");
    document.body.appendChild(dummy);
    dummy.setAttribute('value', htmlCodes);
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
    document.execCommand('copy');
    alert('You have copied HTML codes!');
};
copyCss.onclick = function(){
    let cssCodes = cssCodeEditor.editor.getValue();
    console.log(cssCodes);
    let dummy = gra._c("input");
    document.body.appendChild(dummy);
    dummy.setAttribute('value', cssCodes);
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
    document.execCommand('copy');
    alert('You have copied CSS codes!');
};

// onclick save as button inside import editor
exportTxt.onclick = function () {
    pmodel[0].className += " " + 'showup';
}

// export file as .gram extension
function exportgramfile() {
    let fileName = gra._d("file_name", "id").value;
    if (fileName !== undefined && fileName !== '') {
        alert('Please type a file name');
        return;
    }
        let InnerHtml = editor.getHtml();
        let Css = editor.getCss();
        let text = InnerHtml + "<style>" + Css + '</style>';
        let blob = new Blob([text], {
            type: "text/plain"
        });
        anchor.download = fileName + ".gram";
        anchor.href = window.URL.createObjectURL(blob);
        anchor.target = "_blank";
        anchor.style.display = "none"; // just to be safe!
        document.body.appendChild(anchor);
        anchor.click();
        document.body.removeChild(anchor);
        pmodel[0].className = "modelPopup";
}


// import nav button click event
cmdm.add('html-edit', {
    run: function importArea(editor, sender) {
        sender && sender.set('active', 0);
        let htmlViewer = htmlCodeEditor.editor;
        let cssViewer = cssCodeEditor.editor;
        let htmlBox = gra._c('div');
        htmlBox.className = 'html-wrapper';
        htmlBox.innerHTML = "<h4>HTML</h4>";
        let cssBox = gra._c('div');
        cssBox.className = 'css-wrapper';
        cssBox.innerHTML = "<h4>CSS</h4>";
        modal.setTitle('Edit and Import');
        let headline = gra._c('div');
        headline.className = 'clear-head';
        let htmlWrap = gra._c('textarea');
        let cssWrap = gra._c('textarea');
        htmlBox.appendChild(htmlWrap);
        cssBox.appendChild(cssWrap);
        if (!htmlViewer && !cssViewer) {
            gra._a(fileLoader);
            gra._a(fileform);
            gra._a(loadTxt);
            gra._a(exportTxt);
            gra._a(headline);
            gra._a(htmlBox);
            gra._a(cssBox);
            gra._a(copyCss);
            gra._a(copyHtml);
            gra._a(btnEdit);
            gra._a(btnZip);
            htmlCodeEditor.init(htmlWrap);
            cssCodeEditor.init(cssWrap);
        }
        modal.setContent('');
        modal.setContent(container);
        htmlCodeEditor.setContent(editor.getHtml());
        cssCodeEditor.setContent(editor.getCss({ avoidProtected: true }));
        modal.open();
        htmlCodeEditor.editor.refresh();
        cssCodeEditor.editor.refresh();
    }
});

editor.BlockManager.getCategories().each(function (ctg) {
    ctg.set('open', false);
})
// let bm = editor.BlockManager;
//        bm.add('link-block', {
//          label: 'Link Block',
//          attributes: {class:'fa fa-link'},
//          category: 'Basic',
//          content: {
//            type:'link',
//            editable: false,
//            droppable: true,
//            style:{
//              display: 'inline-block',
//              padding: '5px',
//              'min-height': '50px',
//              'min-width': '50px'
//            }
//          },
//        });

let domc = editor.DomComponents;
let defaultType = domc.getType('default');
// let defaultModel = defaultType.model;
let defaultView = defaultType.view;

//          model: defaultModel.extend({
//            defaults: Object.assign({}, defaultModel.prototype.defaults, {
//              traits: [{
//                name: 'title',
//                label: 'Título',
//                placeholder: 'Insira um texto aqui'
//              }]
//            }),
//          }),
//        });


//  editor.on('storage:load', function (e) {
//      console.log('LOAD ', e);
//  })
//  editor.on('storage:store', function (e) {
//      console.log('STORE ', e);
//  })

// let newButton = editor.Panels.addButton('myPanelID', {
//     id: 'create-comp',
//     className: 'fa fa-pencil-square-o',
//     command: 'create-comp',  // <-- the ID of the command
//     attributes: {title: 'Create element'},
//     stopDefaultCommand: 1,
// });


editor.on('styleManager:change:text-shadow', function (view) {
    let model = view.model;
    let targetValue = view.getTargetValue({
        ignoreDefault: 1
    });
    let computedValue = view.getComputedValue();
    let defaultValue = view.model.getDefaultValue();
    //console.log('Style of ', model.get('property'), 'Target: ', targetValue, 'Computed:', computedValue, 'Default:', defaultValue);
});
editor.Panels.removeButton('options', 'export-template');
editor.render();
