# OrthoNow Consultation Landing Page Assignment

## Project Overview

This project was created as part of the Namoza Analytics assignment.

The objective was to:

- Create a mobile-friendly consultation landing page using HTML, CSS, and JavaScript.
- Implement a custom dataLayer event for GTM tracking.
- Design a GTM event tracking schema.
- Propose an integration architecture using GTM, GA4, HubSpot CRM, Google Ads, and Karix WhatsApp API.

---

## Project Structure

```
Namoza-Assignment/
│
├── index.html
├── style.css
├── script.js
├── task1-schema.md
├── task3-integration.md
├── pagespeed-score.png
└── README.md
```

---

## Task 1 - GTM Event Tracking Schema

Documented the event tracking plan including:

- Consultation form submission
- Appointment booking funnel tracking
- Call and WhatsApp interactions
- Guide downloads
- Blog engagement events
- Google Ads conversion recommendation

File:

```text
task1-schema.md
```

---

## Task 2 - Landing Page

### Features

- Responsive design
- Consultation lead form
- Name and Phone Number collection
- Trust indicators
- Patient testimonials
- Thank-you state after submission
- Custom dataLayer event tracking

### Custom Event

```javascript
window.dataLayer.push({
  event: "consultation_form_submitted"
});
```

### Lighthouse Score

Mobile Lighthouse Results:

- Performance: 100
- Accessibility: 97
- Best Practices: 100
- SEO: 90

Screenshot included in:

```text
pagespeed-score.png
```

---

## Task 3 - Integration Design

The proposed architecture includes:

- Google Tag Manager (GTM)
- Google Analytics 4 (GA4)
- HubSpot CRM
- Google Ads Conversion Tracking
- Karix WhatsApp API

The document explains:

- User journey
- Data flow
- Lead capture process
- HubSpot contact creation
- Conversion tracking
- Failure handling and monitoring

File:

```text
task3-integration.md
```

---

## How to Run

Open the project folder and start a local server.

Example:

```bash
python -m http.server 8000
```

Then visit:

```text
http://localhost:8000
```

---

## Author

Mohd Bilal