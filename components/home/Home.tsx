import HeroPage from '../heropage/HeroPage';
import {Info} from '../info/info';
import {Marquee} from '../marquee/marquee';
import {Reviews} from '../reviews/Reviews';
import {Faq} from '../faq/Faq';
import {MentorProfile} from '../mentorprofile/MentorProfile';
import {CareerContact} from '../careerContact/CareerContact';
import Course from '../course/Course';
import Programs from '../programs/Programs';
import WhyAarasoft from '../whyAarasoft/WhyAarasoft';
import WhyCourse from '../whyCourse/WhyCourse';

const Home = () => {
    return (
        <div>
            <section id="hero">
                <HeroPage/>
            </section>
            <Info/>
            <WhyAarasoft/>
            {/* <Marquee/>
            <WhyCourse/>
            <section id="course">
                <Course/>
            </section>
            <Marquee/>
            <section id="programs">
                <Programs/>
            </section>
            <MentorProfile/>
            <Reviews/>
            <Faq/>
            <section id="contact">
                <CareerContact/>
            </section> */}
        </div>
    );
};

export default Home;
