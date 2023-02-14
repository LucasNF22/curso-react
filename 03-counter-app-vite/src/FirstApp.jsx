
const getMessage = () => newMenssage.message + newMenssage.name;

const newMenssage = {
    message: "Bien Venido ",
    name: "Lucas",
};

export const FirstApp = () => {
  return (
    <>
      <h1>HOLA MUNDO</h1>
      <div>{ getMessage() }</div>
      {/* <code>{ JSON.stringify(newMenssage)}</code> */}
    </>
  );
};
