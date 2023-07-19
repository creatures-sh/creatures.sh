import { createSignal, Match, Show, Switch } from 'solid-js'

import search from '@/components/icons/search.svg'
import close from '@/components/icons/close.svg'

export default function Search() {
  const [isExpanded, setIsExpanded] = createSignal()
  const [query, setQuery] = createSignal('')
  let inputRef: HTMLInputElement | null = null

  const searchPosts = (event: Event) => {
    event.preventDefault()
    if (query()) {
      console.log('searching for', query())
    }
  }

  return (
    <form
      class='flex flex-1 justify-end h-6 gap-4'
      onSubmit={searchPosts}
      role='search'
    >
      <Show when={isExpanded()}>
        <input
          ref={(el) => (inputRef = el)}
          type='search'
          placeholder='Search'
          class='bg-rich-black border-border border-b-2 w-full max-w-xs px-2'
          onChange={(e) => setQuery(e.currentTarget.value)}
        />
      </Show>
      <button
        onClick={() => {
          setIsExpanded((current) => !current)
          inputRef?.focus()
        }}
      >
        <img src={isExpanded() ? close.src : search.src} />
      </button>
    </form>
  )
}
