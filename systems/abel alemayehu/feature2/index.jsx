import { Button } from "../../../packages/ui-components/Button";
import { Card } from "../../../packages/ui-components/Card";
import { capitalize } from "../../../packages/utils/capitalize";

export default function AnnouncementBoard() {
  return (
    <Card>
      <h1>{capitalize("announcement board")}</h1>
      <p>Post quick class updates.</p>
      <Button>New Announcement</Button>
    </Card>
  );
}
