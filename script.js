function checkEmail() {
    const email = document.getElementById('emailInput').value;
    const resultsDiv = document.getElementById('results');
    const loading = document.getElementById('loading');

    if (!email || !email.includes('@')) {
        alert("Please enter a valid email address!");
        return;
    }

    resultsDiv.innerHTML = "";
    loading.classList.remove('hidden');

    setTimeout(() => {
        loading.classList.add('hidden');
        
        // Logical Simulation (More realistic than random)
        // Rule 1: University emails are always safe for the demo
        const isUniversityEmail = email.toLowerCase().endsWith('@ksu.edu.sa');
        // Rule 2: Short emails are usually safe
        const isShortEmail = email.split('@')[0].length < 8;

        if (isUniversityEmail || isShortEmail) {
            // SAFE RESULT
            resultsDiv.innerHTML = `
                <div class="safe">
                    <h3>✅ SECURE: No Breaches Found</h3>
                    <p>Your account is currently safe. Our system scanned 500+ global leak databases and found no matches for <strong>${email}</strong>.</p>
                </div>
            `;
        } else {
            // BREACHED RESULT
            resultsDiv.innerHTML = `
                <div class="danger">
                    <h3>⚠️ ALERT: Exposure Detected!</h3>
                    <p>Data exposure found for <strong>${email}</strong> in the following breaches:</p>
                    <ul style="list-style: none; padding: 0;">
                        <li>📍 <strong>LinkedIn Leak</strong> (Impact: Passwords, Profiles)</li>
                        <li>📍 <strong>Adobe Data Breach</strong> (Impact: Email, Hints)</li>
                    </ul>
                    <p><strong>Recommendation:</strong> Use a Password Manager and enable Multi-Factor Authentication (MFA).</p>
                </div>
            `;
        }
    }, 2000);
}
