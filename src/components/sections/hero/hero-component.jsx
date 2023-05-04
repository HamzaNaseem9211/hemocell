import react from "react";
import "./hero-component-styles.scss";

const HeroComponent = () => {
	return (
		<section className="main-wrapper">
			<div className="main-container">
				<div className="text-wrapper sm:w-[650px] flex flex-col justify-center items-center">
					<h3 className="subheading relative font-bold sm:text-[20px] leading-[2em] text-center tracking-[0.3em] uppercase text-off_white">
						Give the gift of life
					</h3>
					<h1 className="font-bold text-[35px] sm:text-[60px] leading-tight text-center capitalize text-white">
						Your blood can make a difference
					</h1>
				</div>
			</div>
		</section>
	);
};

export default HeroComponent;
