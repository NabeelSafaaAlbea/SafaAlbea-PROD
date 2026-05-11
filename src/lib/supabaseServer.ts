import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://mhnwknptymdfsaylvkwn.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1obndrbnB0eW1kZnNheWx2a3duIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MzQ0MTEzNiwiZXhwIjoyMDg5MDE3MTM2fQ.c4aIY5IGhdP_01KObhFX8hztGGtw_8GtwCE2dh5uf1c"
  // process.env.NEXT_PUBLIC_SUPABASE_URL!,
  //process.env.SUPABASE_SERVICE_ROLE_KEY!
);
