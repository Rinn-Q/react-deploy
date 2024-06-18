import React , {useRef } from 'react';
import About from './About';
import Skills from '../components/Skills';
import Experience from '../components/Experience'
import Contact from '../components/Contact';
import Footer from '../components/Footer';

function Home({ isDarkMode }) {
  const contactRef = useRef(null); 
  // const [data, setData] = useState([]);
  // async function fetchData() {
  //   const res = await fetch('https://86b6-202-126-89-217.ngrok-free.app/webhook', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({
  //       type: "message.new",
  //       cid: "messaging:SERVER_TEST_HHE",
  //       channel_id: "SERVER_TEST_HHE",
  //       channel_type: "messaging",
  //       message: {
  //         id: "0fda43d2-9af9-44c4-8caa-c230e6047d87",
  //         text: "Түвшин 2 хүсэлтээ яаж илгээх вэ?",
  //         html: "<p>Түвшин 2 хүсэлтээ яаж илгээх вэ?</p>\n",
  //         type: "regular",
  //         user: {
  //           id: "1",
  //           role: "user",
  //           name: "Emily"
  //         },
  //         choice_id: 63
  //       },
  //       channel: {
  //         id: "SERVER_TEST_HHE",
  //         type: "messaging",
  //         cid: "messaging:SERVER_TEST_HHE"
  //       },
  //       user: {
  //         id: "1",
  //         role: "user",
  //         name: "Emily"
  //       },
  //       members: [
  //         {
  //           user_id: "limebot",
  //           user: {},
  //           status: "member",
  //           created_at: "2024-06-06T08:59:45.375169Z",
  //           updated_at: "2024-06-06T08:59:45.375169Z",
  //           banned: false,
  //           shadow_banned: false,
  //           role: "member",
  //           channel_role: "channel_member",
  //           notifications_muted: false
  //         },
  //         {
  //           user_id: "1",
  //           user: {},
  //           status: "member",
  //           created_at: "2024-06-06T09:00:01.231115Z",
  //           updated_at: "2024-06-06T09:00:01.231115Z",
  //           banned: false,
  //           shadow_banned: false,
  //           role: "member",
  //           channel_role: "channel_member",
  //           notifications_muted: false
  //         }
  //       ]
  //     })
  //   });

  //   const json = await res.json();
  //   setData(json);
  // }

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // console.log(data);

  const handleContactClick = () => {
    contactRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-black m-0 w-full'} p-5`} style={isDarkMode ? { backgroundImage: `url('${process.env.PUBLIC_URL}/img/dark.jpg')` } : { backgroundImage: `url('${process.env.PUBLIC_URL}/img/white.jpg')` }}>
      <div className='container mx-auto p-4 text-center py-40'>
        <p className='block text-4xl font-bold'>
          I'M <span className='text-yellow-400'>Javkhlan</span>
        </p>
        <p className='mt-2 text-lg'>MUST 2-nd year student</p>
        <button className={`btn-second mt-4 px-6 py-2 rounded-full ${isDarkMode ? 'bg-yellow-400 text-gray-800' : 'bg-gray-800 text-white'}`} onClick={handleContactClick}>
          Contact Me
        </button>
      </div>
      <About isDarkMode={isDarkMode}/>
      <Skills isDarkMode={isDarkMode}/>
      <Experience isDarkMode={isDarkMode}/>
      <Contact isDarkMode={isDarkMode} ref={contactRef}/>
      <Footer isDarkMode={isDarkMode}/>
    </div>
  );
}

export default Home;