import { render, screen, waitFor } from '@testing-library/vue'
import { createPinia } from 'pinia'
import { createRouter, createWebHistory } from 'vue-router'
import { describe, expect, it } from 'vitest'
import { HttpResponse, http } from 'msw'
import HomeView from '@/views/HomeView.vue'
import { server } from '../mocks/server'

const API_BASE_URL = 'http://localhost:8000/api'

function renderHomeView() {
  const router = createRouter({
    history: createWebHistory(),
    routes: [{ path: '/', name: 'home', component: HomeView }],
  })

  return render(HomeView, {
    global: {
      plugins: [createPinia(), router],
    },
  })
}

describe('HomeView (integration)', () => {
  it('renders users returned by the mocked API', async () => {
    renderHomeView()

    expect(await screen.findByText(/Ada Lovelace/)).toBeInTheDocument()
    expect(screen.getByText(/Alan Turing/)).toBeInTheDocument()
  })

  it('shows an error message when the API call fails', async () => {
    server.use(
      http.get(`${API_BASE_URL}/users`, () => {
        return HttpResponse.json({ message: 'Server error' }, { status: 500 })
      }),
    )

    renderHomeView()

    await waitFor(() => {
      expect(screen.getByText(/request failed/i)).toBeInTheDocument()
    })
  })

  it('increments the counter store value on click', async () => {
    const { getByText } = renderHomeView()
    await screen.findByText(/Ada Lovelace/)

    const button = getByText('Increment')
    button.click()

    await waitFor(() => {
      expect(screen.getByText('1')).toBeInTheDocument()
    })
  })
})
