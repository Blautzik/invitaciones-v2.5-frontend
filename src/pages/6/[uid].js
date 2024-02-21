import { getFirestore, doc, getDoc, collection, getDocs } from 'firebase/firestore';
import Header from '@/components/6/Header';
import Head from 'next/head';
import { db } from '../../firebase/config';
import Info from '@/components/6/Info';
import Gallery from '@/components/6/Gallery';
import Agendar from '@/components/6/Agendar';
import Footer from '../../components/6/Footer';
import Regalos from '@/components/6/Regalos';


const seis = ({ article }) => {
    console.log(article)
    return (
        
            <>
                <Head>
                    <title>
                        {article.nombre}
                    </title>

                    <meta property="og:image" content={article.fotoPortada} />
                    <meta property="og:description" content={article.nombre} />
                </Head>


                {article.music &&
                    <div className='fixed bottom-4 right-0 z-50'>
                        <Audiowe music={article.music} />
                    </div>
                }
                <div className='flex flex-col justify-center items-center w-screen'>

                    <main className="w-screen" >

                        <section className='z-10'>
                            <Header
                                title={article.nombre}
                                coverImage={article.fotoPortada}
                                coverImagePc={article.fotoPortada}
                                date={article.fecha}
                                content={article.nombre}
                            />
                        </section>



                        <div>

                            <section>
                                <div>
                                    <div className="h-full w-full flex flex-col items-center justify-between ">
                                        <Info article={article} />
                                    </div>
                                </div>
                            </section>

                            {
                                article.galeria[0] &&
                                <section className="bg-[#fff] mt-12 text-center flex justify-center ">
                                    <Gallery imagenes={article.galeria} titulo='Book de Fotos' />
                                </section>
                            }


                            {article.frase &&
                                <div>
                                    <Regalos article={article} />
                                </div>
                            }



                            <section className='relative'>
                                <div className='z-50'>
                                    <Agendar className='z-40' foto={article.fotoFinal} links={[article.link_ig, article.link_face, article.link_twitter]} fecha={article.fecha} />
                                </div>
                            </section>

                            <section className='relative pt-5'>
                                
                                <Footer frase_cierre={article.frase_cierre} sin_janos={article.sin_janos} />
                                <div className="w-screen bg-violeta h-8 text-center pt-2 text-white">Invitaciones Jano's </div>
                            </section>
                        </div>
                    </main>
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