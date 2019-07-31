const expect = require('chai').expect;

describe('Home Feed', function () {
    it('should load articles', function () {
        browser.url('./');
        // browser.pause(5000);
        $('[data-qa-id="article-loading-indicator"]').waitForExist(null, true);
        const $$articles = $$('[data-qa-type="article-preview"]');
        expect($$articles).to.have.length(1);
    })
})