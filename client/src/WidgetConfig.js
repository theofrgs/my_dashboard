import WidgetJson from "./WidgetConfig.json"
import Exchanges from "./views/Widgets/Exchanges";
import ConverterCurrency from "./views/Widgets/ConverterCurrency";
import CurrentWeatherWidget from "./views/Widgets/CurrentWeatherWidget"
import ForecastWeatherWidget from "./views/Widgets/ForecastWeatherWidget"
import SpotifyRelease from "./views/Widgets/SpotifyRelease"
import SpotifyTop50 from "./views/Widgets/SpotifyTop50"

const _widgetNames = {};
const _originalItems = [];
const _initialLayouts = { lg: [] };
const _componentList = {
    a: Exchanges,
    b: ConverterCurrency,
    c: ForecastWeatherWidget,
    d: CurrentWeatherWidget,
    e: SpotifyRelease,
    f: SpotifyTop50,
};

Object.keys(WidgetJson).map((key) => (
    _widgetNames[key] = WidgetJson[key].name
));

Object.keys(WidgetJson).map((key) => (
    _originalItems.push(key)
));

Object.keys(WidgetJson).map((key) => (
    WidgetJson[key].initialLayouts['i'] = key
));

Object.keys(WidgetJson).map((key) => (
    _initialLayouts['lg'].push(WidgetJson[key].initialLayouts)
));

export const WidgetConfigJson = {
    widgetNames: _widgetNames,
    originalItems: _originalItems,
    initialLayouts: _initialLayouts,
    componentList: _componentList
}