<script lang="ts">
    import { onMount } from 'svelte';
    import random from '../../functionUtils';
    import type { QuestionObject, ClaimObject } from '../../types';
    import languageStore from '../../stores/language-store'

    //TODO: clean up this spaghetti
    //1: start new game from here
    //2: clean up style
    //2: clean up and improve styles

    export let questions: QuestionObject[] = [];
    export let claims: ClaimObject[] = [];

    let gameoptions: string[] = [];

    let gameStarted: boolean = false;
    let gameEnded: boolean = false;
    let currentText: string = undefined;
    let currentTitle: string = undefined;

    let gamequestions: QuestionObject[] = [];
    let gameclaims: ClaimObject[] = [];

    let lengthRemaining: number = questions.length + claims.length;

    onMount(async () => {
        if (questions.length > 0) {
            gameoptions.push('Q');
            gamequestions = [...gamequestions, ...questions];
        }
        if (claims.length > 0) {
            gameoptions.push('C');
            gameclaims = claims;
        }
    });

    function getNext() {
        if (lengthRemaining === 0) {
            gameEnded = true;
            return;
        }
        let lol: string = gameoptions.length > 1 ? gameoptions[random(gameoptions.length)] : gameoptions[0];

        if (lol === 'Q') {
            let qs: QuestionObject = gamequestions[random(gamequestions.length)];
            currentText = qs.text;
            currentTitle = 'Question';

            if (gamequestions.length === 1) {
                gameoptions = gameoptions.filter((i) => i !== 'Q');
            }

            gamequestions = gamequestions.filter((q: QuestionObject) => q.id !== qs.id);
        } else if (lol === 'C') {
            let cl: ClaimObject = gameclaims[random(gameclaims.length)];
            currentText = cl.text;
            currentTitle = 'Claim';

            if (gameclaims.length === 1) {
                gameoptions = gameoptions.filter((i) => i !== 'C');
            }
            gameclaims = gameclaims.filter((c: ClaimObject) => c.id !== cl.id);
        }

        lengthRemaining = gamequestions.length + gameclaims.length;
    }

    function setGameStarted() {
        gameStarted = true;
        getNext();
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
        font-size: 2rem;
    }

    h2 {
        color: #67a2c4;
        font-size: 3rem;
    }

    .gamecontainer {
        text-align: center;
    }
</style>

<main>
    <div class="gamecontainer">
        {#if !gameEnded}
            {#if !gameStarted}<button on:click={setGameStarted}>{$languageStore.startgame} </button>{/if}
            {#if !!gameStarted}
                <h2>{currentTitle}</h2>
                <h3>{currentText}</h3>
                <button on:click={getNext}>{$languageStore.next}</button>
            {/if}
        {/if}

        {#if gameEnded}
            <h2>{$languageStore.gameover}</h2>
            <h3>{$languageStore.gameovermessage}</h3>
        {/if}
    </div>
</main>
