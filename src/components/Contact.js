import React , { forwardRef , useState , useEffect}from "react";
import ContactSection from "./ContactSection";

const Contact = forwardRef(( props, ref) => {
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
          const target = document.getElementById('target-element');
    
          if (target) {
            const rect = target.getBoundingClientRect();
            const isElementVisible = rect.top <= -10;
            // console.log(rect.top + " --- " + window.innerHeight + " --- " + rect.bottom)
    
            if (isElementVisible) {
              setIsVisible(true);
            }
          }
        };
        handleScroll();
    
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);
    return (
        <div ref={ref} className={`${props.isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'} transition-opacity duration-1000 ${isVisible ? 'fadeInLeft' : 'opacity-0'}`}>
            <div className="flex items-center">
              <div className="flex-grow border-t border-gray-300"></div>
              <span className="mx-4 text-2xl font-mono">Contact Me</span>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>
            <div className="flex justify-between">
                <div className=" w-4/5">
                    <div className="flex items-center justify-around">
                        <ContactSection isDarkMode={props.isDarkMode} icon={`${process.env.PUBLIC_URL}/img/icons8-email-64.png`} value='enhpurevjawhlan@gmail.com'/>
                    </div>
                    <div className="flex items-center justify-around">
                        <ContactSection isDarkMode={props.isDarkMode} icon={`${process.env.PUBLIC_URL}/img/icons8-call-50.png`} value='72127302 , 95887230'/>
                    </div>
                </div>
                <div className=" items-center justify-around">
                    <a href="https://www.facebook.com/profile.php?id=100036010278856"><img className="transform transition-transform duration-300 ease-in-out hover:scale-125 w-10 my-2 cursor-pointer" src={`${process.env.PUBLIC_URL}/img/icons8-facebook-48.png`} alt=""/></a>
                    <a href="https://github.com/Rinn-Q"><img className="transform transition-transform duration-300 ease-in-out hover:scale-125 w-10 my-2 cursor-pointer" src={`${process.env.PUBLIC_URL}/img/icons8-instagram-48.png`} alt=""/></a>
                    <a href="https://github.com/Rinn-Q"><img className="transform transition-transform duration-300 ease-in-out hover:scale-125 w-10 my-2 cursor-pointer" src={`${process.env.PUBLIC_URL}/img/icons8-github-64.png`} alt=""/></a>
                </div>
            </div>
        </div>
    );
})


export default Contact;