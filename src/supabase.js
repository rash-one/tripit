
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://dqorskomhqezaztrdhzc.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRxb3Jza29taHFlemF6dHJkaHpjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQ4NjA0ODUsImV4cCI6MjA0MDQzNjQ4NX0.sT1ehQrr-wQuwq0OVRgDtPh2gnvRGfKIMiDXlZIuvMI'; 

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
