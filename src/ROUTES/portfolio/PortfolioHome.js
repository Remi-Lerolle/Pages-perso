import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FormalizzData } from "./Formalizz";
import { PortfolioCVData } from "./PortfolioCV";
import { StudioXSLDataClass } from "./StudioXSL"
import { ProjectCard } from "./Project";

function PortfolioHome() {

	const projectList = [FormalizzData, PortfolioCVData, StudioXSLDataClass];

	return (
		<>
			<Container>
				<h1>porfolio home</h1>
			</Container>
			<Container>
				<Row>
					{
						projectList.map(projectData => {
							return (
								<ProjectCard
									data={projectData} key={`projectCard-${projectData.title}`} />
							)
						})
					}
				</Row>
			</Container>
		</>
	)
}

export default PortfolioHome