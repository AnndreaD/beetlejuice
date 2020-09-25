<script lang="ts">
    export let name: string;
    import { Router, Route, Link } from 'svelte-routing';
    import Home from './pages/Home.svelte';
    import About from './pages/About.svelte';
    import Bottlespinn from './pages/Bottlespinn.svelte';
    export let url: string = ''; //This property is necessary declare to avoid ignore the Router
</script>

<style>
    main {
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
    <h1>Welcome to {name}!</h1>
    <Router {url}>
        <nav>
            <Link to="/">Home</Link>
            <Link to="about">About</Link>
            <Link to="bottlespinn">Bottlespinn</Link>
        </nav>
        <div>
            <Route path="about" component={About} />
            <Route path="bottlespinn" component={Bottlespinn} />
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
</main>
