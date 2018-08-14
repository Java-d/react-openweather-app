export const initialState = {
    isLoading: true,
    searchable: false,
    forecast: {
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        clouds: undefined,
        description: undefined,
        wind: undefined,
        pressure: undefined
    },
    cities: [],
    currentCity: undefined,
    error: "Please select your city from cities list..."
};
