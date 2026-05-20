import { Button } from "../../packages/ui-components/Button";
import { Card } from "../../packages/ui-components/Card";
import { Input } from "../../packages/ui-components/Input";
import { capitalize } from "../../packages/utils/capitalize";
import { formatDate } from "../../packages/utils/formatDate";

import FeatureX from "../../packages/feature-x/index";
import FeatureY from "../../packages/feature-y/index";

export default function AbelAlemayehuPage() {
  return (
    <div style={{ padding: "24px", fontFamily: "system-ui, sans-serif" }}>
      <Card>
        <h1>{capitalize("abel alemayehu system")}</h1>
        <p>
          This is a small demo page assembled from shared code in the
          <code>packages/</code> folder.
        </p>

        <p style={{ marginTop: "12px" }}>Today is {formatDate(new Date())}</p>

        <div style={{ marginTop: "16px" }}>
          <Input placeholder="Type something..." />
        </div>

        <div style={{ marginTop: "16px" }}>
          <Button>Shared Button</Button>
        </div>

        <hr style={{ margin: "20px 0" }} />

        <FeatureX />
        <div style={{ height: "12px" }} />
        <FeatureY />
      </Card>
    </div>
  );
}
