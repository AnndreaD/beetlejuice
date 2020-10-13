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
    p {
        color: #277bab;
        margin-top: 5rem;
        margin-left: -8rem;
    }
</style>

<main>
    <p>{$languageStore.homePage}</p>
</main>
