

//const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
 class ContractType {
    /**
     * define selectors using getter methods
     */
    get title () {
        return $("[class='sidebar-space'] h1");
    }

    get fixedRate () {
        return $("a[href='/create/fixed']");
    }

     /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async selectContractType (type) {
        await this.title.waitForDisplayed({timeout: 50000});
        return await this[type].click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
  
}

module.exports = new ContractType();
