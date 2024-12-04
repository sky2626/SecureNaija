import { createClient } from '@supabase/supabase-js';

export default defineNuxtPlugin(() => {
    const config = useRuntimeConfig();

    const supabaseUrl = config.public.SUPABASE_URL;
    const supabaseAnonKey = config.public.SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseAnonKey) {
        console.error("Supabase configuration is missing.");
    }

    const supabase = createClient(supabaseUrl, supabaseAnonKey);

    return {
        provide: {
            supabase,
        },
    };
});
