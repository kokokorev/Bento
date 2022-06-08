// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
	// ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
	// ├┴┐├─┤└─┐││  └─┐
	// └─┘┴ ┴└─┘┴└─┘└─┘

	// General
	name: 'Timur',
	imageBackground: false,
	openInNewTab: true,
	twelveHourFormat: false,

	// Greetings
	greetingMorning: 'good morning,',
	greetingAfternoon: 'good afternoon,',
	greetingEvening: 'good evening,',
	greetingNight: 'go to Sleep,',

	// Layout
	bentoLayout: 'bento', // 'bento', 'lists', 'buttons'

	// Weather
	weatherKey: 'b5376c1b9b913351ec41562c0232bced', // Write here your API Key
	weatherIcons: 'OneDark', // 'Onedark', 'Nord', 'Dark', 'White'
	weatherUnit: 'C', // 'F', 'C'
	language: 'en', // More languages in https://openweathermap.org/current#multi

	trackLocation: true, // If false or an error occurs, the app will use the lat/lon below
	defaultLatitude: '54.318699',
	defaultLongitude: '48.397640',

	// Autochange
	autoChangeTheme: true,

	// Autochange by OS
	changeThemeByOS: true,

	// Autochange by hour options (24hrs format, string must be in: hh:mm)
	changeThemeByHour: false,
	hourDarkThemeActive: '18:30',
	hourDarkThemeInactive: '07:00',

	// ┌┐ ┬ ┬┌┬┐┌┬┐┌─┐┌┐┌┌─┐
	// ├┴┐│ │ │  │ │ ││││└─┐
	// └─┘└─┘ ┴  ┴ └─┘┘└┘└─┘

	firstButtonsContainer: [
		{
			id: '1',
			name: 'notion',
			icon: 'book-open',
			link: 'https://www.notion.so/',
		},
		{
			id: '2',
			name: 'github',
			icon: 'github',
			link: 'https://github.com/',
		},
		{
			id: '3',
			name: 'google drive',
			icon: 'hard-drive',
			link: 'https://drive.google.com/drive/my-drive',
		},
		{
			id: '4',
			name: 'gmail',
			icon: 'inbox',
			link: 'https://mail.google.com/mail/u/0/#inbox',
		},
		{
			id: '5',
			name: 'unity learn',
			icon: 'gamepad',
			link: 'https://learn.unity.com/',
		},
		{
			id: '6',
			name: 'google translate',
			icon: 'languages',
			link: 'https://translate.google.com/',
		},
	],

	secondButtonsContainer: [
		{
			id: '1',
			name: 'Music',
			icon: 'headphones',
			link: 'https://open.spotify.com',
		},
		{
			id: '2',
			name: 'twitter',
			icon: 'twitter',
			link: 'https://twitter.com/',
		},
		{
			id: '3',
			name: 'bot',
			icon: 'bot',
			link: 'https://discord.com/app',
		},
		{
			id: '4',
			name: 'Amazon',
			icon: 'shopping-bag',
			link: 'https://amazon.com/',
		},
		{
			id: '5',
			name: 'Hashnode',
			icon: 'pen-tool',
			link: 'https://hashnode.com/',
		},
		{
			id: '6',
			name: 'Figma',
			icon: 'figma',
			link: 'https://figma.com/',
		},
	],

	// ┬  ┬┌─┐┌┬┐┌─┐
	// │  │└─┐ │ └─┐
	// ┴─┘┴└─┘ ┴ └─┘

	// First Links Container
	firstlistsContainer: [
		{
			icon: 'briefcase',
			id: '1',
			links: [
				{
					name: 'simbirsoft jira',
					link: 'https://jira.simbirsoft.com/secure/RapidBoard.jspa?projectKey=SPORT&rapidView=619',
				},
				{
					name: 'knowledge base',
					link: 'https://kb.simbirsoft.com/',
				},
				{
					name: 's3n',
					link: 'https://s3n.simbirsoft.com/feed',
				},
				{
					name: 'simbirsoft gitlab',
					link: 'https://www.gitlab.simbirsoft/',
				},
			],
		},
		{
			icon: 'bike',
			id: '2',
			links: [
				{
					name: 'sportmaster email',
					link: 'https://mail.sportmaster.ru/owa/?bO=1#path=/mail',
				},
				{
					name: 'sportmaster jira',
					link: 'https://jira.app.local/secure/RapidBoard.jspa?rapidView=27856',
				},
				{
					name: 'testops email',
					link: 'http://al-srv01.gksm.local:8080/project/9/dashboards',
				},
				{
					name: 'testops survey',
					link: 'http://al-srv01.gksm.local:8080/project/38/dashboards',
				},
			],
		},
	],

	// Second Links Container
	secondListsContainer: [
		{
			icon: 'binary',
			id: '1',
			links: [
				{
					name: 'Spotify',
					link: 'https://www.spotify.com',
				},
				{
					name: 'Reddit',
					link: 'https://www.reddit.com',
				},
				{
					name: 'Hashnode',
					link: 'https://www.hashnode.com',
				},
				{
					name: 'Pocket',
					link: 'https://www.pocket.com',
				},
			],
		},
		{
			icon: 'github',
			id: '2',
			links: [
				{
					name: 'Front',
					link: 'https://www.reddit.com/r/Frontend/',
				},
				{
					name: 'Rust',
					link: 'https://www.reddit.com/r/rust/',
				},
				{
					name: 'Go',
					link: 'https://www.reddit.com/r/golang/',
				},
				{
					name: 'Repos',
					link: 'https://github.com/migueravila',
				},
			],
		},
	],
};
