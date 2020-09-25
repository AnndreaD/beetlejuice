<script lang="ts">
    export let buttonText: string;
    export let handleClick;
</script>

<style>
    button {
        text-align: center;
        padding: 1em;
        max-width: 240px;
        margin: 0 auto;
    }
</style>

<main><button on:click={handleClick()}>{buttonText}</button></main>
