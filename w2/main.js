

// 1. household members points = 5 other members
const memberPoints = 4;

// 2. home size points = small
const homePoints = 4;

// 3. food choice points = domestic meat daily + prepackaged convience food
const foodPoints = 22;

// 4. water consumption points = run dishwasher 1-3 times/week + no washing machine
const waterPoints = 1;

// 5. household purchases points = 3 items or less
const purchasePoints = 4;

// 6. waste produce points = 1 garbage can per week
const wastePoints = 20;

// 7. recycle points = no recycling
const recyclePoints = 24;

// 8. annual transportation points = personal vehicle more than 15,000 milers per year
const vehiclePoints = 12;

// 9. total number carbon footprint points = 91 points
const cfpTotal = memberPoints + homePoints + foodPoints + waterPoints + purchasePoints + wastePoints + recyclePoints + vehiclePoints
console.log(cfpTotal)
const myHeading = document.querySelector("h2");
myHeading.textContent = cfpTotal