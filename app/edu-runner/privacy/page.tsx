import type { Metadata } from 'next';
import LegalDocument from '@/app/components/features/LegalDocument';
import { EDU_RUNNER_PRIVACY_HTML } from '@/app/lib/edu-runner/privacy-content';

export const metadata: Metadata = {
  title: 'Privacy Policy — Edu Runner 3D',
  description: 'Privacy Policy for the Edu Runner 3D mobile app by CDev.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function EduRunnerPrivacyPage() {
  return (
    <LegalDocument title="Privacy Policy" html={EDU_RUNNER_PRIVACY_HTML} />
  );
}
