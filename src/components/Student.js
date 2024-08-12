const Student = (props) => {
  return (
    <>
      <h1>Student Details</h1>
      {/* example 1 props */}
      {/* <p>Student first name: {props.firstName}</p>
      <p>Student last name: {props.lastName}</p>
      <p>Student email address: {props.email}</p> */}

      {/* example 2 passing object */}
      <p>Student first name: {props.student.firstName}</p>
      <p>Student last name: {props.student.lastName}</p>
      <p>Student email address: {props.student.email}</p>
      
      {/* example 3 passing array */}
      <p>Array data: {props.skills}</p>
    </>
  );
};

export default Student;