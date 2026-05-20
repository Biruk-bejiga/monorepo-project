import { Button } from "../../packages/ui-components/Button";
import { Card } from "../../packages/ui-components/Card";
import { Input } from "../../packages/ui-components/Input";
import { formatDate } from "../../packages/utils/formatDate";

export default function BirukAbebePage() {
  return (
    <div style={{ padding: "24px", fontFamily: "system-ui, sans-serif" }}>
      <Card>
        <h1>Biruk Abebe System</h1>
        <p>This small demo page uses shared components from the `packages` folder.</p>
        <p style={{ marginTop: "12px" }}>Today is {formatDate(new Date())}</p>

        <div style={{ marginTop: "16px" }}>
          <Input placeholder="Enter a note or idea" readOnly />
        </div>

        <div style={{ marginTop: "16px" }}>
          <Button>Shared Action</Button>
        </div>
      </Card>
    </div>
  );
}
