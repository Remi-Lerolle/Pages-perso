import React from 'react';
import ReactDOM from 'react-dom/client';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { SideBar } from './SideBar';
import { PageLayout } from './PageLayout';
import store from "./store"
import { Provider } from "react-redux"
import { DisplayStateAsTable } from "./DisplayStateAsTable"

export function NestedDnd() {
	return <Provider store={store}>
		<DndProvider backend={HTML5Backend}>
			<SideBar />
			<PageLayout />
			<DisplayStateAsTable />
		</DndProvider>
	</Provider>
}
