<script lang="ts">
    import { questionUrl, claimUrl, doGet } from '../../ApiUtils';
    import type { QuestionObject } from '../../types';

    const obj = { text: '', category: '' };

    export let questions: QuestionObject[] = [];

    export let claims: QuestionObject[] = [];

    function getQuestions() {
        doGet(questionUrl).then((qs) => (questions = qs));
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
        border-radius: 10px;
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
    <h3>Game page</h3>
    ...under construction <br />
    <br />
    <button on:click={getQuestions}>Get Questions</button>
    <button on:click={getQuestions}>Get Claims</button>
    <div>
        {#if questions.length > 0}
            {#each questions as qs}
                <li>{qs.text}</li>
            {/each}
        {/if}
    </div>

    <div>
        {#if claims.length > 0}
            {#each claims as cl}
                <li>{cl.text}</li>
            {/each}
        {/if}
    </div>
</main>
