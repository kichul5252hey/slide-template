import GradientTitle from "../../components/GradientTitle";
import TitleContentSlide from "../../slide-templates/TitleContentSlide";

export default function ChartTableInstructionSlide() {
  return (
    <TitleContentSlide
      title={<h2>차트 & 테이블 기능 📊</h2>}
      content={
        <div className="h-full w-full">
          <ul>
            <li className="mb-4">
              강력한{" "}
              <a
                href="https://recharts.org/"
                target="_blank"
                referrerPolicy="no-referrer"
              >
                Recharts
              </a>{" "}
              와{" "}
              <a
                href="https://tanstack.com/table/"
                target="_blank"
                referrerPolicy="no-referrer"
              >
                TanStack Table
              </a>{" "}
              라이브러리 지원
            </li>
            <li>
              다양한 차트 컴포넌트 제공
              <ul>
                <li>
                  <span className="text-blue-500">라인 차트</span>,{" "}
                  <span className="text-green-500">바 차트</span>,{" "}
                  <span className="text-purple-500">파이 차트</span> 등
                </li>
              </ul>
            </li>
            <li className="relative">
              <span className="italic font-black underline tracking-wider text-fuchsia-400 hover:text-fuchsia-500 -rotate-3 inline-block">
                인터랙티브
              </span>{" "}
              테이블 기능
              <ul>
                <li>
                  <span className="tracking-tight font-serif">
                    정렬, 필터링, 페이징
                  </span>{" "}
                  기본 제공
                </li>
              </ul>
            </li>
            <li className="mt-4">
              데이터 시각화를 위한 완벽한 도구
              <ul>
                <li>
                  <GradientTitle className="font-semibold tracking-wide bg-gradient-to-r from-yellow-400 to-80% to-red-500">
                    실시간 데이터 업데이트
                  </GradientTitle>
                </li>
                <li className="text-4xl text-blue-800">
                  멋진 차트를 만들어보세요! 📈
                </li>
              </ul>
            </li>
          </ul>
        </div>
      }
    />
  );
} 