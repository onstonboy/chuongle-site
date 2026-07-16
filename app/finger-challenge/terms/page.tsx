import type { Metadata } from 'next';
import LegalDocument from '@/app/components/features/LegalDocument';
import { FINGER_CHALLENGE_TERMS_HTML } from '@/app/lib/finger-challenge/terms-content';

export const metadata: Metadata = {
  title: 'Terms & Conditions — Finger Challenge',
  description:
    'Terms and Conditions for the Finger Challenge mobile app by CDev.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function FingerChallengeTermsPage() {
  return (
    <LegalDocument
      title="Terms & Conditions"
      html={FINGER_CHALLENGE_TERMS_HTML}
    />
  );
}
