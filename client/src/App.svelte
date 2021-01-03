<script>
	import { onMount } from "svelte";
	import { taskStore } from "./stores/taskStore";

	import DayPlanner from "./components/views/DayPlanner.svelte";
	import SocialMediaPlanner from "./components/views/SocialMediaPlanner.svelte";
	import NewTask from "./components/views/NewTask.svelte";
	import Tray from "./components/Tray.svelte";
	import Highlight from "./components/views/Highlight.svelte";
	import Dashboard from "./components/views/Dashboard.svelte";
	import Header from "./components/views/Header.svelte";
	import LogoSocial from "./components/views/LogoSocial.svelte";

	// fetch all tasks from database
	const fetchTasks = async () => {
		const res = await fetch("http://localhost:3000/");
		const data = await res.json();
		return data;
	};

	// fetch on load
	onMount(async () => {
		const { tasks } = await fetchTasks();
		tasks && tasks.length
			? taskStore.populate(tasks)
			: console.log("No tasks");
	});
</script>

<style type="text/scss">
	main {
		width: 100%;
		height: 100%;
		display: grid;
		grid-template-rows: auto 1fr 0.5fr 0.5fr;
		gap: 1rem;
		padding: 1rem;
		background: #566573;
	}
</style>

<main>
	<Header>
		<LogoSocial />
		<NewTask />
		<Dashboard />
	</Header>
	<DayPlanner />
	<SocialMediaPlanner />
	<Tray>
		<Highlight type="marketing" title="Marketing" />
		<Highlight type="important" title="Don't Forget" />
		<Highlight type="upcoming" title="Next Week" />
	</Tray>
</main>
