import './styles/App.css';

function App() {
	return (
		<>
			<header>
				<h1>Dean Jeffery</h1>
				<h2>Frontend Developer</h2>
				<p>Newcastle Upon Tyne, UK</p>
			</header>
			<div className='column'>
				<h2>Experience</h2>
				<div className='card'>
					<h3>Frontend Developer</h3>
					<h4>Visualsoft</h4>
					<p>September 2022 - Present</p>
					<p>
						<ul>
							<li>Developing highly bespoke front ends for Visualsoft’s premium clients.</li>
							<li>Create new custom-built frontend features with the long term goal to turn these into core Visualsoft platform features.</li>
							<li>Collaborate closely with designers to translate mockups into pixel-perfect, responsive web pages.</li>
							<li>Mentor new starters on the team.</li>
							<li>Supervise junior developers during ‘go live’ process and take the lead for large clients.</li>
							<li>Write test plans to be used by QA team for all completed work.</li>
						</ul>
					</p>
				</div>
				<div className='card'>
					<h3>Junior Frontend Developer</h3>
					<h4>Visualsoft</h4>
					<p>September 2021 - August 2022</p>
					<p>
						<ul>
							<li>Integrated a range of over 250 Visualsoft features on new builds and redesigns using PHP and CSS.</li>
							<li>Worked on issues raised during testing, and find solutions which work for the client as well as end users.</li>
							<li>Troubleshoot and address bugs and issues within the Visualsoft platform, within both frontend and developer tools</li>
							<li>Authoring of test plans for all work completed</li>
							<li>
								Take part in the ‘go live’ process, working closely with the Project Manager and Devops engineer to ensure the site goes live
								with all features and payment gateways performing as expected.
							</li>
						</ul>
					</p>
				</div>
				<div className='card'>
					<h3>Apprentice Web Developer</h3>
					<h4>PrimitiveSense</h4>
					<p>August 2017 - July 2018</p>
					<p>
						<ul>
							<li>Design and develop Websites to written and verbal specification for a variety of clients.</li>
							<li>Front end development using HTML, CSS (SCSS) with some JS.</li>
							<li>Backend development using PHP and Wordpress.</li>
						</ul>
					</p>
				</div>
			</div>
		</>
	);
}

export default App;
