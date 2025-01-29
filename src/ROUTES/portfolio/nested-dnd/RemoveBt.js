export function RemoveBt({ stateHandler, index, indexInGrid }) {
	return <button
		className="removeWidgetButton"
		onClick={() => stateHandler(index, indexInGrid)}>&times;</button>
}