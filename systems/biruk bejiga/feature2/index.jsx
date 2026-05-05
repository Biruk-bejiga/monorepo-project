import { Button } from "../../../packages/ui-components/Button";
import { Card } from "../../../packages/ui-components/Card";
import { formatDate } from "../../../packages/utils/formatDate";

export default function Attendance() {
  return (
    <Card>
      <h1>Attendance</h1>
      <p>{formatDate(new Date())}</p>
      <Button>Mark Attendance</Button>
    </Card>
  );
}
