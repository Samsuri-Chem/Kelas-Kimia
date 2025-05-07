/**
 * Shadcn-style Button Component
 * This script adds Shadcn UI-inspired buttons that can be used in forms
 * 
 * Usage:
 * 1. Include this file in your HTML
 * 2. Add button element with class "shadcn-btn" and variant class like "shadcn-btn-primary"
 * 3. Use data attributes for additional functionality: 
 *    - data-loading="true" to show loading state
 *    - data-icon="name" to add icon (supported: add, delete, save, cancel)
 */

document.addEventListener('DOMContentLoaded', function() {
  // Initialize all Shadcn buttons
  const buttons = document.querySelectorAll('.shadcn-btn');
  
  buttons.forEach(button => {
    // Add ripple effect
    button.addEventListener('click', function(e) {
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const ripple = document.createElement('span');
      ripple.classList.add('shadcn-btn-ripple');
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;
      
      button.appendChild(ripple);
      
      setTimeout(() => {
        ripple.remove();
      }, 600);
    });
    
    // Handle loading state
    if (button.hasAttribute('data-loading')) {
      const isLoading = button.getAttribute('data-loading') === 'true';
      if (isLoading) {
        // Add spinner
        const spinner = document.createElement('div');
        spinner.classList.add('shadcn-spinner');
        spinner.innerHTML = `
          <svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        `;
        button.prepend(spinner);
        button.setAttribute('disabled', 'disabled');
      }
    }
    
    // Add icons if specified
    if (button.hasAttribute('data-icon')) {
      const iconName = button.getAttribute('data-icon');
      const icon = document.createElement('span');
      icon.classList.add('shadcn-btn-icon');
      
      switch(iconName) {
        case 'add':
          icon.innerHTML = `
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 2.75C8 2.47386 7.77614 2.25 7.5 2.25C7.22386 2.25 7 2.47386 7 2.75V7H2.75C2.47386 7 2.25 7.22386 2.25 7.5C2.25 7.77614 2.47386 8 2.75 8H7V12.25C7 12.5261 7.22386 12.75 7.5 12.75C7.77614 12.75 8 12.5261 8 12.25V8H12.25C12.5261 8 12.75 7.77614 12.75 7.5C12.75 7.22386 12.5261 7 12.25 7H8V2.75Z" fill="currentColor" />
            </svg>
          `;
          break;
        case 'delete':
          icon.innerHTML = `
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.5 1C5.22386 1 5 1.22386 5 1.5C5 1.77614 5.22386 2 5.5 2H9.5C9.77614 2 10 1.77614 10 1.5C10 1.22386 9.77614 1 9.5 1H5.5ZM3 3.5C3 3.22386 3.22386 3 3.5 3H11.5C11.7761 3 12 3.22386 12 3.5C12 3.77614 11.7761 4 11.5 4H3.5C3.22386 4 3 3.77614 3 3.5ZM3.5 5C3.22386 5 3 5.22386 3 5.5V12.5C3 12.7761 3.22386 13 3.5 13H11.5C11.7761 13 12 12.7761 12 12.5V5.5C12 5.22386 11.7761 5 11.5 5H3.5ZM5 7C5 6.72386 5.22386 6.5 5.5 6.5C5.77614 6.5 6 6.72386 6 7V11C6 11.2761 5.77614 11.5 5.5 11.5C5.22386 11.5 5 11.2761 5 11V7ZM9 7C9 6.72386 9.22386 6.5 9.5 6.5C9.77614 6.5 10 6.72386 10 7V11C10 11.2761 9.77614 11.5 9.5 11.5C9.22386 11.5 9 11.2761 9 11V7Z" fill="currentColor" />
            </svg>
          `;
          break;
        case 'save':
          icon.innerHTML = `
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.5 1C11.7761 1 12 1.22386 12 1.5V13.5C12 13.7761 11.7761 14 11.5 14H3.5C3.22386 14 3 13.7761 3 13.5V1.5C3 1.22386 3.22386 1 3.5 1H11.5ZM4 2V13H11V2H4ZM5.5 5C5.22386 5 5 5.22386 5 5.5C5 5.77614 5.22386 6 5.5 6H9.5C9.77614 6 10 5.77614 10 5.5C10 5.22386 9.77614 5 9.5 5H5.5ZM5.5 7C5.22386 7 5 7.22386 5 7.5C5 7.77614 5.22386 8 5.5 8H9.5C9.77614 8 10 7.77614 10 7.5C10 7.22386 9.77614 7 9.5 7H5.5ZM5.5 9C5.22386 9 5 9.22386 5 9.5C5 9.77614 5.22386 10 5.5 10H9.5C9.77614 10 10 9.77614 10 9.5C10 9.22386 9.77614 9 9.5 9H5.5Z" fill="currentColor" />
            </svg>
          `;
          break;
        case 'cancel':
          icon.innerHTML = `
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.8536 2.85355C13.0488 2.65829 13.0488 2.34171 12.8536 2.14645C12.6583 1.95118 12.3417 1.95118 12.1464 2.14645L7.5 6.79289L2.85355 2.14645C2.65829 1.95118 2.34171 1.95118 2.14645 2.14645C1.95118 2.34171 1.95118 2.65829 2.14645 2.85355L6.79289 7.5L2.14645 12.1464C1.95118 12.3417 1.95118 12.6583 2.14645 12.8536C2.34171 13.0488 2.65829 13.0488 2.85355 12.8536L7.5 8.20711L12.1464 12.8536C12.3417 13.0488 12.6583 13.0488 12.8536 12.8536C13.0488 12.6583 13.0488 12.3417 12.8536 12.1464L8.20711 7.5L12.8536 2.85355Z" fill="currentColor" />
            </svg>
          `;
          break;
      }
      
      button.prepend(icon);
    }
  });
  
  // Add CSS for button ripple effect
  const style = document.createElement('style');
  style.textContent = `
    .shadcn-btn-ripple {
      position: absolute;
      border-radius: 50%;
      background-color: rgba(255, 255, 255, 0.3);
      width: 100px;
      height: 100px;
      margin-top: -50px;
      margin-left: -50px;
      animation: shadcn-ripple 0.6s linear;
      pointer-events: none;
    }
    
    @keyframes shadcn-ripple {
      to {
        opacity: 0;
        transform: scale(2);
      }
    }
    
    .shadcn-btn {
      position: relative;
      overflow: hidden;
    }
    
    .shadcn-btn-icon {
      display: inline-flex;
      align-items: center;
      margin-right: 0.5rem;
    }
    
    .shadcn-spinner {
      display: inline-flex;
      align-items: center;
    }
  `;
  document.head.appendChild(style);
});

// Helper function to create buttons programmatically
window.createShadcnButton = function(options) {
  const {
    text = 'Button',
    variant = 'primary', // primary, secondary, outline, destructive
    size = 'md', // sm, md, lg
    icon = null,
    loading = false,
    disabled = false,
    onClick = null
  } = options;
  
  const button = document.createElement('button');
  button.classList.add('shadcn-btn', `shadcn-btn-${variant}`);
  
  if (size === 'sm') button.classList.add('text-xs', 'py-1', 'px-2');
  if (size === 'lg') button.classList.add('text-base', 'py-3', 'px-6');
  
  if (icon) button.setAttribute('data-icon', icon);
  if (loading) button.setAttribute('data-loading', 'true');
  if (disabled) button.setAttribute('disabled', 'disabled');
  
  button.textContent = text;
  
  if (onClick) button.addEventListener('click', onClick);
  
  return button;
} 