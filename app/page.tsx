import Image from "next/image";

const socialLinks = [
  { name: "GitHub", href: "https://github.com/Amlan2006", icon: "github" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/amlanroy2006/", icon: "linkedin" },
  { name: "Medium", href: "https://medium.com/@amlanroy2020", icon: "medium" },
  { name: "Phone", href: "tel:9830619628", icon: "phone" },
];

const works = [
  {
    title: "ArborQuest Smart Contracts",
    subtitle: "Quest platform contracts with full audit - zero vulnerabilities found",
  },
  {
    title: "Roburna DEX",
    subtitle: "Uniswap V2 style DEX deployed to Roburna mainnet after audit",
  },
  {
    title: "ChainScope Indexer",
    subtitle: "Multi-chain EVM indexer across BSC, Ethereum, Polygon, Arbitrum & more",
  },
  {
    title: "Token Launcher",
    subtitle: "ERC20 deployer with Uniswap V3 liquidity pool initialization",
  },
  {
    title: "NFT Marketplace",
    subtitle: "ERC1155-based marketplace - migrated from ERC721 for gas efficiency",
  },
  {
    title: "Internal Project Management Tool",
    subtitle: "Company-internal frontend shipped to production at Roburna Labs",
  },
];

const skills = [
  "Solidity",
  "JavaScript",
  "Python",
  "C++",
  "SQL",
  "Docker",
  "Git",
  "Vercel",
  "Hardhat",
  "Foundry",
  "Chainlink",
  "Neon Postgres",
  "Coolify",
  "Quicknode",
  "Ankr",
];

const chains = [
  {
    name: "BNB Chain",
    logo: "https://cdn.simpleicons.org/bnbchain/ff6b2b",
    focus: "High-throughput EVM apps",
  },
  {
    name: "Polygon",
    logo: "https://cdn.simpleicons.org/polygon/ff6b2b",
    focus: "dApps and indexer coverage",
  },
  {
    name: "Ethereum",
    logo: "https://cdn.simpleicons.org/ethereum/ff6b2b",
    focus: "Core smart contract systems",
  },
  {
    name: "Base",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQacxje9Z-NILjsDO-nZVu_hUvDKIM48QVRAA&s",
    focus: "Modern L2 deployments",
  },
  {
    name: "Celo",
    logo: "https://static.chainbroker.io/mediafiles/projects/celo/celo.jpeg",
    focus: "Hackathon track builds",
  },
];

const skillLogos: Record<string, string> = {
  Solidity: "https://cdn.simpleicons.org/solidity/ff6b2b",
  JavaScript: "https://cdn.simpleicons.org/javascript/ff6b2b",
  Python: "https://cdn.simpleicons.org/python/ff6b2b",
  "C++": "https://cdn.simpleicons.org/cplusplus/ff6b2b",
  SQL: "https://cdn.simpleicons.org/sqlite/ff6b2b",
  Docker: "https://cdn.simpleicons.org/docker/ff6b2b",
  Git: "https://cdn.simpleicons.org/git/ff6b2b",
  Vercel: "https://cdn.simpleicons.org/vercel/ff6b2b",
  Hardhat: "https://images.seeklogo.com/logo-png/42/1/hardhat-logo-png_seeklogo-426726.png",
  Foundry: "https://www.getfoundry.sh/foundry-banner.png",
  Chainlink: "https://cdn.simpleicons.org/chainlink/ff6b2b",
  "Neon Postgres": "https://cdn.simpleicons.org/neon/ff6b2b",
  Coolify: "https://cdn.simpleicons.org/coolify/ff6b2b",
  Quicknode: "https://pbs.twimg.com/profile_images/2006931756109209601/TRgoe6HT.jpg",
  Ankr: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCUd1P4UDjKZLCu05az8X9ORdbnL7unil2Vg&s",
};

const posts = [
  {
    title: "Uniswap V3 Deployment - POOL INIT CODE HASH Fix",
    date: "2025",
    tag: "CoinsBench Featured",
  },
  {
    title: "Building a Multi-Chain EVM Indexer with FastAPI",
    date: "2025",
    tag: "Indexer Architecture",
  },
  {
    title: "Solidity Debugging: CREATE2 Mechanics & Periphery Redeployment",
    date: "2025",
    tag: "Solidity Debugging",
  },
];

const achievements = [
  "5 Hackathon Wins (AI + Blockchain)",
  "IISc Bangalore Ideathon Winner",
  "Uniswap Hook Incubator - Selected",
  "10+ Published Articles (2 featured in CoinsBench)",
  "Co-built tech community: 0 -> 3,000 members in 4 months",
  "Track prizes: Celo & Axicov blockchain hackathons",
];

const experiences = [
  {
    role: "Blockchain Engineer",
    company: "Roburna Labs",
    place: "Remote, Saint Vincent and Grenadines",
    duration: "January 2026 - Present",
    bullets: [
      "Smart contracts for ArborQuest with zero audit vulnerabilities",
      "Uniswap V2-style DEX deployed to Roburna mainnet",
      "Token launcher with Uniswap V3 pool initialization",
      "Built ChainScope: multi-chain EVM indexer across major EVM chains",
      "Resolved live Uniswap V3 POOL INIT CODE HASH mismatch",
    ],
  },
  {
    role: "Software Engineering Intern",
    company: "Roburna Labs",
    place: "Remote",
    duration: "October 2025 - January 2026",
    bullets: [
      "Built internal project management frontend now running in production",
      "Led ERC721 to ERC1155 migration for NFT marketplace gas efficiency",
      "Secured Pre-Placement Offer after internship delivery",
    ],
  },
];

function Icon({ name }: { name: string }) {
  const common = {
    width: 22,
    height: 22,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  if (name === "github") {
    return (
      <svg {...common}>
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.3c3.2-.4 6.5-1.6 6.5-7A5.4 5.4 0 0 0 19 3.7 5 5 0 0 0 18.9 0S17.7-.4 15 1.5a13.4 13.4 0 0 0-7 0C5.3-.4 4.1 0 4.1 0A5 5 0 0 0 4 3.7a5.4 5.4 0 0 0-1.5 3.8c0 5.3 3.3 6.5 6.4 6.9A4.8 4.8 0 0 0 8 18v4" />
        <path d="M8 19c-3 .9-3-1.5-4-2" />
      </svg>
    );
  }

  if (name === "linkedin") {
    return (
      <svg {...common}>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
        <path d="M2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    );
  }

  if (name === "phone") {
    return (
      <svg {...common}>
        <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7A2 2 0 0 1 22 16.9z" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <path d="M3 7.5h5.5l3.5 8 3.5-8H21" />
      <path d="M5 16.5h4" />
      <path d="M15 16.5h4" />
    </svg>
  );
}

function DeveloperIllustration() {
  return (
    <div className="avatar-scene" aria-label="Developer working on laptop">
      <div className="halo" />
      <div className="headphones" />
      <div className="head" />
      <div className="body" />
      <div className="arm left" />
      <div className="arm right" />
      <div className="laptop">
        <span />
      </div>
      <div className="leg left" />
      <div className="leg right" />
      <div className="shadow" />
    </div>
  );
}

function SkillIcon({ label }: { label: string }) {
  return (
    <div className="skill-tile">
      <div className="logo-mark">
        <Image src={skillLogos[label]} alt="" width={40} height={40} unoptimized />
      </div>
      <span>{label}</span>
    </div>
  );
}

export default function Home() {
  return (
    <main className="site-shell">
      <div className="shape shape-cube shape-one" />
      <div className="shape shape-hex shape-two" />
      <div className="shape shape-cube shape-three" />
      <div className="shape shape-hex shape-four" />

      <section className="hero panel" id="home">
        <header className="topbar">
          <button className="menu-button" aria-label="Open navigation">
            <span />
            <span />
            <span />
          </button>
          <a className="brand" href="#home" aria-label="Amlan Roy home">
            <span>Amlan</span> Roy
          </a>
        </header>

        <aside className="social-rail" aria-label="Social links">
          {socialLinks.map((link) => (
            <a key={link.name} href={link.href} aria-label={link.name} target={link.name === "Phone" ? undefined : "_blank"} rel={link.name === "Phone" ? undefined : "noreferrer"}>
              <Icon name={link.icon} />
            </a>
          ))}
        </aside>
        <a className="scroll-cue" href="#about">scroll down</a>

        <div className="hero-copy reveal">
          <p className="eyebrow">- Hello</p>
          <h1>I&apos;m Amlan Roy</h1>
          <p className="hero-subtitle">
            A Blockchain Engineer &amp; CS Undergrad based in West Bengal, India.
          </p>
          <a className="cta" href="#about">Learn more</a>
        </div>

        <div className="hero-art reveal">
          <DeveloperIllustration />
        </div>
      </section>

      <section className="about section-grid" id="about">
        <div className="portrait reveal">
          <Image
            src="/profile.png"
            alt="Amlan Roy"
            width={520}
            height={520}
            className="profile-photo"
          />
        </div>
        <div className="section-copy reveal">
          <p className="section-label">About me</p>
          <h2>
            I will Design &amp; Develop <span>the best smart contracts &amp; dApps</span>
          </h2>
          <p>
            I&apos;m a Blockchain Engineer at Roburna Labs, where I build and audit smart contracts,
            DEXes, and multi-chain EVM indexers. I&apos;m currently pursuing my B.Tech in Computer
            Science at Narula Institute of Technology (2024-2028). I&apos;ve won 5 hackathons, been
            selected into the Uniswap Hook Incubator, and published 10+ articles on blockchain
            development. I love turning complex on-chain problems into elegant, secure solutions.
          </p>
        </div>
      </section>

      <section className="achievements reveal" aria-label="Achievements">
        {achievements.map((item) => (
          <div className="badge-card" key={item}>{item}</div>
        ))}
      </section>

      <section className="experience" id="experience">
        <div className="section-heading reveal">
          <p className="section-label">Experience</p>
          <h2>Work Experience</h2>
        </div>
        <div className="experience-grid">
          {experiences.map((item) => (
            <article className="experience-card reveal" key={item.role}>
              <p className="duration">{item.duration}</p>
              <h3>{item.role}</h3>
              <p className="company">{item.company} - {item.place}</p>
              <ul>
                {item.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="works" id="work">
        <div className="section-heading reveal">
          <p className="section-label">Portfolio</p>
          <h2>Featured Works</h2>
        </div>
        <div className="work-strip" aria-label="Featured works carousel">
          {works.map((work, index) => (
            <article className="work-card reveal" key={work.title}>
              <span className="work-number">{String(index + 1).padStart(2, "0")}</span>
              <h3>{work.title}</h3>
              <p>{work.subtitle}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="skills" id="skills">
        <div className="section-heading reveal">
          <p className="section-label">Stack</p>
          <h2>My Skills</h2>
        </div>
        <div className="skills-grid reveal">
          {skills.map((skill) => (
            <SkillIcon key={skill} label={skill} />
          ))}
        </div>
      </section>

      <section className="chains" id="chains">
        <div className="chains-panel reveal">
          <div className="chains-copy">
            <p className="section-label">Networks</p>
            <h2>Chains</h2>
            <p>
              EVM ecosystems I&apos;ve built, deployed, indexed, or hacked on across smart contracts,
              dApps, and protocol integrations.
            </p>
          </div>
          <div className="chains-orbit" aria-label="Chains Amlan has worked on">
            {chains.map((chain) => (
              <article className="chain-node" key={chain.name}>
                <div className="logo-mark chain-logo">
                  <Image src={chain.logo} alt="" width={48} height={48} unoptimized />
                </div>
                <div>
                  <h3>{chain.name}</h3>
                  <p>{chain.focus}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="blog" id="blog">
        <div className="section-heading reveal">
          <p className="section-label">Writing</p>
          <h2>Blog posts</h2>
        </div>
        <div className="blog-grid">
          {posts.map((post, index) => (
            <a className="blog-card reveal" href="https://medium.com/@amlanroy2020" target="_blank" rel="noreferrer" key={post.title}>
              <div className={`blog-thumb thumb-${index + 1}`}>
                <span>{post.tag}</span>
              </div>
              <div>
                <p>{post.date}</p>
                <h3>{post.title}</h3>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="contact panel" id="contact">
        <div className="contact-copy reveal">
          <div className="contact-avatar">AR</div>
          <p className="section-label">Get a quote</p>
          <h2>Get in touch</h2>
          <p>
            Have a project in mind or want to collaborate on something exciting in Web3?
            Let&apos;s talk.
          </p>
          <div className="contact-socials">
            {socialLinks.slice(0, 3).map((link) => (
              <a key={link.name} href={link.href} aria-label={link.name} target="_blank" rel="noreferrer">
                <Icon name={link.icon} />
              </a>
            ))}
          </div>
          <address>
            <a href="mailto:amlanroy2020@gmail.com">amlanroy2020@gmail.com</a>
            <a href="tel:9830619628">9830619628</a>
            <span>West Bengal, India</span>
          </address>
        </div>

        <form className="contact-form reveal">
          <label>
            Full Name
            <input type="text" name="name" placeholder="Amlan Roy" />
          </label>
          <label>
            Email Address
            <input type="email" name="email" placeholder="you@example.com" />
          </label>
          <label>
            Phone Number
            <input type="tel" name="phone" placeholder="+91 98306 19628" />
          </label>
          <label>
            Message
            <textarea name="message" placeholder="Tell me about the project" rows={4} />
          </label>
          <button type="submit">Send message</button>
        </form>
      </section>
    </main>
  );
}
