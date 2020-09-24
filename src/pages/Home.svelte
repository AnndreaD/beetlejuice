<script lang="ts">
    let pageName = 'Home Page';
</script>

<style>
    main {
        text-align: center;
        padding: 1em;
        max-width: 240px;
        margin: 0 auto;
    }

    h1 {
        color: #ff3e00;
        text-transform: uppercase;
        font-size: 4em;
        font-weight: 100;
    }

    @media (min-width: 640px) {
        main {
            max-width: none;
        }
    }
</style>

<main>
    <h3>{pageName}!</h3>
    <p>Welcome this is my <b>{pageName}</b></p>
    <p>this site is under construction</p>
</main>
