<script lang="ts">
    // POC ->  success flag, some px to rem  etc
    import { doPost, questionUrl, claimUrl, doGet, categoryUrl, languageUrl } from '../../ApiUtils';
    import { onMount } from 'svelte';
    import Select from 'svelte-select';
    import type { dropdownItem } from '../../types';
    import languageStore from '../../stores/language-store'

    let question: string = '';
    let questionCategory: dropdownItem = undefined;
    let questionLanguage: dropdownItem = undefined;

    let claim: string = '';
    let claimCategory: dropdownItem = undefined;
    let claimLanguage: dropdownItem = undefined;

    let categoryItems = [];
    let languageItems = [];

    onMount(async () => {
        doGet(categoryUrl).then((c) =>
            c.map((i) => (categoryItems = [...categoryItems, { value: i.id, label: i.name }]))
        );
        doGet(languageUrl).then((c) =>
            c.map((i) => (languageItems = [...languageItems, { value: i.id, label: i.name }]))
        );
    });

    function reset(isQuestion: boolean) {
        if (isQuestion) {
            question = '';
            questionLanguage = undefined;
            questionCategory = undefined;
        } else {
            claim = '';
            claimLanguage = undefined;
            claimCategory = undefined;
        }
    }

    function onPostedDone(url: string, isQuestion: boolean) {
        doPost(url, {
            text: isQuestion ? question : claim,
            category: isQuestion ? questionCategory.value : claimCategory.value,
            language: isQuestion ? questionLanguage.value : claimLanguage.value,
        });
        reset(isQuestion);
    }

</script>

<style>
    main {
        padding: 1em;
        max-width: 240px;
        margin: 0 auto;
    }

    @media (min-width: 640px) {
        main {
            max-width: none;
        }
    }
    .containerbox {
        border: 2px solid #f0ab7a;
        border-radius: 4px;
        width: 40%;
        float: left;
        padding: 1rem;
        margin: 1rem;
        color: #277bab;
    }
    .textarea {
        width: 100%;
        height: 265px;
    }
    .categoryinput {
        width: 270px;
    }

    button {
        align-items: center;

        background: #277bab;
        color: #fac7a2;
        border-radius: 5px;
        border: none;
    }
    textarea,
    input {
        color: #277bab;
    }

    p {
        font-weight: bold;
    }
</style>

<main>
    <br />
    <br />
    <div class="containerbox">
        <h2>{$languageStore.questiontitle}</h2>
        <p>{$languageStore.text}:</p>
        <textarea bind:value={question} type="text" class="textarea" id="fname" name="fname" />
        <p>{$languageStore.category}:</p>
        {#if categoryItems.length > 0}
            <Select items={categoryItems} bind:selectedValue={questionCategory} showIndicator="true" />
        {/if}
        <p>{$languageStore.language}:</p>
        {#if languageItems.length > 0}
            <Select items={languageItems} bind:selectedValue={questionLanguage} showIndicator="true" />
        {/if}
        <br />

        <button on:click={() => onPostedDone(questionUrl, true)}>{$languageStore.addQuestion}</button>
    </div>

    <div class="containerbox">
        <h2>{$languageStore.claimtitle}</h2>
        <p>{$languageStore.text}:</p>
        <textarea bind:value={claim} type="text" class="textarea" id="fname" name="fname" />
        <p>{$languageStore.category}:</p>
        {#if categoryItems.length > 0}
            <Select items={categoryItems} bind:selectedValue={claimCategory} showIndicator="true" />
        {/if}
        <p>{$languageStore.language}:</p>
        {#if languageItems.length > 0}
            <Select items={languageItems} bind:selectedValue={claimLanguage} showIndicator="true" />
        {/if}
        <br />

        <button on:click={() => onPostedDone(claimUrl, false)}>{$languageStore.addClaim}</button>
    </div>
</main>
