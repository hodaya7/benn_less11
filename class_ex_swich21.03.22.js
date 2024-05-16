function item(item) {
    switch (item) {
        case "Computer":
            console.log("i got Computer");
            break;
        case "Mouse":
            console.log("i got Mouse");
            break;
        case "Keyboard":
            console.log("i got Keyboard");
            break;
        case "Screen":
            console.log("i got Screen");
            break;
        case "TV":
            console.log("i got TV");
            break;
        case "Iphone":
            console.log("i got Iphone");
            break;
        default:
            console.log("not recognized: " + item);
            break;
    }
}

item("Keyboard");//i got Keyboard