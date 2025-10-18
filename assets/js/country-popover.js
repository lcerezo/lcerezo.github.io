(function() {
  'use strict';

  // Configuration object - customize your messages per country
  const countryMessages = {
    'US': {
      flag: '🇺🇸',
      title: 'Visiting from the United States!',
      message: 'Thanks for checking out my resume. I\'m available for opportunities in your region (United States) and remote roles!'
    },
    'GB': {
      flag: '🇬🇧',
      title: 'Visiting from the United Kingdom!',
      message: 'Thanks for checking out my resume. I\'m available for opportunities in your region (Europe) and remote roles!'
    },
    'CA': {
      flag: '🇨🇦',
      title: 'Visiting from Canada!',
      message: 'Thanks for checking out my resume. I\'m available for opportunities in your region (Canada) and remote roles!'
    },
    'DE': {
      flag: '🇩🇪',
      title: 'Visiting from Germany!',
      message: 'Thanks for checking out my resume. I\'m available for opportunities in your region (Europe) and remote roles!'
    },
    'IE': {
      flag: '🇮🇪',
      title: 'Visiting from Ireland!',
      message: 'Thanks for checking out my resume. I\'m available for opportunities in your region (Europe) and remote roles!'
    },
    'ES': {
      flag: '🇪🇸',
      title: 'Visiting from Spain!',
      message: 'Thanks for checking out my resume. I\'m available for opportunities in your region (Europe) and remote roles!'
    },
    'NL': {
      flag: '🇳🇱',
      title: 'Visiting from the Netherlands!',
      message: 'Thanks for checking out my resume. I\'m available for opportunities in your region (Europe) and remote roles!'
    },
    'NZ': {
      flag: '🇳🇿',
      title: 'Visiting from New Zealand!',
      message: 'Thanks for checking out my resume. I\'m available for opportunities in your region (Asia-Pacific) and remote roles!'
    },
    'BE': {
      flag: '🇧🇪',
      title: 'Visiting from Belgium!',
      message: 'Thanks for checking out my resume. I\'m available for opportunities in your region (Europe) and remote roles!'
    },
    'NO': {
      flag: '🇳🇴',
      title: 'Visiting from Norway!',
      message: 'Thanks for checking out my resume. I\'m available for opportunities in your region (Nordic region) and remote roles!'
    },
    'SE': {
      flag: '🇸🇪',
      title: 'Visiting from Sweden!',
      message: 'Thanks for checking out my resume. I\'m available for opportunities in your region (Nordic region) and remote roles!'
    },
    'LT': {
      flag: '🇱🇹',
      title: 'Visiting from Lithuania!',
      message: 'Thanks for checking out my resume. I\'m available for opportunities in your region (Europe) and remote roles!'
    },
    'PL': {
      flag: '🇵🇱',
      title: 'Visiting from Poland!',
      message: 'Thanks for checking out my resume. I\'m available for opportunities in your region (Europe) and remote roles!'
    },
    'default': {
      flag: '🌍',
      title: 'Welcome!',
      message: 'Thanks for visiting my resume. I\'m available for remote opportunities worldwide.'
    }
  };

  // Check if popover was already shown in this session
  if (sessionStorage.getItem('countryPopoverShown')) {
    return;
  }

  // Get time-based greeting
  function getTimeGreeting(timezone) {
    const now = new Date();
    const hour = timezone ? new Date(now.toLocaleString('en-US', { timeZone: timezone })).getHours() : now.getHours();

    if (hour < 12) return 'Good morning';
    if (hour < 18) return 'Good afternoon';
    return 'Good evening';
  }

  // Detect if returning visitor
  function isReturningVisitor() {
    return localStorage.getItem('hasVisited') === 'true';
  }

  // Mark as visited
  function markAsVisited() {
    localStorage.setItem('hasVisited', 'true');
  }

  // Get device type
  function getDeviceType() {
    const ua = navigator.userAgent;
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
      return 'tablet';
    }
    if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
      return 'mobile';
    }
    return 'desktop';
  }

  // Get referrer information
  function getReferrerInfo() {
    const referrer = document.referrer;
    if (!referrer) return null;

    if (referrer.includes('linkedin.com')) return 'LinkedIn';
    if (referrer.includes('github.com')) return 'GitHub';
    if (referrer.includes('twitter.com') || referrer.includes('x.com')) return 'Twitter/X';
    if (referrer.includes('facebook.com')) return 'Facebook';
    if (referrer.includes('google.com')) return 'Google';
    if (referrer.includes('bing.com')) return 'Bing';

    return null;
  }

  // Get browser language
  function getBrowserLanguage() {
    return navigator.language || navigator.userLanguage;
  }

  // Fetch user's country and context using a free IP geolocation API
  function detectCountryAndContext() {
    // Using ipapi.co - free tier allows 1000 requests/day
    fetch('https://ipapi.co/json/')
      .then(response => response.json())
      .then(data => {
        const country = data.country_code || 'default';
        const timezone = data.timezone || null;
        const city = data.city || null;

        showPopover(country, timezone, city);
      })
      .catch(error => {
        console.log('Could not detect country, showing default message');
        showPopover('default', null, null);
      });
  }

  // Create and show the popover
  function showPopover(countryCode, timezone, city) {
    const config = countryMessages[countryCode] || countryMessages['default'];
    const isReturning = isReturningVisitor();
    const deviceType = getDeviceType();
    const referrer = getReferrerInfo();
    const language = getBrowserLanguage();

    // Build personalized greeting
    let greeting = getTimeGreeting(timezone);

    // Enhance greeting based on context
    if (isReturning) {
      greeting = 'Welcome back';
    }

    // Customize title with greeting
    let title = `${greeting}!`;
    if (city && !isReturning) {
      title = `Thank you for visiting from ${city}!`;
    }

    // Build message with context
    let message = config.message;

    // Add referrer context
    if (referrer) {
      message = `Thanks for coming from ${referrer}! ${message}`;
    }

    // Add device-specific note
    if (deviceType === 'mobile') {
      message += ' (Tip: This resume is optimized for all devices!)';
    }

    // Get flag emoji
    const flag = config.flag || '🌍';

    // Create popover HTML
    const popover = document.createElement('div');
    popover.className = 'country-popover';
    popover.innerHTML = `
      <div class="country-popover-content">
        <button class="country-popover-close" aria-label="Close">&times;</button>
        <div class="country-popover-flag">${flag}</div>
        <h3 class="country-popover-title">${title}</h3>
        <p class="country-popover-message">${message}</p>
      </div>
    `;

    // Add to page
    document.body.appendChild(popover);

    // Show popover with animation after a short delay
    setTimeout(() => {
      popover.classList.add('show');
    }, 1000);

    // Close button handler
    const closeBtn = popover.querySelector('.country-popover-close');
    closeBtn.addEventListener('click', () => {
      popover.classList.remove('show');
      setTimeout(() => {
        popover.remove();
      }, 300);
    });

    // Auto-hide after 10 seconds
    setTimeout(() => {
      if (popover.parentElement) {
        popover.classList.remove('show');
        setTimeout(() => {
          popover.remove();
        }, 300);
      }
    }, 10000);

    // Mark as shown in this session
    sessionStorage.setItem('countryPopoverShown', 'true');

    // Mark as visited for future sessions
    markAsVisited();
  }

  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', detectCountryAndContext);
  } else {
    detectCountryAndContext();
  }
})();
