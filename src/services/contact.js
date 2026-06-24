/**
 * Fetch the user's public IP address.
 * @returns {Promise<string>}
 */
export const fetchIpAddress = async () => {
    const response = await fetch('https://api.ipify.org?format=json');
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data.ip;
};

/**
 * Submit the contact form data to the resume backend API.
 * @param {Object} formData
 * @returns {Promise<string>} Server response message text
 */
export const postContactForm = async (formData) => {
    const response = await fetch('https://api.hridoybuzz.me/resume/submit.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    });
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.text();
};
