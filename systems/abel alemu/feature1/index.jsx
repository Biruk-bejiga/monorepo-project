import { Button } from "../../../packages/ui-components/Button";
import { Card } from "../../../packages/ui-components/Card";
import { Input } from "../../../packages/ui-components/Input";
import { capitalize } from "../../../packages/utils/capitalize";

export default function ResourceRequest() {
  return (
    <Card>
      <h1>{capitalize("resource request")}</h1>
      <p>Request a book, lab item, or equipment.</p>
      <Input placeholder="Type request" />
      <div style={{ height: "10px" }} />
      <Button>Submit Request</Button>
    </Card>
  );
}
