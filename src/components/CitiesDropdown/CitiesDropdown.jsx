import React from "react";
import "./CitiesDropdown.css";

const CitiesDropdown = (props) => {
	return (
		<select
			name="city"
			id="city"
			className="form-control form-control-lg"
			onChange={props.onCityChange}>
			<option value="">Please choose your city...</option>
			{props.cities
				.sort((a, b) =>
					a.capital === b.capital ? 0 : +(a.capital > b.capital) || -1
				)
				.map((city) =>
					city.capital ? (
						<option
							key={city.alpha2Code}
							value={`${encodeURI(city.capital)},${
								city.alpha2Code
							}`}>{`${city.capital}, ${city.alpha2Code}`}</option>
					) : null
				)}
		</select>
	);
};

export default CitiesDropdown;
