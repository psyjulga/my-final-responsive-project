function displayAppHtml(app) {
	const appHtml = `<div class="col-md-6 p-3">
					<a href ="${app.netlify_link}" target="_blank" title="${app.title}">
          <img
						src="/src/img/${app.img_src}"
						alt="${app.title}"
						class="img-fluid"
					/>
          </a>
					<h4 class="text-center mt-3">${app.title}</h4>
					<p class="text-center">${app.tech_stack}</p>
				</div>`

	return appHtml
}

const marilyntheCat = {
	netlify_link:
		'https://www.shecodes.io/workshops/shecodes-online-workshop-60-0/projects/313964',
	title: 'Marilyn the Cat',
	img_src: 'Marilyn_the_cat_screenshot.png',
	tech_stack: 'Built with HTML, CSS and JavaScript',
}

const myThreeHomes = {
	netlify_link: 'https://my-three-homes.netlify.app/',
	title: 'My three Homes',
	img_src: 'my_three_homes_screenshot.png',
	tech_stack: 'Built with HTML and CSS',
}

const vanillaWeatherApp = {
	netlify_link: 'https://vanilla-weather-app-js-shecodes.netlify.app/',
	title: 'Vanilla Weather App',
	img_src: 'vanilla_weather_app_screenshot.png',
	tech_stack: 'Built with HTML, CSS and JavaScript',
}

const reactWeatherApp = {
	netlify_link: 'https://react-weather-app-shecodes.netlify.app/',
	title: 'React Weather App',
	img_src: 'react_weather_app_screenshot.png',
	tech_stack: 'Built with React and CSS',
}

const dictionaryDeluxe = {
	netlify_link: 'https://dictionary-deluxe.netlify.app/',
	title: 'Dictionary Deluxe',
	img_src: 'dictionary_deluxe_screenshot.png',
	tech_stack: 'Built with React and CSS',
}

const pixelArtMaker = {
	netlify_link: 'https://pixel-art-maker-project.netlify.app/',
	title: 'Pixel Art Maker',
	img_src: '/pixel_art_maker_screenshot.png',
	tech_stack: 'Built with JavaScript',
}

const myMeowBlog = {
	netlify_link: 'https://blogpost-project-meow-blog.netlify.app/',
	title: 'My Meow Blog',
	img_src: 'my_meow_blog_screenshot.png',
	tech_stack: 'Built with HTML and CSS',
}

const dinosaurs = {
	netlify_link: 'https://dinosaurs-project.netlify.app/',
	title: 'Dinosaurs',
	img_src: 'dinosaurs_screenshot.png',
	tech_stack: 'Built with JavaScript',
}

const udaciRacer = {
	netlify_link: '#',
	title: 'Udaci Racer',
	img_src: '',
	tech_stack: 'Built with JavaScript, NodeJS and Express',
}

const myReads = {
	netlify_link: 'https://react-my-reads-project.netlify.app/',
	title: 'My Reads',
	img_src: 'my_reads_screenshot.png',
	tech_stack: 'Built with React',
}

const employeePolls = {
	netlify_link: 'https://employee-polls-react-redux.netlify.app/',
	title: 'Employee Polls',
	img_src: 'employee_polls_screenshot.png',
	tech_stack: 'Built with React, Redux, Jest and CSS',
}

const petBook = {
	netlify_link: '#',
	title: 'Petbook',
	img_src: '',
	tech_stack:
		'Currently building with React, Redux, NodeJS, Express, PostgreSQL, Jest and CSS',
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
let pre = '<div class="row">'
let post = '</div>'

apps.forEach((app, index) => {
	if (index % 2 !== 0) {
		html += pre
		let htmlFragment = displayAppHtml(app)
		html += htmlFragment
	}

	if (index % 2 === 0) {
		let htmlFragment = displayAppHtml(app)
		html += htmlFragment
		html += post
	}
})

const entryPoint = document.querySelector('.my-apps')
entryPoint.innerHTML = html
