<script lang="ts">
	import ThinCard from '$lib/components/ThinCard.svelte';
	import type { ActionData } from './$types';

	export let form: ActionData;
</script>

<ThinCard>
	<div class="text" style="font-size: large;">Create new account</div>

	{#if form?.error == true}
		<p class="p" style="place-self: center ;  color:red">Please fill in all entries</p>
	{/if}

	{#if form?.error == false}
		<p class="p" style="place-self: center ;  color:green">New account created!</p>
	{/if}

	<form method="post">
		<div class="bar" style="border-top: 1px #e9e9e9 solid;">
			<p class="p">Name:</p>
			<input class="input" name="name" />
		</div>

		<div class="bar">
			<p class="p">Surname:</p>
			<input class="input" name="surname" />
		</div>

		<div class="bar">
			<p class="p">City:</p>
			<input class="input" name="city" />
		</div>

		<div class="bar">
			<p class="p">Post code:</p>
			<input class="input" name="postcode" />
		</div>

		<div class="bar">
			<p class="p">Adress:</p>
			<input class="input" name="adress" />
		</div>

		<div class="bar">
			<p class="p">E-mail:</p>
			<input class="input" name="email" type="email" />
		</div>

		<div class="bar">
			<p class="p">Password:</p>
			<input class="input" name="password" type="password" />
		</div>

		<button class="button">Submit</button>
	</form>

	<div class="text">Already have an account?</div>
	<a href="/login-customer" class="text" style=" margin: 5px;">
		<div>Sign in</div>
	</a>
</ThinCard>

<style>
	.bar {
		display: grid;
		grid-template-columns: 1fr max-content max-content;
		padding: 10px;
	}

	.p {
		place-self: end;
	}

	.text {
		place-self: center;
		margin: 15px;
	}

	.button {
		border: hidden;
		padding: 10px;
		width: 100%;
		place-self: center;
		border-radius: 5px;
		background-color: #a8dadc;
		color: #1e5670;
	}
	.button:hover {
		cursor: pointer;
		background-color: rgb(170, 227, 230);
	}

	button:active {
		cursor: pointer;
		background-color: #7cadc4;
	}

	.input {
		border-radius: 3px;
		border: 1px #ccc solid;
	}

	.input:hover {
		background-color: #f7f7f7;
	}
</style>
