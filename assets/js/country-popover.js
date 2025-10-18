(function() {
  'use strict';

  // Configuration object - customize your messages per country
  const countryMessages = {
    'US': {
      flag: '🇺🇸',
      title: 'Hello! Visiting from the United States!',
      message: 'Thanks for checking out my resume. I\'m available for opportunities in your region (United States) and remote roles!'
    },
    'GB': {
      flag: '🇬🇧',
      title: 'Hello! Visiting from the United Kingdom!',
      message: 'Thanks for checking out my resume. I\'m available for opportunities in your region (Europe) and remote roles!'
    },
    'CA': {
      flag: '🇨🇦',
      title: 'Hello! Visiting from Canada!',
      message: 'Thanks for checking out my resume. I\'m available for opportunities in your region (Canada) and remote roles!'
    },
    'DE': {
      flag: '🇩🇪',
      title: 'Hallo! Visiting from Germany!',
      message: 'Thanks for checking out my resume. I\'m available for opportunities in your region (Europe) and remote roles!'
    },
    'IE': {
      flag: '🇮🇪',
      title: 'Dia dhuit! Visiting from Ireland!',
      message: 'Thanks for checking out my resume. I\'m available for opportunities in your region (Europe) and remote roles!'
    },
    'ES': {
      flag: '🇪🇸',
      title: '¡Hola! Visiting from Spain!',
      message: 'Thanks for checking out my resume. I\'m available for opportunities in your region (Europe) and remote roles!'
    },
    'NL': {
      flag: '🇳🇱',
      title: 'Hallo! Visiting from the Netherlands!',
      message: 'Thanks for checking out my resume. I\'m available for opportunities in your region (Europe) and remote roles!'
    },
    'NZ': {
      flag: '🇳🇿',
      title: 'Kia ora! Visiting from New Zealand!',
      message: 'Thanks for checking out my resume. I\'m available for opportunities in your region (Asia-Pacific) and remote roles!'
    },
    'BE': {
      flag: '🇧🇪',
      title: 'Bonjour! Visiting from Belgium!',
      message: 'Thanks for checking out my resume. I\'m available for opportunities in your region (Europe) and remote roles!'
    },
    'NO': {
      flag: '🇳🇴',
      title: 'Hei hei! Visiting from Norway!',
      message: 'Thanks for checking out my resume. I\'m available for opportunities in your region (Nordic region) and remote roles!'
    },
    'SE': {
      flag: '🇸🇪',
      title: 'Hej! Visiting from Sweden!',
      message: 'Thanks for checking out my resume. I\'m available for opportunities in your region (Nordic region) and remote roles!'
    },
    'LT': {
      flag: '🇱🇹',
      title: 'Labas! Visiting from Lithuania!',
      message: 'Thanks for checking out my resume. I\'m available for opportunities in your region (Europe) and remote roles!'
    },
    'PL': {
      flag: '🇵🇱',
      title: 'Cześć! Visiting from Poland!',
      message: 'Thanks for checking out my resume. I\'m available for opportunities in your region (Europe) and remote roles!'
    },
    'CN': {
      flag: '🇨🇳',
      title: '你好！Visiting from China!',
      message: 'Thanks for checking out my resume. Unfortunately, I\'m not available for opportunities in China at this time, but I am available for remote roles!'
    },
    'AU': {
      flag: '🇦🇺',
      title: 'G\'day! Visiting from Australia!',
      message: 'Thanks for checking out my resume. I\'m available for opportunities in your region (Asia-Pacific) and remote roles!'
    },
    'FR': {
      flag: '🇫🇷',
      title: 'Bonjour! Visiting from France!',
      message: 'Thanks for checking out my resume. I\'m available for opportunities in your region (Europe) and remote roles!'
    },
    'IN': {
      flag: '🇮🇳',
      title: 'Namaste! Visiting from India!',
      message: 'Thanks for checking out my resume. Unfortunately, I\'m not available for opportunities in India at this time, but I am available for remote roles!'
    },
    'JP': {
      flag: '🇯🇵',
      title: 'Konnichiwa! Visiting from Japan!',
      message: 'Thanks for checking out my resume. I\'m available for opportunities in your region (Asia-Pacific) and remote roles!'
    },
    'KR': {
      flag: '🇰🇷',
      title: 'Annyeonghaseyo! Visiting from South Korea!',
      message: 'Thanks for checking out my resume. I\'m available for opportunities in your region (Asia-Pacific) and remote roles!'
    },
    'SG': {
      flag: '🇸🇬',
      title: 'Hello! Visiting from Singapore!',
      message: 'Thanks for checking out my resume. I\'m available for opportunities in your region (Asia-Pacific) and remote roles!'
    },
    'ZA': {
      flag: '🇿🇦',
      title: 'Howzit! Visiting from South Africa!',
      message: 'Thanks for checking out my resume. I\'m available for opportunities in your region (Africa) and remote roles!'
    },
    'BR': {
      flag: '🇧🇷',
      title: 'Olá! Visiting from Brazil!',
      message: 'Thanks for checking out my resume. I\'m available for opportunities in your region (Latin America) and remote roles!'
    },
    'MX': {
      flag: '🇲🇽',
      title: '¡Hola! Visiting from Mexico!',
      message: 'Thanks for checking out my resume. I\'m available for opportunities in your region (Latin America) and remote roles!'
    },
    'AR': {
      flag: '🇦🇷',
      title: '¡Hola! Visiting from Argentina!',
      message: 'Thanks for checking out my resume. I\'m available for opportunities in your region (Latin America) and remote roles!'
    },
    'IT': {
      flag: '🇮🇹',
      title: 'Ciao! Visiting from Italy!',
      message: 'Thanks for checking out my resume. I\'m available for opportunities in your region (Europe) and remote roles!'
    },
    'PT': {
      flag: '🇵🇹',
      title: 'Olá! Visiting from Portugal!',
      message: 'Thanks for checking out my resume. I\'m available for opportunities in your region (Europe) and remote roles!'
    },
    'CH': {
      flag: '🇨🇭',
      title: 'Grüezi! Visiting from Switzerland!',
      message: 'Thanks for checking out my resume. I\'m available for opportunities in your region (Europe) and remote roles!'
    },
    'DK': {
      flag: '🇩🇰',
      title: 'Hej! Visiting from Denmark!',
      message: 'Thanks for checking out my resume. I\'m available for opportunities in your region (Nordic region) and remote roles!'
    },
    'FI': {
      flag: '🇫🇮',
      title: 'Hei! Visiting from Finland!',
      message: 'Thanks for checking out my resume. I\'m available for opportunities in your region (Nordic region) and remote roles!'
    },
    'AE': {
      flag: '🇦🇪',
      title: 'Marhaba! Visiting from UAE!',
      message: 'Thanks for checking out my resume. Unfortunately, I\'m not available for opportunities in UAE at this time, but I am available for remote roles!'
    },
    'IL': {
      flag: '🇮🇱',
      title: 'Shalom! Visiting from Israel!',
      message: 'Thanks for checking out my resume. Unfortunately, I\'m not available for opportunities in Israel at this time, but I am available for remote roles!'
    },
    'IS': {
      flag: '🇮🇸',
      title: 'Halló! Visiting from Iceland!',
      message: 'Thanks for checking out my resume. I\'m available for opportunities in your region (Europe) and remote roles!'
    },
    'GR': {
      flag: '🇬🇷',
      title: 'Yassas! Visiting from Greece!',
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

  // Sanitize text to prevent XSS
  function sanitizeText(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
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
    let title = config.title; // Use the country-specific title with local greeting
    if (city && !isReturning) {
      // Sanitize city name to prevent XSS
      const sanitizedCity = sanitizeText(city);
      // Extract the greeting from the config title (everything before "Visiting")
      const localGreeting = config.title.split('Visiting')[0].trim();
      title = `${localGreeting} Visiting from ${sanitizedCity}!`;
    } else if (isReturning) {
      title = `${greeting}!`;
    }

    // Build message with context
    let message = config.message;

    // Add referrer context (avoid double "Thanks" by replacing beginning)
    if (referrer) {
      message = `Thanks for coming from ${referrer}! ${message.replace(/^Thanks for checking out my resume\.\s*/, '')}`;
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
