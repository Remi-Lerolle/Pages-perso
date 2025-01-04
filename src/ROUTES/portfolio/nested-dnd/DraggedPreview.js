import React from "react";
import { usePreview } from "react-dnd-preview";

export const DraggedPreview = () => {
	const preview = usePreview({
		placement: "top",
	})

	if (!preview.display) { return null }
	console.log(preview)

	const { itemType, item, style, ref } = preview;

	return <div ref={ref} style={{ ...style, zIndex: 3 }}>
		{preview.itemType}
	</div>
}