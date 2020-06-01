import React, { Component } from "react";

import Axios from "axios";
import "../css/weather.css";

import { initialState } from "../configuration/initialState";
import { apiUrl, citiesUrl } from "../configuration/config";

import Layout from "../components/Layout";
import Loader from "../components/Loader/Loader";

class Weather extends Component {
	// setting initial state from config you can change it
	state = initialState;

	// Api call for cities list
	getCities = async () => {
		this.setState({ ...this.state, isLoading: true });

		Axios.get(citiesUrl)
			.then((result) => {
				this.setState({ ...this.state, cities: result.data });
			})
			.catch((error) => {
				this.setState({
					...this.state,
					error: `${error.response.status} Couldn't get cities from API...`,
				});
			})
			.then(() => {
				this.setState({ ...this.state, isLoading: false });
			});
	};

	// TODO: Choose right place for event
	onCityChange = (e) => {
		const selectedCity = e.target.value;
		if (selectedCity) {
			this.setState({ ...this.state, currentCity: e.target.value });
		} else {
			this.setState({
				...this.state,
				currentCity: undefined,
				error: "Please select your city from cities list...",
			});
		}
	};

	// TODO: Choose right place for event
	getWheather = async (e) => {
		this.setState({ ...this.state, isLoading: true });
		if (e) e.preventDefault();
		// Getting current city from state for further api request
		const city = this.state.currentCity;

		if (city) {
			// Getting forecast from openweather
			Axios.get(apiUrl(city))
				.then((result) => {
					this.setState({
						...this.state,
						forecast: {
							temperature: result.data.main.temp,
							city: result.data.name,
							country: result.data.sys.country,
							humidity: result.data.main.humidity,
							description: result.data.weather[0].description,
							clouds: result.data.clouds.all,
							wind: result.data.wind,
							pressure: result.data.main.pressure,
							icon: result.data.weather[0].icon,
						},
						error: undefined,
					});
				})
				.catch((error) => {
					this.setState({
						...this.state,
						error: `${error.response.status} ${error.response.data.message}`,
					});
				})
				.then(() => {
					this.setState({ ...this.state, isLoading: false });
				});
		} else {
			this.setState({
				...this.state,
				isLoading: false,
				error: "Please select your city from cities list...",
			});
		}
	};

	// Getting cities list from api
	componentDidMount() {
		this.getCities();
	}

	// Render method of root component
	render() {
		return (
			<Layout
				{...this.state}
				onCityChange={this.onCityChange}
				getWheather={this.getWheather}>
				{this.state.isLoading ? <Loader /> : null}
			</Layout>
		);
	}
}

export default Weather;
