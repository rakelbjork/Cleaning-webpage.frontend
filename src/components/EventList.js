import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import EventIcon from "@material-ui/icons/Event";
import Button from "@material-ui/core/Button";
import { format } from "date-fns";
import { dateFormat } from "../utils/DateUtils";

const containerStyle = {
  overflowY: "scroll",
  width: "100%"
};

export default props => {
  const events = props.events
    .sort((a, b) => {
      return new Date(a.dtstart) > new Date(b.dtend) ? 1 : -1;
    })
    .map((node, index) => {
      const fmtDTStart = format(new Date(node.dtstart), dateFormat);
      const fmtDTEnd = format(new Date(node.dtend), dateFormat);
      return (
        <div key={index}>
          <ListItem button alignItems="flex-start">
            <ListItemIcon>
              <EventIcon style={{ color: "#FFFF00", fontSize: "2em" }} />
            </ListItemIcon>
            <ListItemText
              primary={
                <React.Fragment>
                  <Typography
                    component="p"
                    //variant="body2"
                    style={{ color: "#FFFFFF" }}
                  >
                    <span style={{ fontWeight: "bold", marginRight: ".5em" }}>
                      Starttid:
                    </span>
                    {fmtDTStart}
                  </Typography>
                  <Typography
                    component="p"
                    //variant="body2"
                    style={{ color: "#FFFFFF" }}
                  >
                    <span style={{ fontWeight: "bold", marginRight: ".5em" }}>
                      Sluttid:
                    </span>
                    {fmtDTEnd}
                  </Typography>
                  <Typography
                    component="p"
                    //variant="body2"
                    style={{ color: "#FFFFFF", fontWeight: "bold" }}
                  ><span style={{ fontWeight: "bold", marginRight: ".5em" }}>
                  Typ av städning:
                </span>
                    {node.title}
                  </Typography>
                  <Typography
                    component="p"
                    //variant="body2"
                    style={{ color: "#FFFFFF" }}
                  >
                    <span style={{ fontWeight: "bold", marginRight: ".5em" }}>
                      Adress:
                    </span>
                    {node.location}
                  </Typography>
                </React.Fragment>
              }
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    //variant="body2"
                    style={{ color: "#FFFFFF", fontSize: "1em" }}
                  ><span style={{ fontWeight: "bold", marginRight: ".5em" }}>
                  Finns djur i hemmet:
                </span>
                    {node.description}
                  </Typography>
                </React.Fragment>
              }
            />
            <div
              style={{
                position: "absolute",
                right: "2em",
                top: "1em",
                display: "flex",
                flexDirection: "column"
              }}
            >
              <Button
                variant="contained"
                color="primary"
                
                onClick={() => props.onRemoveItem(node.uid)}
                title="Cancel (Delete) Appointment"
                disabled={props.formVisible}
                className="deletebutton"
                style={{ marginBottom: "1em" }}
              >
                <span className="buttontext">Ta bort bokning</span>
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={() => props.onEditItem(node)}
                title="Edit Appointment"
                disabled={props.formVisible}
                className="editbutton"
              >
                <span className="buttontext">Ändra bokning</span>
              </Button>
            </div>
          </ListItem>
        </div>
      );
    });
  return (
    <div style={containerStyle}>
      <List>{events}</List>
    </div>
  );
};
