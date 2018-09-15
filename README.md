# Growth-Engineering-Challenge

# CHALLENGE: 

Create automated tests for http://www.growthengineering.co.uk/.



# Assumptions

- Since the implementation of the menu is different between mobile screens and larger screens, the tests were broken into suites to accommodate differences
    - On desktop, the top links on the menu take the User to a page
    - On mobile, the top links only toggle the submenu (the submenu items then take the user to the page)

# To run the cypress test

Go to main directory, run `npm install` then `npm start`.
