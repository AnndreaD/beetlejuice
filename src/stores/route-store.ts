import { writable } from 'svelte/store';

function setRoute() {
    const { subscribe, set } = writable('/');

    return {
        subscribe,
        setCurrentRoute: (newRoute: string) => set(newRoute),
    };
}

export const routeStore = setRoute();
