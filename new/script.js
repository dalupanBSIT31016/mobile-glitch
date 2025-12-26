// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    const navItems = document.querySelectorAll('.nav-item');
    const modules = document.querySelectorAll('.module');
    const logoutBtn = document.querySelector('.logout-section');
    
    // Handle navigation clicks
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            const page = this.getAttribute('data-page');
            
            // Remove active class from all nav items
            navItems.forEach(nav => nav.classList.remove('active'));
            
            // Add active class to clicked nav item
            this.classList.add('active');
            
            // Hide all modules
            modules.forEach(module => module.classList.remove('active'));
            
            // Show selected module
            const selectedModule = document.getElementById(page);
            if (selectedModule) {
                selectedModule.classList.add('active');
            }
        });
    });
    
    // Handle logout click
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function() {
            if (confirm('Are you sure you want to logout?')) {
                alert('Logout functionality would be implemented here');
                // In a real application, this would redirect to login page
                // window.location.href = '/login';
            }
        });
    }
    
    // Handle quick action buttons and form buttons
    setupButtonHandlers();
    
    // Update current date for schedule
    updateScheduleDates();
});

// Function to update schedule dates with current week
function updateScheduleDates() {
    const today = new Date();
    const currentDay = today.getDay(); // 0 = Sunday, 1 = Monday, etc.
    const monday = new Date(today);
    monday.setDate(today.getDate() - (currentDay === 0 ? 6 : currentDay - 1)); // Get Monday of current week
    
    const scheduleDays = document.querySelectorAll('.schedule-day');
    const dayLabels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    
    scheduleDays.forEach((day, index) => {
        const dateElement = day.querySelector('.day-date');
        const currentDate = new Date(monday);
        currentDate.setDate(monday.getDate() + index);
        
        if (dateElement) {
            dateElement.textContent = currentDate.getDate();
        }
    });
}

// Add some interactivity to activity items
document.addEventListener('DOMContentLoaded', function() {
    const activityItems = document.querySelectorAll('.activity-item');
    activityItems.forEach(item => {
        item.addEventListener('click', function() {
            const activityText = this.querySelector('.activity-text').textContent;
            console.log('Activity clicked:', activityText);
            // In a real application, this would show details or navigate to related page
        });
        
        // Add hover effect
        item.style.cursor = 'pointer';
    });
});

// Function to show a specific module
function showModule(moduleId) {
    const modules = document.querySelectorAll('.module');
    const navItems = document.querySelectorAll('.nav-item');
    
    // Hide all modules
    modules.forEach(module => module.classList.remove('active'));
    
    // Remove active class from all nav items
    navItems.forEach(nav => nav.classList.remove('active'));
    
    // Show the selected module
    const selectedModule = document.getElementById(moduleId);
    if (selectedModule) {
        selectedModule.classList.add('active');
    }
}

// Function to setup button handlers
function setupButtonHandlers() {
    // Map button text to module IDs
    const buttonMap = {
        'New Booking': 'new-booking',
        'Create Tour Package': 'create-package',
        'Create New Package': 'create-package',
        'Add Customer': 'add-customer',
        'Add New Customer': 'add-customer',
        'Add Staff Member': 'add-staff',
        'Sales Report': 'sales-report',
        'Booking Report': 'booking-report',
        'Customer Analytics': 'customer-analytics',
        'Tour Performance': 'tour-performance',
        'Revenue Analysis': 'revenue-analysis',
        'View Reports': 'reports'
    };
    
    // Handle all action buttons and primary buttons
    const allButtons = document.querySelectorAll('.action-btn, .btn-primary');
    allButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            const buttonText = this.textContent.trim();
            const moduleId = buttonMap[buttonText];
            
            if (moduleId) {
                e.preventDefault();
                showModule(moduleId);
            } else if (buttonText === 'Tour Calendar') {
                // Keep default behavior or add specific handler
                alert('Tour Calendar would be displayed here');
            }
        });
    });
    
    // Handle cancel buttons
    const cancelButtons = document.querySelectorAll('.cancel-btn');
    cancelButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Go back to dashboard
            showModule('dashboard');
            // Re-activate dashboard nav item
            const navItems = document.querySelectorAll('.nav-item');
            navItems.forEach(nav => {
                if (nav.getAttribute('data-page') === 'dashboard') {
                    nav.classList.add('active');
                } else {
                    nav.classList.remove('active');
                }
            });
        });
    });
    
    // Handle form submissions
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const formType = form.closest('.module').id;
            const formData = new FormData(form);
            
            // Show success message
            alert(`${formType.replace('-', ' ')} form submitted successfully!`);
            
            // In a real application, this would send data to server
            console.log('Form data:', Object.fromEntries(formData));
            
            // Reset form and go back to dashboard
            form.reset();
            showModule('dashboard');
            
            // Re-activate dashboard nav item
            const navItems = document.querySelectorAll('.nav-item');
            navItems.forEach(nav => {
                if (nav.getAttribute('data-page') === 'dashboard') {
                    nav.classList.add('active');
                } else {
                    nav.classList.remove('active');
                }
            });
        });
    });
}

