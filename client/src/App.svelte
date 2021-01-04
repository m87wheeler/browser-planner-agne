<script>
	import { onMount } from "svelte";
	import { taskStore } from "./stores/taskStore";
	import { fetchTasks } from "./utils/functions";

	import DayPlanner from "./components/views/DayPlanner.svelte";
	import SocialMediaPlanner from "./components/views/SocialMediaPlanner.svelte";
	import NewTask from "./components/views/NewTask.svelte";
	import Tray from "./components/Tray.svelte";
	import Highlight from "./components/views/Highlight.svelte";
	import Dashboard from "./components/views/Dashboard.svelte";
	import Header from "./components/views/Header.svelte";
	import LogoSocial from "./components/views/LogoSocial.svelte";
	import WeekChange from "./components/WeekChange.svelte";

	// populate tasks
	const populateTasks = async (from, to) => {
		const data = await fetchTasks(from, to);
		data.length ? taskStore.populate(data) : console.log("No tasks");
	};
	onMount(async () =>
		populateTasks($taskStore.date.start, $taskStore.date.end)
	);

	$: console.log($taskStore);
</script>

<style type="text/scss">
	main {
		width: 100%;
		height: 88vh;
		display: grid;
		// grid-template-rows: 1fr 0.5fr 0.5fr;
		grid-template-rows: 1.25fr 0.75fr;
		gap: 1rem;
		padding: 1rem;
		background: #566573;
	}
</style>

<Header>
	<LogoSocial />
	<NewTask />
	<Dashboard />
</Header>
<main>
	<WeekChange type="increment" />
	<DayPlanner />
	<SocialMediaPlanner />
	<!-- <Tray>
		<Highlight type="marketing" title="Marketing" />
		<Highlight type="important" title="Don't Forget" />
		<Highlight type="upcoming" title="Next Week" />
	</Tray> -->
	<WeekChange type="decrement" />
</main>
