<script lang="ts">
    import { arrayToParamstring, doGetWithParams } from '../../ApiUtils';
    import type { QuestionObject, dropdownItem } from '../../types';
    import Select from 'svelte-select';

    export let title: string = '';
    export let url: string = '';
    export let list: QuestionObject[] = [];

    let quantity: number = 10;

    export let categoryItems: dropdownItem[] = [];
    export let languageItems: dropdownItem[] = [];

    let selectedCategory: dropdownItem = undefined;
    let selectedLanguage: dropdownItem = undefined;

    let categoryError: boolean = false;
    let languageError: boolean = false;

    function getData() {
        if (!selectedCategory) categoryError = true;
        if (!selectedLanguage) languageError = true;
        else if (quantity > 0 && selectedCategory && selectedLanguage) {
            let params = arrayToParamstring([quantity, selectedLanguage.value, selectedCategory.value]);
            doGetWithParams(url, params).then((qs) => (list = qs));
        }
    }
</script>

<style>
    .progresssteps {
        width: 400px;
        border-radius: 2px;
        padding: 1rem;
        border: 2px solid #277bab;
    }

    button {
        width: 165px;
        height: 2.5rem;
        align-items: center;
        background: #f0ab7a;
        color: #277bab;
        border-radius: 4px;
        border: none;
        font-weight: bold;
    }

    h3 {
        color: #277bab;
    }
    .quantityquestion {
        height: 2.5rem;
        width: 57%;
    }
    .error {
        height: 4rem;
    }

    p {
        margin: unset;

        font-size: 14px;
        color: red;
    }
</style>

<main>
    <br />

    <div class="progresssteps">
        <h3>{title}</h3>
        <Select
            items={categoryItems}
            bind:selectedValue={selectedCategory}
            showIndicator="true"
            placeholder="Category" />

        <br />

        <Select
            items={languageItems}
            bind:selectedValue={selectedLanguage}
            showIndicator="true"
            placeholder="Language" />

        <br />
        <div class="error">
            {#if categoryError}
                <p>You have to sleect a category</p>
            {/if}
            {#if languageError}
                <p>You have to sleect a language</p>
            {/if}
        </div>

        <input bind:value={quantity} type="number" class="quantityquestion" name="fname" />

        <button on:click={getData}>Get {title}</button>
    </div>
</main>
