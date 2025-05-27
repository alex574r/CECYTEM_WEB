document.addEventListener('DOMContentLoaded', function () {
    const accordionItems = document.querySelectorAll('.accordion-item');

    accordionItems.forEach(item => {
        const header = item.querySelector('.accordion-header');
        const content = item.querySelector('.accordion-content');
        const icon = header.querySelector('.accordion-icon');

        header.addEventListener('click', () => {
            // Toggle active class on the header
            header.classList.toggle('active');
            
            // Toggle active class on the content for styling (optional)
            content.classList.toggle('active'); 

            if (header.classList.contains('active')) {
                content.style.maxHeight = content.scrollHeight + "px";
                icon.textContent = '−'; // Minus sign for open
            } else {
                content.style.maxHeight = '0';
                icon.textContent = '+'; // Plus sign for closed
            }

            // Optional: Close other accordions when one is opened
            // accordionItems.forEach(otherItem => {
            //     if (otherItem !== item) {
            //         const otherHeader = otherItem.querySelector('.accordion-header');
            //         const otherContent = otherItem.querySelector('.accordion-content');
            //         const otherIcon = otherHeader.querySelector('.accordion-icon');

            //         if (otherHeader.classList.contains('active')) {
            //             otherHeader.classList.remove('active');
            //             otherContent.classList.remove('active');
            //             otherContent.style.maxHeight = '0';
            //             otherIcon.textContent = '+';
            //         }
            //     }
            // });
        });
    });
});