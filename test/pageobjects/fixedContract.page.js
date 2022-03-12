

//const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
 class FixedContract {
    /**
     * define selectors using getter methods
     */
    get entity () {
        return $("[data-qa='select-entity']");
    }
    
    get inputName () {
        return $("input[name='name']");
    }

    get inputContractorTaxResidenceCountry () {
        return $("[data-qa='contractor-tax-residence'] input");
    }

    get inputContractorTaxResidenceState () {
        return $("[data-qa='contractor-tax-residence-province'] input");
    }

    get inputJobTitle () {
        return $(`input[name="jobTitle"]`);
    }

    get inputSeniorityLevel () {
        return $("[data-qa='selector-seniority-level'] input");
    }

    get dropdownScopes () {
        return $("div[class='flex scopes-dropdown-toggle align-items-center']");
    }

    get scopeList () {
        return $$("div[class='scopes-container'] button");
    }

    get dropdownCalendar () {
        return $("div[class='deel-ui__calendar-input-container__input']");
    }

    get calendarDays () {
        return $("div[class='react-calendar__month-view__days']");
    }

    get contractorStartDay () {
        return $("button[class*='--active']").previousElement();
    }

    get buttonNext () {
        return $("[data-qa='next']");
    }

    

     /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async fillGeneralInfo (data) {
        await this.entity.waitForDisplayed({timeout: 50000})
        await this.inputName.setValue(data.name);
        await this.inputContractorTaxResidenceCountry.waitForEnabled({timeout: 50000})
        await this.inputContractorTaxResidenceCountry.setValue(data.contractorTaxResidenceCountry);
        await browser.keys("Enter");
        await this.inputContractorTaxResidenceState.setValue(data.contractorTaxResidenceState);
        await browser.keys("Enter");
        await this.inputSeniorityLevel.setValue(data.seniorityLevel);
        await browser.keys("Enter");
        await this.selectScope(data.scope);
        await this.dropdownCalendar.click();
        await this.calendarDays.waitForDisplayed({timeout: 5000});
        await this.contractorStartDay.click();
        await this.buttonNext.waitForEnabled({timeout: 5000});
        await this.buttonNext.click();
    }

    async selectScope (scopeIndex) {
        await this.dropdownScopes.click();
        await this.scopeList[scopeIndex].waitForClickable();
        return await this.scopeList[scopeIndex].click();
    }


    /**
     * overwrite specific options to adapt it to page object
     */
  
}

module.exports = new FixedContract();
