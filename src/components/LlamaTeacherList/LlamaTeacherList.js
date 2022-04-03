import { Box, Paper } from '@mui/icons-material'

export default function LlamaTeacherList({ teachers }) {
  
  return (
    <Box
      data-testid="LlamaTeacherList"
    >
      {teachers.map(item =>(<LlamaTeacher {...item}></LlamaTeacher>))}
    </Box>
  );
}

function LlamaTeacher({ name, price, languages, intro, scheduleAvailable }) {
  
  return (<Paper data-testid="LlamaTeacherList__LlamaTeacher">
    {name}
    {languages.map(item => item )}
    {price}
    {intro}
    {scheduleAvailable}
  </Paper>);
}