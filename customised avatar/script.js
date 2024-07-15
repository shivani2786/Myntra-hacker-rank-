// script.js

function customizeAvatar() {
    // Get selected values
    var hairStyle = document.getElementById('hair-style').value;
    var eyeColor = document.getElementById('eye-color').value;
    var clothingStyle = document.getElementById('clothing-style').value;
    var glassesStyle = document.getElementById('glasses-style').value;
    var skinTone = document.getElementById('skin-tone').value;
    var holiday = document.getElementById('holidays').value;
    var season = document.getElementById('season').value;

    // Update avatar based on selected values
    updateAvatar(hairStyle, eyeColor, clothingStyle, glassesStyle, skinTone, holiday, season);
}

function updateAvatar(hairStyle, eyeColor, clothingStyle, glassesStyle, skinTone, holiday, season) {
    var avatarElement = document.querySelector('.avatar');
    var avatarImage = document.getElementById('avatar-image');
    var purchaseLink = document.getElementById('purchase-link');

    // Reset avatar
    avatarElement.style.backgroundImage = 'none';
    avatarImage.src = '';
    purchaseLink.href = '#';
    purchaseLink.style.display = 'none';

    // Default avatar settings
    var avatarSettings = {
        image: '',
        link: ''
    };

    // Determine avatar settings based on selected values
    if (hairStyle === 'long' && clothingStyle === 'traditional' && eyeColor === '#000000' && glassesStyle === 'none' && skinTone === 'light' && holiday === 'none' && season === 'summer') {
        avatarSettings = {
            image: 'traditional 1.jpeg',
            link: 'https://www.myntra.com/purple-salwar-suit?rawQuery=purple%20salwar%20suit'
        };
    } else if (hairStyle === 'curly' && clothingStyle === 'western' && eyeColor === '#000000' && glassesStyle === 'round' && skinTone === 'light' && holiday === 'none' && season === 'summer') {
        avatarSettings = {
            image: 'summer 2.jpeg',
            link: 'https://www.myntra.com/white-tube-crop-top?rawQuery=white%20tube%20crop%20top'
        };
    } else if (hairStyle === 'long' && clothingStyle === 'western' && eyeColor === '#000000' && glassesStyle === 'none' && skinTone === 'light' && holiday === 'none' && season === 'summer') {
        avatarSettings = {
            image: 'summer 1.jpeg', 
            link: 'https://www.myntra.com/orange-basic-crop-top?rawQuery=orange%20basic%20crop%20top'
        };
    } else if (hairStyle === 'curly' && clothingStyle === 'western' && eyeColor === '#000000' && glassesStyle === 'none' && skinTone === 'light' && holiday === 'halloween' && season === 'none') {
        avatarSettings = {
            image: 'Hallowen1.jpeg',
            link: 'https://www.myntra.com/halloween-dress-women?rawQuery=Halloween%20Dress%20Women'
        };
    } else if (hairStyle === 'long' && clothingStyle === 'western' && eyeColor === '#000000' && glassesStyle === 'none' && skinTone === 'light' && holiday === 'halloween' && season === 'none') {
        avatarSettings = {
            image: 'Halloween 2.jpeg',
            link: 'https://www.myntra.com/halloween-dress-women?rawQuery=Halloween%20Dress%20Women'
        };
    } else if (hairStyle === 'long' && clothingStyle === 'western' && eyeColor === '#000000' && glassesStyle === 'none' && skinTone === 'light' && holiday === 'none' && season === 'winter') {
        avatarSettings = {
            image: 'winter 1.jpeg',
            link: 'https://www.myntra.com/brown-jacket?f=Gender%3Amen%20women%2Cwomen&rawQuery=brown%20jacket'
        };
    } else if (hairStyle === 'long' && clothingStyle === 'western' && eyeColor === '#000000' && glassesStyle === 'none' && skinTone === 'light' && holiday === 'christmas' && season === 'none') {
        avatarSettings = {
            image: 'chrishtmas 1.jpeg',
            link: 'https://www.myntra.com/christmas-wear-women?rawQuery=Christmas%20Wear%20Women'
        };
    } else if (hairStyle === 'long' && clothingStyle === 'western' && eyeColor === '#000000' && glassesStyle === 'none' && skinTone === 'light' && holiday === 'party' && season === 'summer') {
        avatarSettings = {
            image: 'party 1.jpeg',
            link: 'https://www.myntra.com/dresses/trendyol/trendyol-v-neck-shoulder-straps-sheath-dress/24506498/buy'
        };
    } else if (hairStyle === 'long' && clothingStyle === 'western' && eyeColor === '#000000' && glassesStyle === 'none' && skinTone === 'light' && holiday === 'party' && season === 'none') {
        avatarSettings = {
            image: 'party 2.jpeg',
            link: 'https://www.myntra.com/dresses/mabish+by+sonal+jain/mabish-by-sonal-jain-square-neck-fit--flare-dress/26642250/buy'
        };
    } else if (hairStyle === 'curly' && clothingStyle === 'western' && eyeColor === '#000000' && glassesStyle === 'none' && skinTone === 'dark' && holiday === 'none' && season === 'summer') {
        avatarSettings = {
            image: 'dark color summer 1.jpeg',
            link: 'https://www.myntra.com/white-top-black-jeans?rawQuery=white%20top%20black%20jeans'
        };
    }

    // Update avatar image and purchase link
    if (avatarSettings.image && avatarSettings.link) {
        avatarImage.src = avatarSettings.image;
        purchaseLink.href = avatarSettings.link;
        purchaseLink.style.display = 'inline'; // Show purchase link
    }

    // Display the purchase section
    var purchaseSection = document.getElementById('purchase-section');
    purchaseSection.style.display = 'block';
    
    // Remove existing event listeners to avoid stacking
    avatarElement.replaceWith(avatarElement.cloneNode(true));
    avatarElement = document.querySelector('.avatar');

    // Add event listener to show full avatar image on click
    avatarElement.addEventListener('click', function() {
        var fullImageUrl = avatarSettings.image;
        window.open(fullImageUrl, '_blank');
    });
}
