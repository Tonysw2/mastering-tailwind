import { useTheme } from 'next-themes'
import { Button } from './Button'
import { Moon, Sun } from 'lucide-react'

export function ThemeChanger() {
  const { theme, setTheme } = useTheme()

  function toggleTheme() {
    if (theme === 'dark') {
      setTheme('light')
    } else {
      setTheme('dark')
    }
  }

  return (
    <Button variant="outline" className="p-2" onClick={toggleTheme}>
      {theme === 'dark' ? (
        <Moon className="h-5 w-5 text-violet-500 dark:text-violet-300" />
      ) : (
        <Sun className="h-5 w-5 text-violet-500 dark:text-violet-300" />
      )}
    </Button>
  )
}
