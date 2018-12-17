import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { TextField, Paper, Button, Grid, InputLabel } from "@material-ui/core";

const styles = theme => ({
    root: {
        width: "100%"
    },
    grow: {
        flexGrow: 1
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20
    },
    toolbar: {
        textAlign: "center",
        justifyContent: "space-between"
    },
    formControl: {
        minWidth: 120
    }
});

class App extends Component {
    constructor(props){
      super(props)

      this.state = {
        data: [],
        userFormData: [],
        companies: "",
        experience: "",
        companyName: "",
        projects: ""
      }
    }

    handleInputChange = e => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    };
    
    render() {
      const { classes } = this.props
      const { companies } = this.state
        return (
            <React.Fragment>
                <AppBar position="static" color="primary">
                    <Toolbar className={classes.toolbar}>
                        <Typography
                            variant="h4"
                            color="inherit"
                            className={classes.grow}
                            noWrap
                        >
                            Dashboard
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Paper style={{ margin: 40, padding: 16 }}>
                    <input name="companies" type="text" value={companies} onChange={this.handleInputChange} />
                </Paper>
            </React.Fragment>
        );
    }
}

const MuiApp = withStyles(styles)(App);
export default MuiApp;
