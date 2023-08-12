import { createSignal, Show } from 'solid-js'

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
      class='flex flex-1 justify-end min-h-[42px] gap-4'
      onSubmit={searchPosts}
      role='search'
    >
      <Show when={isExpanded()}>
        <input
          ref={(el) => (inputRef = el)}
          type='search'
          placeholder='Search'
          class='bg-rich-black border-border border-b-2 w-full max-w-sm px-4 py-2'
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
