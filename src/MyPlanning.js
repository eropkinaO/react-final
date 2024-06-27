const MyPlanning = ({addGoal, monthPlans, deleteGoal, selectedGoal, setSelectedGoal}) => {

     return(
        <div>
            <div className="planAdd">
            <p className="plan">MY PLANNING</p>
            <button className="button-add" onClick={addGoal}>Add</button>
            </div>
            
            <div className="planAdd">   
           {monthPlans.map(({id, title, goalForAMonth}) => (
            <div key={id} className={`goal ${selectedGoal === id ? "goalSelected" : "nonSelected"}`}
            onClick={() => setSelectedGoal(id)}>
                <p className="title">{title}</p>
                <p className="field">{goalForAMonth.substring(0,60)}</p>
                <button className="button-delete" onClick={() => deleteGoal(id)}>Delete</button>
            </div>
           )
           )}
            </div>
        </div>
     )
}

export default MyPlanning;