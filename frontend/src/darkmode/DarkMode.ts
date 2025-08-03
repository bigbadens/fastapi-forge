import { ref, watchEffect, onMounted } from 'vue'

const isDark = ref(false)

export function useDarkMode() {
  const setThemeClass = () => {
    const html = document.documentElement
    if (isDark.value) {
      html.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      html.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  onMounted(() => {
    isDark.value = localStorage.getItem('theme') === 'dark'
    setThemeClass()
  })

  watchEffect(setThemeClass)

  return { isDark }
}
