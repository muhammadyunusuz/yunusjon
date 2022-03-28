import * as React from "react";
import { Helmet } from "react-helmet";
import AboutMe from "../components/AboutMe/AboutMe";
import "../styles/index.scss";

// markup
const IndexPage = () => {
	return (
		<main>
			<Helmet title="test" />
			<AboutMe />
		</main>
	);
};

export default IndexPage;
