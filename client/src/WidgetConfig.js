import WidgetJson from "./WidgetConfig.json"
import Exchanges from "./views/Widgets/Exchanges";
import ConverterCurrency from "./views/Widgets/ConverterCurrency";
import CurrentWeatherWidget from "./views/Widgets/CurrentWeatherWidget"
import ForecastWeatherWidget from "./views/Widgets/ForecastWeatherWidget"
import NasaPOTD from "./views/Widgets/NasaPOTD";
import SpotifyRelease from "./views/Widgets/SpotifyRelease"
import SpotifyTop50 from "./views/Widgets/SpotifyTop50"

import { v4 as uuidv4 } from 'uuid';

var WidgetNames = {};

Object.keys(WidgetJson).map((key) => (
    WidgetNames[key] = key
));

const ComponentList = {
    Exchanges: Exchanges,
    ConverterCurrency: ConverterCurrency,
    ForecastWeatherWidget: ForecastWeatherWidget,
    CurrentWeatherWidget: CurrentWeatherWidget,
    SpotifyRelease: SpotifyRelease,
    SpotifyTop50: SpotifyTop50,
    NasaPOTD: NasaPOTD,
};

class Widget {
    constructor(name, layout, component, id) {
        this.name = name;
        this.layout = layout;
        this.component = component;
        this.id = id;
    }
}

function getComponent(widgetName) {
    switch (widgetName) {
        case 'Exchanges':
            return ComponentList.Exchanges;
        case 'Converter Currency':
            return ComponentList.ConverterCurrency;
        case '5 Days Forecast Weather':
            return ComponentList.ForecastWeatherWidget;
        case 'Current Weather':
            return ComponentList.CurrentWeatherWidget;
        case 'Spotify Last Release':
            return ComponentList.SpotifyRelease;
        case 'Spotify Top 50':
            return ComponentList.SpotifyTop50;
        case "Nasa's Picture of the day":
            return ComponentList.NasaPOTD;
        default:
            return null;
    }
}

function getinitialLayouts(widgetName, id) {
    var layout = WidgetJson[widgetName].initialLayouts;

    layout.i = id;
    return (layout);
}

function getComponentBack(widgets) {
    for (var p in widgets) {
        widgets[p].component = getComponent(widgets[p].name)
    }
}

function getLayoutFromId(layouts, id) {
    for (var property in layouts["lg"]) {
        if (layouts["lg"][property].i === id)
            return (layouts["lg"][property])
    }
    return null;
}

function createWidget(widgetName) {
    var id = uuidv4();
    var component = getComponent(widgetName);
    var initialLayouts = getinitialLayouts(widgetName, id);
    var newWidget = new Widget(widgetName, initialLayouts, component, id);

    return (newWidget);
}

export const WidgetConfig = {
    WidgetNames: WidgetNames,
    ComponentList: ComponentList,
    Widget: Widget,
    createWidget: createWidget,
    getComponent: getComponent,
    getinitialLayouts: getinitialLayouts,
    getLayoutFromId: getLayoutFromId,
    getComponentBack: getComponentBack,
}