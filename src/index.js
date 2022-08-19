function displayAppImgLeftHtml(app) {
	const appHtml = `<div class="row m-5">
		<div class="col-6">
			<img
				src="/src/img/${app.img_src}"
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
	</div>
	<br />
	<hr />
	<br />`

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
				src="/src/img/${app.img_src}"
				alt="${app.title}"
				class="img-fluid d-none d-md-block"
			/>
		</div>
	</div>
	<br />
	<hr />
	<br />`

	return appHtml
}

const marilyntheCat = {
	headline: 'The first Website I ever built: Marilyn the Cat',
	paragraph: `After accomplishing my first coding workshop, which lasted three weeks and provided basic HTML,
	          CSS and JavaScript knowledge, we were asked to choose a final project.
						As a cat lover, I decided to create a website about my cat Marilyn.
						This website showcases my ability to build a static webpage
						with a nice design and some very basic JavaScript.
						Have a look yourself - and don't forget to "meet Marilyn" 😼`,
	netlify_link:
		'https://www.shecodes.io/workshops/shecodes-online-workshop-60-0/projects/313964',
	title: 'Marilyn the Cat',
	button_text: 'Meet Marilyn',
	img_src: 'Marilyn_the_cat_screenshot.png',
	img_position: 'left',
}

const myThreeHomes = {
	headline: 'My first responsive Website: My three homes',
	paragraph: `After the basic workshop, I went on diving into coding, learnt more about
	            the colorful world of HTML and CSS, including the modern tools of making a
							website responsive.
							"Mobile first" was our motto. As part of this course I built the my three homes page
							displaying information about my hometown, adopted home and home-in-law.
							Curious? Let's have a visit ... 🏡`,
	netlify_link: 'https://my-three-homes.netlify.app/',
	title: 'My three Homes',
	button_text: 'Visit home³',
	img_src: 'my_three_homes_screenshot.png',
	img_position: 'right',
}

const vanillaWeatherApp = {
	headline: 'My first JavaScript Application: Vanilla Weather App',
	paragraph: `Not just colorful but powerful - that's JavaScript!
	            We learnt about external APIs and how to make http requests
							to load data and display them on our website.
							It's an amazing experience to create a weather app yourself -
							useful, colorful, powerful. 🌈`,
	netlify_link: 'https://vanilla-weather-app-js-shecodes.netlify.app/',
	title: 'Vanilla Weather App',
	button_text: 'Show Weather',
	img_src: 'vanilla_weather_app_screenshot.png',
	img_position: 'left',
}

const reactWeatherApp = {
	headline: 'My first React Application: React Weather App',
	paragraph: `JavaScript today can't be imagined today without its countless
	            libraries and frameworks.
							One of the most popular ones ist React. We learned about the
							basics, step by step, and proved our understanding by 
							building the very same weather application anew.
							This time using React instead of vanilla JS. 🌞
							`,
	netlify_link: 'https://react-weather-app-shecodes.netlify.app/',
	title: 'React Weather App',
	button_text: 'Show Weather',
	img_src: 'react_weather_app_screenshot.png',
	img_position: 'right',
}

const dictionaryDeluxe = {
	headline: 'My final Project for SheCodes React: Dictionary Deluxe',
	paragraph: `Half happy, half sad, I built my very final SheCodes project.
	            Sad, because I knew this was the last part of this first journey,
							having felt so comfortable with the amazing SheCodes team and
							their support. Happy, because it was so stunning to bring all
							my newly learned skills together to create a responsive
							dictionary application with a custom styling, which I am still
							enthusiastic about to use myself! 📗`,
	netlify_link: 'https://dictionary-deluxe.netlify.app/',
	title: 'Dictionary Deluxe',
	button_text: 'Open Dictionary',
	img_src: 'dictionary_deluxe_screenshot.png',
	img_position: 'left',
}

const pixelArtMaker = {
	headline: 'My first Masterschool JavaScript Project: Pixel Art Maker',
	paragraph: `After the game is before the game!
	            In December 2021 I started the Masterschool Web Development
							coding bootcamp. What a crazy journey lying ahead!
							The first course provided HTML, CSS and JavaScript
							fundamentals again, but way more detailed than I knew before.
							So the JS project was a bit tricky, as we had to use nested
							loops to make this Pixel Art Maker work!
							Do you feel like painting? 🎨`,
	netlify_link: 'https://pixel-art-maker-project.netlify.app/',
	title: 'Pixel Art Maker',
	button_text: 'Create an Artwork',
	img_src: '/pixel_art_maker_screenshot.png',
	img_position: 'right',
}

