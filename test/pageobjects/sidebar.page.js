/**
 * sub page containing specific selectors and methods for a specific page
 */
class Sidebar {
    /**
     * define selectors using getter methods
     */
    get logo () {
        return $("nav[class='sidebar'] div[class='logo']");
    }

     /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async selectSidebarOption (option) {
        try {
            await this.logo.waitForDisplayed({timeout: 50000});
            return (await $(`p=${option}`)).click();     
        } catch (error) {
            console.log(error);
        }
    }

    /**
     * overwrite specific options to adapt it to page object
     */
  
}

module.exports = new Sidebar();
