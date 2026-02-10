import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://mpmyqjfcerbgaxnhbfkq.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1wbXlxamZjZXJiZ2F4bmhiZmtxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzAxNjEzNDEsImV4cCI6MjA4NTczNzM0MX0.JIzwF5cZWoL4WrJajp5fceYOzYzM_MqDp4aBj5dOIsk";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
