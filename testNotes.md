I attempted to ingnore the issues below and write the tests as if they would pass on a setup that did not encounter any of problems.

Issues:
1. There is an inconsistency with the search box on the studentbeans website where it will sometimes not show any search results, this leads to the test in "simpleSearch.feature" being flaky.
2. I could not find a way to bypass the cloudflair check, so the registration check is not testable atlest on my setup