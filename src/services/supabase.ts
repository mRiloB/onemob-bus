import { createClient } from '@supabase/supabase-js';

const sburl = 'https://aapvaopfnhpknygyirnv.supabase.co';
const sbakey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFhcHZhb3Bmbmhwa255Z3lpcm52Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTg0MTIzNzcsImV4cCI6MjAxMzk4ODM3N30.c6vFyp7uWJ0aaae0ePx7T4z5nHYZXjRHdwISiOy1efg';
const supabase = createClient(sburl, sbakey);

export { supabase };
