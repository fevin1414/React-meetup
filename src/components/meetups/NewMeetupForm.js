import NewMeetupPage from "../../pages/NewMeetup";
import classes from './newMeetupForm.module.css';
import Card from "../ui/Card";


function NewMeetupForm(){
  return <Card>
    <form className={classes.form}>
      <div className={classes.control}>
        <label htmlFor='title'>Meetup Title</label>
        <input type="text" required id="title"/>
      </div>
      <div className={classes.control}>
        <label htmlFor='image'>Meetup Image</label>
        <input type="url" required id="image"/>
      </div>
    </form>
  </Card>

}
export default NewMeetupForm;