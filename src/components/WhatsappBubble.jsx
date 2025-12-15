import React, { useRef, useState, useEffect } from "react";

const WhatsappBubble = () => {
  return (
    <div>
      {/* Floating WhatsApp Bubble */}
      <a
        href="https://wa.me/61400123456?text=Hi%20Eric%2C%20I'd%20like%20to%20book%20a%20lesson%20or%20delivery"
        class="whatsapp-bubble"
        target="_blank"
        aria-label="Chat with us on WhatsApp"
      >
        <i class="fab fa-whatsapp"></i>
      </a>
    </div>
  );
};

export default WhatsappBubble;
