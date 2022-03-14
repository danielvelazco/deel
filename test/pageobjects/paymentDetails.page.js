/**
 * sub page containing specific selectors and methods for a specific page
 */
const DefineDatesPage = require("./defineDates.page");
class PaymentDetails {
    /**
     * define selectors using getter methods
     */
    get dropdownCurrency () {
        return $("[data-qa='currency-select'] input");
    }

    get inputPaymentRate () {
        return $("input[name='rate']");
    }

    get dropdownPaymentFrecuency () {
        return $("[data-qa='cycle-select'] input");
    }

    get buttonNext () {
        return $("[data-qa='next']");
    }

     /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async setCurrency (currency) {
        try {
            await this.dropdownCurrency.waitForEnabled({timeout: 50000})
            await this.dropdownCurrency.setValue(currency);
            return await browser.keys("Enter");    
        } catch (error) {
            console.log(error);
        }
    }

    async setPaymentFrecuency (frecuency) {
        try {
            await this.dropdownPaymentFrecuency.setValue(frecuency);
            return await browser.keys("Enter");    
        } catch (error) {
            console.log(error);
        }
    }

    async fillPaymentDetailsForm (data) {
        try {
            await this.setCurrency(data.currency);
            await this.inputPaymentRate.setValue(data.PaymentRate);
            await this.setPaymentFrecuency(data.frecuency);
            await this.buttonNext.click();
            return await DefineDatesPage.form.waitForDisplayed({timeout: 50000});
        } catch (error) {
            console.log(error);
        }
    }

    /**
     * overwrite specific options to adapt it to page object
     */
  
}

module.exports = new PaymentDetails();
