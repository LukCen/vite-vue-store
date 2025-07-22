import { createClient, type User } from "@supabase/supabase-js";
import { router } from "../router";

const url: string = import.meta.env.VITE_SUPABASE_URL ?? '';
const key: string = import.meta.env.VITE_SUPABASE_KEY ?? '';


const supabase = createClient(url, key)

// adds the user to the authenticated schema (Supabase default for registered users) AND to my own 'users' table for later use
export async function addUser(d: _User) {
  const { email, password } = d
  const { data, error } = await supabase.auth.signUp({
    email: email ?? '',
    password: password ?? ''
  })
  if (error) {
    console.error(`Registration error, see: ${error}`)
  }

  const userData = data?.user

  if (userData) {
    const insertUser = await supabase.from('users').insert(d)

    if (insertUser.error) {
      console.error(`Error adding user to the table: ${insertUser.error}`)
    } else {
      alert("User added successfully!")
    }
  }

}

export async function loginUser(d: _User) {
  const { email, password } = d
  const result = await supabase.auth.signInWithPassword({ email: email ?? '', password: password ?? '' })

  return result
}
// Fetches data from custom-made tables
export async function fetchTableData<T>(table: string, row: string) {
  const { data, error } = await supabase.from(table).select(row)

  if (error || !data) {
    console.error(`Error fetching data from table ${table} : ${error}`)
    return null
  }
  return data as T[]
}

// runs on mount from NavUserSection to determine if component version for logged in is generated (puts username in the innerText instead of a generic 'My Profile' or whatever)
export async function isLoggedIn(): Promise<User | null> {
  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    console.error(`Error fetching logged user' data: ${error}.`)
    return null
  } {
    return data.user
  }
}

// this one doesn't take a user as an argument, because only one can be logged in at a time
export async function logoutUser() {
  let { error } = await supabase.auth.signOut()
  router.go(0)
  if (error) {
    console.error(`Error logging out: ${error}`)
  }
}
