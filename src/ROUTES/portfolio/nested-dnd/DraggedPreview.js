import React from "react";
import { usePreview } from "react-dnd-preview";
import { ItemTypes } from "./ItemTypes";
import { useSelector } from "react-redux";
import { WidgetToDrag } from "./Widget";

export const DraggedPreview = () => {
	const preview = usePreview({
		placement: "top", padding: { x: -20, y: -20 }
	})

	const listOfWidgets = useSelector((state) => state.listOfWidgets.value);

	if (!preview.display) { return null }

	const thisWidget = listOfWidgets[preview.item.pos]

	const { itemType, item, style, ref } = preview;
	let computedClassName = "widgetToDrag"

	if (preview.itemType === "GROUPWIDGET" || preview.itemType === "GROUPDROPPED") {
		computedClassName += " isGrid"
	} else {
		computedClassName += " simpleWidget"
	}

	return <div
		className={computedClassName}
		ref={ref}
		style={{ ...style, zIndex: 3 }}>
		{`${ItemTypes[preview.itemType]} ${preview.item.pos || ""}`}
		{preview.itemType === "GROUPDROPPED"
			? thisWidget.children.map(
				(_, indexInGrid) => <WidgetToDrag
					widgeType="SIMPLENESTED"
					index={preview.item.pos}
					indexInGrid={indexInGrid}
				/>)
			: null}
	</div>
}