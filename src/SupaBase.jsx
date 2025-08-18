import { createClient } from "@supabase/supabase-js";
import {URL,APIKEY} from "./secret"
  
export const supabase = createClient(URL,APIKEY);


