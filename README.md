# Project Name: DocMate [Live Link](https://doc-mate-two.vercel.app)


## Short Description of DocMate
**DocMate** is a cutting-edge healthcare web application that combines the power of Next.js and AI technologies to deliver a seamless and intelligent healthcare experience. Built using modern tools like Next.js, Mongoose, NextAuth, Tailwind CSS, Daisy UI, and more, DocMate is designed to serve three types of users: patients, doctors, and admins—each with their own unique roles and capabilities.

Patients can easily browse a comprehensive list of verified doctors and book appointments with just a few clicks. They also have access to a personalized dashboard where they can view their appointment history, reports, and status updates. Users interested in becoming doctors can fill out a dedicated request form to apply for a doctor role.

Doctors, once approved, gain access to their own dashboard where they can view incoming appointment requests, accept or reject them, and manage their list of patients.

Admins have full control over the system. They can view and manage all doctors and patients, approve or remove doctor accounts, and ensure the overall health of the platform.

DocMate aims to simplify and digitize the healthcare appointment process while offering a structured, role-based system to ensure secure, efficient, and user-friendly interactions between patients and healthcare providers.


## Challenges Faced During DocMate Development:  
While developing **DocMate**, our four-member team faced several challenges. Implementing NextAuth with email-password authentication was initially tricky, as we had to deeply understand its flow and configuration. Mongoose was also new to us, making backend development quite challenging, especially when structuring models and handling data operations. Managing role-based access for patients, doctors, and admins required careful planning and testing. We also faced issues with secure routing and maintaining user sessions. Despite these hurdles, we worked together, researched extensively, debugged patiently, and successfully overcame all obstacles to complete the project smoothly and effectively.


## List of the concepts used in the Pratiksha News (প্রতীক্ষা নিউজ)
1. **NextAuth Credentials Provider**
2. **Role-based Access Control (RBAC)**
3. **Json Web Token(JWT)**
4. **Mongoose**
5. **CRUD Operation**
6. **Environment Variables**
7. **Json Web Token(JWT)**


## Technologies Used
- **Next.js**
- **Tailwind CSS**
- **DaisyUI**
- **Node.js & Express**
- **MongoDB**
- **Mongoose**
- **NextAuth.js**

## Npm packages Used
- **Swiper Slider**
- **React Parallax**
- **React-icons**
- **React-toastify**
- **AOS Package**
- **Sweet Alert**
- **React-marquee**

## Key Features of DocMate:
1. **Role-Based Access System:**: Distinct dashboards and permissions for Patients, Doctors, and Admins.

2. **User Authentication with NextAuth:** Secure email and password-based login system using NextAuth.js.

3. **Doctor Appointment Booking:** Patients can easily view available doctors and request appointments.

4. **Dynamic Doctor Application:** Any registered user can apply to become a doctor by submitting a request form.

5. **Doctor Dashboard Functionality:** Doctors can accept or reject appointment requests and view their assigned patients.


6. **Admin Control Panel:** Admins can view, approve, or remove both doctors and patients, fully managing the platform.

7. **Real-Time Dashboard Updates:** Users see live updates of appointments, status, and reports on their personalized dashboards.


8. **Real-time Notifications:** SweetAlert/Toast notifications for successful CRUD operations, authentication, and subscription activities.

9. **MongoDB Integration with Mongoose:** Efficient data handling with schema-based models for users, appointments, and roles.

10. **Modern UI with Tailwind CSS & DaisyUI:** Clean, responsive, and mobile-friendly user interface with pre-styled components.

10. **Secure API Routes:** Protected API endpoints ensure that only authorized users can access and modify data.



## 🚀 Installation Guide

Follow the steps below to set up the **DocMate** project locally on your machine.

### 🔗 Step 1: Clone the Repository

```bash
git clone https://github.com/shafriki/DocMate.git

### 📁 Step 2: Navigate into the Project Directory
cd DocMate

### 📦 Step 3: Install Dependencies
npm install
# or
yarn install

### 🔐 Step 4: Configure Environment Variables
Create a .env.local file in the root directory and add the following:

NEXT_PUBLIC_MONGODB_URI=your_mongodb_connection_string
NEXTAUTH_SECRET=your_nextauth_secret
NEXTAUTH_URL=http://localhost:3000

### ▶️ Step 5: Run the Development Server
npm run dev
# or
yarn dev


Now, open your browser and visit:

http://localhost:3000

🎉 You're all set to explore **DocMate**!




