import { createClient } from "@supabase/supabase-js";

const apiUrl = import.meta.env.VITE_REACT_APP_PROJECT_URL;
const apiKey = import.meta.env.VITE_REACT_APP_ANON_API_KEY;

const supabase = createClient(apiUrl, apiKey);
export default supabase;
