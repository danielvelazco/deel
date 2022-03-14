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
    async fillGeneralInfoForm (data) {
        try {
            await this.entity.waitForDisplayed({timeout: 50000})
            await this.inputName.setValue(data.name);
            await this.setContractorTaxResidenceCountry(data.contractorTaxResidenceCountry);
            await this.setContractorTaxResidenceState(data.contractorTaxResidenceState);
            await this.setSeniorityLevel(data.seniorityLevel);
            await this.selectScope(data.scope);
            await this.setContractorStartDay();
            await this.buttonNext.waitForEnabled({timeout: 5000});
            return await this.buttonNext.click();    
        } catch (error) {
            console.log(error);
        }
    }

    async setContractorTaxResidenceCountry (value) {
        try {
            await this.inputContractorTaxResidenceCountry.waitForEnabled({timeout: 50000})
            await this.inputContractorTaxResidenceCountry.setValue(value);
            return await browser.keys("Enter");    
        } catch (error) {
            console.log(error);
        }
        
    }

    async setContractorTaxResidenceState (value) {
        try {
            await this.inputContractorTaxResidenceState.setValue(value);
            return await browser.keys("Enter");    
        } catch (error) {
            console.log(error);
        }
    }

    async setSeniorityLevel (value) {
        try {
            await this.inputSeniorityLevel.setValue(value);
            return await browser.keys("Enter");    
        } catch (error) {
            console.log(error);
        }
    }

    async selectScope (scopeIndex) {
        try {
            await this.dropdownScopes.click();
            await this.scopeList[scopeIndex].waitForClickable();
            return await this.scopeList[scopeIndex].click();    
        } catch (error) {
            console.log(error);
        }
    }

    async setContractorStartDay () {
        try {
            await this.dropdownCalendar.click();
            await this.calendarDays.waitForDisplayed({timeout: 5000});
            return await this.contractorStartDay.click();    
        } catch (error) {
            console.log(error);
        }
    }


    /**
     * overwrite specific options to adapt it to page object
     */
  
}

module.exports = new FixedContract();
