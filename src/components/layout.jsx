import { useState } from "react";
import Chatbot from "./chatbot";
import Footer from "./footer";
import { Outlet } from "react-router-dom"; // This allows the content of other pages to be rendered inside this layout

function Layout() {
  const [showChatbot, setShowChatbot] = useState(false); // State to control chatbot visibility

  return (
    <div className="layoutContainer">
      {/* Render the content of the page (from the current route) */}
      <Outlet />

      {/* Conditionally render the chatbot */}
      {showChatbot && <Chatbot />}

      {/* Floating AI Assistant Button */}
      <button
        className="aiAssistantButton"
        onClick={() => setShowChatbot((prev) => !prev)} // Toggle visibility of chatbot
      >
        AI Assistant
      </button>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Layout;
