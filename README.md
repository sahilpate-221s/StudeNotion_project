# StudyNotion - Comprehensive Ed-Tech Platform

[![Deployed Website](https://img.shields.io/badge/Website-Visit%20Now-blue?style=for-the-badge&logo=vercel)](https://studynotionapp21.netlify.app/)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)


🔗 **Live Demo:** [https://studynotionapp21.netlify.app](https://studynotionapp21.netlify.app)  
🔗 **GitHub Repo:** [github.com/sahilpate-221s/studynotion](https://github.com/sahilpate-221s/StudyNotion_project)


![StudyNotion Banner](https://res.cloudinary.com/dvpulu3cc/image/upload/v1702489710/Screenshot_2023-12-13_231558_dwyhv3.png)

StudyNotion is a cutting-edge educational technology platform designed to revolutionize the way students learn and instructors teach. Built with the powerful MERN stack (MongoDB, Express.js, React.js, Node.js), this platform offers a seamless, interactive learning experience that bridges the gap between education and technology.

## 🧑‍🏫 Credentials to Login

### 👨‍🎓 As Student
- **Email:** `h@gmail.com`  
- **Password:** `123456`

**or**

- **Email:** `s.sahil007patel@gmail.com`  
- **Password:** `123456`

### 👨‍🏫 As Instructor
- **Email:** `KaranRai@gmail.com`  
- **Password:** `123456`



## 💳 Credentials for Razorpay to Perform Testing Payment
- **Card Type:** Mastercard  
- **Card Number:** 2305 3242 5784 8228  
- **CVV:** 123  
- **Expiry:** 12/29



## 🌟 Project Overview

StudyNotion is more than just an online learning platform - it's a complete ecosystem that empowers both learners and educators. Whether you're a student looking to expand your knowledge or an instructor wanting to share your expertise, StudyNotion provides all the tools you need in one integrated solution.

### 🎯 Key Objectives
- Create an accessible and inclusive learning environment
- Provide robust tools for content creation and management
- Enable seamless interaction between students and instructors
- Offer secure payment processing for course purchases
- Deliver an engaging user experience across all devices

## 🚀 Features & Functionalities

### For Students:
- 🔍 **Course Discovery**: Browse through a diverse catalog of courses with detailed descriptions
- 🛒 **Smart Shopping**: Add courses to wishlist, manage cart, and secure checkout
- 📚 **Interactive Learning**: Access course content including videos, documents, and quizzes
- ⭐ **Community Engagement**: Rate and review courses to help others make informed decisions
- 👤 **Personalized Dashboard**: Manage profile, track enrolled courses, and view learning progress
- 💳 **Secure Payments**: Integrated Razorpay for safe and reliable transactions

### For Instructors:
- 🎨 **Course Creation Suite**: Intuitive tools to create, edit, and manage courses
- 📊 **Analytics Dashboard**: Real-time insights into course performance and student engagement
- 💰 **Revenue Tracking**: Monitor earnings and student enrollments
- 🖼️ **Media Management**: Cloudinary integration for storing and managing course media
- 👥 **Student Interaction**: View feedback and ratings to improve course quality
- 📝 **Content Organization**: Structure courses with sections and subsections

### Admin Panel (Future Implementation):
- 🌐 **Platform Oversight**: Comprehensive dashboard for monitoring all platform activities
- 👥 **User Management**: Manage students, instructors, and content moderators
- 📈 **Business Analytics**: Detailed reports on platform performance, revenue, and growth metrics
- 🛡️ **Content Moderation**: Ensure quality and compliance of all published courses

## 🏗️ System Architecture

StudyNotion follows a modern client-server architecture with clearly defined components:

### Frontend (Client-Side)
- **Framework**: React.js with Redux for state management
- **Styling**: Tailwind CSS for responsive and modern UI design
- **Design Tool**: Figma for prototyping and UI/UX design
- **Data Visualization**: Chart.js for displaying analytics and progress reports

### Backend (Server-Side)
- **Runtime**: Node.js for scalable server-side operations
- **Framework**: Express.js for robust API development
- **Database**: MongoDB with Mongoose ODM for flexible data storage
- **Authentication**: JWT (JSON Web Tokens) and Bcrypt for secure user authentication
- **Media Storage**: Cloudinary for efficient media management
- **Payment Processing**: Razorpay integration for secure transactions

### Architecture Diagram
![Architecture Diagram](https://res.cloudinary.com/dvpulu3cc/image/upload/v1699036870/Screenshot_2023-11-04_000952_argzj8.jpg)

## 🛠️ Technology Stack

### Frontend Technologies
- **React.js**: JavaScript library for building user interfaces
- **Redux**: State management for predictable application behavior
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **Figma**: Design tool for creating clean and intuitive interfaces
- **Chart.js**: JavaScript library for creating interactive charts and graphs

### Backend Technologies
- **Node.js**: JavaScript runtime for server-side development
- **Express.js**: Web application framework for building RESTful APIs
- **MongoDB**: NoSQL database for flexible and scalable data storage
- **Mongoose**: ODM library for MongoDB and Node.js
- **JWT & Bcrypt**: Security libraries for authentication and password hashing
- **Cloudinary**: Cloud-based media management solution
- **Razorpay**: Payment gateway for secure online transactions

## 📡 API Endpoints

### Authentication
| Endpoint | Method | Path |
|----------|--------|------|
| Send OTP | POST | `/api/v1/auth/sendotp` |
| Sign Up | POST | `/api/v1/auth/signup` |
| Login | POST | `/api/v1/auth/login` |
| Reset Password Token | POST | `/api/v1/auth/reset-password-token` |
| Reset Password | POST | `/api/v1/auth/reset-password` |

### Profile Management
| Endpoint | Method | Path |
|----------|--------|------|
| Get User Details | GET | `/api/v1/profile/getUserDetails` |
| Get Enrolled Courses | GET | `/api/v1/profile/getEnrolledCourses` |
| Instructor Dashboard | GET | `/api/v1/profile/instructorDashboard` |
| Update Display Picture | POST | `/api/v1/profile/updateDisplayPicture` |
| Update Profile | PUT | `/api/v1/profile/updateProfile` |
| Change Password | PUT | `/api/v1/auth/changepassword` |
| Delete Profile | DELETE | `/api/v1/profile/deleteProfile` |

### Course Management
| Endpoint | Method | Path |
|----------|--------|------|
| Get All Courses | GET | `/api/v1/course/getAllCourses` |
| Get Course Details | POST | `/api/v1/course/getCourseDetails` |
| Edit Course | POST | `/api/v1/course/editCourse` |
| Show All Categories | GET | `/api/v1/course/showAllCategories` |
| Create Course | POST | `/api/v1/course/createCourse` |
| Add Section | POST | `/api/v1/course/addSection` |
| Add SubSection | POST | `/api/v1/course/addSubSection` |
| Update Section | POST | `/api/v1/course/updateSection` |
| Update SubSection | POST | `/api/v1/course/updateSubSection` |
| Get Instructor Courses | GET | `/api/v1/course/getInstructorCourses` |
| Delete Section | POST | `/api/v1/course/deleteSection` |
| Delete SubSection | POST | `/api/v1/course/deleteSubSection` |
| Delete Course | DELETE | `/api/v1/course/deleteCourse` |
| Get Full Course Details | POST | `/api/v1/course/getFullCourseDetails` |
| Update Course Progress | POST | `/api/v1/course/updateCourseProgress` |
| Create Rating | POST | `/api/v1/course/createRating` |

### Payment Integration
| Endpoint | Method | Path |
|----------|--------|------|
| Capture Payment | POST | `/api/v1/payment/capturePayment` |
| Verify Payment | POST | `/api/v1/payment/verifyPayment` |
| Send Payment Success Email | POST | `/api/v1/payment/sendPaymentSuccessEmail` |

### Catalog & Categories
| Endpoint | Method | Path |
|----------|--------|------|
| Get Category Page Details | POST | `/api/v1/course/getCategoryPageDetails` |
| Show All Categories | GET | `/api/v1/course/showAllCategories` |

### Ratings & Reviews
| Endpoint | Method | Path |
|----------|--------|------|
| Get Reviews | GET | `/api/v1/course/getReviews` |

### Contact Us
| Endpoint | Method | Path |
|----------|--------|------|
| Contact Form Submission | POST | `/api/v1/reach/contact` |

## 🗄️ Database Schema

Our MongoDB database is designed with scalability and efficiency in mind, featuring interconnected schemas for:

- **User Schema**: Managing student and instructor profiles
- **Course Schema**: Storing course details, content, and metadata
- **Category Schema**: Organizing courses into relevant categories
- **Section & SubSection Schema**: Structuring course content hierarchically
- **Rating & Review Schema**: Capturing user feedback and ratings
- **Profile Schema**: Storing additional user details
- **Course Progress Schema**: Tracking student progress through courses

![Database Schema](https://res.cloudinary.com/dvpulu3cc/image/upload/v1699036870/Screenshot_2023-11-04_001024_ef0phq.jpg)

## 🔧 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local instance or cloud)
- npm or yarn package manager
- Cloudinary account for media storage
- Razorpay account for payment processing

### Installation Steps

1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/studynotion.git
   cd studynotion
   ```

2. **Install Dependencies**
   ```bash
   # Install server dependencies
   cd Server
   npm install
   
   # Install client dependencies
   cd ../Client
   npm install
   ```

3. **Environment Configuration**
   Create `.env` files in both Server and Client directories with required environment variables:
   
   **Server/.env**
   ```
   PORT=4000
   MONGODB_URL=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_API_SECRET=your_cloudinary_api_secret
   RAZORPAY_KEY_ID=your_razorpay_key_id
   RAZORPAY_SECRET=your_razorpay_secret
   ```

4. **Run the Application**
   ```bash
   # Start the server
   cd Server
   npm start
   
   # Start the client
   cd Client
   npm start
   ```

5. **Access the Platform**
   Open your browser and navigate to `http://localhost:3000`

## 🧪 Testing

Our platform includes comprehensive testing protocols:
- Unit tests for API endpoints
- Integration tests for frontend components
- End-to-end testing for critical user flows
- Performance testing for scalability assessment

## 🚀 Deployment

### Frontend Deployment
The frontend is configured for deployment on Netlify:
1. Build the production version: `npm run build`
2. Deploy the build folder to Netlify

### Backend Deployment
The backend can be deployed on any Node.js compatible hosting service:
1. Ensure environment variables are set
2. Deploy to platforms like Render, Heroku, or AWS

## 🔮 Future Enhancements

We're continuously working to improve StudyNotion with these planned features:
- **AI-Powered Learning Paths**: Personalized course recommendations based on learning patterns
- **Mobile Application**: Native mobile apps for iOS and Android
- **Advanced Analytics**: Deeper insights into learning behaviors and course effectiveness
- **Multi-language Support**: Global accessibility with localized content
- **Certificate Generation**: Automated certificate creation for course completion
- **Live Classes**: Real-time interactive sessions between instructors and students
- **Gamification**: Badges, points, and leaderboards to enhance engagement

## 🤝 Contributing

We welcome contributions from the open-source community! To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

Please ensure your code follows our coding standards and includes appropriate tests.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

For any queries, suggestions, or support, please reach out to our team:

### Project Maintainer
- **Sahil Patel** - [Email](mailto:s.sahil007patel@gmail.com)


### Support
For technical support or general inquiries, please open an issue on our GitHub repository.

## 🙏 Acknowledgements

We extend our heartfelt gratitude to:
- The open-source community for providing invaluable tools and libraries
- Educational platforms that inspired this project
- Our mentors and peers for continuous support and feedback
- All contributors who have helped shape StudyNotion into what it is today

---

**StudyNotion** - Transforming Education Through Technology
