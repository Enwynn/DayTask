import {useState} from "react";
import DropDown from "./DropDown";
import tasks from "../Tasks";


const Home = () => {

    // Maybe change state by using the reducer hook.
    const [task, setTask] = useState("All");
    const [category, setCategory] = useState();
    const [description, setDescription] = useState("null");

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

                        <div>
                            <label className="mb-2 block">Description</label>
                            <input onChange={(e) => setDescription(e.target.value)} className="border border-gray-400 p-5" type="text"/>
                                    </div>


                        <button  onClick={() => setTask(task[3])} type="button" className=" bg-red-400 px-4 py-2 rounded" >Add Task</button>

                    </form>

                </div>
            </div>

            {/*Display Tasks*/}
            <div className=" pb-28 flex items-center justify-center bg-gray-500">
                <div className="bg-white p-8 rounded shadow-2xl w-1/2">

                    <h1> {task[2]}   </h1>

                </div>

            </div>
            </div>


        </div>



    )

}

export default Home;

