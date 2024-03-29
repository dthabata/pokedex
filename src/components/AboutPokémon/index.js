import React from "react";
import './styles.css';

const AboutPokémon = () => {
    return (
        <section className="about-info">
            <div className="about-info-text">
                Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun's rays, the seed grows progressively larger.
            </div>

            <h4>Pokédex Data</h4>

            <div class="table">
                <div className="key">Species</div>
                <div className="value">Seed Pokémon</div>
                <div className="key">Height</div>
                <div className="value">0.7m (2′04″)</div>
                <div className="key">Weight</div>
                <div className="value">6.9kg (15.2 lbs)</div>
                <div className="key">Abilities</div>
                <div className="value">1. Overgrow | Chlorophyll (hidden ability)</div>
                <div className="key">Weaknesses</div>
                <div className="value">Images</div>
            </div>

            <h4>Training</h4>

            <div class="table">
                <div className="key">EV Yield</div>
                <div className="value">1 Special Attack</div>
                <div className="key">Catch Rate</div>
                <div className="value">45 (5.9% with PokéBall, full HP)</div>
                <div className="key">Base Friendship</div>
                <div className="value">70 (normal)</div>
                <div className="key">Base Exp</div>
                <div className="value">64</div>
                <div className="key">Growth Rate</div>
                <div className="value">Medium Slow</div>
            </div>

            <h4>Breeding</h4>

            <div class="table">
                <div className="key">Gender</div>
                <div className="value">
                    <div className="male-gender">♀ 87.5%,</div>
                    <div className="female-gender">♂ 12.5%</div>
                </div>
                <div className="key">Egg Groups</div>
                <div className="value">Grass, Monster</div>
                <div className="key">Egg Cycles</div>
                <div className="value">20 (4,884 - 5,140 steps)</div>
            </div>

            <h4>Location</h4>

            <div class="table">
                <div className="key">001</div>
                <div className="value">(Red/Blue/Yellow)</div>
                <div className="key">226</div>
                <div className="value">(Gold/Silver/Crystal)</div>
                <div className="key">001</div>
                <div className="value">(FireRed/LeafGreen)</div>
                <div className="key">231</div>
                <div className="value">(HeartGold/SoulSilver)</div>
                <div className="key">080</div>
                <div className="value">(X/Y - Central Kalos)</div>
                <div className="key">001</div>
                <div className="value">(Let's Go Pikachu/Let's Go Eevee)</div>
            </div>
        </section>
    );
}

export default AboutPokémon;
