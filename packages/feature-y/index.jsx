import { Card } from "../ui-components/Card";
import { Button } from "../ui-components/Button";
import { capitalize } from "../utils/capitalize";

export default function FeatureY() {
  return (
    <Card>
      <h2>{capitalize("feature y")}</h2>
      <Button>Feature Y Button</Button>
    </Card>
  );
}
