export const animationCreate = () => {
	if (typeof window !== "undefined") {
		import("wowjs").then((module) => {
			const WOWConstructor = module.WOW || module.default?.WOW || module.default;
			if (typeof WOWConstructor === "function") {
				new WOWConstructor({ live: false }).init();
			}
		});
	}
};
