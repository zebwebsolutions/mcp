import herostyles from '../styles/HeroSection.module.css';


export default function HeroSection() {
    return(
        <section className={herostyles.heroarea}>
                <div className={herostyles.herolhs}>
                    <div className="pl-8">
                        <h2 className='text-4xl mb-4'>
                            We Completes
                        </h2>
                        <h2 className="font-bold text-5xl mb-7 mareacolor">
                            Your Dreams
                        </h2>
                        <p className='font-light text-lg w-5/12'>
                            We pride ourselves on our transparency, fairness and integrity to gain the trust of our stakeholders.
                        </p>
                    </div>
                </div>
        </section>
    )
}