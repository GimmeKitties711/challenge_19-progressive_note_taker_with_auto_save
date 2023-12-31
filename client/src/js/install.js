const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// source for the code used in the next three sections: https://web.dev/codelab-make-installable/

// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    // stash the event so it can be triggered later
    window.deferredPrompt = event;

    // if butInstall has the 'hidden' class, remove it
    butInstall.classList.toggle('hidden', false);
    // the parameters of the toggle() method are (token, force). token is the class to be added/removed. force is a boolean - if force is true, the class can only be added, and if force is false, the class can only be removed. this line of code unhides the install button by removing the 'hidden' class from the classList of butInstall.
    // source for the toggle method: https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/toggle
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    console.log('You have clicked the install button.');
    const promptEvent = window.deferredPrompt;
    if (!promptEvent) { // if deferredPrompt is unavailable
        return;
    }
    // show the install prompt
    promptEvent.prompt();
    // deferredPrompt has to be reset here because prompt() can only be called once
    window.deferredPrompt = null;
    // hide the install button by adding the 'hidden' class to its classList
    butInstall.classList.toggle('hidden', 'true');
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    console.log('The app has been installed successfully.');
    // clear deferredPrompt
    window.deferredPrompt = null;
});
