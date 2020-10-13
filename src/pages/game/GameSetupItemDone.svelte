<script lang="ts">
    import Check from 'svelte-material-icons/Check.svelte';
    import languageStore from '../../stores/language-store'
    export let itemType: string = '';
    export let quantity: number = 10;

    let color = 'green';
    let size = '3rem';
</script>

<style>
    p {
        display: inline-block;
        margin-top: unset;
    }
</style>

<main>
    <div class="successcontainer">
        <Check {size} {color} />

        <p>{$languageStore.success}{quantity} {itemType}{$languageStore.successmessage}</p>
    </div>
</main>
