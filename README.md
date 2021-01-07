# SH-AIO
The idea of this project was to create a very simple web interface for managing my Smart Home in a single app, which for me were Sensibo aircon pods and Philips Hue lights.
It has the potential to expand to other devices.

Often times when my aircon units are operated via a remote controller instead of a native Sensibo app, I have to press multiple times on the Sensibo UI to switch the units on or off.
This app was supposed to make it simpler by separating the on/off buttons and by providing a simpler and cleaner UI.

Similarly for Philips lights, I would get the actions right next to the aircon pane so I don't have to use a separate app plus I'd be able to use a web-browser interface which does not natively exist.

### Requirements
You have to obtain your API keys and add them into a config.js file which should sit in the root folder.
Contents of config:
const sensiboApiKey = "<your_sensibo_api_key_here>";
const hueApiKey = "<your_sensibo_api_key_here>";

### TO-DO
At this point, the app is in its initial stage.
I was learning Javascript so I hacked it all up quickly but it would be nice to clean it up and complete it

- make it into NodeJS so it can run as an app in the Cloud
- Separate CSS from HTML to make it cleaner and allow for customizations
- add settings button to allow for customizations, i.e. custom colors, switching on or off one of the two panes, re-arrange the order of units/lights etc.
- potentially add a pane for other SmartHome appliances (robot vacuum!)

#### Sensibo
- auto-refresh temp/humidity data
- fix bug with displaying Sensibo pods with their last status when pods are offline

#### Hue
- HUE is completely missing!
