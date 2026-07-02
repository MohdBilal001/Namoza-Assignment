# OrthoNow Consultation Landing Page Assignment

## Project Overview

This project was created as part of the Namoza Analytics assignment.

The solution is built using **HTML5, CSS3, and Vanilla JavaScript** in a **single self-contained HTML file**, as required. It demonstrates a consultation landing page with lead capture, client-side event tracking, and supporting documentation for analytics implementation.

---

## Project Structure

```
Namoza-Assignment/
│
├── index.html
├── task1-schema.md
├── task3-integration.md
├── pagespeed-score.png
└── README.md
```

---

## Technologies Used

- HTML5
- CSS3
- Vanilla JavaScript
- Google Tag Manager (Concept)
- Google Analytics 4 (Concept)
- HubSpot CRM (Integration Design)
- Google Ads Conversion Tracking (Concept)

---

## Task 1 - GTM Event Tracking Schema

This document contains the proposed event tracking plan, including:

- Consultation form submission
- Appointment booking funnel
- Call button tracking
- WhatsApp click tracking
- Patient guide downloads
- Blog engagement events
- Recommended Google Ads conversion event

**File:**

```
task1-schema.md
```

---

## Task 2 - Landing Page

### Features

- Responsive design
- Hero section
- Consultation form
- Trust indicators
- Patient testimonials
- Thank You message after form submission
- Custom `dataLayer.push()` implementation
- Mobile-optimized layout

### Custom Event

```javascript
window.dataLayer.push({
  event: "consultation_form_submitted"
});
```

### Lighthouse Performance

Mobile Lighthouse Results:

- Performance: 100
- Accessibility: 97
- Best Practices: 100
- SEO: 90

Screenshot included:

```
pagespeed-score.png
```

---

## Task 3 - Integration Design

The proposed architecture explains integration with:

- Google Tag Manager (GTM)
- Google Analytics 4 (GA4)
- HubSpot CRM
- Google Ads Conversion Tracking
- Karix WhatsApp API

The document includes:

- User journey
- Data flow
- Lead capture process
- HubSpot integration approach
- Conversion tracking
- Error handling and monitoring

**File:**

```
task3-integration.md
```

---

## Running the Project

Since the project is a static HTML page, simply open **index.html** in any modern web browser.

Alternatively, you can run a local server:

```bash
python -m http.server 8000
```

Then open:

```
http://localhost:8000
```

---

## Author

**Mohd Bilal**