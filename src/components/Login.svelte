<script lang="ts">
    import { registCredential } from "../hooks"

    export let onChange: any
    let isLogged:any = {
        status: false,
        attempt: 0
    }

    async function doLogin() {
        isLogged.attempt += 1
        const resp = await registCredential( "admin", "admin" )
        isLogged.status = resp
    }

    $: onChange(isLogged)
</script>

<p>You did not login yet</p>
<button on:click={doLogin}>Login</button>