const myMeowBlog = {
	headline: 'Responsive Layout: My Meow Blog',
	paragraph: `The far most easy project throughout my Masterschool program,
	            as our responsive blogpage consisted of just HTML and CSS.
							But don't underestimate that!
							CSS grid can be quite tricky, and it took me several tries
							to make it as perfect as possible.
							I am a huge fan of colors, design and therefore CSS -
							and so I had tons of fun creating my meow blog! 🐈
							`,
	netlify_link: 'https://blogpost-project-meow-blog.netlify.app/',
	title: 'My Meow Blog',
	button_text: 'Read my Blog',
	img_src: 'my_meow_blog_screenshot.png',
	img_position: 'left',
}

const dinosaurs = {
	headline: 'Object-oriented JavaScript Project: Dinosaurs',
	paragraph: `From cats to dinosaurs, which I also love a lot!
	            To accomplish this final project of our
							object-oriented JavaScript course I had to apply
							everything we learned in the lessons as well as to 
							extend that knowledge, do my own research,
							be creative and refactor again.
							A challenging and rewarding task. And on my further
							coding journey I soon realized how important it is to
							have a solid understanding of object orientation.
							Every journey starts with that first step! 👣`,
	netlify_link: 'https://dinosaurs-project.netlify.app/',
	title: 'Dinosaurs',
	button_text: 'Compare yourself to Dinosaurs',
	img_src: 'dinosaurs_screenshot.png',
	img_position: 'right',
}

const udaciRacer = {
	headline: 'Asynchronous JavaScript Project: Udaci Racer Simulator',
	paragraph: `This was the most challenging project for me.
	            We were given lots of startercode with gaps and comments,
							and it took me some while to track every function back
							and see the whole picture.
							I felt like a private detective following traces, finding
							and creating the
							missing pieces and put it all together.
							Logic, creativity, perseverance and the principle of
							trial and failure led me to success! 🏁`,
	netlify_link: '#',
	title: 'Udaci Racer',
	button_text: 'Start Race',
	img_src: 'alice.jpg',
	img_position: 'left',
}

const myReads = {
	headline: 'React Project: My Reads',
	paragraph: `Back to React!
	            It was only now when I realized how much I had missed it!
							We learnt about the JavaScript library again, going much
							deeper than I had ever gone before.
							It took me some time to really get it, but I stick with
							the process of learning, trying again, going through the logic again.
							React simplifies frontend development so much, and it was 
							demanding and rewarding at the same time to build the my reads projects. 📖
							`,
	netlify_link: 'https://react-my-reads-project.netlify.app/',
	title: 'My Reads',
	button_text: 'Open Library',
	img_src: 'my_reads_screenshot.png',
	img_position: 'right',
}

const employeePolls = {
	headline: 'React Redux Project: Employee Polls',
	paragraph: `Masterschool React part two - welcome to Redux!
	            In big applications, it's all about state management.
							A lot new stuff to learn in the first place,
							but amazing to apply throughout the course and in
							the final project.
							We built employee polls all from scratch, so I didn't only have the
							opportunity to work with React and Redux, but also CSS again. 💛`,
	netlify_link: 'https://employee-polls-react-redux.netlify.app/',
	title: 'Employee Polls',
	button_text: 'Show Polls',
	img_src: 'employee_polls_screenshot.png',
	img_position: 'left',
}

const petBook = {
	headline: 'Final Fullstack Project: Petbook',
	paragraph: `After two backend courses with an image API project
	            and a shopping app API project, where we used NodeJS, Express, 
							Typescript and Jest, we combined our
							knowledge of frontend and backend development to build a
							fullstack project.
							The very last - the final Masterschool project.
							Petbook is a facebook for pet owners -
							come and create an account yourself! 🐹 
							⚠THIS WORK IS STILL IN PROGRESS⚠`,
	netlify_link: '#',
	title: 'Petbook',
	button_text: 'Create an Account',
	img_src: 'alice.jpg',
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

let html = ''

apps.forEach((app) => {
	if (app.img_position === 'left') {
		let htmlFragment = displayAppImgLeftHtml(app)
		html += htmlFragment
	}
	if (app.img_position === 'right') {
		let htmlFragment = displayAppImgRightHtml(app)
		html += htmlFragment
	}
})

const entryPoint = document.querySelector('.my-apps')
entryPoint.innerHTML = html
