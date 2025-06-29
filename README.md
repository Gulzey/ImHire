# ImHire - Bristol Accident Management Services

A modern, responsive website for ImHire's end-to-end accident management services in Bristol. Built with React.js, Tailwind CSS, and featuring an integrated WhatsApp chatbot for customer support.

## Features

- 🎨 **Modern Design**: Clean, professional design with gradient accents
- 📱 **Responsive**: Fully responsive design that works on all devices
- ⚡ **Fast Performance**: Optimized with Vite for lightning-fast development
- 🎭 **Smooth Animations**: Beautiful animations using Framer Motion
- 🧭 **Smooth Scrolling**: Navigation that smoothly scrolls to sections
- 🎪 **Animated Background**: Floating elements that move horizontally
- 📝 **Contact Form**: Functional contact form with validation
- ❓ **FAQ Section**: Expandable FAQ with legal information
- 💬 **WhatsApp Chatbot**: Integrated AI-powered chatbot with WhatsApp integration
- 🎯 **SEO Ready**: Optimized for search engines

## WhatsApp Chatbot Features

The website includes a sophisticated WhatsApp-integrated chatbot that provides:

- **AI-Powered Responses**: Intelligent responses to common accident management queries
- **Quick Action Buttons**: Pre-defined buttons for common questions (Courtesy Car, Insurance Help, Cost Info, Contact)
- **WhatsApp Integration**: Direct connection to WhatsApp Business for human support
- **Chat History**: Persistent chat history using localStorage
- **Mobile Responsive**: Full-screen chat experience on mobile devices
- **Real-time Typing Indicators**: Shows when the bot is "typing"
- **Clear Chat Functionality**: Option to reset conversation

### Chatbot Capabilities

The chatbot can handle queries about:
- Courtesy car arrangements
- Insurance claim processes
- Cost information (all services are free for non-fault accidents)
- Contact information and support
- General accident management questions

## Sections

1. **Hero Section**: Animated landing page with call-to-action
2. **About Section**: Features and company information
3. **FAQ Section**: Frequently asked questions and legal information
4. **Contact Section**: Contact form and business information
5. **WhatsApp Chatbot**: Floating chat widget with AI support

## Technologies Used

- **Frontend**: React.js 18, Tailwind CSS, Framer Motion
- **Build Tool**: Vite
- **Icons**: Lucide React
- **Backend**: Node.js with Express
- **Styling**: Custom CSS with Tailwind utilities
- **Chatbot**: Custom AI implementation with WhatsApp Business API integration

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ImHire
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Building for Production

1. **Build the application**
   ```bash
   npm run build
   ```

2. **Start production server**
   ```bash
   npm start
   ```

## Project Structure

```
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Navigation component
│   │   ├── Hero.jsx            # Hero section
│   │   ├── About.jsx           # About section
│   │   ├── FAQ.jsx             # FAQ and legal section
│   │   ├── Contact.jsx         # Contact form and info
│   │   ├── FloatingElements.jsx # Animated background elements
│   │   └── WhatsAppChat.jsx    # WhatsApp chatbot component
│   ├── App.jsx                 # Main application component
│   ├── main.jsx                # Application entry point
│   └── index.css               # Global styles
├── public/
├── package.json                # Dependencies and scripts
├── vite.config.js             # Vite configuration
├── tailwind.config.js         # Tailwind CSS configuration
├── postcss.config.js          # PostCSS configuration
├── server.js                  # Node.js server
└── README.md                  # This file
```

## WhatsApp Integration Setup

To configure the WhatsApp integration:

1. **Update Phone Number**: In `src/components/WhatsAppChat.jsx`, replace the `phoneNumber` variable with your actual WhatsApp Business number:
   ```javascript
   const phoneNumber = '+441171234567' // Replace with your actual WhatsApp number
   ```

2. **Customize Responses**: Modify the `botResponses` object to match your business needs and common customer queries.

3. **WhatsApp Business API**: For advanced features, consider integrating with the official WhatsApp Business API.

## Customization

### Colors and Styling

The website uses a gradient color scheme that can be customized in the Tailwind configuration:

```javascript
// tailwind.config.js
theme: {
  extend: {
    // Customize gradients here
    backgroundImage: {
      'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
    },
  },
}
```

### Content

Update the content in each component file:
- `src/components/Hero.jsx` - Hero section content
- `src/components/About.jsx` - About section and features
- `src/components/FAQ.jsx` - FAQ questions and legal information
- `src/components/Contact.jsx` - Contact information and form
- `src/components/WhatsAppChat.jsx` - Chatbot responses and configuration

### Chatbot Customization

The chatbot can be customized by:
- Adding new response patterns in the `botResponses` object
- Modifying the `generateBotResponse` function for more complex logic
- Updating quick action buttons
- Changing the visual design and animations

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm start` - Start production server

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

If you have any questions or need help, please open an issue on GitHub or contact us through the contact form on the website.

---

Built with ❤️ using React, Tailwind CSS, and Node.js for ImHire Bristol Accident Management Services
