Unit vs Functional Testing

Unit
-- Isolated, easy to pinpoint failures (but do not reflect user behavior)

Functional
-- Based on the user flow

https://testing-library.com/docs/

Basics methods
getByText -> non interactive elements
getByRole -> almost everything else

Unit testing functions
for reusable functions that will be used on different parts
For complicated functions and test edge cases
easier to detect failing cause
Test cause of functional tests to fail

Functional test
Test behavior like the disabled and color

ESLint
Linter is anaylise static text and marks syntax that break rules
Static: code written (not logic, or when is run)

Screen query methods
command[ALL]By[QueryType]

command
get (expect to be in the DOM)
query (not expect to be in the DOM)
find (element async )

ALL
exclude, only one match
include, more than one match

QueryType
Role
AltText
Text
Form elements
PlaceHolderText
LabelText
DisplayValue
