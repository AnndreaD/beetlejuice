<script lang="ts">
    import { Router, Route, Link } from 'svelte-routing';
    import Home from './pages/Home.svelte';
    import About from './pages/About.svelte';
    import Bottlespinn from './pages/Bottlespinn.svelte';
    import AddNew from './pages/admin/AddNew.svelte';
    import NewGame from './pages/game/newGame.svelte';
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
        border-radius: 10px;
        margin: 0.75rem;
        padding: 0.25rem 0.75rem 0.25rem 0.75rem;
    }
</style>

<main>
    <div class="headercontainer">
        <img class="logoimg" src="tmpLogo.png" height="100px" alt="logo" id="myLogo" />
        <Router {url}>
            <nav class="nav">
                <Link to="/">Home</Link>
                <Link to="about">About</Link>
                <Link to="bottlespinn">Bottlespinn</Link>
                <Link to="addnew">Add new</Link>
                <Link to="newgame">New game</Link>
            </nav>
            <div>
                <Route path="about" component={About} />
                <Route path="bottlespinn" component={Bottlespinn} />
                <Route path="addnew" component={AddNew} />
                <Route path="newgame" component={NewGame} />
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
</main>
