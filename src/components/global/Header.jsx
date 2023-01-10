import Head from 'next/head';

const Header = ({ title }) => {
  return (
    <Head>
      <title>
        {title ? `${title} | IBIK FTI Untar | Website Kerja Praktik` : ''}
      </title>
      <meta
        name='description'
        content='Website IBIK atau Inkubator Bisnis dan Kerjasama adalah yang website memberikan informasi mengenai kerjasama antara Fakultas Teknologi Informasi dan perusahaan, mencakup informasi mengenai kegiatan seperti magang, seminar dan lowongan kerja yang dibuka atau diadakan oleh perusahaan yang bekerja sama dengan Fakultas Teknologi Informasi.'
      />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>
  );
};

export default Header;
