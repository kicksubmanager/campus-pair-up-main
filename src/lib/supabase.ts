import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;

let client: ReturnType<typeof createClient> | null = null;
if (!supabaseUrl || !supabaseAnonKey) {
	console.error(
		"Supabase env vars are missing. Set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in your .env and restart the dev server."
	);
} else {
	client = createClient(supabaseUrl, supabaseAnonKey, {
		auth: {
			persistSession: true,
			autoRefreshToken: true,
			detectSessionInUrl: true,
		},
	});
}

export const supabase = client;


