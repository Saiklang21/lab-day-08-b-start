"use server"

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

const MOCK_EMAIL = 'admin@example.com'
const MOCK_PASSWORD = '1234'

export async function login(prevState, formData) {
    const email = formData.get('email')
    const password = formData.get('password')

    if (email !== MOCK_EMAIL || password !== MOCK_PASSWORD) {
        return { error: 'อีเมลหรือรหัสผ่านไม่ถูกต้อง' }
    }

    const cookieStore = await cookies()
    cookieStore.set('session', process.env.SESSION_SECRET, { httpOnly: true, path: '/' })

    redirect('/dashboard')
}

export async function logout() {
    const cookieStore = await cookies()
    cookieStore.delete('session')
    redirect('/login')
}