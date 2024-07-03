document.addEventListener('DOMContentLoaded', function() {
    // Function to update the current time and day
    function updateTime() {
        const currentTimeElement = document.querySelector('[data-testid="currentTimeUTC"]');
        const currentDayElement = document.querySelector('[data-testid="currentDay"]');

        const now = new Date();
        const utcTime = now.toUTCString();
        const dayOfWeek = now.toLocaleString('en-US', { weekday: 'long' });

        currentTimeElement.textContent = `Current Time in UTC: ${utcTime}`;
        currentDayElement.textContent = `Current Day: ${dayOfWeek}`;
    }

    // Initial call to update the time
    updateTime();

    // Update the time every minute
    setInterval(updateTime, 60000);
});
