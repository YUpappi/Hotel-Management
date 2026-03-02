import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://gcuzcrytjrxbuwwhqnfg.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdjdXpjcnl0anJ4YnV3d2hxbmZnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjEyNzU4MTAsImV4cCI6MjA3Njg1MTgxMH0.-JEWb0LhT87Y26mpOI_xqDDFrkl93lMtVJOoWI5XVR0";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
