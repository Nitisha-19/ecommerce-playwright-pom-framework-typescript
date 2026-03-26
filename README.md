# 🛍️ E-Commerce Playwright Automation Framework (TypeScript)

![Playwright](https://img.shields.io/badge/Playwright-Automation-green?logo=playwright)
![TypeScript](https://img.shields.io/badge/TypeScript-Strong%20Typing-blue?logo=typescript)
![Node.js](https://img.shields.io/badge/Node.js-Backend-green?logo=node.js)
![Status](https://img.shields.io/badge/Build-Passing-brightgreen)
![License](https://img.shields.io/badge/License-MIT-lightgrey)

A **scalable, production-ready test automation framework** built using **Playwright + TypeScript**, designed to automate modern e-commerce applications with high reliability, maintainability, and performance.

---

## 🚀 Why This Project?

This framework demonstrates:

* Real-world **QA Automation Engineering skills**
* Strong understanding of **test architecture & design patterns**
* Hands-on expertise in **modern UI automation tools**
* Clean, maintainable, and scalable **enterprise-level framework design**

---

## 🧰 Tech Stack

* **Playwright** → Fast, reliable browser automation
* **TypeScript** → Strong typing & better code quality
* **Node.js** → Runtime environment
* **Playwright Test Runner** → Built-in test execution & reporting
* **Page Object Model (POM)** → Scalable design pattern

---

## ✨ Key Features

* ✅ End-to-End UI Automation
* ✅ Page Object Model (POM) architecture
* ✅ Cross-browser testing (Chromium, Firefox, WebKit)
* ✅ Parallel execution for faster test runs
* ✅ Built-in assertions using Playwright
* ✅ Auto-capture screenshots, videos & traces on failure
* ✅ Clean and modular folder structure
* ✅ Easy CI/CD integration

---

## 📂 Project Structure

```bash
ecommerce-playwright-pom-framework-typescript
│── tests/                 # Test specifications
│── pages/                 # Page Object classes
│── utils/                 # Reusable helper methods
│── fixtures/              # Custom test fixtures
│── playwright.config.ts   # Playwright configuration
│── tsconfig.json          # TypeScript configuration
│── package.json           # Dependencies & scripts
```

---

## ⚙️ Setup & Installation

### 🔧 Prerequisites

* Node.js (v16+)
* npm or yarn
* VS Code (recommended)

---

### 📥 Install Dependencies

```bash
npm install
```

---

### 🌐 Install Browsers

```bash
npx playwright install
```

---

## 🧪 Test Execution

### ▶️ Run All Tests

```bash
npx playwright test
```

### ▶️ Run in Headed Mode

```bash
npx playwright test --headed
```

### ▶️ Run Specific Test

```bash
npx playwright test tests/example.spec.ts
```

### ▶️ Run in Specific Browser

```bash
npx playwright test --project=chromium
```

---

## 📊 Reporting & Debugging

### View HTML Report

```bash
npx playwright show-report
```

### 🔍 Report Includes:

* Step-by-step execution logs
* Screenshots on failure
* Video recordings
* Trace viewer (for debugging failures)

---

## 🧩 Framework Design

### 🔹 Page Object Model (POM)

* Encapsulates UI interactions
* Improves reusability & maintainability

### 🔹 Separation of Concerns

* Tests → Assertions
* Pages → Actions
* Utils → Helpers

### 🔹 Scalable Architecture

* Easy to extend for large test suites
* Supports enterprise-level automation needs

---

## 🧪 Sample Test

```ts
import { test, expect } from '@playwright/test';
import { ProductPage } from '../pages/ProductPage';

test('Add product to cart', async ({ page }) => {
  const productPage = new ProductPage(page);

  await page.goto('https://example.com');
  await productPage.addToCart();

  await expect(page.locator('.alert-success')).toBeVisible();
});
```

---

## 🔄 CI/CD Ready

This framework can be easily integrated with:

* GitHub Actions
* Jenkins
* Azure DevOps

📌 Enables automated test execution in pipelines.

---

## 🚀 Future Enhancements

* 🔹 API Automation integration
* 🔹 Data-driven testing (JSON/CSV)
* 🔹 Docker containerization
* 🔹 Cloud execution (BrowserStack / Sauce Labs)
* 🔹 Visual testing integration

---



⭐ If you found this helpful, please give this repo a star!
