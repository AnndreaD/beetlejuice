export type QuestionObject = {
    id: number;
    text: string;
    category: string;
    language: string;
};

export type ClaimObject = {
    id: number;
    text: string;
    category: string;
    language: string;
};

export type languageObject = {
    id: number;
    name: string;
};

export type categoryObject = {
    id: number;
    name: string;
};

export type dropdownItem = {
    value: number;
    label: string;
};
