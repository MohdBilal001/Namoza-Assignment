# Task 1 - GTM Event Tracking Schema

## Event Tracking Plan

| Event Name | Trigger | Parameters | Purpose |
|------------|----------|------------|---------|
| consultation_form_submitted | Form Submit | user_name, phone_number, clinic_preference, source, timestamp | Track lead generation |
| appointment_step_1_complete | Custom Event | clinic_location, specialty, step_number | Track booking funnel step 1 |
| appointment_step_2_complete | Custom Event | patient_name, preferred_date, step_number | Track booking funnel step 2 |
| appointment_step_3_complete | Custom Event | booking_id, clinic_location, step_number | Track booking funnel step 3 |
| appointment_booking_completed | Booking Confirmation | booking_id, clinic_location, specialty | Track successful appointment booking |
| call_now_click | Click Trigger | phone_number, page_url | Measure phone call intent |
| whatsapp_click | Click Trigger | page_url, source | Measure WhatsApp engagement |
| patient_guide_download | File Download Trigger | file_name, page_url | Measure content downloads |
| clinic_page_view | Page View | clinic_name, city | Measure clinic page performance |
| blog_scroll_50 | Scroll Depth Trigger | article_title, category | Measure content engagement |
| blog_scroll_90 | Scroll Depth Trigger | article_title, category | Identify highly engaged readers |

---

# Appointment Booking Funnel

The appointment booking process is divided into three steps.

## Step 1 - Clinic and Specialty Selection

Event:

```json
{
  "event": "appointment_step_1_complete",
  "step_number": 1,
  "clinic_location": "Bengaluru",
  "specialty": "Orthopaedics"
}
```

---

## Step 2 - Patient Information

Event:

```json
{
  "event": "appointment_step_2_complete",
  "step_number": 2,
  "patient_name": "Bilal",
  "preferred_date": "2026-07-05"
}
```

---

## Step 3 - Appointment Confirmation

Event:

```json
{
  "event": "appointment_step_3_complete",
  "step_number": 3,
  "booking_id": "BK12345",
  "clinic_location": "Bengaluru"
}
```

---

## Final Conversion Event

```json
{
  "event": "appointment_booking_completed",
  "booking_id": "BK12345",
  "clinic_location": "Bengaluru",
  "specialty": "Orthopaedics"
}
```

---

# Funnel Analysis

The funnel can be analyzed in GA4 Funnel Exploration.

Example:

Step 1 Users: 1000

↓

Step 2 Users: 700

↓

Step 3 Users: 500

↓

Booking Completed: 400

### Drop-Off Analysis

- Step 1 → Step 2 = 30% Drop-Off
- Step 2 → Step 3 = 28.5% Drop-Off
- Step 3 → Booking Complete = 20% Drop-Off

This helps identify where users abandon the booking process and where improvements are required.

---

# Google Ads Conversion Recommendation

Recommended Conversion Event:

```text
appointment_booking_completed
```

Reason:

- Represents a completed appointment booking.
- Strongest indicator of business value.
- Helps Google Ads optimize campaigns for high-quality leads.
- More reliable than clicks, downloads, or WhatsApp interactions.

Events such as `call_now_click`, `whatsapp_click`, and `patient_guide_download` should be treated as secondary engagement events rather than primary conversions.