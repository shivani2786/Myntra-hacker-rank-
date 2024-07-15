document.getElementById('outfitForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const mood = document.getElementById('mood').value;
    const weather = document.getElementById('weather').value;
    const occasion = document.getElementById('occasion').value;

    const suggestions = {
        Happy: {
            Sunny: {
                Casual: [
                    { name: 'T-shirt and Shorts', link: 'https://www.myntra.com/men-tshirts' },
                    { name: 'Summer Dress and Sandals', link: 'https://www.myntra.com/summer-dress-women?rawQuery=summer%20dress%20women' }
                ],
                Formal: [
                    { name: 'Blazer and Chinos', link: 'https://www.myntra.com/men-blazers' },
                    { name: 'Elegant Dress', link: 'https://www.myntra.com/formal-dress-women?rawQuery=formal%20dress%20women' }
                ],
                Party: [
                    { name: 'Colorful Maxi Dress', link: 'https://www.myntra.com/women-maxi-dresses' },
                    { name: 'Stylish Shirt and Trousers', link: 'https://www.myntra.com/men-shirts' }
                ],
                Sports: [
                    { name: 'Sports Bra and Leggings', link: 'https://www.myntra.com/women-sports-bras' },
                    { name: 'Tank Top and Running Shorts', link: 'https://www.myntra.com/men-shorts' }
                ]
            },
            Rainy: {
                Casual: [
                    { name: 'Raincoat and Waterproof Boots', link: 'https://www.myntra.com/men-raincoats' },
                    { name: 'Hoodie and Jeans', link: 'https://www.myntra.com/men-hoodies' }
                ],
                Formal: [
                    { name: 'Trench Coat and Formal Shoes', link: 'https://www.myntra.com/men-trench-coats' },
                    { name: 'Elegant Dress and Waterproof Heels', link: 'https://www.myntra.com/women-heels' }
                ],
                Party: [
                    { name: 'Waterproof Jacket and Stylish Boots', link: 'https://www.myntra.com/men-jackets' },
                    { name: 'Rainproof Party Dress', link: 'https://www.myntra.com/women-dresses' }
                ],
                Sports: [
                    { name: 'Rain Jacket and Waterproof Leggings', link: 'https://www.myntra.com/women-rain-jackets' },
                    { name: 'Water-resistant Tracksuit', link: 'https://www.myntra.com/men-tracksuits' }
                ]
            }
            // Add more combinations as needed
        },
        // Add more moods as needed
    };

    const outfitSuggestions = document.getElementById('outfitSuggestions');
    outfitSuggestions.innerHTML = '';

    if (suggestions[mood] && suggestions[mood][weather] && suggestions[mood][weather][occasion]) {
        const outfits = suggestions[mood][weather][occasion];
        outfits.forEach(outfit => {
            const outfitElement = document.createElement('div');
            outfitElement.classList.add('outfit');
            outfitElement.innerHTML = `
                <h3>${outfit.name}</h3>
                <a href="${outfit.link}" target="_blank">Purchase</a>
            `;
            outfitSuggestions.appendChild(outfitElement);
        });
    } else {
        outfitSuggestions.innerHTML = '<p>No suggestions available for the selected combination.</p>';
    }
});
