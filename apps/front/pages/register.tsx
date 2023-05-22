import { useRouter } from 'next/router'

import { RegisterBanner } from '@/modules/auth/components/banners/RegisterBanner'
import {
  CompanyForm,
  FreelancerForm
} from '@/modules/auth/components/RegisterForms'

export const RegisterPage = () => {
  const router = useRouter()

  const isCompany = router.query.role === 'company'

  const goToCompanyRegister = () =>
    router.push({
      query: { role: 'company' }
    })

  const goToFreelancerRegister = () =>
    router.push({
      query: { role: 'freelancer' }
    })

  return (
    <div className="flex min-h-[calc(100vh-8rem)]   flex-col md:flex-row">
      <RegisterBanner
        isCompany={isCompany}
        goToCompanyRegister={goToCompanyRegister}
        goToFreelancerRegister={goToFreelancerRegister}
      />
      {isCompany ? <CompanyForm /> : <FreelancerForm />}
    </div>
  )
}

export default RegisterPage
