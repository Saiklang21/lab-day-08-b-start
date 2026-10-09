import { getTasks } from '@/lib/taskStore'

export default function DashboardPage() {
  const tasks = getTasks()
  // ย้ายข้อมูลลับ (เช่น ยอดขายทั้งปี) มาเป็นตัวแปรที่นี่ หรืออ่านจาก server เท่านั้น
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <p>งานทั้งหมด: {tasks.length}</p>
      {/* ใส่ส่วนที่เคยอยู่ใน DashboardPanel ตรงนี้ เป็น JSX ธรรมดา */}
    </div>
  )
}