import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const SUPABASE_URL = 'https://wrajtiizvkvtzqmoicbm.supabase.co'
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndyYWp0aWl6dmt2dHpxbW9pY2JtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzgyOTg4NTksImV4cCI6MjA5Mzg3NDg1OX0.pjbTkVx_KGs2ZDv_vQJOPc4ODgwi0q04qA5o2eMSqLA'

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)