import swapiGetter from "../../src/helpers/http/swapiGetter";
import axios from "axios";

//option 1
axios.get = jest.fn().mockResolvedValue({ data: { name: "Luke Skywalker"} });


//option 2
// jest.mock("axios", () => ({
//     __esModule: true,
//     default: {
//         get: jest.fn().mockResolvedValue({ data: { name: "Luke Skywalker"} }),
//     }
// }))

describe("Get swapi data test", () => {

    beforeEach(() => {

    });

    afterEach(()=>{
        jest.clearAllMocks(); // very important
    })

    test("should return a name", async ()=>{ 
        const result = await swapiGetter(1);
        console.log(result);
        expect(axios.get).toHaveBeenCalled();
        expect(axios.get).toHaveBeenCalledTimes(1);
        expect(result).toBe("Luke Skywalker")

    })

    test("should return an empty object on network error", async ()=>{ 

        axios.get = jest.fn().mockRejectedValueOnce(new Error("Error fetching data"));

        const result = await swapiGetter(1);
        console.log(result);
        expect(axios.get).toHaveBeenCalled();
        expect(axios.get).toHaveBeenCalledTimes(1);
        expect(result).toBeUndefined();

    })


})