(function() {
  'use strict';

  // Configuration object - customize your messages per country
  const countryMessages = {
    'US': {
      flag: '🇺🇸',
      greeting: 'Hello!',
      country: 'the United States',
      message: 'I\'m available for opportunities in your region (United States) and remote roles!'
    },
    'GB': {
      flag: '🇬🇧',
      greeting: 'Hello!',
      country: 'the United Kingdom',
      message: 'I\'m available for opportunities in your region (Europe) and remote roles!'
    },
    'CA': {
      flag: '🇨🇦',
      greeting: 'Hello!',
      country: 'Canada',
      message: 'I\'m available for opportunities in your region (Canada) and remote roles!'
    },
    'DE': {
      flag: '🇩🇪',
      greeting: 'Hallo!',
      country: 'Germany',
      message: 'I\'m available for opportunities in your region (Europe) and remote roles!'
    },
    'IE': {
      flag: '🇮🇪',
      greeting: 'Dia dhuit!',
      country: 'Ireland',
      message: 'I\'m available for opportunities in your region (Europe) and remote roles!'
    },
    'ES': {
      flag: '🇪🇸',
      greeting: '¡Hola!',
      country: 'Spain',
      message: 'I\'m available for opportunities in your region (Europe) and remote roles!'
    },
    'NL': {
      flag: '🇳🇱',
      greeting: 'Hallo!',
      country: 'the Netherlands',
      message: 'I\'m available for opportunities in your region (Europe) and remote roles!'
    },
    'NZ': {
      flag: '🇳🇿',
      greeting: 'Kia ora!',
      country: 'New Zealand',
      message: 'I\'m available for opportunities in your region (Asia-Pacific) and remote roles!'
    },
    'BE': {
      flag: '🇧🇪',
      greeting: 'Bonjour!',
      country: 'Belgium',
      message: 'I\'m available for opportunities in your region (Europe) and remote roles!'
    },
    'NO': {
      flag: '🇳🇴',
      greeting: 'Hei hei!',
      country: 'Norway',
      message: 'I\'m available for opportunities in your region (Nordic region) and remote roles!'
    },
    'SE': {
      flag: '🇸🇪',
      greeting: 'Hej!',
      country: 'Sweden',
      message: 'I\'m available for opportunities in your region (Nordic region) and remote roles!'
    },
    'LT': {
      flag: '🇱🇹',
      greeting: 'Labas!',
      country: 'Lithuania',
      message: 'I\'m available for opportunities in your region (Europe) and remote roles!'
    },
    'PL': {
      flag: '🇵🇱',
      greeting: 'Cześć!',
      country: 'Poland',
      message: 'I\'m available for opportunities in your region (Europe) and remote roles!'
    },
    'CN': {
      flag: '🇨🇳',
      greeting: '你好！',
      country: 'China',
      message: 'Unfortunately, I\'m not available for opportunities in China at this time, but I am available for remote roles!'
    },
    'AU': {
      flag: '🇦🇺',
      greeting: 'G\'day!',
      country: 'Australia',
      message: 'I\'m available for opportunities in your region (Asia-Pacific) and remote roles!'
    },
    'FR': {
      flag: '🇫🇷',
      greeting: 'Bonjour!',
      country: 'France',
      message: 'I\'m available for opportunities in your region (Europe) and remote roles!'
    },
    'IN': {
      flag: '🇮🇳',
      greeting: 'Namaste!',
      country: 'India',
      message: 'Unfortunately, I\'m not available for opportunities in India at this time, but I am available for remote roles!'
    },
    'JP': {
      flag: '🇯🇵',
      greeting: 'Konnichiwa!',
      country: 'Japan',
      message: 'I\'m available for opportunities in your region (Asia-Pacific) and remote roles!'
    },
    'KR': {
      flag: '🇰🇷',
      greeting: 'Annyeonghaseyo!',
      country: 'South Korea',
      message: 'I\'m available for opportunities in your region (Asia-Pacific) and remote roles!'
    },
    'SG': {
      flag: '🇸🇬',
      greeting: 'Hello!',
      country: 'Singapore',
      message: 'I\'m available for opportunities in your region (Asia-Pacific) and remote roles!'
    },
    'ZA': {
      flag: '🇿🇦',
      greeting: 'Howzit!',
      country: 'South Africa',
      message: 'I\'m available for opportunities in your region (Africa) and remote roles!'
    },
    'BR': {
      flag: '🇧🇷',
      greeting: 'Olá!',
      country: 'Brazil',
      message: 'I\'m available for opportunities in your region (Latin America) and remote roles!'
    },
    'MX': {
      flag: '🇲🇽',
      greeting: '¡Hola!',
      country: 'Mexico',
      message: 'I\'m available for opportunities in your region (Latin America) and remote roles!'
    },
    'AR': {
      flag: '🇦🇷',
      greeting: '¡Hola!',
      country: 'Argentina',
      message: 'I\'m available for opportunities in your region (Latin America) and remote roles!'
    },
    'IT': {
      flag: '🇮🇹',
      greeting: 'Ciao!',
      country: 'Italy',
      message: 'I\'m available for opportunities in your region (Europe) and remote roles!'
    },
    'PT': {
      flag: '🇵🇹',
      greeting: 'Olá!',
      country: 'Portugal',
      message: 'I\'m available for opportunities in your region (Europe) and remote roles!'
    },
    'CH': {
      flag: '🇨🇭',
      greeting: 'Grüezi!',
      country: 'Switzerland',
      message: 'I\'m available for opportunities in your region (Europe) and remote roles!'
    },
    'DK': {
      flag: '🇩🇰',
      greeting: 'Hej!',
      country: 'Denmark',
      message: 'I\'m available for opportunities in your region (Nordic region) and remote roles!'
    },
    'FI': {
      flag: '🇫🇮',
      greeting: 'Hei!',
      country: 'Finland',
      message: 'I\'m available for opportunities in your region (Nordic region) and remote roles!'
    },
    'AE': {
      flag: '🇦🇪',
      greeting: 'Marhaba!',
      country: 'UAE',
      message: 'Unfortunately, I\'m not available for opportunities in UAE at this time, but I am available for remote roles!'
    },
    'IL': {
      flag: '🇮🇱',
      greeting: 'Shalom!',
      country: 'Israel',
      message: 'Unfortunately, I\'m not available for opportunities in Israel at this time, but I am available for remote roles!'
    },
    'IS': {
      flag: '🇮🇸',
      greeting: 'Halló!',
      country: 'Iceland',
      message: 'I\'m available for opportunities in your region (Europe) and remote roles!'
    },
    'GR': {
      flag: '🇬🇷',
      greeting: 'Yassas!',
      country: 'Greece',
      message: 'I\'m available for opportunities in your region (Europe) and remote roles!'
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
    // TEST MODE: Uncomment to test specific countries/cities
    // Remove sessionStorage flag first: sessionStorage.removeItem('countryPopoverShown')
    // const testConfig = {
    //   country_code: 'JP',  // Try: US, GB, CN, AU, ES, FR, JP, etc.
    //   timezone: 'Asia/Tokyo',
    //   city: 'Tokyo'  // Set to null to test country-only
    // };
    // showPopover(testConfig.country_code, testConfig.timezone, testConfig.city);
    // return;

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
    let title;

    if (city && !isReturning) {
      // Sanitize city name to prevent XSS
      const sanitizedCity = sanitizeText(city);
      title = `${config.greeting} Thanks for visiting from ${sanitizedCity} and checking out my resume!`;
    } else if (isReturning) {
      title = `${greeting}!`;
    } else {
      // Country only (no city)
      title = `${config.greeting} Thanks for visiting from ${config.country} and checking out my resume!`;
    }

    // Build message with context
    let message = config.message;

    // Add referrer context
    if (referrer) {
      message = `I see you found me on ${referrer}, WELCOME!!! ${message}`;
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

    // Auto-hide after 30 seconds
    setTimeout(() => {
      if (popover.parentElement) {
        popover.classList.remove('show');
        setTimeout(() => {
          popover.remove();
        }, 300);
      }
    }, 30000);

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
