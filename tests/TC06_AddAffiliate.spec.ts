import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { CategoryPage } from '../pages/CategoryPage';
import { LoginPage } from '../pages/LoginPage';
import { AffiliatePage } from '../pages/AffiliatePage';

test('@regression TC06_AddAffiliate', async ({ page }) => {
  const home = new HomePage(page);
  const login = new LoginPage(page);
  const category = new CategoryPage(page);
  const affiliate = new AffiliatePage(page);
  await home.goto();
  await home.openMyAccount();
  await home.clickLogin();
  await login.login('ntimmireddy@gmail.com', 'Cloudberry@123');

    await affiliate.openFromFooter();
    await affiliate.fillAffiliateForm({
        company:'Cloudberry',
        website:'cloudberry.services', 
        taxId:'12345', 
        payeeName:'Nitisha kondadhasula',
    });
    await affiliate.submit();
    await affiliate.expectSuccessContains('Success');

});