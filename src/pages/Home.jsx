import React from "react";
import {
  ArrowRight,
  Play,
  Sparkles,
} from "lucide-react";
import "../App.css";

function Home() {
  return (
    <main className="home">

      {/* HERO SECTION */}
      <section className="hero">

        <div className="hero-content">

          <div className="badge">
            <Sparkles size={16} />
            Welcome to our website
          </div>

          <h1>
            Build Your
            <span>Digital Future.</span>
          </h1>

          <p>
            We create modern, fast and beautiful digital
            experiences that help your business grow and
            stand out from the competition.
          </p>

          <div className="hero-buttons">

            <button className="primary-btn">
              Get Started
              <ArrowRight size={19} />
            </button>

            <button className="secondary-btn">
              <Play size={17} />
              Watch Demo
            </button>

          </div>

          <div className="stats">

            <div>
              <h3>120+</h3>
              <p>Projects</p>
            </div>

            <div>
              <h3>98%</h3>
              <p>Success Rate</p>
            </div>

            <div>
              <h3>24/7</h3>
              <p>Support</p>
            </div>

          </div>

        </div>

        {/* RIGHT SIDE CARD */}
        <div className="hero-visual">

          <div className="glow"></div>

          <div className="dashboard-card">

            <div className="card-top">

              <div className="dots">
                <span></span>
                <span></span>
                <span></span>
              </div>

              <span className="live">
                ● LIVE
              </span>

            </div>

            <div className="chart">

              <div className="chart-line"></div>

              <div className="chart-point p1"></div>
              <div className="chart-point p2"></div>
              <div className="chart-point p3"></div>
              <div className="chart-point p4"></div>

            </div>

            <div className="card-info">

              <div>
                <small>Total Growth</small>
                <strong>+84.6%</strong>
              </div>

              <div className="mini-number">
                $24,890
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* FEATURES */}
      <section className="features">

        <div className="section-title">

          <span>WHY CHOOSE US</span>

          <h2>
            Everything you need to grow
          </h2>

          <p>
            Powerful tools and modern solutions
            designed for your success.
          </p>

        </div>

        <div className="feature-grid">

          <div className="feature-card">

            <div className="icon">
              01
            </div>

            <h3>
              Modern Design
            </h3>

            <p>
              Clean, premium and responsive
              interfaces created for every device.
            </p>

            <a href="#">
              Explore →
            </a>

          </div>

          <div className="feature-card active">

            <div className="icon">
              02
            </div>

            <h3>
              Fast Performance
            </h3>

            <p>
              Optimized technologies make your
              website faster, smoother and powerful.
            </p>

            <a href="#">
              Explore →
            </a>

          </div>

          <div className="feature-card">

            <div className="icon">
              03
            </div>

            <h3>
              Smart Solutions
            </h3>

            <p>
              Innovative solutions that turn your
              ideas into real digital products.
            </p>

            <a href="#">
              Explore →
            </a>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="cta">

        <div>

          <span>
            READY TO START?
          </span>

          <h2>
            Let's build something amazing.
          </h2>

          <p>
            Turn your idea into a powerful
            digital experience.
          </p>

        </div>

        <button className="primary-btn">
          Start Project
          <ArrowRight size={19} />
        </button>

      </section>

    </main>
  );
}

export default Home;