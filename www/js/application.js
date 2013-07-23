
function OnLoad() {
    document.addEventListener("deviceready", OnDeviceReady, false);
}

function OnDeviceReady() {  
    InitializeApplication();
}

function InitializeApplication() {
    alert("Welcome to PhoneGap " 
            + device.cordova 
            + " version " + device.version 
            + " for " + device.platform 
            + " on device: " + device.name );
}