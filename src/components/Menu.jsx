'use client';

import { allCocktails } from '../../constants/index.js'
import { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';

const Menu = () => {
	const contentRef = useRef();
	const [currentIndex, setCurrentIndex] = useState(0);

	useGSAP(() => {
		gsap.fromTo('#title', { opacity: 0 }, { opacity: 1, duration: 1 });
		gsap.fromTo('.cocktail img', { opacity: 0, xPercent: -100 }, {
			xPercent: 0, opacity: 1, duration: 1, ease: 'power1.inOut'
		})
		gsap.fromTo('.details h2', { yPercent: 100, opacity: 0 }, {
			yPercent: 0, opacity: 100, ease: 'power1.inOut'
		})
		gsap.fromTo('.details p', { yPercent: 100, opacity: 0 }, {
			yPercent: 0, opacity: 100, ease: 'power1.inOut'
		})
	}, [currentIndex]);

	const totalCocktails = allCocktails.length;

	const goToSlide = (index) => {
		const newIndex = (index + totalCocktails) % totalCocktails;

		setCurrentIndex(newIndex);
	}

	const getCocktailAt = (indexOffset) => {
		return allCocktails[(currentIndex + indexOffset + totalCocktails) % totalCocktails]
	}

	const currentCocktail = getCocktailAt(0);
	const prevCocktail = getCocktailAt(-1);
	const nextCocktail = getCocktailAt(1);

	return (
		<section id="menu" aria-labelledby="menu-heading" className="relative w-full md:mt-40 mt-0 2xl:px-0 px-5 py-20 radial-gradient">
		 {/* <img src="/images/slider-right-leaf.png" alt="right-leaf" id="m-right-leaf" /> */}

			<h2 id="menu-heading" className="col-center mb-6 text-4xl font-modern-negra text-white">
				Cocktail Menu
			</h2>

			<div className="relative z-20 rounded-2xl  p-6 md:max-w-6xl mx-auto flex flex-wrap justify-center gap-3">
				{allCocktails.map((cocktail, index) => {
					const isActive = index === currentIndex;

					return (
						<button
							key={cocktail.id}
							onClick={() => goToSlide(index)}
							className={` font-modern-negra shadow-2xl
            px-4 py-2 rounded-full border text-sm font-medium transition-all duration-300
            ${isActive
									? 'bg-[#CADCAE] text-black border-[#3E5F44]shadow-md'
									: 'bg-white text-gray-600 border-[#3E5F44] hover:bg-[#CADCAE] hover:text-black hover:border-[#3E5F44]'}
          `}
						>
							{cocktail.name}
						</button>
					);
				})}
			</div>


			<div className="content">
				<div className="arrows">
					<button className="text-left" onClick={() => goToSlide(currentIndex - 1)}>
						<span>{prevCocktail.name}</span>
						<img src="/images/right-arrow.png" alt="right-arrow" aria-hidden="true" />
					</button>

					<button className="text-left" onClick={() => goToSlide(currentIndex + 1)}>
						<span>{nextCocktail.name}</span>
						<img src="/images/left-arrow.png" alt="left-arrow" aria-hidden="true" />
					</button>
				</div>

				<div className="cocktail">
					<img src={currentCocktail.image} className="object-contain" />
				</div>

				<div className="recipe">
					<div ref={contentRef} className="info">
						<p>Recipe for:</p>
						<p id="title">{currentCocktail.name}</p>
					</div>

					<div className="details">
						<h2>{currentCocktail.title}</h2>
						<p>{currentCocktail.description}</p>
					</div>
				</div>
			</div>
		</section>
	)
}
export default Menu
