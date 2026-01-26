import React, { useEffect, useRef } from 'react';
import '../styles/space-theme.css'; // Ensure we have access to .stars and .star classes

const Stars = () => {
    const starsRef = useRef(null);

    useEffect(() => {
        const starsContainer = starsRef.current;
        if (starsContainer) {
            // Clear existing stars to prevent duplicates if re-rendered
            starsContainer.innerHTML = '';
            
            for (let i = 0; i < 100; i++) {
                const star = document.createElement('div');
                star.className = 'star';
                star.style.left = `${Math.random() * 100}%`;
                star.style.top = `${Math.random() * 100}%`;
                star.style.animationDelay = `${Math.random() * 3}s`;
                star.style.animationDuration = `${2 + Math.random() * 3}s`;
                starsContainer.appendChild(star);
            }
        }
    }, []);

    return <div className="stars" ref={starsRef} style={{ position: 'fixed', zIndex: 0 }}></div>;
};

export default Stars;
