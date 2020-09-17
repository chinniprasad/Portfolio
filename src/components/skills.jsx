import React, { Component } from 'react'

export default class Skills extends Component {
    render() {
        return (
            <div>
			<section className="me-skills" data-section="skills">
				<div className="me-narrow-content">
					<div className="row">
						<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
							<span className="heading-meta">My Specialty</span>
							<h2 className="me-heading animate-box">My Skills</h2>
						</div>
					</div>
					<div className="row">
						<div className="col-md-12 animate-box" data-animate-effect="fadeInLeft">
							<p>These are the skills learned and experienced over 3 years and mostly consentrated on these technologies to working on my projects.I will explore more new technologies with my ability. </p>
						</div>
						<div className="col-md-6 animate-box" data-animate-effect="fadeInLeft">
							<div className="progress-wrap">
								<h3>JavaScript</h3>
								<div className="progress">
								 	<div className="progress-bar color-1" role="progressbar" aria-valuenow="75"
								  	aria-valuemin="0" aria-valuemax="100" style={{width:"75%"}}>
								    <span>75%</span>
								  	</div>
								</div>
							</div>
						</div>
						<div className="col-md-6 animate-box" data-animate-effect="fadeInRight">
							<div className="progress-wrap">
								<h3>NodeJS</h3>
								<div className="progress">
								 	<div className="progress-bar color-2" role="progressbar" aria-valuenow="70"
								  	aria-valuemin="0" aria-valuemax="100" style={{width:"70%"}}>
								    <span>70%</span>
								  	</div>
								</div>
							</div>
						</div>
						<div className="col-md-6 animate-box" data-animate-effect="fadeInLeft">
							<div className="progress-wrap">
								<h3>ReactJS</h3>
								<div className="progress">
								 	<div className="progress-bar color-3" role="progressbar" aria-valuenow="60"
								  	aria-valuemin="0" aria-valuemax="100" style={{width:"60%"}}>
								    <span>60%</span>
								  	</div>
								</div>
							</div>
						</div>
						<div className="col-md-6 animate-box" data-animate-effect="fadeInRight">
							<div className="progress-wrap">
								<h3>Github</h3>
								<div className="progress">
								 	<div className="progress-bar color-4" role="progressbar" aria-valuenow="60"
								  	aria-valuemin="0" aria-valuemax="100" style={{width:"60%"}}>
								    <span>60%</span>
								  	</div>
								</div>
							</div>
						</div>
						<div className="col-md-6 animate-box" data-animate-effect="fadeInLeft">
							<div className="progress-wrap">
								<h3>AWS</h3>
								<div className="progress">
								 	<div className="progress-bar color-5" role="progressbar" aria-valuenow="65"
								  	aria-valuemin="0" aria-valuemax="100" style={{width:"65%"}}>
								    <span>65%</span>
								  	</div>
								</div>
							</div>
						</div>
						<div className="col-md-6 animate-box" data-animate-effect="fadeInRight">
							<div className="progress-wrap">
								<h3>DevOps</h3>
								<div className="progress">
								 	<div className="progress-bar color-6" role="progressbar" aria-valuenow="70"
								  	aria-valuemin="0" aria-valuemax="100" style={{width:"70%"}}>
								    <span>70%</span>
								  	</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
            </div>
        )
    }
}
