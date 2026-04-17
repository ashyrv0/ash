function checkAccess() {
    const hasAccess = sessionStorage.getItem("access");
    
    if (hasAccess !== "granted") {
        // Block access and show message
        document.body.innerHTML = `
            <div style="
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100vh;
                margin: 0;
                background: #0f1115;
                color: #e6e6eb;
                font-family: Arial, sans-serif;
                text-align: center;
            ">
                <div>
                    <h1>Access Denied</h1>
                    <p>You must enter the correct access code first.</p>
                    <button onclick="window.location.href = '/';" style="
                        padding: 10px 20px;
                        background: #e6e6eb;
                        color: #0f1115;
                        border: none;
                        border-radius: 4px;
                        cursor: pointer;
                        font-size: 16px;
                    ">Go Back to Home</button>
                </div>
            </div>
        `;
        document.title = "Access Denied";
        return false;
    }
    return true;
}

// Run check immediately when page loads
checkAccess();
