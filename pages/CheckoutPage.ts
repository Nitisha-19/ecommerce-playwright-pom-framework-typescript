
import type {Page, Locator} from '@playwright/test';
export class CheckoutPage{
//Constructor
readonly page: Page;
readonly LoginPageLink: Locator;
readonly ShippingAddressSelect: Locator;
readonly ShippingMethodsButton: Locator;
readonly ContinueButton: Locator;
readonly PaymentsMethodButton: Locator;
readonly ConfirmOrderButton: Locator;
readonly OrderPlacedHeading: Locator;



constructor(page: Page)
{
    this.page = page;
    
//Locators
//Login		
this.LoginPageLink =  page.getByRole('link', { name: 'login page' });

//Complete Checkout form
this.ShippingAddressSelect = page.locator('#input-shipping-address');
this.ShippingMethodsButton = page.locator('#button-shipping-methods');
this.ContinueButton = page.getByRole('button', { name: 'Continue' });
this.PaymentsMethodButton = page.locator('#button-payment-methods');

//12.validate order confirm
this.ConfirmOrderButton = page.getByRole('button', { name: 'Confirm Order' });
this.OrderPlacedHeading = page.getByRole('heading', { name: 'Your order has been placed!' });

}

//Action methods
async clickLoginPage(): Promise<void>
{
   await this.LoginPageLink.click();
}  

async selectShippingAddressByIndex(index: number): Promise<void>
{
    await this.ShippingAddressSelect.selectOption({ index });
}

async continueShipping(): Promise<void>
{
    await this.ShippingMethodsButton.click();
    await this.ContinueButton.click();
}

async continuePayment(): Promise<void>
{
    await this.PaymentsMethodButton.click();
    await this.ContinueButton.click();
}

async confirmOrder(): Promise<void>
{
    await this.ConfirmOrderButton.click();
}

async isOrdeerPlacedVisible(): Promise<boolean>
{
    return await this.OrderPlacedHeading.isVisible();
}

}

