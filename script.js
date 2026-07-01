window.dataLayer = window.dataLayer || [];

document
.getElementById("consultationForm")
.addEventListener("submit", function (e) {

    e.preventDefault();

    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;

    window.dataLayer.push({
        event: "consultation_form_submitted",
        user_name: name,
        phone_number: phone,
        page_type: "consultation_landing_page",
        source: "google_ads",
        timestamp: new Date().toISOString()
    });

    console.log("DataLayer Event Fired:");
    console.log(window.dataLayer);

    document.getElementById("formSection").style.display = "none";
    document.getElementById("thankYou").style.display = "block";
});