// When you click the logo button it'll take you to your subscriptions page
// instead


setInterval(() => {
	const logo = document.querySelector('a#logo');
	if (logo) logo.setAttribute('href', '/feed/subscriptions');
}, 1000);