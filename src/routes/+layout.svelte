<script lang="ts">
    import Navbar from "../components/Navbar.svelte"
    import Sidebar from "../components/Sidebar.svelte"
    import { checkCredential, registCredential } from "../hooks"

    let sessionFlash = {}
    function sessReload() {
        sessionFlash = {}
    }

    async function doLogin() {
        const response = await registCredential( "admin", "admin" )
        if(response) {
            sessReload()
        } else {
            alert("Login failed")
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
                <p>You did not login yet</p>
                <button on:click={doLogin}>Login</button>
            {/if}

        </div>
    {/await}
{/key}