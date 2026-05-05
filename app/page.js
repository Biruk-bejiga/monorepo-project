import FeatureX from "../packages/feature-x/index";
import FeatureY from "../packages/feature-y/index";

export default function Home() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Monorepo System</h1>

      <hr />

      <FeatureX />
      <FeatureY />
    </div>
  );
}