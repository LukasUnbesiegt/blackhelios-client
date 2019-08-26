const Prismic = require("prismic-javascript");

class PrismicWrapper {
	constructor(type, slice_type) {
		this.type = type;
		this.slice_type = slice_type;
		this.endpoint = ``;
	}

	getDocuments() {
		return new Promise((resolve, reject) => {
			Prismic.api(this.endpoint).then(api => {
				api
					.query(Prismic.Predicates.at("document.type", this.type), {})
					.then(response => {
						resolve(response.results);
					});
			});
		});
	}
}

export default PrismicWrapper;
