<script lang="ts">
    function rotateImage() {
        return Math.floor(Math.random() * 360);
    }

    let visibleSpin: boolean = false;
    let imagePosition: number = 360;

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
        imagePosition = rotateImage();
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

    button {
        width: 50%;
        height: 3rem;
        align-items: center;
        margin-left: 25%;
        background: #f0ab7a;
        color: #277bab;
        border-radius: 4px;
        border: none;
        font-weight: bold;
    }

    .bottlecontainer {
        margin-left: 5%;
        width: 70%;
        text-align: center;
        margin-top: 2rem;
    }
</style>

<main>
    <div class="bottlecontainer">
        <button on:click={toggleVisible}>spinn bottle</button>
        <br />
        <br />
        {#if visibleSpin}
            <img class="centered" in:spin={{ duration: 5000 }} src="bajablast.png" alt="background" id="myimage" />
        {:else}
            <img style="transform:rotate({imagePosition}deg);" src="bajablast.png" alt="background" id="myimage" />
        {/if}
    </div>
</main>
