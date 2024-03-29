import React from 'react';
import badge1 from '../../assets/badge-1.png';
import badge2 from '../../assets/badge-2.png';
import badge3 from '../../assets/badge-3.png';
import badge4 from '../../assets/badge-4.png';
import './styles.css';

const AboutPokémon = () => {
    return (
        <section className="about-info">
            <div className="about-info-text">
                Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun's rays, the seed grows progressively larger.
            </div>

            <h4>Pokédex Data</h4>
            <div class="about-table">
                <div className="about-table-key">Species</div>
                <div className="about-table-value">Seed Pokémon</div>
                <div className="about-table-key">Height</div>
                <div className="about-table-value">0.7m (2′04″)</div>
                <div className="about-table-key">Weight</div>
                <div className="about-table-value">6.9kg (15.2 lbs)</div>
                <div className="about-table-key">Abilities</div>
                <div className="about-table-value">1. Overgrow | Chlorophyll (hidden ability)</div>
                <div className="about-table-key">Weaknesses</div>
                <div className="about-table-value">
                    <img className="about-img" src={badge1} alt="" />
                    <img className="about-img" src={badge2} alt="" />
                    <img className="about-img" src={badge3} alt="" />
                    <img className="about-img" src={badge4} alt="" />
                </div>
            </div>

            <h4>Training</h4>
            <div class="about-table">
                <div className="about-table-key">EV Yield</div>
                <div className="about-table-value">1 Special Attack</div>
                <div className="about-table-key">Catch Rate</div>
                <div className="about-table-value">45 (5.9% with PokéBall, full HP)</div>
                <div className="about-table-key">Base Friendship</div>
                <div className="about-table-value">70 (normal)</div>
                <div className="about-table-key">Base Exp</div>
                <div className="about-table-value">64</div>
                <div className="about-table-key">Growth Rate</div>
                <div className="about-table-value">Medium Slow</div>
            </div>

            <h4>Breeding</h4>
            <div class="about-table">
                <div className="about-table-key">Gender</div>
                <div className="about-table-value">
                    <div className="male-gender">♀ 87.5%,</div>
                    <div className="female-gender">♂ 12.5%</div>
                </div>
                <div className="about-table-key">Egg Groups</div>
                <div className="about-table-value">Grass, Monster</div>
                <div className="about-table-key">Egg Cycles</div>
                <div className="about-table-value">20 (4,884 - 5,140 steps)</div>
            </div>

            <h4>Location</h4>
            <div class="about-table">
                <div className="about-table-key">001</div>
                <div className="value">(Red/Blue/Yellow)</div>
                <div className="about-table-key">226</div>
                <div className="value">(Gold/Silver/Crystal)</div>
                <div className="about-table-key">001</div>
                <div className="value">(FireRed/LeafGreen)</div>
                <div className="about-table-key">231</div>
                <div className="value">(HeartGold/SoulSilver)</div>
                <div className="about-table-key">080</div>
                <div className="value">(X/Y - Central Kalos)</div>
                <div className="about-table-key">001</div>
                <div className="value">(Let's Go Pikachu/Let's Go Eevee)</div>
            </div>
        </section>
    );
}

export default AboutPokémon;
