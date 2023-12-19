import { getFirestore, doc, getDoc, collection, getDocs } from 'firebase/firestore';
import Header from '@/components/6/Header';
import Head from 'next/head';
import { db } from '../../firebase/config';
import Info from '@/components/6/Info';

const seis = ({ article }) => {
    return (
        <>
            <Head>
                <title>
                    {article.nombre}
                </title>
                {/* Update image handling based on Firebase requirements */}
                <meta property="og:image" content={article.fotoPortada} />
                <meta property="og:description" content={article.nombre} />
            </Head>

            <div className="mb-16">
                <Header
                    title={article.nombre}
                    // Update image handling based on Firebase requirements
                    coverImage={article.fotoPortada}
                    coverImagePc={article.fotoPortada}
                    date={article.fecha}
                    content={article.nombre}
                />
            </div>


        </>
    );
};

export default seis;

export async function getStaticProps({ params, previewData }) {

    const articleRef = doc(db, 'clientes', params.uid);
    const articleDoc = await getDoc(articleRef);

    if (!articleDoc.exists()) {
        return {
            notFound: true,
        };
    }

    const articleData = articleDoc.data();

    // Convert Firestore Timestamp to Date
    const fecha = articleData.fecha.toDate();

    // Format the Date as needed, e.g., toISOString() or toLocaleString()
    const formattedFecha = fecha.toISOString(); // Adjust the formatting as per your requirement

    const article = {
        uid: articleDoc.id,
        ...articleData,
        fecha: formattedFecha,
    };

    return {
        props: {
            article,
        },
    };
}

export async function getStaticPaths() {
    const articlesCollection = collection(db, 'clientes');
    const articlesSnapshot = await getDocs(articlesCollection);

    const paths = [];
    articlesSnapshot.forEach((doc) => {
        paths.push(`/6/${doc.id}/`);
    });


    console.log(paths)
    return {
        paths,
        fallback: false,
    };
}