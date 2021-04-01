'use strict'
function HouseKeeper(yearsOfExperience, name, cleanRepertoire) {
   this.yearsOfExperience = yearsOfExperience;
   this.name = name;
   this.cleanRepertoire = cleanRepertoire;
   this.clean = function() {alert('cleaning in progres')}
}

let houseKeeper1 = new HouseKeeper(3, "Karen", ['room', 'out']);
houseKeeper1.clean();
