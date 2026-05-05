import { Button } from "../ui-components/Button";
import { formatDate } from "../utils/formatDate";

export default function FeatureX() {
  return (
    <div>
      <h2>{formatDate(new Date())}</h2>
      <Button>Feature X Button</Button>
    </div>
  );
}
