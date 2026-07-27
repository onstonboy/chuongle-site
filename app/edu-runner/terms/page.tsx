import type { Metadata } from 'next';
import LegalDocument from '@/app/components/features/LegalDocument';
import { EDU_RUNNER_TERMS_HTML } from '@/app/lib/edu-runner/terms-content';

export const metadata: Metadata = {
  title: 'Terms & Conditions — Edu Runner 3D',
  description:
    'Terms and Conditions for the Edu Runner 3D mobile app by CDev.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function EduRunnerTermsPage() {
  return (
    <LegalDocument title="Terms & Conditions" html={EDU_RUNNER_TERMS_HTML} />
  );
}
