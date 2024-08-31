{/*
	project should have a set of colors
	for backgrounds...
*/}
interface ProjectDataProps {
	title: string,
	technoList: string[],
	imgUrl: any,
	projectPath: string,
	I18nDescriptionId: string,
	listOfSection: SectionProjectDataClass[]
}

export class ProjectDataClass {
	title: string;
	technoList: string[] = [];
	imgUrl: any;
	projectPath: string;
	I18nDescriptionId: string;
	listOfSection: SectionProjectDataClass[] = []

	constructor(props: ProjectDataProps) {

		this.title = props.title;

		props.technoList.forEach(techno => {
			if (this.technoList.indexOf(techno) !== -1) {
				return;
			}
			if (authorizedTechnoList.indexOf(techno) === -1) {
				console.log("techno not listed as authorized: " + techno);
				return;
			}
			this.technoList.push(techno);
		})

		this.imgUrl = props.imgUrl
		this.projectPath = props.projectPath;
		this.I18nDescriptionId = props.I18nDescriptionId;
		this.listOfSection = props.listOfSection || []
	}
}

const authorizedTechnoList = ["PHP", "SQL", "React", "Bootstrap", "CSS", "XSL", "API"]

interface SectionDataProps {
	title: string;
	technoList: string[];
	imgUrl: any;
	i18nTextId: string;
}

export class SectionProjectDataClass {
	title: string;
	technoList: string[] = [];
	imgUrl: any;
	i18nTextId: string;

	constructor(props: SectionDataProps) {
		this.title = props.title
		this.i18nTextId = props.i18nTextId
		this.imgUrl = props.imgUrl
	}
}