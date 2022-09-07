

function getNetherCoords() {
    const overworldX = document.getElementById("overworld-x").value;
    const overworldZ = document.getElementById("overworld-z").value;
    const overworldY = document.getElementById("overworld-y").value;

    //overworld input fields
    var overworldXinput = document.getElementById("overworld-x");
    var overworldZinput = document.getElementById("overworld-z");
    var overworldYinput = document.getElementById("overworld-y");

    

    //nether input fields
    var netherXinput = document.getElementById("nether-x");
    var netherZinput = document.getElementById("nether-z");
    var netherYinput = document.getElementById("nether-y");

    //convert overworld coords to nether coords
    const nether_cont_x = overworldX/8;
    const nether_cont_z = overworldZ;
    const nether_cont_y = overworldY/8;

    
    netherXinput.innerHTML = nether_cont_x;
    netherZinput.innerHTML = nether_cont_z;
    netherYinput.innerHTML = nether_cont_y;

    //alert("Nether coords are: X: " + nether_cont_x + " | Z: " + nether_cont_z + " | Y: " + nether_cont_y);
}

function getOverworldCoords() {
    const netherX = document.getElementById("nether-x-x").value;
    const netherZ = document.getElementById("nether-z-z").value;
    const netherY = document.getElementById("nether-y-y").value;

    var netherXinput = document.getElementById("nether-x-input");
    var netherZinput = document.getElementById("nether-z-input");
    var netherYinput = document.getElementById("nether-y-input");

    var OverworldXdiv = document.getElementById("overworld-x-div");
    var OverworldZdiv = document.getElementById("overworld-z-div");
    var OverworldYdiv = document.getElementById("overworld-y-div");

    

    //convert overworld coords to nether coords
    const nether_cont_x = netherX*8;
    const nether_cont_z = netherZ;
    const nether_cont_y = netherY*8;

    //alert("Overworld coords are: X: " + nether_cont_x + " | Z: " + nether_cont_z + " | Y: " + nether_cont_y);

    OverworldXdiv.innerHTML = nether_cont_x;
    OverworldZdiv.innerHTML = nether_cont_z;
    OverworldYdiv.innerHTML = nether_cont_y;
}