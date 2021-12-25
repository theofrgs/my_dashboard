function Exchanges() {
    console.log("Exchanges")
}

function ConverterCurrency() {
    console.log("ConverterCurrency")
}

function ForecastWeatherWidget() {
    console.log("ForecastWeatherWidget")
}

function CurrentWeatherWidget() {
    console.log("CurrentWeatherWidget")
}

const _componentList = {
    Exchanges: Exchanges,
    ConverterCurrency: ConverterCurrency,
    ForecastWeatherWidget: ForecastWeatherWidget,
    CurrentWeatherWidget: CurrentWeatherWidget,
};

class Widget {
    constructor(name, layout, component) {
        this.name = name;
        this.layout = layout;
        this.component = component;
    }
}