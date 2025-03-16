document.addEventListener('DOMContentLoaded', function() {
    const languageButtons = document.querySelectorAll('.language-switcher button');
    const sections = document.querySelectorAll('section');

    languageButtons.forEach(button => {
        button.addEventListener('click', function() {
            const language = this.getAttribute('data-lang');
            setLanguage(language);
        });
    });

    function setLanguage(language) {
        sections.forEach(section => {
            section.style.display = 'none';
        });

        document.getElementById(`home-${language}`).style.display = 'block';
        document.getElementById(`resume-${language}`).style.display = 'block';
        document.getElementById(`gallery-${language}`).style.display = 'block';
        document.getElementById(`contact-${language}`).style.display = 'block';
    }

    // Set default language to English
    setLanguage('en');
});
