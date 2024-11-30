window.onload = function() {
    const popup = document.createElement('div');
    popup.innerHTML = `
        <style>
            .welcome-overlay {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0,0,0,0.9);
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 9999;
            }
            
            .welcome-box {
                background: linear-gradient(45deg, #550303, #06026b);
                padding: 2em;
                border-radius: 20px;
                text-align: center;
                color: white;
                max-width: 500px;
                animation: slideIn 0.5s ease-out;
            }
            
            @keyframes slideIn {
                from {transform: translateY(-100px); opacity: 0;}
                to {transform: translateY(0); opacity: 1;}
            }
            
            .welcome-box img {
                width: 300px;
                height: 300px;
                object-fit: cover;
                border-radius: 50%;
                margin: 20px auto !important;
                border: 5px solid white;
                margin-bottom: 1em;
            }
            
            .welcome-box button {
                background: linear-gradient(45deg, #ff6b6b, #4834d4);
                border: none;
                padding: 1em 2em;
                color: white;
                border-radius: 30px;
                font-size: 1.1em;
                cursor: pointer;
                margin-top: 1em;
                transition: transform 0.3s;
            }
            
            .welcome-box button:hover {
                transform: scale(1.1);
            }
        </style>
        <div class="welcome-overlay">
            <div class="welcome-box">
                <img src="https://yayasangenerasijuara.school-network.net/UserDatabase/UserImages/5795730.jpg?1730881284137" alt="Welcome">
                <h2>Welcome to My Portfolio!</h2>
                <p>✨ Let's explore my portfolio together ✨</p>
                <button onclick="this.parentElement.parentElement.remove()">Get Started!</button>
            </div>
        </div>
    `;
    document.body.appendChild(popup);
}
