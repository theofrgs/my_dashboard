import WidgetJson from "./WidgetConfig.json"
import Exchanges from "./views/Widgets/Exchanges";
import ConverterCurrency from "./views/Widgets/ConverterCurrency";
import CurrentWeatherWidget from "./views/Widgets/CurrentWeatherWidget"
import ForecastWeatherWidget from "./views/Widgets/ForecastWeatherWidget"
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
        default :
            return null;
    }
}

function getinitialLayouts(widgetName, id) {
    var layout = WidgetJson[widgetName].initialLayouts;

    layout.i = id;
    return (layout);
}

function createWidget(widgetName) {
    var id = uuidv4();
    var component = getComponent(widgetName);
    var initialLayouts = getinitialLayouts(widgetName, id);
    var newWidget = new Widget(widgetName, initialLayouts, component, id);

    return (newWidget);
}

export const WidgetConfigJson = {
    WidgetNames: WidgetNames,
    ComponentList: ComponentList,
    Widget: Widget,
    createWidget: createWidget,
    getComponent: getComponent,
    getinitialLayouts: getinitialLayouts,
}