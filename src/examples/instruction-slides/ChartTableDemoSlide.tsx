import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { useReactTable, createColumnHelper, getCoreRowModel, flexRender } from '@tanstack/react-table';
import TitleContentSlide from "../../slide-templates/TitleContentSlide";

// 차트 데이터
const chartData = [
  { month: '1월', sales: 4000, profit: 2400 },
  { month: '2월', sales: 3000, profit: 1398 },
  { month: '3월', sales: 2000, profit: 9800 },
  { month: '4월', sales: 2780, profit: 3908 },
  { month: '5월', sales: 1890, profit: 4800 },
  { month: '6월', sales: 2390, profit: 3800 },
];

// 테이블 데이터
const tableData = [
  { name: '김철수', age: 25, city: '서울' },
  { name: '이영희', age: 28, city: '부산' },
  { name: '박민수', age: 32, city: '대구' },
];

const columnHelper = createColumnHelper<typeof tableData[0]>();
const columns = [
  columnHelper.accessor('name', { header: '이름' }),
  columnHelper.accessor('age', { header: '나이' }),
  columnHelper.accessor('city', { header: '도시' }),
];

export default function ChartTableDemoSlide() {
  const table = useReactTable({
    data: tableData,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <TitleContentSlide
      title={<h2>차트 & 테이블 예시 📊</h2>}
      content={
        <div className="h-full w-full flex flex-col gap-8">
          {/* 차트 섹션 */}
          <div className="flex-1">
            <h3 className="text-base mb-2 font-semibold">월별 매출 & 수익</h3>
            <div className="w-full flex justify-center">
              <LineChart width={500} height={250} data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" fontSize={12} />
                <YAxis fontSize={12} />
                <Tooltip />
                <Line type="monotone" dataKey="sales" stroke="#8884d8" name="매출" />
                <Line type="monotone" dataKey="profit" stroke="#82ca9d" name="수익" />
              </LineChart>
            </div>
          </div>

          {/* 테이블 섹션 */}
          <div className="flex-1">
            <h3 className="text-base mb-2 font-semibold">사용자 목록</h3>
            <div className="w-full flex justify-center">
              <table className="w-full max-w-[500px] border-collapse border border-gray-300 text-sm">
                <thead>
                  {table.getHeaderGroups().map(headerGroup => (
                    <tr key={headerGroup.id}>
                      {headerGroup.headers.map(header => (
                        <th key={header.id} className="border border-gray-300 p-1 bg-gray-100">
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                        </th>
                      ))}
                    </tr>
                  ))}
                </thead>
                <tbody>
                  {table.getRowModel().rows.map(row => (
                    <tr key={row.id}>
                      {row.getVisibleCells().map(cell => (
                        <td key={cell.id} className="border border-gray-300 p-1">
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      }
    />
  );
} 