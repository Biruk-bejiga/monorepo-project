import { Button } from "../../../packages/ui-components/Button";
import { Card } from "../../../packages/ui-components/Card";
import { formatDate } from "../../../packages/utils/formatDate";

export default function NotesSystem() {
  return (
    <Card>
      <h1>Notes System</h1>
      <p>{formatDate(new Date())}</p>
      <Button>Add Note</Button>
    </Card>
  );
}
