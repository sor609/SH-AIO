async function showpods() {
    // list all pods
    const url = 'https://home.sensibo.com/api/v2/users/me/pods?fields=room,id&apiKey=CyXKk8G4t9Ue7nVeUc1sb1i8G9DAAn';
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

showpods()
    .then(data => {
        let myPods = data;
        let action;

        if(myPods == 0) {
            document.getElementById('aircon').innerHTML = "No pods";
        }
        else {
            myPods.forEach(function(p, i) {
                document.getElementById('aircon').innerHTML += p.room.name +
                " <button onclick=\"onoffAir('" + p.id + "','on')\">On</button>" +
                " <button onclick=\"onoffAir('" + p.id + "','off')\">Off</button><hr>";
            });
        }
    });
