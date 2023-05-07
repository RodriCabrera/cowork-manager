import { ReactElement } from 'react'

import { Cowork } from 'types'

import { SuperadminLayout } from '@/components/superadmin/SuperadminLayout'
import { withSessionSsr } from '@/lib/withSession'
import { PropsWithSuperadmin } from '@/types/superadmin'
import { EditCoworkForm } from '@/components/superadmin/EditCoworkForm'

const EditCowork = ({
  superadmin,
  coworkData
}: PropsWithSuperadmin<{ coworkData: Cowork }>) => {
  return (
    <SuperadminLayout superadmin={superadmin}>
      <div>
        <h1 className="mb-6 text-center text-2xl">Edit</h1>
        <EditCoworkForm data={coworkData} />
      </div>
    </SuperadminLayout>
  )
}

export const getServerSideProps = withSessionSsr(async (context) => {
  const { req, query } = context
  const { superadmin } = req.session
  const coworksRes = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/coworks/${query.coworkId}`
  )
  const coworkData: Cowork = await coworksRes.json()
  return {
    props: { superadmin, coworkData }
  }
})

EditCowork.getLayout = (page: ReactElement) => page

export default EditCowork
