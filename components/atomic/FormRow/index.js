import * as Styled from "./styles";

const FormRow = ({ children }) => {
  return <Styled.Row>{children}</Styled.Row>;
};

FormRow.displayName = "Atomic.DateTimeRow";

export default FormRow;
