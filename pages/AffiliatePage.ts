import {Page, Locator, expect} from '@playwright/test';

export class AffiliatePage{
    readonly page: Page;
    readonly AffiliateFooterLink: Locator;
    readonly Company: Locator;
    readonly Website: Locator;
    readonly TaxId: Locator;
    readonly ChequePayee: Locator;
    readonly Agree: Locator;
    readonly ContinueButton: Locator;
    readonly successAlert: Locator;

    //Constructor
    constructor(page: Page) {
        this.page = page;
  
        //Locator
  
        this.AffiliateFooterLink = page.getByRole('link', { name: 'Affiliate', exact: true });
        this.Company = page.getByRole('textbox', { name: 'Company' });
        this.Website = page.getByRole('textbox', { name: 'Web Site' });

        this.TaxId = page.getByRole('textbox', { name: 'Tax ID' });
        this.ChequePayee = page.getByRole('textbox', { name: '* Cheque Payee Name' });
        this.Agree = page.locator('#input-agree');
        this.ContinueButton = page.getByRole('button', { name: 'Continue' });
        this.successAlert = page.locator("div.alert.alert-success.alert-dismissible");

    }
    //Action methods

    async openFromFooter(): Promise<void>
    {
        await this.AffiliateFooterLink.click();
    }

    async fillAffiliateForm(
    {
      company,
      website,
      taxId,
      payeeName,
    }: {
        company: string;
        website: string;
        taxId: string;
        payeeName: string;
        }
    ) : Promise<void> {
        await this.Company.fill(company);
        await this.Website.fill(website);
        await this.TaxId.fill(taxId);
        await this.ChequePayee.fill(payeeName);
    }


    async submit(): Promise<void> 
    {
        await this.ContinueButton.click();
    }

    async expectSuccessContains(text: string): Promise<void> {
        await expect(this.successAlert).toBeVisible();
        await expect(this.successAlert).toContainText(text);

    }
}
