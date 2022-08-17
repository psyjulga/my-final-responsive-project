function displayAppImgLeftHtml(app) {
	const appHtml = `<div class="row m-5">
		<div class="col-6">
			<img
				src="${app.img_src}"
				alt="${app.title}"
				class="img-fluid d-none d-md-block"
			/>
		</div>
		<div class="col-6 app-p">
			<h4>${app.headline}</h4>
			<p>
				${app.paragraph}
			</p>
			<a
				href="${app.netlify_link}"
				target="_blank"
				title="${app.title}"
				class="app-link"
			>
				<button class="app-button">${app.button_text}</button>
			</a>
		</div>
	</div>`

	return appHtml
}

function displayAppImgRightHtml(app) {
	const appHtml = `<div class="row m-5">
  <div class="col-6 app-p">
			<h4>${app.headline}</h4>
			<p>
				${app.paragraph}
			</p>
			<a
				href="${app.netlify_link}"
				target="_blank"
				title="${app.title}"
				class="app-link"
			>
				<button class="app-button">${app.button_text}</button>
			</a>
		</div>
		<div class="col-6">
			<img
				src="${app.img_src}"
				alt="${app.title}"
				class="img-fluid d-none d-md-block"
			/>
		</div>
	</div>`

	return appHtml
}

const marilyntheCat = {
	headline: 'The first Website I ever built: Marilyn the Cat',
	paragraph: `Wer reitet so spät durch Nacht und Wind? Es ist der Vater mit seinem
						Kind; Er hat den Knaben wohl in dem Arm, Er faßt ihn sicher, er hält
						ihn warm. Mein Sohn, was birgst du so bang dein Gesicht? - Siehst
						Vater, du den Erlkönig nicht? Den Erlenkönig mit Kron und Schweif? -
						Mein Sohn, es ist ein Nebelstreif. -`,
	netlify_link:
		'https://www.shecodes.io/workshops/shecodes-online-workshop-60-0/projects/313964',
	title: 'Marilyn the Cat',
	button_text: 'Meet Marilyn',
	img_src: '/src/Marilyn_the_cat_screenshot.png',
	img_position: 'left',
}

const myThreeHomes = {
	headline: 'My first responsive Website: My three homes',
	paragraph: `Willst, feiner Knabe, du mit mir gehn? Meine Töchter sollen dich
						warten schön; Meine Töchter führen den nächtlichen Reihn Und wiegen
						und tanzen und singen dich ein." Mein Vater, mein Vater, und siehst
						du nicht dort Erlkönigs Töchter am düstern Ort? - Mein Sohn, mein
						Sohn, ich seh es genau: Es scheinen die alten Weiden so grau. -`,
	netlify_link: 'https://my-three-homes.netlify.app/',
	title: 'My three Homes',
	button_text: 'Visit home³',
	img_src: '/src/my_three_homes_screenshot.png',
	img_position: 'right',
}

const vanillaWeatherApp = {
	headline: 'My first JavaScript Application: Vanilla Weather App',
	paragraph: `Du liebes Kind, komm, geh mit mir! Gar schöne Spiele spiel ich mit
						dir; Manch bunte Blumen sind an dem Strand, Meine Mutter hat manch
						gülden Gewand." Mein Vater, mein Vater, und hörest du nicht, Was
						Erlenkönig mir leise verspricht? - Sei ruhig, bleibe ruhig, mein
						Kind; In dürren Blättern säuselt der Wind. -`,
	netlify_link: 'https://vanilla-weather-app-js-shecodes.netlify.app/',
	title: 'Vanilla Weather App',
	button_text: 'Show Weather',
	img_src: '/src/vanilla_weather_app_screenshot.png',
	img_position: 'left',
}

const reactWeatherApp = {
	headline: 'My first React Application: React Weather App',
	paragraph: `Du liebes Kind, komm, geh mit mir! Gar schöne Spiele spiel ich mit
						dir; Manch bunte Blumen sind an dem Strand, Meine Mutter hat manch
						gülden Gewand." Mein Vater, mein Vater, und hörest du nicht, Was
						Erlenkönig mir leise verspricht? - Sei ruhig, bleibe ruhig, mein
						Kind; In dürren Blättern säuselt der Wind. -`,
	netlify_link: 'https://react-weather-app-shecodes.netlify.app/',
	title: 'React Weather App',
	button_text: 'Show Weather',
	img_src: '/src/react_weather_app_screenshot.png',
	img_position: 'right',
}

const dictionaryDeluxe = {
	headline: 'My final Project for SheCodes React: Dictionary Deluxe',
	paragraph: `Du liebes Kind, komm, geh mit mir! Gar schöne Spiele spiel ich mit
						dir; Manch bunte Blumen sind an dem Strand, Meine Mutter hat manch
						gülden Gewand." Mein Vater, mein Vater, und hörest du nicht, Was
						Erlenkönig mir leise verspricht? - Sei ruhig, bleibe ruhig, mein
						Kind; In dürren Blättern säuselt der Wind. -`,
	netlify_link: 'https://dictionary-deluxe.netlify.app/',
	title: 'Dictionary Deluxe',
	button_text: 'Open Dictionary',
	img_src: '/src/dictionary_deluxe_screenshot.png',
	img_position: 'left',
}

