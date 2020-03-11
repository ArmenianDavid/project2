import React from "react";
import beeImg from "../img/small-img.jpeg";

class AboutHoney extends React.Component {
    render() {
        return (
            <div className="container-fluid about-container">
                <div>
                    <h2 className="heading-2">ABOUT HONEY</h2>
                    <p>
                        The story of honey is older than history itself. An
                        8,000-year-old cave painting1 in Spain depicts honey
                        harvesting, and we know it's been used for food,
                        medicine and more by cultures all over the world since.
                    </p>
                    <div className="flex">
                        <div className="left-div">
                            <p>
                                But honey isn't about humans. It's the natural
                                product made from bees—one of our planet's most
                                important animals. Honey bees visit millions of
                                blossoms in their lifetimes, making pollination
                                of plants possible and collecting nectar to
                                bring back to the hive.
                            </p>

                            <p>
                                Lucky for us, bees make more honey than their
                                colony needs, and beekeepers remove the excess
                                and bottle it. Just like they've been doing
                                since the beginning of time.
                            </p>
                        </div>
                        <div className="right-div">
                            <img src={beeImg} alt="bee" className="small-img" />
                        </div>
                    </div>
                    <p>
                        Both raw and pasteurized forms of honey are available.
                        Raw honey is removed from the hive and bottled directly,
                        and as such will contain trace amounts of yeast, wax,
                        and pollen. Consuming local raw honey is believed to
                        help with seasonal allergies, due to repeated exposure
                        to the pollen in the area. Pasteurized honey has been
                        heated and processed to remove impurities.
                    </p>
                    <p>
                        Honey has high levels of monosaccharides, fructose, and
                        glucose, and it contains about 70 to 80 percent sugar,
                        which provides its sweetness. Honey also has antiseptic
                        and antibacterial properties. Modern medical science has
                        managed to find uses for honey in chronic wound
                        management and combating infection.
                    </p>
                    <div>
                        <ul>
                            Fast facts on honey
                            <li>
                                Honey is linked to wound-healing properties and
                                antibacterial action.
                            </li>
                            <li>
                                It has been used in medicine for over 5,000
                                years.
                            </li>
                            <li>
                                Honey can replace sugar in meals, providing a
                                healthier option. However, they can also add
                                browning and excess moisture to a dish.
                            </li>
                            <li>
                                Do not give honey to children under 12 months
                                old.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutHoney;
