<script lang="ts">
    function rotateImage() {
        return Math.floor(Math.random() * 360);
    }

    let visibleSpin = false;

    function spin(node, { duration }) {
        return {
            duration,
            css: (t) => {
                return `
                    transform: rotate(${t * 360 * duration}deg);
                `;
            },
        };
    }

    function toggleVisible() {
        visibleSpin = true;
        setTimeout(() => {
            visibleSpin = false;
        }, 3000);
    }
</script>

<style>
    img {
        position: absolute;
        font-size: 4em;
        height: 70%;
    }
</style>

<main>
    <button on:click={toggleVisible}>spinn bottle</button>
    <br />
    {#if visibleSpin}
        <img class="centered" in:spin={{ duration: 5000 }} src="bajablast.png" alt="background" id="myimage" />
    {:else}<img style="transform:rotate({rotateImage()}deg);" src="bajablast.png" alt="background" id="myimage" />{/if}
</main>
