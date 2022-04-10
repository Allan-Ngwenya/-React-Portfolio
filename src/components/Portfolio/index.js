import React from "react";
import {
	MDBCardGroup,
	MDBIcon,
	MDBContainer,
	MDBBtn,
	MDBCard,
	MDBCardBody,
	MDBCardImage,
	MDBCardTitle,
	MDBCardText,
} from "mdbreact";

const Projects = () => {
	return (
		<MDBContainer className="mt-5">
			<MDBCardGroup deck className="mt-3">
				<MDBCard className="border border-dark">
					<MDBCardImage
						style={{ width: "485px" }}
						src="https://user-images.githubusercontent.com/58231568/162637585-e411d39f-dfea-46ab-8237-9702ccbbb688.jpg"
						alt="me"
						top
					/>
					<MDBCardBody>
						<MDBCardTitle tag="h5">Initial Portfolio</MDBCardTitle>
						<MDBCardText>
							One of the first projects I completed was a professional portfolio which included pages for skills, experience, about me and contact.
						</MDBCardText>
						<MDBBtn
							href="https://github.com/Allan-Ngwenya/Updated-Portfolio"
							color="primary"
							size="md"
						>
							<MDBIcon icon="clone left" className="mr-1" />
							View Project
						</MDBBtn>
					</MDBCardBody>
				</MDBCard>

				<MDBCard className="border border-dark">
					<MDBCardImage
						className="img-fluid"
						src="https://user-images.githubusercontent.com/58231568/162637553-9af48bb6-904a-42ef-b296-57afac30606c.PNG"
						alt="portfolio"
						top
					/>
					<MDBCardBody>
						<MDBCardTitle tag="h5">Password Generator</MDBCardTitle>
						<MDBCardText>
							The Password generator project had a lot of requirements for the logic such as; I am presented with a series of prompts for password criteria WHEN prompted for password criteria THEN I select which criteria to include in the password WHEN prompted for the length of the password.
						</MDBCardText>
						<MDBBtn
							href="https://github.com/Allan-Ngwenya/Password-Generator"
							color="primary"
							size="md"
						>
							<MDBIcon icon="clone left" className="mr-1" />
							View Project
						</MDBBtn>
					</MDBCardBody>
				</MDBCard>
			</MDBCardGroup>
			<MDBCardGroup deck className="mt-3">
				<MDBCard className="border border-dark">
					<MDBCardImage
						style={{ height: "205px" }}
						src="https://user-images.githubusercontent.com/58231568/162637557-ffbda10c-5704-444d-9472-49591f887730.PNG"
						alt="notes"
						top
					/>
					<MDBCardBody>
						<MDBCardTitle tag="h5">Note Taker</MDBCardTitle>
						<MDBCardText>
							This is a Note Taker app. It has hours sections on it so when
							the user enters a description for each hour and save it the
							description will stay until erased.
						</MDBCardText>
						<MDBBtn
							href="https://github.com/Allan-Ngwenya/Note-Taker"
							color="primary"
							size="md"
						>
							<MDBIcon icon="clone left" className="mr-1" />
							View Project
						</MDBBtn>
					</MDBCardBody>
				</MDBCard>

				<MDBCard className="border border-dark">
					<MDBCardImage
						src="https://user-images.githubusercontent.com/58231568/162637555-6c76e490-63f6-46b9-af6d-273404c2caa9.PNG"
						alt="notes"
						top
					/>
				</MDBCard>
			</MDBCardGroup>
		</MDBContainer>
	);
};
