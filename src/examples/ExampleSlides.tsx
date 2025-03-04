import Slide from "../slide-templates/Slide";
import EndSlide from "./EndSlide";
import PointCloud from "./PointCloud";
import AllInstructionSlides from "./instruction-slides/AllInstructionSlides";

export default function ExampleSlides() {
  return (
    <>
      <AllInstructionSlides />
      <PointCloud/>
      <EndSlide />
      <Slide showFooter={false}>
        <h1>The End</h1>
        <p>You reached the end.</p>
        <p>See you on the other side!</p>
      </Slide>
    </>
  );
}
