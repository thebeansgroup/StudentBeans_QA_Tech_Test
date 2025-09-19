class TrendingPageObject {
    //Selectors
    get trendingOffers () {return $$('//section/div[@data-testid="grid"]/article')}

    async chooseTrendingOffer(offerPosition) {
        const trendingOffers = await $$('//section/div[@data-testid="grid"]/article')
        const trendingOfferTitle = await trendingOffers[offerPosition -1].$('[data-testid="offer-tile-title"]').getText()
        const trendingOfferBrand = await trendingOffers[offerPosition -1].$('[data-testid="offer-tile-brand"]').getText()

        return {
            trendingOfferTitle,
            trendingOfferBrand
        }
    }

    async checkIfOfferMatches(offerBrand, offerTitle) {
        const previousPageBreadcrumb = await $('[data-testid="breadcrumb-current"]').getText()
        const selectedOffer = await $('[data-offer-selected="true"]')
        const selectedOfferTitle = await selectedOffer.$('[data-testid="offer-issuance-title"]').getText()
    
        expect(offerBrand).equal(previousPageBreadcrumb)
        expect(offerTitle).equal(selectedOfferTitle) 
    }
}

module.exports = TrendingPageObject