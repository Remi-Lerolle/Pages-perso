import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { TouchBackend } from 'react-dnd-touch-backend'
import { SideBar } from './SideBar';
import { PageLayout } from './PageLayout';
import store from "./store"
import { Provider } from "react-redux"
import { DisplayStateAsTable } from "./DisplayStateAsTable"

export function NestedDnd() {
	return <Provider store={store}>
		<DndProvider
			backend={window.navigator.userAgent.includes("Android")
				|| window.navigator.userAgent.includes("iPhone")
				|| window.navigator.userAgent.includes("iPad")
				? TouchBackend
				: HTML5Backend}>
			<SideBar />
			<PageLayout />
			<DisplayStateAsTable />
		</DndProvider>
	</Provider>
}
