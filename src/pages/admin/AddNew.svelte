<script lang="ts">
    // POC ->  success flag, some px to rem  etc, clear on post
    import { doPost, questionUrl, claimUrl } from '../../ApiUtils';

    export let question: string = '';
    export let questionCategory: string = '';

    export let claim: string = '';
    export let claimCategory: string = '';

    async function postQuestion() {}
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
        border-radius: 5px;
        width: 40%;
        float: left;
        padding: 1rem;
        margin: 1rem;
        color: #277bab;
    }
    .textarea {
        width: 400px;
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
        <h2>New Question</h2>
        <p>text:</p>
        <textarea bind:value={question} type="text" class="textarea" id="fname" name="fname" />
        <p>category:</p>
        <input bind:value={questionCategory} type="text" class="categoryinput" name="fname" />
        <button on:click={() => doPost(questionUrl, { text: question, category: questionCategory })}>Enter question</button>
    </div>

    <div class="containerbox">
        <h2>New Claim</h2>
        <p>text:</p>
        <textarea bind:value={claim} type="text" class="textarea" id="fname" name="fname" />
        <p>category:</p>
        <input bind:value={claimCategory} type="text" class="categoryinput" name="fname" />
        <button on:click={() => doPost(claimUrl, { text: claim, category: claimCategory })}>Enter Claim</button>
    </div>
</main>
