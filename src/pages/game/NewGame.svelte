<script lang="ts">
    import { navigate } from 'svelte-routing';
    import languageStore from '../../stores/language-store'
    import { claimUrl, doGet, randomquestion, randomclaim, categoryUrl, languageUrl } from '../../ApiUtils';
    import type {
        ClaimObject,
        QuestionObject,
        dropdownItem,
        languageObject,
        categoryObject,
    } from '../../types';
    import { onMount, beforeUpdate } from 'svelte';
    import Game from './Game.svelte';
    import GameSetupItem from './GameSetupItem.svelte';
    import GameSetupItemDone from './GameSetupItemDone.svelte';

    //TODO add validation
    //remove add functionality when fetch is done

    let questions: QuestionObject[] = [];
    let claims: ClaimObject[] = [];

    let categoryItems: dropdownItem[] = [];
    let languageItems: dropdownItem[] = [];

    let questionUrl: string = randomquestion;
    let claimurl: string = randomclaim;
    let questionTitle: string = $languageStore.question;
    let claimTitle: string = $languageStore.claim;



    let gameSetupDone: boolean = false;

    let questionAdded: boolean = false;
    let claimsAdded: boolean = false;

    onMount(async () => {
        doGet(categoryUrl).then((c) =>
            c.map((i: categoryObject) => (categoryItems = [...categoryItems, { value: i.id, label: i.name }]))
        );
        doGet(languageUrl).then((l) =>
            l.map((i: languageObject) => (languageItems = [...languageItems, { value: i.id, label: i.name }]))
        );
    });

    beforeUpdate(() => {
        if (questions.length > 0) {
            questionAdded = true;
        }
        if (claims.length > 0) {
            claimsAdded = true;
        }
    });

    function setGameSetupDone() {
        // navigate('/game', { replace: true });
        gameSetupDone = true;
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
    button {
        width: 165px;
        height: 3rem;
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
</style>

<main>
    <br />
    <br />
    <h3>{$languageStore.setUpNewGame}</h3>

    <br />
    {#if !gameSetupDone}
        {#if !questionAdded}
            <GameSetupItem
                bind:title={questionTitle}
                bind:url={questionUrl}
                bind:categoryItems
                bind:languageItems
                bind:list={questions} />
        {/if}
        {#if questionAdded}
            <GameSetupItemDone itemType={questionTitle} quantity={questions.length} />
        {/if}

        {#if !claimsAdded}
            <GameSetupItem
                bind:title={claimTitle}
                bind:url={claimurl}
                bind:categoryItems
                bind:languageItems
                bind:list={claims} />
        {/if}

        {#if claimsAdded}
            <GameSetupItemDone itemType={claimTitle} quantity={claims.length} />
        {/if}

        <br />
        <br />
        <button on:click={setGameSetupDone}>{$languageStore.gameSetupDone}</button>
    {/if}
    {#if gameSetupDone}
        <Game {questions} {claims} />
    {/if}
</main>
