/**
 * sub page containing specific selectors and methods for a specific page
 */
 class BenefitsAndExtras {
    /**
     * define selectors using getter methods
     */
    
    get terminationDateCard () {
        return $("[data-qa='termination-date-card']");
    } 

    get areaSpecialClause () {
        return $("[data-qa='special-clause-card'] textarea");
    }

    get buttonAddSpecialClause () {
        return $("button[data-qa='add-a-special-clause']");
    }
    
    get buttonNext () {
        return $("[data-qa='next']");
    }

     /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */

    async fillBenefitsAndExtrasForm (data) {
        try {
            await this.terminationDateCard.waitForDisplayed({timeout: 50000});
            await this.buttonAddSpecialClause.waitForEnabled({timeout: 5000})
            await this.buttonAddSpecialClause.click();
            await this.areaSpecialClause.waitForEnabled({timeout: 5000})
            await this.areaSpecialClause.setValue(data.specialClause);
            return await this.buttonNext.click(); 
        } catch (error) {
            console.log(error);
        }
    }
    

    /**
     * overwrite specific options to adapt it to page object
     */
  
}

module.exports = new BenefitsAndExtras();
