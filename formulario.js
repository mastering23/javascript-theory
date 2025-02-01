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