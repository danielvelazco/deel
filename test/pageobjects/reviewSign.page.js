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

    get lblContractType () {
        return $("[data-qa='contract-type']");
    }

    get lblRate () {
        return $("[data-qa='rate'] h4");
    }

    get lblFrecuency () {
        return $("[data-qa='rate'] div");
    }

    get lblSpecialClause () {
        return $("[data-qa='dpa-row-special-clause-value'] div").nextElement();
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
