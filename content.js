// When you manually type in the url to the page
if(window.location.hash !== "#home" && window.location.pathname === "/")
	window.location.replace("/feed/subscriptions");

// When you click the logo button it'll take you to your subscriptions page
// instead
document.getElementById("logo").addEventListener('click', () => {
	window.location.replace('/feed/subscriptions');
});

