import { writable } from 'svelte/store';

function setRoute() {
    const { subscribe, set } = writable(window.location.pathname);

    return {
        subscribe,
        setCurrentRoute: (newRoute: string) => set(newRoute),
    };
}

export const routeStore = setRoute();
