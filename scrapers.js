const puppeteer = require('puppeteer');

async function scrapeBestSellers(url) {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto(url);

    const thumbnails = await page.evaluate(() => {
        const images = document.querySelectorAll('.a-section .a-spacing-small img')
        const urls = Array.from(images).map(v => v.src)
        return urls;
    });

    console.log(thumbnails)
    browser.close();
}

scrapeBestSellers('https://www.amazon.co.uk/Best-Sellers-Books/zgbs/books/ref=zg_bs_books_home_all?pf_rd_p=8c6e54de-05e7-40e8-a687-ef60717c9bae&pf_rd_s=center-1&pf_rd_t=2101&pf_rd_i=home&pf_rd_m=A3P5ROKL5A1OLE&pf_rd_r=9BRVNNKT7CE2K6A1YKNX&pf_rd_r=9BRVNNKT7CE2K6A1YKNX&pf_rd_p=8c6e54de-05e7-40e8-a687-ef60717c9bae');