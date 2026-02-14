'use client';

import Image from 'next/image';
import Link from 'next/link';
import SignIn from './sign-in';

import { useState, useEffect } from 'react';
import { User } from 'firebase/auth';

import styles from './navbar.module.css';
import { onAuthStateChangedHelper } from '../firebase/firebase';

export default function Navbar () {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChangedHelper((authUser) => {
      setUser(authUser);
    });

    return () => unsubscribe();
  }, []);

  return (
    <nav className={styles.nav}>
      <Link href="/" className={styles.logo}>
        <Image width={90} height={20} className={styles.logoImg}
        src="/youtube-logo.svg" alt="Youtube Logo" />
      </Link>
      <SignIn user={user}/>
    </nav>
  )
}