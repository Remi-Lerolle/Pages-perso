{/*
	project should have a set of colors
	for backgrounds...
*/}
interface ProjectDataProps {
	title: string,
	imgUrl: any,
	projectPath: string,
	I18nDescriptionId: string,
	listOfSection: SectionProjectDataClass[]
}

export class ProjectDataClass {
	title: string;
	imgUrl: any;
	projectPath: string;
	I18nDescriptionId: string;
	listOfSection: SectionProjectDataClass[] = []

	constructor(props: ProjectDataProps) {
		this.title = props.title;
		this.imgUrl = props.imgUrl
		this.projectPath = props.projectPath;
		this.I18nDescriptionId = props.I18nDescriptionId;
		this.listOfSection = props.listOfSection || []
	}
}

interface SectionDataProps {
	title: string;
	technoList: string[];
	imgUrl: any;
	i18nTextId: string;
	componentList: object[];
}

export class SectionProjectDataClass {
	title: string;
	technoList: string[] = [];
	imgUrl: any;
	i18nTextId: string;
	componentList: object[];

	constructor(props: SectionDataProps) {
		this.title = props.title;
		this.i18nTextId = props.i18nTextId;
		this.imgUrl = props.imgUrl;
		props.technoList.forEach(techno => {
			if (typeof techno !== "string") {
				console.log("techno not listed as authorized: " + techno);
				return;
			}
			this.technoList.push(techno);
		})
		this.componentList = props.componentList || [];
	}
}