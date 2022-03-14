/**
 * sub page containing specific selectors and methods for a specific page
 */
 class DefineDates {
    /**
     * define selectors using getter methods
     */
    
    get form () {
        return $("[data-qa='define-first-payment-date']")
    } 
    
    get buttonNext () {
        return $("[data-qa='next']");
    }

     /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    

    /**
     * overwrite specific options to adapt it to page object
     */
  
}

module.exports = new DefineDates();
