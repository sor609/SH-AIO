const sensiboUrl = 'https://home.sensibo.com/api/v2';

async function showpods() {
    // list all pods
    let url = sensiboUrl + '/users/me/pods?fields=room,id,measurements&apiKey=' + sensiboApiKey;
    let myPods = await urlGet(url);
    return myPods;
}

async function onoffAir(deviceId,action) {
    // change pods state
    let url = 'https://home.sensibo.com/api/v2/pods/' + deviceId + '/acStates?apiKey=CyXKk8G4t9Ue7nVeUc1sb1i8G9DAAn';

    if (action == 'on') {
        // turn on aircon
        const pString = '{\"acState\":{\"on\":true}}'
        let result = await urlPost(url,pString);
        console.log(result);
    } else if (action == 'off') {
        // turn off aircon
        const pString = '{\"acState\":{\"on\":false}}';
        let result = await urlPost(url,pString);
        console.log(result);
    }
    else {
        console.error("Bad action in onoffAir()");
    }
}

// create UI
showpods()
    .then(data => {
        let myPods = data;
        let action;

        if(myPods == 0) {
            document.getElementById('aircon').innerHTML = "No pods";
        }
        else {
            let buildUI="<table>";
            myPods.forEach(function(p, i) {
                buildUI += "<tr><td colspan=\"2\">" + p.room.name + "</td>" +
                "<td rowspan=\"2\"><button class=\"button\" onclick=\"onoffAir('" + p.id + "','on')\">On</button></td>" +
                "<td rowspan=\"2\"><button class=\"button\" onclick=\"onoffAir('" + p.id + "','off')\">Off</button></td></tr>" +
                "<tr><td>" + p.measurements.temperature + "°</td>" +
                "<td>" + p.measurements.humidity + "%</td><td></tr>";
            });
            buildUI += "</table>";
            document.getElementById('aircon').innerHTML += buildUI;
        }
    });
