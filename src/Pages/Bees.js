import React from "react";
import Banner from "../Components/Banner";
import banner2 from "../img/banner2.jpg";

const Bees = () => {
    return (
        <div className="bee-page-container">
            <Banner img={banner2} />
            <div className="bees">
                <section>
                    <h1 className="heading-1">BEES: NATURALLY SUSTAINABLE</h1>
                    <h2 className="heading-2">Our Mission</h2>
                    <p>
                        The Shakyans Honey promotes responsible industry
                        practices to ensure the honey consumed every day is
                        trustworthy and pure.
                    </p>
                    <h2 className="heading-2">Practicing what we Preach</h2>
                    <p>
                        The Shakyans Honey advocates for the sustainable
                        production of honey. We are committed to ensuring the
                        honey you love is sustainable today and for future
                        generations. This begins with healthy bees and extends
                        to protecting the natural resources they depend on. That
                        way, you can feel good about each drop and drizzle of
                        honey you enjoy.
                    </p>
                    <h2 className="heading-2">Our Three Pillars</h2>
                    <p>
                        <span className="honey-color">
                            Supporting bee health
                        </span>{" "}
                        - hive management, pesticides, foraging and protecting
                        the beekeeping profession
                    </p>
                    <p>
                        <span className="honey-color">
                            Championing pure honey
                        </span>{" "}
                        - protect purity and full traceability{" "}
                    </p>
                    <p>
                        <span className="honey-color">
                            Nurturing the planet
                        </span>{" "}
                        - limiting impact on waste/packaging, energy, emissions,
                        water
                    </p>
                </section>
                <section>
                    <h3 className="dark-orange">
                        Five Ways You Can Help the Bees
                    </h3>
                    <div>
                        <p>
                            Honey bees, beekeepers and the honey industry are
                            direct contributors to the success of Armenian
                            agriculture. Today, the honey industry faces many
                            challenges, such as hive loss, drought, colony
                            collapse and shrinking forage areas. Here are a few
                            ways you can help the honey bees:
                        </p>
                        <ol>
                            <li>
                                Plant bee-friendly flowers and flowering herbs
                                in your garden and yard.
                            </li>
                            <li>
                                Reduce or limit the use of chemicals and
                                pesticides to treat your lawn or garden while
                                plants are in bloom.
                            </li>
                            <li>
                                Bees are thirsty. Put a shallow basin of fresh
                                water with marbles or rocks in it for the bees
                                to land on outside your home.
                            </li>
                            <li>
                                Learn how to be a beekeeper with sustainable
                                practices.
                            </li>
                            <li>
                                Donate to an organization dedicated to helping
                                protect and promote honey bees and other
                                pollinators.
                            </li>
                        </ol>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Bees;
