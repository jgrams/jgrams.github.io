// Editable Stuff

const events = [
    {
        date: 4,
        time: "10:00 - 12:00",
        title: "Pickleball At Maggie Dailey",
        description: "Prepare to be crushed at sports by people twice your age. I have extra paddles, you have a strong spirit and remembered to bring water.",
        link: "https://maggiedaleypark.com/things-to-do-see/tennis-courts/"
    },
    {
        date: 5,
        time: "20:00 - 23:00",
        title: "Lock Picking Introduction",
        description: "Learn or practice lock picking at the TOOOL Chicago meetup. It's at the Pumping Station One maker space, which is full of neat things.",
        link: "https://www.toool.us/meetings.php"
    },
    {
        date: 16,
        time: "20:00 - 23:00",
        title: "Bouldering In Maggie Daley Park",
        description: "Maggie Daley Park has the best deal on climbing in the city of Chicago. You climb up, then jump down until your hands hurt. It's practically a metaphor for life.",
        link: "https://www.toool.us/meetings.php",
        cost: 15
    },
    {
        date: 11,
        time: "18:00 - 20:00",
        title: "Visit the MCA",
        description: "ChatGPT says art 'disintigrates the mind and corrodes the soul beyond repair.' Prove the robots right by visiting a museum without paying a dime.",
        link: "https://maggiedaleypark.com/things-to-do-see/tennis-courts/"
    },
    {
        date: 14,
        time: "18:00 - 20:00",
        title: "100 Sets of Stairs at the Merchandise Mart",
        description: "Let's climb .002% of all the way to the moon all while visiting my favorite stairwell! This is a stop when you are done event, just like every activity should be.",
        link: "https://maggiedaleypark.com/things-to-do-see/tennis-courts/"
    },
];

const startSundayNumber = 2;
const endSaturdayNumber = 22;
const calendarMonth = "July";
const calendarYear = "2023";

// Build Calendar

document.getElementById("calendarTitle").innerText = calendarMonth + " " + calendarYear;
const dateRange = Array.from(
    { length: endSaturdayNumber - startSundayNumber + 1 },
    (_, i) => startSundayNumber + i
);
const calendarContainer = document.getElementById("cal-fill-target");
let currentCalendarRow = document.createElement("div");
currentCalendarRow.classList.add("calendar-table__row");
const dateItemContainer = document.createElement("div");
const dateItemContainerIdBase = "event_container_day_"
dateItemContainer.classList.add("calendar-table__col");
const dateItem = document.createElement("div");
dateItem.classList.add("calendar-table__item");

dateRange.forEach((date, i) => {
    if (i % 7 == 0 | i == 0) {
        currentCalendarRow = currentCalendarRow.cloneNode();
        calendarContainer.appendChild(currentCalendarRow);
    }
    let item = document.createElement("span");
    dateItemContainer.appendChild(dateItem);
    item.innerText = date;
    let outerContainer = dateItemContainer.cloneNode();
    // Can't have duplicate dates, so refactor if over two months
    outerContainer.id = dateItemContainerIdBase + date;
    let itemContainer = dateItem.cloneNode();
    itemContainer.appendChild(item);
    outerContainer.appendChild(itemContainer);
    currentCalendarRow.appendChild(outerContainer);
});

// Add events

const allEventContainer = document.getElementById("event-fill-target");
const eventItemContainerTemplate = document.createElement("li");
eventItemContainerTemplate.classList.add("events__item");
const birthdayEventTemplate = document.createElement("details");
const eventSummaryTemplate = document.createElement("summary");
eventSummaryTemplate.classList.add("events__name");
const eventLinkTemplate = document.createElement("a");
eventLinkTemplate.classList = "eventLink block mt-sm";
const eventCostTemplate = document.createElement("div");
eventCostTemplate.classList = "eventCost block mt-sm";

const eventDateTemplate = document.createElement("span");
eventDateTemplate.classList = "events__date";

const eventTimeTemplate = document.createElement("div");
eventTimeTemplate.classList = "block mt-sm";

events.sort((a, b) => {
    return a.date - b.date;
});
events.forEach(e => {
    let eventContainer = eventItemContainerTemplate.cloneNode();
    
    let eventDetails = birthdayEventTemplate.cloneNode();
    eventDetails.innerText = e.description;
    if (e.hasOwnProperty("link")) {
        let eventLink = eventLinkTemplate.cloneNode();
        eventLink.href = e.link;
        eventLink.innerText = "Location";
        eventDetails.appendChild(eventLink);
    }
    let eventCost = eventCostTemplate.cloneNode();
    if (e.hasOwnProperty("cost")) {
        eventCost.innerHTML = "Cost: $" + e.cost;
    } else {
        eventCost.innerHTML = "Cost: Free!";

    }
    eventDetails.appendChild(eventCost);

    let eventSummary = eventSummaryTemplate.cloneNode();
    eventSummary.innerText = e.title;

    let eventTime = eventTimeTemplate.cloneNode();
    eventTime.innerHTML = e.time
    eventDetails.appendChild(eventTime);

    let eventDate = eventDateTemplate.cloneNode();
    eventDate.innerHTML = calendarMonth + " " + e.date;
    eventDetails.appendChild(eventDate);

    eventDetails.appendChild(eventSummary);
    eventContainer.appendChild(eventDetails);
    eventContainer.appendChild(eventDate);
    allEventContainer.appendChild(eventContainer);
    let containerDiv = document.getElementById(dateItemContainerIdBase + e.date);
    containerDiv.classList.add("calendar-table__event");
})