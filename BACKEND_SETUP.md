# Google Sheets CMS Backend Setup Guide

We have set up a Google Sheets integration to act as the website's content management system (CMS). Your client ("Sir") can update **Our Impact (Stats)** and **Testimonials** directly from a Google Sheet.

Here is how to set it up:

---

## Step 1: Create the Google Sheet
1. Open [Google Sheets](https://sheets.google.com) and create a new blank spreadsheet.
2. Rename the spreadsheet to something like `BTS Website Content`.
3. Create two tabs (sheets) at the bottom of the page, named exactly:
   - **`Stats`**
   - **`Testimonials`**

---

## Step 2: Format the Tabs

### Tab 1: `Stats`
In the first tab, add the following headers in Row 1:
- Column A: **`title`**
- Column B: **`description`**

Fill in the spreadsheet rows starting from Row 2. For example:
| title | description |
| :--- | :--- |
| ✅ 350+ Students Assessed | Helping learners make informed academic and career decisions. |
| ✅ 120+ Career Reports Generated | Personalized assessment reports supporting career clarity. |
| ✅ 95% Parent Satisfaction | Positive feedback from parents and educational stakeholders. |
| ✅ Many Schools & Coaching Centres Contacted | Building partnerships to support student success and guidance. |

---

### Tab 2: `Testimonials`
In the second tab, add the following headers in Row 1:
- Column A: **`name`**
- Column B: **`subtitle`**
- Column C: **`text`**
- Column D: **`initials`** (Optional, e.g. "S", "AT")

Fill in the rows starting from Row 2. For example:
| name | subtitle | text | initials |
| :--- | :--- | :--- | :--- |
| Sangita (standard -12) student | Career Guidance Assessment | The career guidance assessment helped me gain clarity... | S |
| Amaratji Thakor - Parent | Psychometric Assessment for Child | The psychometric assessment helped us better understand... | AT |

---

## Step 3: Make the Spreadsheet Readable by the App
1. Click the **Share** button at the top right of your Google Sheet.
2. Under "General Access", change it from "Restricted" to **"Anyone with the link can view"** (keep it as **Viewer**, do NOT set to Editor).
3. Copy the URL of your Google Sheet. The URL looks like this:
   `https://docs.google.com/spreadsheets/d/1A2B3C4D5E6F7G8H9I0J/edit?usp=sharing`
4. Copy the long string of letters and numbers in the middle (this is your **Sheet ID**). In the example above, it is `1A2B3C4D5E6F7G8H9I0J`.

---

## Step 4: Add the Sheet ID to the Website Env
Create a `.env` file at the root of the `frontend` folder (or set it in your hosting platform like Vercel/Netlify environment variables) with:

```env
VITE_GOOGLE_SHEET_ID=YOUR_COPIED_SHEET_ID
```

*(If this environment variable is blank or missing, the website will automatically fallback to the hardcoded statistics and testimonials, ensuring the site never breaks.)*

---

## Step 5: Share Edit Access with Sir
Simply click the **Share** button in Google Sheets again, type in your client's email address, select **Editor**, and send it to him. 

He can now bookmark that spreadsheet link and update it whenever he wants!
