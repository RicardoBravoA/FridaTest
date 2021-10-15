Java.perform(function() {
    console.log("[ * ] Starting PIN Brute-force, please wait...");
    Java.choose("infosecadventures.allsafe.utils.PinUtil", {
        onMatch: function(instance) {
            console.log("[ * ] Instance found in memory: " + instance);
            for (var i = 1000; i < 9999; i++) {
                if (instance.checkPin(i + "") == true) {
                    console.log("[ + ] Found correct PIN: " + i);
                }
            }
        },
        onComplete: function() {}
    });
});