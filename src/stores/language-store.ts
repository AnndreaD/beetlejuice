import { writable } from 'svelte/store';
import { Languages } from '../messages';

const startLang = Languages.en;

const languageStore = writable(startLang);

const lang = {
    subscribe: languageStore.subscribe,
    setEN: () => languageStore.set(Languages.en),
    setNB: () => languageStore.set(Languages.nb),
};
export default lang;
