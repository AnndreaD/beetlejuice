<script lang="ts">
    import { Router, Route, Link } from 'svelte-routing';
    import { onDestroy, onMount } from 'svelte';
    import Home from './pages/Home.svelte';
    import About from './pages/About.svelte';
    import Bottlespinn from './pages/Bottlespinn.svelte';
    import AddNew from './pages/admin/AddNew.svelte';
    import NewGame from './pages/game/newGame.svelte';
    import Game from './pages/game/Game.svelte';
    import languageStore from './stores/language-store'
    export let url: string = ''; //This property is necessary declare to avoid ignore the Router

</script>

<style>
    main {
        padding-left: 1em;
        padding-right: 1em;
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

    .nav {
        display: inline-block;
        margin-left: 5rem;
        margin-top: 3.5rem;
        vertical-align: middle;
    }
    .logoimg {
        display: inline-block;
        margin-left: 1rem;
        float: left;
    }
    .link > :global(a) {
        text-decoration: none;
    }

    :global(a) {
        background: #277bab;
        color: white !important;
        border-radius: 4px;
        margin: 0.75rem;
        padding: 0.25rem 0.75rem 0.25rem 0.75rem;
    }

    .langcontainer{
        position: absolute;
        top: 5px;
        right: 5px;
    }
    button{
        background-color:  white;
        border: none;

    }
  
</style>

<main>

    <div class="headercontainer">
        <img class="logoimg" src="tmpLogo.png" height="100px" alt="logo" id="myLogo" />
        <Router {url}>
            <nav class="nav">
                <Link to="/">{$languageStore.homeLink}</Link>
                <Link to="about">{$languageStore.aboutLink}</Link>
                <Link to="bottlespinn">{$languageStore.bottlespinnLink}</Link>
                <Link to="addnew">Add new</Link>
                <Link to="newgame">New game</Link>

            </nav>
            <div>
                <Route path="about" component={About} />
                <Route path="bottlespinn" component={Bottlespinn} />
                <Route path="addnew" component={AddNew} />
                <Route path="newgame" component={NewGame} />
                <Route path="game" component={Game} />
                <!--for now the router just support case sensitive,
        one workaround colud be add two time the route
        Example.
       <Route path="About" component="{About}" /> 
    -->
                <Route path="/">
                    <Home />
                </Route>
            </div>
        </Router>
    </div>
    <div class="langcontainer">
                                <button on:click={languageStore.setNB}>Norsk</button>
                                 |
                 <button on:click={languageStore.setEN}>English</button>
    </div>

</main>
