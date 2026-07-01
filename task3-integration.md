# Task 3 - Integration Design

For this implementation, I would use HubSpot Forms API, Google Tag Manager (GTM), Google Analytics 4 (GA4), Google Ads Conversion Tracking, and Karix WhatsApp API.

When a user lands on the consultation page and submits the form, the first action will be a dataLayer push from the front-end. This event will be named `consultation_form_submitted` and will contain details such as phone number, clinic preference, source, and timestamp.

GTM will listen for this custom event and send it to GA4. The same event will also be configured as a conversion so that marketing performance can be measured accurately.

At the same time, the form data will be sent to a backend endpoint, which will communicate with HubSpot using the Forms API. The contact record will contain:

- Name
- Phone Number
- Clinic Preference
- Source = Google Ads - Consultation Landing Page
- Lead Status = New Enquiry

One important consideration is HubSpot deduplication. HubSpot primarily uses email for duplicate detection, but this form does not collect email addresses. Therefore, before creating a new contact, the backend should search HubSpot using the phone number. If a matching phone number already exists, the existing contact should be updated instead of creating a new record.

Once the contact is successfully created or updated, the backend will trigger a WhatsApp confirmation message through the Karix WhatsApp Business API. The patient should receive the message within two minutes of form submission.

The biggest failure point in this setup is API failure between the website and HubSpot. If HubSpot is unavailable or returns an error, lead data could be lost. To avoid this, all submissions should first be stored in a database or queue before sending them to HubSpot. Failed requests can then be retried automatically.

The WhatsApp SLA may be affected by API downtime, network issues, or delays from the WhatsApp provider. To monitor this, application logs, API response monitoring, and alerting should be implemented. Any message that is not delivered within the expected time window should generate a notification for investigation.

The primary Google Ads conversion imported from this setup would be `consultation_form_submitted` because it represents a high-intent lead and directly supports campaign optimization.