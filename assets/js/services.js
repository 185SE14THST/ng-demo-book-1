/* Summary:         Service definitions
*
* Descriptions:     This program provides the Service functionality for AngularJS Application
*        
* Programmer:       185SE14THST
* 
* Date:             2016-09-15
*/
myApp.service('bookData', function() {
    
    this.books = [ // Objects pulled from local or remote sources
        { 
            name: 'Cats Don\'t Dance',
            isbn13: '9780780638563',
            text: 'Used -Good. May have light surface scratches. Case and artwork are included but their condition may vary. If applicable: Digital copy or ultraviolet codes may be expired or not included. Slipcover may not be included.',
            publisher: 'Warner Home Video',
            publisherDate: '2004',
            location: 'Miami-Brickell, FL 33031',
            available: 23,
            price: 9.99,
            shipping: 4.99,
        },
        { 
            name: 'Peter Pan (Special Edition)',
            isbn13: '0786936144444',
            text: 'New. May have very light or no surface scratches. Case and artwork are included but may show minimal signs of wear. If applicable: Digital copy or ultraviolet codes may be expired or not included.',
            publisher: 'Buena Vista Home Entertainment',
            publisherDate: '2002',
            location: 'Miami-Brickell, FL 33031',
            available: 5,
            price: 18.59,
            shipping: 4.99,
        },
        { 
            name: 'Winnie the Pooh - Frankenpooh and Spookable Pooh',
            isbn13: '0786936182842',
            text: 'Used. May have very light or no surface scratches. Case and artwork are included but may show minimal signs of wear. If applicable: Digital copy or ultraviolet codes may be expired or not included.',
            publisher: 'Buena Vista Home Entertainment',
            publisherDate: '2004',
            location: 'Miami-Brickell, FL 33031',
            available: 3,
            price: 30.71,
            shipping: 4.99,
        },
    ]
});
      