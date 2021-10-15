Java.perform(function(){
    console.log("Oeeeeeeeee!!")

    var pinUtil = Java.use("infosecadventures.allsafe.utils.PinUtil");

    pinUtil.checkPin.implementation = function(pin) {
        console.log("[ + ] PIN check successfully bypassed!")
        return true;
    }
})