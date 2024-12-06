//add shortcut for each entry of the menu
// home ctrl+alt+h
// play ctrl+alt+p
// cyber ctrl+alt+c
// dashboard ctrl+alt+d

const shortcuts = {
    h: 'accueil',
    j: 'jouer',
    c: 'cyber',
    d: 'dashboard',
    s: 'statistiques'
};

const handleShortcut = (event) => {
    const key = event.key.toLowerCase();
    const ctrlKey = event.ctrlKey || event.metaKey;
    const altKey = event.altKey;
    console.log(key, ctrlKey, altKey);
    if (ctrlKey && altKey && key in shortcuts) {
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
            case 'statistiques':
                window.location.href = 'https://plausible.jadoreleau.com';
                break;
        }
    }
};

document.addEventListener('keydown', handleShortcut);
