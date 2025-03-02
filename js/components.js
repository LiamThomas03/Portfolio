document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("header").innerHTML = `
        <header>
            <nav>
                <div class="menu-toggle" onclick="toggleMenu()">☰</div>
                <ul id="nav-links">
                    <li><a href="index.html">Home</a></li>
                    <li><a href="portfolio.html">Portfolio</a></li>
                    <li><a href="contact.html">Contact</a></li>
                </ul>
            </nav>
        </header>
    `;

    document.getElementById("footer").innerHTML = `
        <footer>
            <p>Liam Thomas - ${new Date().getFullYear()}</p>
            <a href="https://www.flaticon.com/free-icons/email" title="email icons">Email icons created by Delwar018 - Flaticon</a>
            <a href="https://www.flaticon.com/free-icons/linkedin" title="linkedin icons">Linkedin icons created by Freepik - Flaticon</a>
            <a href="https://www.flaticon.com/free-icons/github" title="github icons">Github icons created by Pixel perfect - Flaticon</a>
            <br><a href="https://github.com/LiamThomas03/Portfolio" title="Github Project">Github Project for this website</a>
        </footer>
    `;
});