<script lang="ts">
    import languageStore from '../stores/language-store'
</script>

<style>
    main {
        text-align: center;
        padding: 1em;
        max-width: 240px;
        margin: 0 auto;
    }

    @media (min-width: 640px) {
        main {
            max-width: none;
        }
    }
    h3 {
        color: #277bab;
        font-size: 1rem;
    }

    h2 {
        color: #67a2c4;
        font-size: 2rem;
    }
</style>

<main>
    <br />
    <br />
    <h2>{$languageStore.aboutpagetitle}</h2>
    <h3>{$languageStore.aboutpagecontent}</h3>
</main>
