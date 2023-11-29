const activePage = window.location.pathname

const naviLinks = document.querySelectorAll('nav a').forEach(link => {
    if (link.href.includes(`${activePage}`)) {
        link.classList.add('active')
    }

    if (activePage == '/') {
        naviLinks.classList.remove('active')
    }
});

