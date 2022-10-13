<script>
	import { getWeatherFrom } from '../services/weather.js';
  import WeatherFooter from '../components/weather-footer.svelte';
	import { onMount } from 'svelte';
  import WeatherIcon from '../components/weather-icon.svelte';
	const weatherPromise = getWeatherFrom();

  onMount(async () => {
    fetch('/api/get-weather')
    .then(res => res.json())
    .then(data => console.log(data));
  });

</script>

<section>
	{#await weatherPromise then weather}
		<h1>{weather.locationName}</h1>
    <h2>{weather.temperature}°</h2>
    <h3>{weather.conditionText}</h3>
    <WeatherIcon conditionIcon={weather.conditionIcon} />
	{/await}
</section>

<a href="/about">About my site</a>


<WeatherFooter />

<style>
  section {
    padding: 16px;
  }

  h1 {
    font-weight: 300;
    color: #333;
    text-transform: uppercase;
    padding: 16px 0 0 0;
  }

  h2 {
    font-weight: 300;
    font-size: 120px;
    color: #333;
    text-transform: uppercase;
    padding: 0;
  }

  h3 {
    font-weight: 700;
    transform: rotate(-90deg);
    position: absolute;
    top: 96px;
    right: 12px;
  }
</style>
