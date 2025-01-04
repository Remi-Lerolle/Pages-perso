import React from "react";
import { usePreview } from "react-dnd-preview";
import { ItemTypes } from "./ItemTypes";

export const DraggedPreview = () => {
	const preview = usePreview({
		placement: "top", padding: { x: -20, y: 0 }
	})

	if (!preview.display) { return null }
	console.log(preview)

	const { itemType, item, style, ref } = preview;
	let computedClassName = "widgetToDrag"

	if (preview.itemType === "GROUPWIDGET") {
		computedClassName += " isGrid"
	} else {
		computedClassName += " simpleWidget"
	}

	return <div
		className={computedClassName}
		ref={ref}
		style={{ ...style, zIndex: 3 }}>
		{`${ItemTypes} ${preview.item.pos}`}
	</div>
}