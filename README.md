#  Bulk Import CSV (Full-Stack Project)

A full-stack web application that allows users to upload CSV files, validate data, and view import results in a clean and interactive UI.

---

##  Features

*  Upload CSV files
*  Validate each row (name & price)
*  Show detailed error messages
*  Display success and error counts
*  Preview CSV data before upload
*  Download error report as CSV
*  View uploaded products in a table
*  Loading spinner during upload
*  Navbar with actions (Upload, Clear, Show Uploaded, Logout)
*  Simple Login system

---


### Frontend

* React (Vite)
* Axios
* CSS (Custom styling)

### Backend

* Node.js
* Express
* CORS

---

## Project Structure




---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```
git clone <your-repo-link>
cd bulk-import-pro
```

---

### 2️⃣ Setup Backend

```
cd server
npm install
node server.js
```

Server will run on:

```
http://localhost:5000
```

---

### 3️⃣ Setup Frontend

```
cd client
npm install
npm run dev
```

Frontend will run on:

```
http://localhost:5173
```

---

## 📄 CSV Format

Your CSV file must follow this structure:

```
name,price
LCD TV,1000
Phone,500
```

### Invalid Cases

* Missing columns
* Non-numeric price
* Empty rows

---

## Login Credentials

```
Username: admin@gmail.com
Password: 1234
```

---

##  Application Flow

1. User logs in
2. Uploads a CSV file
3. File is validated
4. Preview is shown
5. User clicks Upload
6. Results are displayed
7. User can view uploaded data

---

##  API Endpoints

### POST `/api/import`

* Upload CSV data
* Returns:

  * successCount
  * errorCount
  * errors
  * valid data

---

### GET `/api/products`

* Returns uploaded products

---

### GET `/api/history`

* Returns import history

---

##  Validation Rules

* `name` is required
* `price` is required
* `price` must be a number
* `price` must be greater than 0

---

## 💡 Future Improvements

*  JWT Authentication
*  MongoDB integration
*  Drag & Drop upload
*  Import history UI
*  UI enhancement with Tailwind CSS

---


Developed as a learning project for mastering:

* React
* Node.js
* File handling
* API development

---

