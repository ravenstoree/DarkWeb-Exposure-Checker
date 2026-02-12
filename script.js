function checkEmail() {
    const email = document.getElementById('emailInput').value;
    const resultsDiv = document.getElementById('results');
    const loading = document.getElementById('loading');

    // Simple email validation
    if (!email || !email.includes('@')) {
        alert("Please enter a valid email address!");
        return;
    }

    // Show loading state
    resultsDiv.innerHTML = "";
    loading.classList.remove('hidden');

    // Simulate API request delay (2 seconds)
    setTimeout(() => {
        loading.classList.add('hidden');
        
        // Random logic to simulate a real check
        const isBreached = Math.random() > 0.5; 

        if (isBreached) {
            resultsDiv.innerHTML = `
                <div class="danger">
                    <h3>⚠️ ALERT: Data Breach Found!</h3>
                    <p>This email was found in known data leaks on the Dark Web.</p>
                    <p><strong>Sources:</strong> LinkedIn Leak, Adobe Breach (2013).</p>
                    <p><strong>Action:</strong> Change your password and enable Two-Factor Authentication (2FA).</p>
                </div>
            `;
        } else {
            resultsDiv.innerHTML = `
                <div class="safe">
                    <h3>✅ SECURE: No Breaches Found</h3>
                    <p>Your email address was not found in our current database of leaked records.</p>
                    <p>Keep your account safe by updating your credentials regularly.</p>
                </div>
            `;
        }
    }, 2000);
}
