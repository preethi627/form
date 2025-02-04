// List of years for NEET question papers
const yearsTamil = [2021, 2020, 2019, 2018]; // Tamil years only
const yearsEnglish = [2024, 2023, 2022, 2021, 2020, 2019, 2018]; // English years

// Reference to yearList div
const yearList = document.getElementById('yearList');

// Handle language selection
document.getElementById('tamilBtn').addEventListener('click', () => {
    populateYears('தமிழ்');
});

document.getElementById('englishBtn').addEventListener('click', () => {
    populateYears('english');
});

// Function to populate year buttons
function populateYears(language) {
    yearList.innerHTML = ''; // Clear the existing list
    const years = language === 'தமிழ்' ? yearsTamil : yearsEnglish; // Select years based on language

    years.forEach(year => {
        const yearButton = document.createElement('button');
        yearButton.textContent = `${year} - ${language === 'தமிழ்' ? 'தமிழ்' : 'English'}`;
        
        // Set the button to navigate to the corresponding page
        yearButton.addEventListener('click', () => {
            const pagePath = getPagePath(year, language);
            if (pagePath) {
                window.location.href = pagePath; // Redirect to the corresponding page
            }
        });
        
        yearList.appendChild(yearButton);
    });
}

// Function to get the corresponding page path based on year and language
function getPagePath(year, language) {
    const pages = {
        english: {
            2018: '2018e.html',
            2019: '2019e.html',
            2020: '2020e.html',
            2021: '2021e.html',
            2022: '2022e.html',
            2023: '2023e.html',
            2024: '2024e.html'
        },
        'தமிழ்': { // Use 'தமிழ்' as the key
            2018: '2018t.html',
            2019: '2019t.html',
            2020: '2020t.html',
            2021: '2021t.html'
        }
    };

    // Return the path for the selected year and language
    return pages[language][year] || null;
}
