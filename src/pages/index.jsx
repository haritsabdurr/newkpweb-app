import Head from 'next/head';
import Image from 'next/image';
import styles from '@app/styles/Home.module.css';
import Navigation from '@app/components/global/Navigation';
import Footer from '@app/components/global/Footer';
import Welcome from '@app/pages/Welcome';

export default function Home() {
  return (
    <div>
      <Navigation />
      <Welcome />
      <Footer />
    </div>
  );
}
