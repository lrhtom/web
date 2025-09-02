import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.2345.com/tg36612.htm');
  await page.getByText('把2345设为主页2345旗下产品 浏览器安全版 装软件赚钱切换少年版 登录 登录2345帐号 注册 收藏夹王牌技术联盟 换肤 反馈平台').click({
    clickCount: 3
  });
});