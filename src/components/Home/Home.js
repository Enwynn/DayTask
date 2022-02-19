import {useState} from "react";
import UseState_Hook from "../../practiseHooks/UseState_Hook";
import UseState1_Hook from "../../practiseHooks/UseState1_Hook";
import UseReducer_Hook from "../../practiseHooks/UseReducer_Hook";
import UseEffect from "../../practiseHooks/UseEffect";
import UseRef_Hook from "../../practiseHooks/UseRef_Hook";

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import tasks from "../Tasks";
import DropDown from "./DropDown";


const Home = () => {


    return (
        <div>

            {/*Add Task*/}

            <div className=" min-h-screen flex items-center justify-center bg-gray-500">

                <div className="bg-white p-8 rounded shadow-2xl w-1/2">

                    <h2 className="text-3xl font-bold mb-8 text-red-400 "> Add an task!</h2>
                    <form className="space-y-7">

                        <div>
                            <label className="mb-2 block">Category</label>
                            <DropDown/>

                        </div>

                        <div>
                            <label className="mb-2 block">Description</label>
                            <input className="border border-gray-400 p-5" type="text"/>


                        </div>

                        <button>Add Task</button>
                    </form>

                </div>
            </div>

            {/*Display Tasks*/}

            <div>

            </div>

        </div>

    )

    function getTasks() {
        let tasker;
        tasker = tasks({description: "Hello my dear friend", category: "Task"});
        console.log(tasker);
    }

}

export default Home;

