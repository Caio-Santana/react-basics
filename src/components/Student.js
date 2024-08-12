const Student = (
  // props

  // example 4 destructuring props in function itself
//   { firstName, lastName, email }

props
) => {
    // example desctructuring props in the function body
    const { firstName, lastName, email } = props;
  return (
    <>
      <h1>Student Details</h1>
      {/* example 1 props */}
      {/* <p>Student first name: {props.firstName}</p>
      <p>Student last name: {props.lastName}</p>
      <p>Student email address: {props.email}</p> */}

      {/* example 2 passing object */}
      {/* <p>Student first name: {props.student.firstName}</p>
      <p>Student last name: {props.student.lastName}</p>
      <p>Student email address: {props.student.email}</p> */}

      {/* example 3 passing array */}
      {/* <p>Array data: {props.skills}</p> */}

      {/* example 4 */}
      <p>Student first name: {firstName}</p>
      <p>Student last name: {lastName}</p>
      <p>Student email address: {email}</p>
    </>
  );
};

export default Student;
