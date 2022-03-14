const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername () {
        return $('#mui-1');
    }

    get inputPassword () {
        return $('#mui-2');
    }

    get btnLogin () {
        return $('button[data-qa="log-in"]');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        try {
            await this.inputUsername.waitForDisplayed({timeout: 50000});
            await this.inputUsername.setValue(username);
            await this.inputPassword.setValue(password);
            return await this.btnLogin.click();    
        } catch (error) {
            console.log(error);
        }
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        try {
            return super.open('login');    
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = new LoginPage();
