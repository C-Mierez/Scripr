import { useEffect, useRef } from "react";
import css from "../styles/index.module.css";
import { MutableRefObject } from "react";
import Card from "../components/Card";
import PageRevealer from "../components/PageRevealer";
import { AnimationOnScroll } from "react-animation-on-scroll";
import ColoredSpacer from "../components/ColoredSpacer";

export default function HomePage() {
    const scrollToNextElement = () => {
        scrollTo({
            top: scrollableElements[scrollableElementIndex]?.current?.offsetTop,
            left: 0,
            behavior: "smooth",
        });
        scrollableElementIndex =
            (scrollableElementIndex + 1) % scrollableElements.length;
    };

    const sectionLanding = useRef<HTMLDivElement>(null);
    const sectionBriefing = useRef<HTMLDivElement>(null);
    const sectionAbout = useRef<HTMLDivElement>(null);

    const scrollableElements = [sectionLanding, sectionBriefing, sectionAbout];
    let scrollableElementIndex = 1;

    return (
        <>
            <>
                <PageRevealer />
                <div className={css.navigation}>
                    <div
                        className={css.advance_button}
                        onMouseDown={scrollToNextElement}
                    >
                        <svg
                            viewBox="0 0 29 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M28.9912 8.92304L28.9912 0.771729L14.5 9.82874L0.00878859 0.771727L0.00878823 8.92303L14.5 17.98L28.9912 8.92304Z" />
                        </svg>
                    </div>
                </div>
                <div className={css.landing} ref={sectionLanding}>
                    <div className={css.background}></div>
                    <h1>All your Finances</h1>
                    <h2>in one single place</h2>
                    <AnimationOnScroll animateIn="animate__fadeInUp">
                        <p>
                            A tool in which to{" "}
                            <span className={css.colored}>manage</span> your
                            assets and{" "}
                            <span className={css.colored}>visualize</span> their
                            performance
                        </p>
                    </AnimationOnScroll>
                </div>
                <ColoredSpacer nextElement={sectionBriefing} />
                <div className={css.main}>
                    <div className={css.briefing} ref={sectionBriefing}>
                        Things a nd stuff
                        <div className={css.grid}>
                            <Card />
                            <Card />
                        </div>
                    </div>
                    <div className={css.about} ref={sectionAbout}>
                        <h1>About</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Quos dolorum blanditiis laborum. Aliquam neque
                            sed eaque ea accusamus tenetur, fuga, molestias
                            adipisci unde perspiciatis sunt asperiores tempora
                            illum quis officiis maiores! Recusandae
                            reprehenderit repudiandae accusantium atque,
                            accusamus dolore tempora eius est consectetur magnam
                            sequi vitae modi similique tempore commodi velit
                            quos quia exercitationem facilis sapiente error fuga
                            qui debitis sed. Maxime accusamus perferendis
                            inventore, iure eos dolore iusto sequi in ratione
                            soluta fugit architecto repellat. Repellat quos
                            adipisci laudantium incidunt voluptate. Quo voluptas
                            quasi suscipit amet quod quis, ipsam laborum aut
                            officiis exercitationem obcaecati mollitia
                            consequuntur deleniti optio. Excepturi iure hic quia
                            sequi natus alias dolorem sapiente repudiandae quam
                            numquam enim, non consequatur. Sequi adipisci dolore
                            illo nisi hic amet ratione fuga perferendis,
                            voluptatum, incidunt corporis maxime eveniet itaque
                            assumenda dolorum expedita earum magnam, unde vitae
                            quasi excepturi autem quidem reprehenderit.
                            Inventore perspiciatis labore aut, temporibus
                            assumenda porro quisquam voluptatum quam eum, autem
                            cupiditate, deserunt id unde! Rerum praesentium ipsa
                            aperiam commodi dolorum amet iusto quae, placeat
                            illum, veritatis sapiente laboriosam nihil excepturi
                            accusamus vero delectus consequatur doloribus odit
                            cumque nostrum labore. Velit dolor repellat non quae
                            perspiciatis cupiditate pariatur deserunt laborum
                            rem ea ullam doloribus aspernatur autem, eaque
                            tenetur nostrum soluta, suscipit quos, voluptate
                            iure. Deleniti sint odit cum deserunt repellat
                            asperiores id! Ipsam blanditiis sequi quaerat
                            assumenda, praesentium id maiores, quidem doloribus
                            fugit aut aliquid, dolores magnam perferendis labore
                            corrupti. Aspernatur veritatis odit aut? Beatae
                            ipsum temporibus quae deleniti culpa praesentium
                            optio laborum adipisci, quisquam excepturi illo
                            reprehenderit dignissimos asperiores aliquam,
                            quibusdam ullam porro eveniet! Vitae veritatis
                            recusandae odit dolore accusamus. Maxime, at?
                            Voluptatum esse beatae deserunt ipsa quo ad libero
                            dicta ipsum aspernatur? Totam voluptate excepturi
                            praesentium eos asperiores repellat placeat quaerat
                            sint numquam consectetur beatae, non, dolor ullam
                            quis animi sequi cumque! Amet deleniti nostrum nemo
                            facere dolore consequatur, accusantium voluptas,
                            iusto libero tenetur ullam dolor architecto quod,
                            distinctio totam aliquid dolores maiores quasi vero
                            saepe temporibus! Minima, laboriosam laudantium
                            cumque voluptas, voluptatem nisi beatae reiciendis
                            dicta recusandae omnis vero sit. Expedita reiciendis
                            sapiente cumque repellendus quas aut, inventore
                            asperiores sunt placeat quia ducimus? Numquam, odit!
                        </p>
                    </div>
                </div>
            </>
        </>
    );
}

{
    /* <div className={css.section}>
                            <div className={`${css.slice} ${css.title}`}>
                                <p>
                                    <span className={css.colored}>Track</span>{" "}
                                    your open positions
                                </p>
                            </div>
                            <div className={`${css.slice}`}>
                                <Card />
                            </div>
                        </div>
                        <div className={css.section}>
                            <div className={`${css.slice}`}>
                                <p>Keep your finances in one single place</p>
                            </div>
                            <div className={`${css.slice} ${css.title}`}>
                                <p>
                                    <span className={css.colored}>
                                        Organize
                                    </span>{" "}
                                    into multiple categories
                                </p>
                            </div>
                        </div>
                        <div className={css.section}>
                            <div className={`${css.slice} ${css.title}`}>
                                <p>
                                    <span className={css.colored}>Link</span>{" "}
                                    operations from anywhere
                                </p>
                            </div>
                            <div className={`${css.slice}`}>
                                <p>Keep your finances in one single place</p>
                            </div>
                        </div> */
}
