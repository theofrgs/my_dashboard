import React, { useState } from "react";
import { Responsive as ResponsiveGridLayout } from "react-grid-layout";
import { withSize } from "react-sizeme";
import { WidgetConfig } from "../../WidgetConfig.js"
import TopBar from "./TopBar";
import { Widget } from "./Widget";

function getFromLS(key) {
    if (global.localStorage) {
        try {
            var value = JSON.parse(global.localStorage.getItem("rgl-8"))[key]

            if (key === "widgets")
                WidgetConfig.getComponentBack(value)
            return (value)
        } catch (e) { }
    }
    return undefined;
}

function saveToLS(key, value) {
    if (global.localStorage) {
        global.localStorage.setItem(
            "rgl-8",
            JSON.stringify({
                [key[0]]: value[0],
                [key[1]]: value[1]
            })
        );
    }
}

function saveWidgetLayout(widgets, layouts) {

    for (var p in widgets) {
        let layout = WidgetConfig.getLayoutFromId(layouts, widgets[p].id)

        if (layout) {
            widgets[p].layout = layout
        }
    }
}

function getWidgetsLayouts(widgets) {
    const layouts = { lg: [] };

    widgets.map((i) => (
        layouts["lg"].push(i.layout)
    ))
    return layouts
}

function Content({ size: { width } }) {

    const [widgets, setWidgets] = useState(getFromLS("widgets") || [])
    const [layouts, setLayouts] = useState(getFromLS("layouts") || {});

    const onLayoutChange = (_, allLayouts) => {
        setLayouts(allLayouts);
        saveWidgetLayout(widgets, allLayouts)
    };
    const onLayoutSave = () => {
        saveToLS(["widgets", "layouts"], [widgets, layouts]);
    };
    const onRemoveItem = (widget) => {
        setWidgets(widgets.filter((i) => i !== widget));
    };
    const onAddItem = (widget) => {
        setWidgets([...widgets, widget]);
        setLayouts(getWidgetsLayouts(widgets));
    };

    return (
        <>
            <TopBar
                onLayoutSave={onLayoutSave}
                onAddItem={onAddItem}
                WidgetNames={WidgetConfig.WidgetNames}
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
                {widgets.map((widget) => (
                    <div
                        key={widget.id}
                        widget={widget.name}
                        className="widget"
                        data-grid={{ w: 3, h: 2, x: 0, y: Infinity }}
                    >
                        <Widget
                            widget={widget}
                            onRemoveItem={onRemoveItem}
                            backgroundColor="#867ae9"
                        />
                    </div>
                ))}
            </ResponsiveGridLayout>
        </>
    )
}

export default withSize({ refreshMode: "debounce", refreshRate: 60 })(Content);