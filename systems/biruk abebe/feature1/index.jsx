import { Button } from "../../../packages/ui-components/Button";
import { Card } from "../../../packages/ui-components/Card";
import { formatDate } from "../../../packages/utils/formatDate";

export default function TaskSystem() {
  return (
    <Card>
      <h1>Task System</h1>
      <p>{formatDate(new Date())}</p>
      <Button>Add Task</Button>
    </Card>
  );
}
