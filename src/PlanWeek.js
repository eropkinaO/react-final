const PlanWeek = ({selectedGoal, updateGoal}) => {

   const editMyGoal = (myInput, value) => {
       updateGoal({
        ...selectedGoal,
        [myInput]: value
       })
   }

   if (!selectedGoal) return <p className="plan">Plan your goals more effective</p>

     return(
        <div className="whole-plan">
            <div className="goal-editing">
              
            <input type="text" 
            className="myInput"
            placeholder="Write your month..."
            id="title"
            value={selectedGoal.title}
            onChange={(e) => editMyGoal('title', e.target.value)}/>

            <textarea
            placeholder="Write your goal for this month here"
            id="goalForAMonth"
            value={selectedGoal.goalForAMonth}
            onChange={(e) => editMyGoal('goalForAMonth', e.target.value)}/>
 
            <textarea
            placeholder="Tasks to achieve your goal"
            id="taskForYourGoal"
            value={selectedGoal.taskForYourGoal}
            onChange={(e) => editMyGoal('taskForYourGoal', e.target.value)}/>

            </div>
        </div>
     )
}

export default PlanWeek;