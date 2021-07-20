export default {
    defaults: [
        {
            id: 'undo',
            run: (editor, sender) => {
                sender.set('active', false);
                editor.UndoManager.undo(true);
            }
        }, {
            id: 'redo',
            run: (editor, sender) => {
                sender.set('active', false);
                editor.UndoManager.redo(true);
            }
        }, {
            id: 'clean-all',
            run: (editor, sender) => {
                sender.set('active', false);
                if (confirm('Are you sure to clean the canvas?')) {
                    editor.runCommand('core:canvas-clear');
                }
            }
        }],
}