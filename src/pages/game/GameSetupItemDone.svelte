<script lang="ts">
    import Check from 'svelte-material-icons/Check.svelte';

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

        <p>Success! {quantity} {itemType} was added to your game</p>
    </div>
</main>
