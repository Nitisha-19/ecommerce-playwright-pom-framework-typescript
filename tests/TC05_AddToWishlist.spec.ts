import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { CategoryPage } from '../pages/CategoryPage';
import { ProductPage } from '../pages/ProductPage';
import { LoginPage } from '../pages/LoginPage';

test('@regression TC05_AddToWishlist', async ({ page }) => {
  const home = new HomePage(page);
  const login = new LoginPage(page);
  const category = new CategoryPage(page);
  const product = new ProductPage(page);
  await home.goto();
  await home.openMyAccount();
  await home.clickLogin();
  await login.login("ntimmireddy@gmail.com", "Cloudberry@123");

  await home.openAllLaptopsAndNotebooks();

  await category.openProductByName('HP LP3065');

  await product.addToWishList();
  await product.expectSuccessContains('Success');
}
);
