# com.emilioicai.counter
## What is this?
![](screenshot.png?raw=true)

This widget is a simple counter which allows the user to select an amount of items by tapping on the +/- buttons.
## Usage
To include the widget in your app with Alloy just add this tag into your view:
<Require type="widget" src="com.emilioicai.counter" id="counter"/>

### increaseCount()
Adds one item to the count
### decreaseCount()
Removes one item to the count
### getCount()
Returns the numeric value of the count
### init(config)
Initializes the counter. Config can contain the following properties:
- onChange: is a function which will be called everytime the count changes. The count value will be passed as a parameter to this function
- onLoad: is a function which will be called once the counter is loaded. The initial count value will be passed as a parameter to this function
