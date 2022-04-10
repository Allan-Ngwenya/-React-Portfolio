import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBIcon } from "mdbreact";

const ContactInfo = () => {
	return (
		<MDBContainer className="mt-5">
			<MDBRow>
				<MDBCol md="12" className="text-center">
					<h2>Contact Information</h2>
					<hr class="solid bg-dark" />
					<h4>
						Are you looking for a fast-performing and user-friendly website to
						represent your product or business? or looking for any kind of
						consultation? or want to ask questions? or have some advice for me? In any case feel free to Let me
						know. I
						will do my best to respond back. The quickest way to reach out to
						me is via an email.
					</h4>
					<hr className="hr-light w-25" />
					<h3>Cell Phone</h3>
					<hr className="hr-dark w-25" />
					<a href="tel:078787878">
						<MDBIcon icon="phone-alt" /> 078787878
					</a>
					<hr className="hr-light w-25" />
					<h3>E-mail</h3>
					<hr className="hr-dark w-25" />
					<a href="mailto:mbongeniallanngwenya@hotmail.com">
						<MDBIcon icon="envelope" /> mbongeniallanngwenya@hotmail.com
					</a>
				</MDBCol>
			</MDBRow>
		</MDBContainer>
	);
};
export default ContactInfo;