import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import TagFacesIcon from '@material-ui/icons/TagFaces';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    padding: theme.spacing(0.5),
    backgroundColor: "#fff",
    borderRadius: 20
  },
  chip: {
    margin: theme.spacing(0.5),
    backgroundColor: "#282a36",
    color: "#fff"
  },
}));

export default function ChipsArray() {
  const classes = useStyles();
  const [chipData, setChipData] = React.useState([
    { key: 0, label: 'Gnome', clicked: false },
    { key: 1, label: 'Gnomette', clicked: false },
    { key: 2, label: 'Has jobs', clicked: false },
    { key: 3, label: 'Has friends', clicked: false },
  ]);

  const handleClick = (clickedChip) => () => {
    setChipData((chips) => chips.map((chip) => chip.key !== clickedChip.key ? chip : {...chip, clicked: !chip.clicked}));
  };

  return (
    <Paper className={classes.root}>
      {chipData.map((data) => {
        let icon;

        if (data.label === 'React') {
          icon = <TagFacesIcon />;
        }

        return (
          <Chip
            size="small"
            key={data.key}
            icon={icon}
            label={data.label}
            onClick={handleClick(data)}
            className={classes.chip}
          />
        );
      })}
    </Paper>
  );
}