import AnimatedSvgInstructionSlide from "./AnimatedSvgInstructionSlide";
import AnnotateInstructionSlide from "./AnnotateInstructionSlide";
import BasicInstructionSlide from "./BasicInstructionSlide";
import CustomizationInstructionSlide from "./CustomizationInstructionSlide";
import InteractiveInstructionSlide from "./InteractiveInstructionSlide";
import LatexInstructionSlide from "./LatexInstructionSlide";
import ChartTableInstructionSlide from "./ChartTableInstructionSlide";
import ChartTableDemoSlide from "./ChartTableDemoSlide";

export default function AllInstructionSlides() {
  return (
    <>
      <BasicInstructionSlide />
      <CustomizationInstructionSlide />
      <ChartTableInstructionSlide />
      <ChartTableDemoSlide />
      <LatexInstructionSlide />
      <InteractiveInstructionSlide />
      <AnimatedSvgInstructionSlide />
      <AnnotateInstructionSlide />
    </>
  );
}
