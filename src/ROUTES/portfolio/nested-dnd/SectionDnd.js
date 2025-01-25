import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import i18n from '../../../Translation/i18n';
import { LangContext } from '../../../App.js'

export function SectionDnd(props) {
	const title = props.title

	const lang = useContext(LangContext);
	i18n.changeLanguage(lang);

	return (
		<>
			<Container className="mt-5">
				<h2>{i18n.t(title)}</h2>
			</Container>
			<Container>
				<p>{i18n.t("projet.StudioXSL.dnd.text-1")}</p>
				<p>
					{i18n.t('projet.StudioXSL.dnd.text-2')}
					<a
						href="https://github.com/Remi-Lerolle/nested-dnd"
						target="blank">
						{i18n.t('projet.StudioXSL.dnd.text-3')}
					</a>
				</p>
			</Container>
		</>
	)
}