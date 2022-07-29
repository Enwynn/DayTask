import {useState} from "react";
import DropDown from "./DropDown";
import {clear} from "@testing-library/user-event/dist/clear";
import {text} from "@fortawesome/fontawesome-svg-core";
import {cleanup} from "@testing-library/react";


const Home = () => {

    // Maybe change state by using the reducer hook.
    const [task, setTask] = useState([]);
    const [category, setCategory] = useState();
    const [description, setDescription] = useState("null");
    const [remove, setRemove] = useState(false);


    const model = (desc, category) => {
        console.log(category)
        return (<div className="flex pt-5">
            <li className="flex flex-row grow">
                <p className="pr-6 grow font-light "> {desc} </p>
                <div className="">{category}</div>
                <button type={"button"} onClick={console.log("fuck off")} > hi</button>
            </li>
               </div>)
    }

    return (
        <div className="">

            <div className="-space-y-64">

                {/*Add Task*/}

                <div className=" pb-60 min-h-screen flex items-center justify-center bg-gray-500">

                    <div className="bg-white p-8 rounded shadow-2xl w-1/2">

                        <h2 className="text-3xl font-bold mb-8 text-red-400 "> Add an task!</h2>
                        <form className="space-y-7">

                            <div>
                                <label className="mb-2 block">Category</label>
                                <DropDown setCategory={setCategory}/>

                            </div>

                            <div className="  ">
                                <label className=" relative mb-2 block">Description</label>
                                <input onChange={(e) => setDescription(e.target.value)}
                                       className="border w-4/5 h-2/3 border-gray-400 p-5" type="text"/>
                            </div>


                            <button type="reset" onClick={() => { setTask([task].concat([model(description, category)])) } }
                                    className=" bg-red-400 px-4 py-2 rounded">Add Task
                            </button>

                        </form>

                    </div>
                </div>

                {/*Display Tasks*/}
                <div className=" pb-28 flex justify-center bg-gray-500 pt-12 ">
                    <div className="bg-white p-8 rounded shadow-2xl w-1/2 divide-y ">
                        <h1 className="font-semibold opacity-75 text-sky-800 text"> Tasks </h1>
                        <h1> {task.map((item, index) =>{
                            return <div className="divide-y">{item}</div>
                        })}</h1>

                    </div>

                </div>
            </div>


        </div>


    )

}

export default Home;

