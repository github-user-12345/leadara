// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Start Course Modal
    function showModal() {
        const modal = new bootstrap.Modal(document.getElementById('startCourseModal'));
        modal.show();
    }

    function confirmStartCourse() {
        alert('Starting course...');
        // Here you would typically call an API to start the course
        closeModal();
    }

    function closeModal() {
        const modal = bootstrap.Modal.getInstance(document.getElementById('startCourseModal'));
        if (modal) {
            modal.hide();
        }
    }

    // Mentorship Program Modal
    function showMentorForm() {
        const mentorshipModal = new bootstrap.Modal(document.getElementById('mentorshipModal'));
        mentorshipModal.show();
    }

    function joinMentorship() {
        alert('Joining mentorship program...');
        // Here you would typically save the mentor information to a database
        closeModal();
    }

    // Learning Dashboard
    function continueLearning() {
        alert('Continuing learning...');
        // Here you would typically update the user's progress in the database
    }
});
