/**
 * sub page containing specific selectors and methods for a specific page
 */
const ReviewSignPage = require("./reviewSign.page"); 
class Compliance {
    /**
     * define selectors using getter methods
     */
    
    get contractComplianceCard () {
        return $("[data-qa='contract-compliance-card']");
    } 

    get buttonCreateAContract () {
        return $("button[data-qa='create-contract']");
    }

     /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */

    async createAContract () {
        try {
            await this.contractComplianceCard.waitForDisplayed({timeout: 50000});
            await this.buttonCreateAContract.waitForEnabled({timeout: 5000})
            await this.buttonCreateAContract.click();
            return await ReviewSignPage.signaturesCards.waitForDisplayed({timeout: 50000})
        } catch (error) {
            console.log(error);
        }
    }
    

    /**
     * overwrite specific options to adapt it to page object
     */
  
}

module.exports = new Compliance();
