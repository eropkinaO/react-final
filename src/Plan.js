import MyPlanning from "./MyPlanning";
import PlanWeek from "./PlanWeek";
import './App.css';
import { useState, useEffect } from "react";
import { v4 as uuid } from 'uuid';


const Plan = () => {

    const [monthPlans, setMonthPlans] = useState(
        localStorage.monthPlans ? JSON.parse(localStorage.monthPlans) : []);
    const [selectedGoal, setSelectedGoal] = useState(false);

    useEffect(() => {
        localStorage.setItem("monthPlans", JSON.stringify(monthPlans))
    }, [monthPlans])
    
    const addGoal = () => {
        const newGoal = {
            title: "Month...",
            goalForAMonth: "",
            taskForYourGoal: "",
            id: uuid()
    }
    setMonthPlans([newGoal, ...monthPlans])
    }

    const deleteGoal = (goalId) => {
        setMonthPlans(monthPlans.filter(({id}) => id !== goalId))
    }

    const updateGoal = (myUpdatedGoal) => {
        const updatedGoals = monthPlans.map((goalPlan) => {
         if (goalPlan.id === myUpdatedGoal.id) {
             return myUpdatedGoal; 
         }
         return goalPlan;
        })
        setMonthPlans(updatedGoals) 
    }

    const getActiveGoal = () => {
        return monthPlans.find(({id}) => id === selectedGoal)
    }
    
    return(
        <div>
             <h3>Plan your goals with us!</h3>
            <div className="App"> 
            <MyPlanning addGoal={addGoal} 
            monthPlans={monthPlans} 
            deleteGoal={deleteGoal}
            selectedGoal={selectedGoal}
            setSelectedGoal={setSelectedGoal}/>
            <PlanWeek 
            selectedGoal={getActiveGoal()}
            updateGoal={updateGoal}/>
            </div>
           
        </div>
    )
}

export default Plan;