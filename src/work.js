function displayAppHtml(app) {
	const appHtml = `<div class="col-md-6 work-app-col">
					<a href ="${app.netlify_link}" target="_blank" title="To ${app.title} Website">
          <img
						src="/src/img/${app.img_src}"
						alt="${app.title}"
						class="img-fluid"
					/>
          </a>
					<h4 class="text-center mt-3">${app.title}</h4>
					<a href="${app.github_link}" target="_blank" title="My Code on Github" class="work-github-link">
					<p class="text-center">${app.tech_stack}</p></a>
				</div>`

	return appHtml
}

const marilyntheCat = {
	netlify_link:
		'https://www.shecodes.io/workshops/shecodes-online-workshop-60-0/projects/313964',
	title: 'Marilyn the Cat',
	img_src: 'Marilyn_the_cat_screenshot.png',
	tech_stack: 'Built with HTML, CSS and JavaScript',
	github_link: 'https://github.com/psyjulga/marilyn-the-cat',
}

const myThreeHomes = {
	netlify_link: 'https://my-three-homes.netlify.app/',
	title: 'My three Homes',
	img_src: 'my_three_homes_screenshot.png',
	tech_stack: 'Built with HTML and CSS',
	github_link: 'https://github.com/psyjulga/my-three-homes',
}

const vanillaWeatherApp = {
	netlify_link: 'https://vanilla-weather-app-js-shecodes.netlify.app/',
	title: 'Vanilla Weather App',
	img_src: 'vanilla_weather_app_screenshot.png',
	tech_stack: 'Built with HTML, CSS and JavaScript',
	github_link: 'https://github.com/psyjulga/Vanilla-Weather-App',
}

const reactWeatherApp = {
	netlify_link: 'https://react-weather-app-shecodes.netlify.app/',
	title: 'React Weather App',
	img_src: 'react_weather_app_screenshot.png',
	tech_stack: 'Built with React and CSS',
	github_link: 'https://github.com/psyjulga/react-weather-app',
}

const dictionaryDeluxe = {
	netlify_link: 'https://dictionary-deluxe.netlify.app/',
	title: 'Dictionary Deluxe',
	img_src: 'dictionary_deluxe_screenshot.png',
	tech_stack: 'Built with React and CSS',
	github_link: 'https://github.com/psyjulga/dictionary-deluxe',
}

const pixelArtMaker = {
	netlify_link: 'https://pixel-art-maker-project.netlify.app/',
	title: 'Pixel Art Maker',
	img_src: '/pixel_art_maker_screenshot.png',
	tech_stack: 'Built with JavaScript',
	github_link: 'https://github.com/psyjulga/js-project-pixel-art-maker',
}

const myMeowBlog = {
	netlify_link: 'https://blogpost-project-meow-blog.netlify.app/',
	title: 'My Meow Blog',
	img_src: 'my_meow_blog_screenshot.png',
	tech_stack: 'Built with HTML and CSS',
	github_link: 'https://github.com/psyjulga/blogpost-project',
}

const dinosaurs = {
	netlify_link: 'https://dinosaurs-project.netlify.app/',
	title: 'Dinosaurs',
	img_src: 'dinosaurs_screenshot.png',
	tech_stack: 'Built with JavaScript',
	github_link: 'https://github.com/psyjulga/my-dinosaur-project',
}

const udaciRacer = {
	netlify_link: 'https://github.com/psyjulga/udaci-racer-project',
	title: 'Udaci Racer',
	img_src: 'udaci_racer_screenshot.png',
	tech_stack: 'Built with JavaScript, NodeJS and Express',
	github_link: 'https://github.com/psyjulga/udaci-racer-project',
}

const myReads = {
	netlify_link: 'https://react-my-reads-project.netlify.app/',
	title: 'My Reads',
	img_src: 'my_reads_screenshot.png',
	tech_stack: 'Built with React',
	github_link: 'https://github.com/psyjulga/react-project-myreads',
}

const employeePolls = {
	netlify_link: 'https://employee-polls-react-redux.netlify.app/',
	title: 'Employee Polls',
	img_src: 'employee_polls_screenshot.png',
	tech_stack: 'Built with React, Redux, Jest and CSS',
	github_link: 'https://github.com/psyjulga/React-Redux-project-employee-polls',
}

const petBook = {
	netlify_link: 'https://github.com/psyjulga/petbook-project',
	title: 'Petbook',
	img_src: 'petbook_screenshot.png',
	tech_stack:
		'Currently building with React, Redux, Typescript, NodeJS, Express, PostgreSQL, Jest and CSS',
	github_link: 'https://github.com/psyjulga/petbook-project',
}

const gardenStores = {
	netlify_link: 'https://gardenstores-project.netlify.app/',
	title: 'Gardenstores',
	img_src: 'gardenstores_screenshot.png',
	tech_stack: 'Built with React, JavaScript and CSS',
	github_link: 'https://github.com/psyjulga/gardenstores-project',
}

const apps = [
	gardenStores,
	petBook,
	employeePolls,
	myReads,
	udaciRacer,
	dinosaurs,
	myMeowBlog,
	pixelArtMaker,
	dictionaryDeluxe,
	reactWeatherApp,
	vanillaWeatherApp,
	myThreeHomes,
	marilyntheCat,
]

let html = ''
let pre = '<div class="row">'
let post = '</div>'

apps.forEach((app, index) => {
	if (index % 2 === 0) {
		html += pre
		let htmlFragment = displayAppHtml(app)
		html += htmlFragment
	}

	if (index % 2 !== 0) {
		let htmlFragment = displayAppHtml(app)
		html += htmlFragment
		html += post
	}
})

const entryPoint = document.querySelector('.my-apps')
entryPoint.innerHTML = html
