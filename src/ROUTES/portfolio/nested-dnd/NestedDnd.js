import React from "react";
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { TouchBackend } from 'react-dnd-touch-backend'
import { SideBar } from './SideBar';
import { PageLayout } from './PageLayout';
import store from "./store"
import { Provider } from "react-redux"
import { DisplayStateAsTable } from "./DisplayStateAsTable"
import { DraggedPreview } from "./DraggedPreview";
import { SectionDnd } from './SectionDnd';


export function NestedDnd() {
	const isMobileOs = window.navigator.userAgent.includes("Android")
		|| window.navigator.userAgent.includes("iPhone")
		|| window.navigator.userAgent.includes("iPad")
	return <Provider store={store}>
		<DndProvider
			backend={isMobileOs ? TouchBackend : HTML5Backend}>
			<SectionDnd title="projet.StudioXSL.dnd.title" />
			<SideBar />
			<PageLayout />
			{isMobileOs ? <DraggedPreview /> : null}
			<DisplayStateAsTable />
		</DndProvider>
	</Provider>
}