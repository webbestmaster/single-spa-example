// @flow

/* global window */

import FastClick from 'fastclick';

export function initializeEnvironment() {
    const {document} = window;

    // reduce 300ms delay
    FastClick.attach(document.body);

    // disable gesture zoom on iOS
    document.addEventListener('gesturestart', (evt: Event) => {
        evt.preventDefault();
    });
}
