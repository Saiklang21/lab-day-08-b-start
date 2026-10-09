"use client"
import { useActionState } from 'react'
import { useFormStatus } from 'react-dom'
import { login } from './actions'

function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <button type="submit" disabled={pending}
      className="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50">
      {pending ? "กำลังเข้าสู่ระบบ..." : "เข้าสู่ระบบ"}
    </button>
  )
}

export default function LoginPage() {
  const [state, formAction] = useActionState(login, { error: null })

  return (
    <div className="p-6 max-w-sm mx-auto">
      <h1 className="text-2xl font-bold mb-4">เข้าสู่ระบบ</h1>
      <form action={formAction} className="space-y-3">
        <input name="email" type="email" placeholder="อีเมล" className="border p-2 w-full rounded" />
        <input name="password" type="password" placeholder="รหัสผ่าน" className="border p-2 w-full rounded" />
        <SubmitButton />
        {state?.error && <p className="text-red-600 text-sm">{state.error}</p>}
      </form>
    </div>
  )
}