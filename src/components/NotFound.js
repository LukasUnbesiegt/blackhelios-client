import React, { Fragment } from "react";

export default function NotFound() {
	return (
		<Fragment>
			<section className="py-3">
				<div className="container">
					<h3 className="my-2 py-2 text-center display-4">
						NOT FOUND PAGE. GO BACK TO <a href="/">Home</a>
					</h3>
				</div>
			</section>
		</Fragment>
	);
}
