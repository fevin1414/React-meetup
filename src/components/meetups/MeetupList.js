import classes from "./MeetupItem.module.css";
import MeetupItem from "./MeetupItem";
function MeetupList(props) {
  return (
    <ul className={classes.lists}>
      {props.meetups.map((meetups) => (
        <MeetupItem
          key={meetups.id}
          id={meetups.id}
          image={meetups.image}
          title={meetups.title}
          description={meetups.description}
          addess={meetups.address}
        />
      ))}
    </ul>
  );
}
export default MeetupList;
