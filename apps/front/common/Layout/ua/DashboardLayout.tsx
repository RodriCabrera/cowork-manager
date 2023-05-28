import { PropsWithChildren } from 'react'

import { Sidebar } from './Sidebar'
import { UserBubble } from './UserBubble'
import { ApiProvider } from '@/common/context/apiContext'

export const DashboardLayout = ({
  children,
  nameInitial,
  token
}: PropsWithChildren<{
  nameInitial: string | undefined
  token: string | undefined
}>) => (
  <div className="flex h-screen w-screen flex-col md:flex-row">
    <Sidebar>
      <UserBubble className="flex md:hidden" nameInitial={nameInitial} />
    </Sidebar>
    <section className="p-8 md:w-[calc(100vw-136px)]">
      <UserBubble className="hidden md:flex" nameInitial={nameInitial} />
      <ApiProvider token={token}>{children}</ApiProvider>
    </section>
  </div>
)
