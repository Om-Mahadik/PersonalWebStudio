import FeatureOne from "@/components/ui/features/FeatureOne";
import FeatureTwo from "@/components/ui/features/FeatureTwo";
import FeatureThree from "@/components/ui/features/FeatureThree";
import FeatureFour from "@/components/ui/features/FeatureFour";

const Features = () => {
  return (
    <section className="bg-black py-20 px-6">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
        <FeatureOne />
        <FeatureTwo />
        <FeatureThree />
        <FeatureFour />
      </div>
    </section>
  );
};

export default Features;