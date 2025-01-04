import React from "react";
import { usePreview } from "react-dnd-preview";

export const DraggedPreview = () => {
	const preview = usePreview({
		placement: "top", padding: { x: -20, y: 0 }
	})

	if (!preview.display) { return null }
	console.log(preview)

	const { itemType, item, style, ref } = preview;

	return <div style={{ position: "absolute" }}>
		yo preview
	</div>
}