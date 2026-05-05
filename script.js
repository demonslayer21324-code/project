document.getElementById("submitBtn").addEventListener("click", async () => {
    const name = document.getElementById("name").value.trim();
    const perfume = document.getElementById("perfume").value.trim();
    const review = document.getElementById("review").value.trim();
    const status = document.getElementById("status");

    if (!name || !perfume || !review) {
        status.textContent = "Please fill all fields!";
        status.style.color = "red";
        return;
    }

    const response = await fetch("/add_review", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({ name, perfume, review })
    });

    const result = await response.json();

    if (result.success) {
        const reviewsList = document.getElementById("reviewsList");
        const li = document.createElement("li");
        li.innerHTML = `<strong>${name}</strong> on <em>${perfume}</em>: ${review}`;
        reviewsList.appendChild(li);

        status.textContent = "Review submitted!";
        status.style.color = "green";

        // Clear inputs
        document.getElementById("name").value = "";
        document.getElementById("perfume").value = "";
        document.getElementById("review").value = "";
    } else {
        status.textContent = result.message;
        status.style.color = "red";
    }
});document.getElementById("submitBtn").addEventListener("click", async () => {
    const name = document.getElementById("name").value.trim();
    const perfume = document.getElementById("perfume").value.trim();
    const review = document.getElementById("review").value.trim();
    const status = document.getElementById("status");

    if (!name || !perfume || !review) {
        status.textContent = "Please fill all fields!";
        status.style.color = "red";
        return;
    }

    const response = await fetch("/add_review", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({ name, perfume, review })
    });

    const result = await response.json();

    if (result.success) {
        const reviewsList = document.getElementById("reviewsList");
        const li = document.createElement("li");
        li.innerHTML = `<strong>${name}</strong> on <em>${perfume}</em>: ${review}`;
        reviewsList.appendChild(li);

        status.textContent = "Review submitted!";
        status.style.color = "green";

        // Clear inputs
        document.getElementById("name").value = "";
        document.getElementById("perfume").value = "";
        document.getElementById("review").value = "";
    } else {
        status.textContent = result.message;
        status.style.color = "red";
    }
});