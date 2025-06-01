const available = () => !!window.showSaveFilePicker;

const showSaveFilePicker = fileName => window.showSaveFilePicker({
    suggestedName: fileName,
    types: [
        {
            description: 'Scratch for School Project',
            accept: {
                'application/x.scratch.sb3': '.s4s.txt'
            }
        }
    ],
    excludeAcceptAllOption: true
});

const showOpenFilePicker = async () => {
    const [handle] = await window.showOpenFilePicker({
        multiple: false,
        types: [
            {
                description: 'PenguinMod Project',
                accept: {
                    'application/x.scratch.sb3': ['.pmp', '.pm', '.s4s.txt']
                }
            },
            {
                description: 'Scratch Project',
                accept: {
                    'application/x.scratch.sb3': ['.sb3', '.sb2', '.sb', '.s4s.txt']
                }
            }
        ]
    });
    return handle;
};

export default {
    available,
    showOpenFilePicker,
    showSaveFilePicker
};
