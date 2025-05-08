export default defineAppConfig({
	shadcnDocs: {
		site: {
			name: 'Shieldy Wiki',
			description: 'Открытая база знаний Shieldy.cc',
		},
		theme: {
			customizable: false,
			color: 'yellow',
			radius: 1,
		},
		header: {
			title: 'Shieldy',
			showTitle: true,
			darkModeToggle: true,
			logo: {
				light: 'https://shieldy.cc/logo-gradient.svg',
				dark: 'https://shieldy.cc/logo-gradient.svg',
			},
			nav: [],
			links: [
				{
					icon: 'lucide:github',
					to: 'https://github.com/Shieldy-VPN/shieldy-wiki',
					target: '_blank',
				},
			],
		},
		aside: {
			useLevel: true,
			collapse: false,
		},
		main: {
			breadCrumb: true,
			showTitle: true,
		},
		footer: {
			credits: '© Shieldy 2025',
			links: [
				{
					icon: 'lucide:github',
					to: 'https://github.com/Shieldy-VPN/shieldy-wiki',
					target: '_blank',
				},
			],
		},
		toc: {
			enable: true,
			title: 'На этой странице',
			links: [
				{
					title: 'Поставить звёздочку',
					icon: 'lucide:star',
					to: 'https://github.com/Shieldy-VPN/shieldy-wiki',
					target: '_blank',
				}, {
					title: 'Сообщить об ошибке',
					icon: 'lucide:circle-dot',
					to: 'https://github.com/Shieldy-VPN/shieldy-wiki/issues',
					target: '_blank',
				},
			],
		},
		search: {
			enable: true,
			inAside: false,
		},
	},
})