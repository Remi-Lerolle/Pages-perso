import React, { useContext } from "react";

import { LangContext } from '../../App.js';

import diagramSequenceLaposteAPI from '../../IMG/DIAGRAM-SEQUENCE-LAPOSTE_API.png';
import pictoEnvelopeBlue from '../../IMG/picto-envelope-blue.jpg';
import pictoEnvelopeGreen from '../../IMG/picto-envelope-green.jpg';

import i18n from '../../Translation/i18n';

export function FormalizLaposteApi(props) {

	const lang = useContext(LangContext);
	i18n.changeLanguage(lang);

	return (<><div>
		<p>
			{i18n.t("project.Formalizz.API-la-Post-para1")}<a
				href="https://github.com/Remi-Lerolle/API_La_Poste"
				target="_blank"
				rel="noreferrer"
			>{i18n.t("project.Formalizz.API-la-Post-para1-link1")}</a>.</p>
		<p>{i18n.t("project.Formalizz.API-la-Post-para2-1")}.<br />
			{i18n.t("project.Formalizz.API-la-Post-para2-2")}
		</p>
		<img src={diagramSequenceLaposteAPI} alt="sequence digram la Poste API" width="100%" />
		<ol className="callout">
			<li>{i18n.t("project.Formalizz.API-la-Post-li1-1")}</li>
			<li>{i18n.t("project.Formalizz.API-la-Post-li2-1")}</li>
			<li>{i18n.t("project.Formalizz.API-la-Post-li3-1")}<br />
				{i18n.t("project.Formalizz.API-la-Post-li3-2")}</li>
			<li>{i18n.t("project.Formalizz.API-la-Post-li4-1")}</li>
			<li>{i18n.t("project.Formalizz.API-la-Post-li5-1")}<br />
				{i18n.t("project.Formalizz.API-la-Post-li5-2")}<br />
				{i18n.t("project.Formalizz.API-la-Post-li5-3")}<br />
				<img src={pictoEnvelopeBlue} alt="Enveloppe blue" /><br />
				{i18n.t("project.Formalizz.API-la-Post-li5-4")}<br /></li>
			<li>{i18n.t("project.Formalizz.API-la-Post-li6-1")}<br />
				{i18n.t("project.Formalizz.API-la-Post-li6-2")}</li>
			<li>{i18n.t("project.Formalizz.API-la-Post-li7-1")}</li>
			<li>{i18n.t("project.Formalizz.API-la-Post-li8-1")}<br />
				{i18n.t("project.Formalizz.API-la-Post-li8-2")}</li>
			<li>{i18n.t("project.Formalizz.API-la-Post-li9-1")}</li>
			<li>{i18n.t("project.Formalizz.API-la-Post-li10-1")}<br />
				{i18n.t("project.Formalizz.API-la-Post-li10-2")}</li>
			<li>{i18n.t("project.Formalizz.API-la-Post-li11-1")}<br />
				{i18n.t("project.Formalizz.API-la-Post-li11-2")}<br />
				<img src={pictoEnvelopeGreen} alt="Enveloppe verte" /></li>
		</ol>
	</div ></>)
}