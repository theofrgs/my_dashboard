import React, { useState } from "react";
import { Responsive as ResponsiveGridLayout } from "react-grid-layout";
import { withSize } from "react-sizeme";

import Exchanges from "../../views/Widgets/Exchanges";
import ConverterCurrency from "../../views/Widgets/ConverterCurrency";
import TopBar from "./TopBar";
import Widget from "./Widget";
import CurrentWeatherWidget from "../../views/Widgets/CurrentWeatherWidget"
import ForecastWeatherWidget from "../../views/Widgets/ForecastWeatherWidget"
import WidgetJson from "../../WidgetConfig.json"

const originalItems = [];

Object.keys(WidgetJson).map((key) => (
    originalItems.push(key)
));

const initialLayouts = { lg: [] };

Object.keys(WidgetJson).map((key) => (
    WidgetJson[key].initialLayouts['i'] = key
));

Object.keys(WidgetJson).map((key) => (
    initialLayouts['lg'].push(WidgetJson[key].initialLayouts)
));

const componentList = {
    a: Exchanges,
    b: ConverterCurrency,
    c: ForecastWeatherWidget,
    d: CurrentWeatherWidget,
};

function Content({ size: { width } }) {
    const [items, setItems] = useState(originalItems);
    const [layouts, setLayouts] = useState(
        getFromLS("layouts") || initialLayouts
    );
    const onLayoutChange = (_, allLayouts) => {
        setLayouts(allLayouts);
    };
    const onLayoutSave = () => {
        saveToLS("layouts", layouts);
    };
    const onRemoveItem = (itemId) => {
        setItems(items.filter((i) => i !== itemId));
    };
    const onAddItem = (itemId) => {
        setItems([...items, itemId]);
    };

    //VIEW
    return (
        <>
            <TopBar
                onLayoutSave={onLayoutSave}
                items={items}
                onRemoveItem={onRemoveItem}
                onAddItem={onAddItem}
                originalItems={originalItems}
            />
            <ResponsiveGridLayout
                className="layout"
                layouts={layouts}
                breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
                cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
                rowHeight={60}
                width={width}
                onLayoutChange={onLayoutChange}
            >
                {items.map((key) => (
                    <div
                        key={key}
                        className="widget"
                        data-grid={{ w: 3, h: 2, x: 0, y: Infinity }}
                    >
                        <Widget
                            id={key}
                            onRemoveItem={onRemoveItem}
                            backgroundColor="#867ae9"
                            component={componentList[key]}
                        />
                    </div>
                ))}
            </ResponsiveGridLayout>
        </>
    );
}

export default withSize({ refreshMode: "debounce", refreshRate: 60 })(Content);

function getFromLS(key) {
    let ls = {};
    if (global.localStorage) {
        try {
            ls = JSON.parse(global.localStorage.getItem("rgl-8")) || {};
        } catch (e) { }
    }
    return ls[key];
}

function saveToLS(key, value) {
    if (global.localStorage) {
        global.localStorage.setItem(
            "rgl-8",
            JSON.stringify({
                [key]: value
            })
        );
    }
}