const pixelArtMaker = {
	headline: 'My first Masterschool JavaScript Project: Pixel Art Maker',
	paragraph: `Du liebes Kind, komm, geh mit mir! Gar schöne Spiele spiel ich mit
						dir; Manch bunte Blumen sind an dem Strand, Meine Mutter hat manch
						gülden Gewand." Mein Vater, mein Vater, und hörest du nicht, Was
						Erlenkönig mir leise verspricht? - Sei ruhig, bleibe ruhig, mein
						Kind; In dürren Blättern säuselt der Wind. -`,
	netlify_link: '#',
	title: 'Pixel Art Maker',
	button_text: 'Create an Artwork',
	img_src: '',
	img_position: 'right',
}

const myMeowBlog = {
	headline: 'Responsive Layout: My Meow Blog',
	paragraph: `Du liebes Kind, komm, geh mit mir! Gar schöne Spiele spiel ich mit
						dir; Manch bunte Blumen sind an dem Strand, Meine Mutter hat manch
						gülden Gewand." Mein Vater, mein Vater, und hörest du nicht, Was
						Erlenkönig mir leise verspricht? - Sei ruhig, bleibe ruhig, mein
						Kind; In dürren Blättern säuselt der Wind. -`,
	netlify_link: 'https://blogpost-project-meow-blog.netlify.app/',
	title: 'My Meow Blog',
	button_text: 'Read my Blog',
	img_src: '/src/my_meow_blog_screenshot.png',
	img_position: 'left',
}

const dinosaurs = {
	headline: 'Object-oriented JavaScript Project: Dinosaurs',
	paragraph: `Du liebes Kind, komm, geh mit mir! Gar schöne Spiele spiel ich mit
						dir; Manch bunte Blumen sind an dem Strand, Meine Mutter hat manch
						gülden Gewand." Mein Vater, mein Vater, und hörest du nicht, Was
						Erlenkönig mir leise verspricht? - Sei ruhig, bleibe ruhig, mein
						Kind; In dürren Blättern säuselt der Wind. -`,
	netlify_link: '#',
	title: 'Dinosaurs',
	button_text: 'Compare yourself to Dinosaurs',
	img_src: '',
	img_position: 'right',
}

const udaciRacer = {
	headline: 'Asynchronous JavaScript Project: Udaci Racer Simulator',
	paragraph: `Du liebes Kind, komm, geh mit mir! Gar schöne Spiele spiel ich mit
						dir; Manch bunte Blumen sind an dem Strand, Meine Mutter hat manch
						gülden Gewand." Mein Vater, mein Vater, und hörest du nicht, Was
						Erlenkönig mir leise verspricht? - Sei ruhig, bleibe ruhig, mein
						Kind; In dürren Blättern säuselt der Wind. -`,
	netlify_link: '#',
	title: 'Udaci Racer',
	button_text: 'Start Race',
	img_src: '',
	img_position: 'left',
}

const myReads = {
	headline: 'React Project: My Reads',
	paragraph: `Du liebes Kind, komm, geh mit mir! Gar schöne Spiele spiel ich mit
						dir; Manch bunte Blumen sind an dem Strand, Meine Mutter hat manch
						gülden Gewand." Mein Vater, mein Vater, und hörest du nicht, Was
						Erlenkönig mir leise verspricht? - Sei ruhig, bleibe ruhig, mein
						Kind; In dürren Blättern säuselt der Wind. -`,
	netlify_link: '#',
	title: 'My Reads',
	button_text: 'Open Library',
	img_src: '',
	img_position: 'right',
}

const employeePolls = {
	headline: 'React Redux Project: Employee Polls',
	paragraph: `Du liebes Kind, komm, geh mit mir! Gar schöne Spiele spiel ich mit
						dir; Manch bunte Blumen sind an dem Strand, Meine Mutter hat manch
						gülden Gewand." Mein Vater, mein Vater, und hörest du nicht, Was
						Erlenkönig mir leise verspricht? - Sei ruhig, bleibe ruhig, mein
						Kind; In dürren Blättern säuselt der Wind. -`,
	netlify_link: 'https://employee-polls-react-redux.netlify.app/',
	title: 'Employee Polls',
	button_text: 'Show Polls',
	img_src: '/src/employee_polls_screenshot.png',
	img_position: 'left',
}

const petBook = {
	headline: 'Final Fullstack Project: Petbook',
	paragraph: `Du liebes Kind, komm, geh mit mir! Gar schöne Spiele spiel ich mit
						dir; Manch bunte Blumen sind an dem Strand, Meine Mutter hat manch
						gülden Gewand." Mein Vater, mein Vater, und hörest du nicht, Was
						Erlenkönig mir leise verspricht? - Sei ruhig, bleibe ruhig, mein
						Kind; In dürren Blättern säuselt der Wind. -`,
	netlify_link: '#',
	title: 'Petbook',
	button_text: 'Create an Account',
	img_src: '',
	img_position: 'right',
}

const apps = [
	marilyntheCat,
	myThreeHomes,
	vanillaWeatherApp,
	reactWeatherApp,
	dictionaryDeluxe,
	pixelArtMaker,
	myMeowBlog,
	dinosaurs,
	udaciRacer,
	myReads,
	employeePolls,
	petBook,
]

// apps.foreach
// if img_position==='left'
// querySelector(.my-apps).innerHTML =
