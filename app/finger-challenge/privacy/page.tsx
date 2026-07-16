import type { Metadata } from 'next';
import LegalDocument from '@/app/components/features/LegalDocument';
import { FINGER_CHALLENGE_PRIVACY_HTML } from '@/app/lib/finger-challenge/privacy-content';

export const metadata: Metadata = {
  title: 'Privacy Policy — Finger Challenge',
  description: 'Privacy Policy for the Finger Challenge mobile app by CDev.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function FingerChallengePrivacyPage() {
  return (
    <LegalDocument
      title="Privacy Policy"
      html={FINGER_CHALLENGE_PRIVACY_HTML}
    />
  );
}
