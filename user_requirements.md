Checklists
Sub checklists
Morning routine, DAILY*******, afternoon, weekly, monthly, daily
High level items collapsing sublists is preferable in UI (OPTIONAL)
Crossed off items are slightly greyed out and crossed out to indicate state
Checkbox on right of screen remains checked when clicked - animation with two states
Long touch reordering of items (Nice to have, v2?)
All items are routine and reset at the beginning of the day, no particularly specialized scheduling
Can still add on once-off items on day of -> need ingest UI and routes (consider highlighting these manually added, non-routine events in distinctive style)
Logging of data daily - historizing is key for visualization********
Always resets daily, very specifically for daily routines

Keep tallies in mind for presenting performance
Reward for being on a streak of completing items
Some items will be mandatory for streaks, some will be optional
list of items that satify high and low value items that fullfill streak criteria
The candidate actions to satify a streak are presented in some sort of dropdown to indicate they meet that criteria, maybe grid of options?
Running averages of performance for adhereing to this streak / thing you're trying to get a streak on
Running stats - "you've done this thing 500 times before!"

Use case
Want to be able to modify previous day's data in case you missed entering the data
Option to prevent editing previous day's setting? (OPTIONAL)
Don't like having inaccurate data - want to be able to edit this manually fairly easily
Data export (JSON)

KEY CLASSES
-Async everywhere for handling user input and promises
-Checklist is KEY parent class
-Checklist A = Large, big events - STREAK GOALS / High value goals that have a daily set of contributing components
-Checklist B = Child of A, small, discrete check-offable actions/goals that contribute to above streak / completing daily list
-Checklist boolean state
-Logging & writing to file functions - look to class content for examples
-Historization and visualization - focus on high granularity and editability of raw data, but UI still mostly focused on visual aesthetic
-Day raw data object that takes a bunch of events of state changes and record each of these individually
-DayStats functions that take a day raw data object as input and outputs certain visualizations - keep viz distinct from raw data to make sure raw data is always preserved at max fidelity (maybe even going so far as to have UUID and timestamp for events)
-FOCUS ON SMOOTHNESS AND SUBTLE ANIMATIONS FOR EACH UI INTERACTION
-DID I FUCKING STUTTER, I SAID SUBTLE.
-Consult Ang's app for the aesthetics - she really likes it
-Minimaliztic and raised (literally the CSS property box-shadow), not too many variations, kinda classly aesthetic
-Understanding data in the context of a calendar visualization of previous streaks and their length
-Be able to look at stats for each sub item and see full stats (moving averages, visualizations of data)
-Want overall (did you succeed today?) scores that is satisfied if you complete each mandatory daily goal to hit this omega goal
-


-EVENT LOGGING IS KEY FOR RAW DATA ON CHECKBOX STATES
-LOG EACH AND EVERY DAMN EVENT THE USER DOES TO FILE
-DAILY EVENT FILES THAT STORE ARRAYS OF EVENTS
-EACH DAY THE STATE IS OVERRIDDEN AND WITH A DEFAULT STARTING STATE OF UNCHECKED
-EVENT TYPING AND HAVING LOTS OF PROPERTIES TO INDICATE FULL UI STATE AT ANY MOMENT IN TIME, indivating previous state, new state, and precise time of changes
-FUNCTION THAT TAKES A DATE / TIMECOURSE STATE AND OUTPUTS THE LAST KNOWN STATE OF THAT THING