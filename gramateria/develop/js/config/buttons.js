export default [{
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
    className: 'fas fa fa-repeat icon-redo',
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
        title: 'Import'
    }
}, {
    id: 'clean-all',
    className: 'fa fa-trash icon-blank',
    command: (editor, sender) =>{
        if (sender) sender.set('active', false);
        if (confirm('Are you sure to clean the canvas?')) {
            editor.runCommand('core:canvas-clear');
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
    id: 'publish',
    className: 'fa fa-globe',
    command: (editor, sender) => {
        sender.set('active', 0);
        let modal = editor.Modal;
        modal.setTitle('Publish');
        modal.setContent('To be continue');
        modal.open();
    },
    attributes: {
        title: 'Publish web'
    }
},
{
    id: 'download',
    className: 'fa fa-download',
    command: (editor, sender) =>{
        sender.set('active', 0);
    },
    attributes: {
        title: 'Download as zip'
    }
}
]