import { Button } from "../../../packages/ui-components/Button";
import { Card } from "../../../packages/ui-components/Card";
import { Input } from "../../../packages/ui-components/Input";
import { formatDate } from "../../../packages/utils/formatDate";

export default function GradeTracker() {
  return (
    <Card>
      <h1>Grade Tracker</h1>
      <p>Last updated: {formatDate(new Date())}</p>
      <Input placeholder="Enter course name" />
      <div style={{ height: "10px" }} />
      <Button>Save Grade</Button>
    </Card>
  );
}
