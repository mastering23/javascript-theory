function renderPage() {
    const container = document.createElement('div');
    document.body.appendChild(container); // Append the container to the body

    // Define the content for each page with unique IDs or classes
    const pages = {
        home: `
            <h1>Hello World</h1>
            <nav>
                <ul>
                    <li><a href="#" onclick="loadPage('home')">Home</a></li>
                    <li><a href="#" onclick="loadPage('about')">About</a></li>
                    <li><a href="#" onclick="loadPage('contact')">Contact</a></li>
                </ul>
            </nav>
           
            <section id="home-section"> 
            <center><img id="image-home" src="/img/image.png" alt="coding art images" ></center>          
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. This is the Home section.</p>
            </section>
            <footer>
                <p>&copy; 2025 Copyright</p>
            </footer>
        `,
        about: `
            <h1>About</h1>
            <nav>
                <ul>
                    <li><a href="#" onclick="loadPage('home')">Home</a></li>
                    <li><a href="#" onclick="loadPage('about')">About</a></li>
                    <li><a href="#" onclick="loadPage('contact')">Contact</a></li>
                </ul>
            </nav>
            <section id="about-section">
                <p>This is the about section. Lorem ipsum dolor sit amet.</p>
                <form id="feedbackForm">
                    <label for="name">Name:</label><br>
                    <input type="text" id="name" name="name" required><br><br>
                    
                    <label for="email">Email:</label><br>
                    <input type="email" id="email" name="email" required><br><br>
                    
                    <label for="phone">Phone:</label><br>
                    <input type="tel" id="phone" name="phone" required><br><br>
                    
                    <label for="comment">Comment:</label><br>
                    <textarea id="comment" name="comment" rows="4" required></textarea><br><br>
                    
                    <button id="submitBtn" type="submit">Submit</button>
                </form>
                <section id="feedbackSection"></section>
            </section>
            <footer>
                <p>&copy; 2025 Copyright</p>
            </footer>
        `,
        contact: `
            <h1>Contact</h1>
            <nav>
                <ul>
                    <li><a href="#" onclick="loadPage('home')">Home</a></li>
                    <li><a href="#" onclick="loadPage('about')">About</a></li>
                    <li><a href="#" onclick="loadPage('contact')">Contact</a></li>
                </ul>
            </nav>
            <section id="contact-section">
                <p>This is the contact section. Lorem ipsum dolor sit amet.</p>
            </section>
            <footer>
                <p>&copy; 2025 Copyright</p>
            </footer>
        `
    };

    // Function to load a page based on the parameter
    window.loadPage = function(page) {
        container.innerHTML = pages[page] || pages.home; // Default to home if invalid page is requested

        // Check if the about page is loaded, then add the feedback form logic
        if (page === 'about') {
            const submitButton = document.getElementById("submitBtn");
            if (submitButton) {
                submitButton.addEventListener("click", function(event) {
                    event.preventDefault();
                    GetUserFeedBack(); // Call the feedback function
                });
            }
        }
    };

    // Initially load the home page
    loadPage('home');
}

window.onload = renderPage;


// Feedback form handling script
let dataBd = [{
    user: {
        name: [],
        email: [],
        phone: [],
        comment: []
    }
}];

const GetUserFeedBack = () => {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const comment = document.getElementById("comment").value;

    dataBd[0].user.name.push(name);
    dataBd[0].user.email.push(email);
    dataBd[0].user.phone.push(phone);
    dataBd[0].user.comment.push(comment);

    const feedbackSection = document.getElementById("feedbackSection");

    const userFeedback = document.createElement("div");
    userFeedback.classList.add("userFeedback");

    userFeedback.innerHTML = `
        <h2>User Feedback:</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Comment:</strong> ${comment}</p>
    `;

    feedbackSection.appendChild(userFeedback);

    document.getElementById("feedbackForm").reset();
};