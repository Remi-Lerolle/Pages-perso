import React from "react";
import { usePreview } from "react-dnd-preview";

export const Preview = () => {
	const preview = usePreview({
		placement: "top", padding: { x: -20, y: 0 }
	})
	if (!preview.display) { return null }

	const { itemType, item, style, ref } = preview;

	return <div>
		yo preview
	</div>
}