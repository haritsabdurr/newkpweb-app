import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import Welcome from './components/Welcome';

export default function Home() {
  return (
    <div>
      <Navigation />
      <Welcome />
      <Footer />
    </div>
  );
}
