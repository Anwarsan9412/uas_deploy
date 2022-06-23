import Card from "../ui/Card";
import StyledGlobal from "./Global.styled";

function DataGlobal(props) {
  const { data } = props;
  return (
    <StyledGlobal>
      <Card>
        <p>{data.status}</p>
        <p>{data.total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
      </Card>
    </StyledGlobal>
  );
}

export default DataGlobal;
