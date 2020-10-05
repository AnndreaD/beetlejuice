<script lang="ts">
    import { questionUrl, claimUrl, doGet, doGetWithParams, randomquestion } from '../../ApiUtils';
    import type { ClaimObject, QuestionObject } from '../../types';

    let questions: QuestionObject[] = [];
    let claims: ClaimObject[] = [];

    let quantityQuestion: number = 10;
    let quantityClaim: number = 10;

    function getQuestions() {
        doGetWithParams(randomquestion, quantityQuestion).then((qs) => (questions = qs));
    }
    function getClaims() {
        doGet(claimUrl).then((qs) => (claims = qs));
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
    <input bind:value={quantityQuestion} type="number" class="quantityquestion" name="fname" />
    <button on:click={getQuestions}>Get Questions</button>
    <input bind:value={quantityClaim} type="number" class="quantityclaim" name="fname" />
    <button on:click={getClaims}>Get Claims</button>
    <div>
        {#if questions.length > 0}
            <h3>questions</h3>
            {#each questions as qs}
                <li>{qs.text}</li>
            {/each}
        {/if}
    </div>

    <div>
        {#if claims.length > 0}
            <h3>claims</h3>
            {#each claims as cl}
                <li>{cl.text}</li>
            {/each}
        {/if}
    </div>
</main>
