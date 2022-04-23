Budget Me

npm start is running on PORT=2000
Backend db.json is running on PORT=3000

Description:

takes some income and expenses and displays the total difference.

Track how many expenses I have in a month
Track how much income I have in a month
Categorize the expenses in groups
shows the percentage of each expense
left with total

Transaction
[
{
id: 1,
description: "paycheck",
transactionType: "income"
amount: 100,
category: "job",
// transactionTimeStamp: new Date().toLocaleString('en-US', { timeZone: 'America/New_York' }),
},
{
id: 2,
description: "gas",
transactionType: "expense"
amount: -50,
category: "Bills and Utilities",
// transactionTimeStamp: new Date().toLocaleString('en-US', { timeZone: 'America/New_York' }),
}
]

Budget
[

{
id: 1,
Amount: 200,
remainder: (totalIncome - totalExpenses)
month: // look up how to get the current budget month
}

]

Components

App.js
TransactionsList.js
TransactionItem.js
TransactionForm.js
NavBar.js
BudgetPage.js
SavingsPage.js

NavBar
