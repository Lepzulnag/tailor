<!-- This file is a Svelte wrapper around the Tailor object -->

<script lang="ts">
	import { onMount } from 'svelte'
	import Tailor from './Tailor'
	export let editor: HTMLDivElement = null
	export let tailor: Tailor

	onMount(() => {
		tailor = new Tailor(editor)
	})
</script>


<div
	bind:this={editor}
	class="tailor"
	contenteditable
/>



<style lang="stylus">
	.tailor
		min-height: 100%
		padding: 12px
		white-space: pre-wrap
</style>