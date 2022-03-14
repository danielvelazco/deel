/**
 * sub page containing specific selectors and methods for a specific page
 */
 class ReviewSign {
    /**
     * define selectors using getter methods
     */
    
     get signaturesCards () {
        return $("[data-qa='client-signatures']");
    }
    
    get buttonReviewSign () {
        return $("[data-qa='review-sign']");
    } 

     /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */

    

    /**
     * overwrite specific options to adapt it to page object
     */
  
}

module.exports = new ReviewSign();
