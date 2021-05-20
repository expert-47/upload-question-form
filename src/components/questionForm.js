import React, {useState} from "react";
import MUIEditor, {MUIEditorState, toolbarControlTypes} from "react-mui-draft-wysiwyg";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import {makeStyles} from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Button from "@material-ui/core/Button";

const config = {
    editor: {
        style: {
            padding: 10,
            minHeight: 100,
            marginTop: 0,
            borderRadius:0
        },
    },
    toolbar: {
        className: '',
        style: {
            borderRadius:0
        },
        visible: true,
        position: 'top',
        controls: [
            toolbarControlTypes.divider,
            toolbarControlTypes.bold,
            toolbarControlTypes.italic,
            toolbarControlTypes.underline,
            toolbarControlTypes.strikethrough,
            toolbarControlTypes.fontColor,
            toolbarControlTypes.fontBackgroundColor,
            toolbarControlTypes.divider,
            toolbarControlTypes.linkAdd,
            toolbarControlTypes.linkRemove,
            toolbarControlTypes.image,
            toolbarControlTypes.divider,
            toolbarControlTypes.blockType,
            toolbarControlTypes.fontSize,
            toolbarControlTypes.fontFamily,
            toolbarControlTypes.textAlign,
            toolbarControlTypes.divider,
            toolbarControlTypes.unorderedList,
            toolbarControlTypes.orderedList,
        ]
    },
}

const useStyles = makeStyles(theme => {
    root:{

    }
});

export default function QuestionForm() {
    const [textQuestion, setTextQuestion] = React.useState(
        MUIEditorState.createEmpty(config),
    );
    const [textExplanation, setTextExplanation] = React.useState(
        MUIEditorState.createEmpty(config),
    );

    const [subject, setSubject] = useState("");
    const [category, setCategory] = useState("");
    const onChangeQuestion = newState => {
        setTextQuestion(newState)
    }
    const onChangeExplanation = newState => {
        setTextExplanation(newState)
    }
    const [qtype, setQtype] = React.useState('1');

    const handleChangeType = (event) => {
        setQtype(event.target.value);
    };


    return (
        <Paper elevation={1} style={{margin: 15}}>
            <Box p={3}>
                <Box mb={3}>
                    <Typography variant={"h5"}>
                        Upload Question
                    </Typography>
                </Box>
                <Divider/>
                <Box mb={4} mt={4}>
                    <Grid container spacing={4}>
                        <Grid item xs={12} md={6}>
                            <FormControl variant="outlined" fullWidth>
                                <InputLabel id="demo-simple-select-outlined-label-subject">Subject</InputLabel>
                                <Select
                                    labelId="demo-simple-select-outlined-label-subject"
                                    id="demo-simple-select-outlined-subject"
                                    value={subject}
                                    onChange={(e) => {
                                        setSubject(e.target.value)
                                    }}
                                    label="Subject"
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={1}>C++</MenuItem>
                                    <MenuItem value={2}>Java</MenuItem>
                                    <MenuItem value={3}>React</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <FormControl variant="outlined" fullWidth>
                                <InputLabel id="demo-simple-select-outlined-label-category">Category</InputLabel>
                                <Select
                                    labelId="demo-simple-select-outlined-label-category"
                                    id="demo-simple-select-outlined-category"
                                    value={category}
                                    onChange={(e) => {
                                        setCategory(e.target.value)
                                    }}
                                    label="Category"
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={1}>Computer Science</MenuItem>
                                    <MenuItem value={2}>Math</MenuItem>
                                    <MenuItem value={3}>Electric Science</MenuItem>
                                </Select>
                            </FormControl>

                        </Grid>
                        <Grid item xs={12} md={12}>
                            <Box mb={1}>
                                <FormLabel component="legend">Question</FormLabel>
                            </Box>
                            <MUIEditor
                                editorState={textQuestion}
                                onChange={onChangeQuestion}
                                config={config}
                            />
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <FormControl component="fieldset">
                                <FormLabel component="legend">Question Type</FormLabel>
                                <RadioGroup aria-label="gender" name="question_type" value={qtype} row
                                            onChange={handleChangeType}>
                                    <FormControlLabel value="1" control={<Radio color={"primary"}/>} label="Type1"/>
                                    <FormControlLabel value="2" control={<Radio color={"primary"}/>} label="Type2"/>
                                    <FormControlLabel value="3" control={<Radio color={"primary"}/>} label="Type3"/>
                                    <FormControlLabel value="4" control={<Radio color={"primary"}/>} label="Type4"/>
                                    <FormControlLabel value="5" control={<Radio color={"primary"}/>} label="Type5"/>
                                </RadioGroup>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <Box mb={1}>
                                <FormLabel component="legend">Explanation</FormLabel>
                            </Box>
                            <MUIEditor
                                editorState={textExplanation}
                                onChange={onChangeExplanation}
                                config={config}
                            />
                        </Grid>
                    </Grid>
                </Box>
                <Divider/>
                <Box pt={1} display={"flex"} justifyContent={"flex-end"}>
                    <Button variant="contained" color="primary">
                        Add Question
                    </Button>
                </Box>
            </Box>
        </Paper>
    )
}