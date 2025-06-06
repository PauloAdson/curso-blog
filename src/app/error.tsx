'use client';

import ErrorMessage from '@/components/ErrorMessage';
import React, { useEffect } from 'react';

type RootErrorPageProps = {
  error: Error;
  reset: () => void;
};

export default function RootErrorPage({ error }: RootErrorPageProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <ErrorMessage
      pageTitle='Internal Server Error'
      contentTitle='501'
      content='Ocorreu um erro do qual nossa aplicação não conseguiu se recuperar. Tene novamente mais tarde.'
    />
  );
}
