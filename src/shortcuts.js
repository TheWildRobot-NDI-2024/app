//add shortcut for each entry of the menu
// home ctrl+alt+h
// play ctrl+alt+p
// cyber ctrl+alt+c
// dashboard ctrl+alt+d

const shortcuts = {
    a: 'accueil',
    j: 'jouer',
    c: 'cyber',
    d: 'dashboard'
};

const handleShortcut = (event) => {
    const key = event.key.toLowerCase();
    const ctrlKey = event.ctrlKey || event.metaKey;
    const altKey = event.altKey;
    console.log('ctrlk', ctrlKey);
    console.log('alt', altKey);
    if (ctrlKey && altKey && key in shortcuts) {
        console.log('key', key);
        switch (shortcuts[key]) {
            case 'accueil':
                window.location.href = '/index.html';
                break;
            case 'jouer':
                window.location.href = '/jouer.html';
                break;
            case 'cyber':
                window.location.href = '/cyber.html';
                break;
            case 'dashboard':
                window.location.href = 'https://dash.jadoreleau.com';
                break;
        }
    }
};

document.addEventListener('keydown', handleShortcut);
