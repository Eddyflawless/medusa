import { hello } from "lib";

const fruits: Array<string> = ["apple","apple", "orange", "pineapple"];
console.log("some fruits", fruits)

function apiCli(){
    console.log(hello("This world is awesome2. Cuz i can"))
}

function getTime() {
    return new Date().getTime();
}
console.log("getTime", getTime)
apiCli()