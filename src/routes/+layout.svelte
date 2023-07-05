<script lang="ts">
    import Navbar from "../components/Navbar.svelte"
    import Sidebar from "../components/Sidebar.svelte"
    import Login from "../components/Login.svelte"
    import { checkCredential } from "../hooks"

    let sessionFlash = {}
    function sessReload() {
        sessionFlash = {}
    }
    function handleLogin(resp:any) {
        if (resp.status) {
            sessReload()
        } else if(!resp.status && resp.attempt > 0) {
            alert("Login error")
        }
    }
</script>

{#key sessionFlash}
    {#await checkCredential() then isLogged}
        <title>Home</title>
        <div class="main-container">
            {#if isLogged}
                <Navbar />
                <Sidebar />
                <slot />
            {:else}
                <Login onChange={handleLogin} />
            {/if}

        </div>
    {/await}
{/key}