// Function to get the current time in Thailand (GMT+7)
function getThailandTime() {
    const now = new Date();
    const thailandOffset = 7 * 60; // Thailand is GMT+7
    const localOffset = now.getTimezoneOffset(); // Current timezone offset
    const thailandTime = new Date(now.getTime() + (thailandOffset + localOffset) * 60000); 
    return thailandTime;
}

// Function to update videos, background, and time of day label
function updateSchedule() {
    const time = getThailandTime();
    const hours = time.getHours();
    let timePeriod = '';
    let newVideoUrls = [];
    let backgroundClass = '';

    if (hours >= 5 && hours < 11) {
        // Morning (5 AM - 11 AM)
        timePeriod = "Morning";
        newVideoUrls = [
            "https://www.youtube.com/embed/wCw-W-2Rs0k?si=YIMEDX2lmOmDBvlJ",
            "https://www.youtube.com/embed/6dQLX1ULUKQ?si=N9FeTScamC-NzXA0",
            "https://www.youtube.com/embed/fhgVHpli4uM?si=N2CSSJkbf9GuGLw3"
        ];
        backgroundClass = "morning";
    } else if (hours >= 11 && hours < 17) {
        // Afternoon (11 AM - 5 PM)
        timePeriod = "Afternoon";
        newVideoUrls = [
            "https://www.youtube.com/embed/6acS2vOxmRI?si=93qoAb7_48cSfiN0", // Replace with actual video URL
            "https://www.youtube.com/embed/HuJOVEaOrmw?si=V72NB2W90Qws4oUt", // Replace with actual video URL
            "https://www.youtube.com/embed/wVmRBceETFI?si=Wk0jsw8ZoDQ5C5av&amp"  // Replace with actual video URL
        ];
        backgroundClass = "afternoon";
    } else if (hours >= 17 && hours < 24) {
        // Evening (5 PM - 12 AM)
        timePeriod = "Evening";
        newVideoUrls = [
            "https://www.youtube.com/embed/Qtoejhr277Y?si=CxeWZ3VdtJ6fwrLE&amp", // Replace with actual video URL
            "https://www.youtube.com/embed/i4ZuseKFBF0?si=f0ivhmkQ2Zdq7xN6", // Replace with actual video URL
            "https://www.youtube.com/embed/B7Y4LHbpXv0?si=qTsA6tk2r7jg5Afd"  // Replace with actual video URL
        ];
        backgroundClass = "evening";
    } else {
        // Midnight (12 AM - 5 AM)
        timePeriod = "Midnight";
        newVideoUrls = [
            "https://www.youtube.com/embed/ySVgwPOxoUM?si=l0C60rUiNa6-ePsk", // Replace with actual video URL
            "https://www.youtube.com/embed/CwGbMYLjIpQ?si=KlcaZU3Kqqud6ZQR", // Replace with actual video URL
            "https://www.youtube.com/embed/yPg55HC1kqg?si=uSc5TCQejMUogvNk"  // Replace with actual video URL
        ];
        backgroundClass = "midnight";
    }

    // Update video URLs
    document.querySelectorAll('.chart').forEach((chart, index) => {
        const iframe = chart.querySelector('.video');
        iframe.src = newVideoUrls[index];
    });

    // Update background class
    document.body.className = backgroundClass;

    // Update or create the time period label
    let timeLabel = document.querySelector('.time-label');
    if (!timeLabel) {
        timeLabel = document.createElement('div');
        timeLabel.className = 'time-label';
        document.body.appendChild(timeLabel);
    }
    timeLabel.textContent = timePeriod;
}

// Call updateSchedule on page load
updateSchedule();

// Automatically update every minute (60000 milliseconds)
setInterval(updateSchedule, 60000);
