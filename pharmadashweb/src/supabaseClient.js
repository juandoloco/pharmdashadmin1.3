// src/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://lzqgeepozfuhbgezcqka.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx6cWdlZXBvemZ1aGJnZXpjcWthIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTcxMDg1NjgsImV4cCI6MjAzMjY4NDU2OH0.Zf97sYC_JvLCMiiAquSH7yfUczoME_2e_eB5mcjTtRE'

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
