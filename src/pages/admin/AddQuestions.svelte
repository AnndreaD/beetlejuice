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
        border: 1px solid;
        width: 40%;
        float: left;
        padding: 1rem;
        margin: 1rem;
    }
    .textarea {
        width: 400px;
        height: 265px;
    }
    .categoryinput {
        width: 270px;
    }
</style>

<main>
    <h3>Admin page</h3>
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
