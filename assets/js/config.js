/**
 * ╔══════════════════════════════════════════════════════╗
 * ║   AK PORTFOLIO — config.js                          ║
 * ║   ------------------------------------------------   ║
 * ║   This is your MAIN configuration file.             ║
 * ║   Edit anything here to update the live site.       ║
 * ║   No coding knowledge required — just change        ║
 * ║   the values between the quotes.                    ║
 * ╚══════════════════════════════════════════════════════╝
 */

const CONFIG = {

  /* ── ADMIN CREDENTIALS ────────────────────────────────
     Change these before going live!
     Username & password for the admin panel.
     Access via: Ctrl + Shift + A on any page.
  ──────────────────────────────────────────────────── */
  admin: {
    username: 'skullARENA',
    password: 'Narasimha@2208'   // ← Have Changed the credentials
  },

  /* ── HERO STATS ───────────────────────────────────────
     The three numbers shown on the home page.
  ──────────────────────────────────────────────────── */
  stats: {
    ctf:  '15+',   // CTFs completed
    proj: '8+',    // Projects built
    cve:  '3+'     // CVEs reported
  },

  /* ── ABOUT SECTION ────────────────────────────────────
     subtitle : the heading under "about me"
     bio      : your bio — HTML is supported.
                Wrap each paragraph in <p> tags.
  ──────────────────────────────────────────────────── */
  about: {
    subtitle: 'Securing the Digital Frontier',
    bio: `
      <p>I'm <strong>Atharva Kumbhar</strong>, a cybersecurity enthusiast and researcher
      based in Nagpur, India. I specialise in offensive security — hunting vulnerabilities
      before malicious actors do.</p>
      <p>My work spans <strong>penetration testing</strong>, <strong>network forensics</strong>,
      <strong>CTF competitions</strong>, and <strong>bug bounty hunting</strong>. I enjoy reverse
      engineering malware and building tools that automate security workflows.</p>
      <p>When I'm not breaking things, I'm building defences — writing security tooling,
      documenting findings, and sharing knowledge with the infosec community.</p>
      <p>Currently pursuing a degree in Computer Science while actively participating in
      the cybersecurity ecosystem through bug bounties and open-source contributions.</p>
    `
  },

  /* ── SKILLS ───────────────────────────────────────────
     name : skill label
     pct  : proficiency percentage (0–100)
  ──────────────────────────────────────────────────── */
  skills: [
    { name: 'Penetration Testing',        pct: 92 },
    { name: 'Network Security',           pct: 85 },
    { name: 'Malware Analysis',           pct: 78 },
    { name: 'CTF / Reverse Engineering',  pct: 88 },
    { name: 'Bug Bounty Hunting',         pct: 80 },
    { name: 'Python / Scripting',         pct: 88 }
  ],

  /* ── PROJECTS ─────────────────────────────────────────
     icon : any emoji
     tags : "colorCode:Label" — colorCodes: c=cyan b=blue r=red a=amber g=green
     gh   : GitHub URL (leave '' to hide)
     demo : Demo / writeup URL (leave '' to hide)
  ──────────────────────────────────────────────────── */
  projects: [
    {
      id: 1, icon: '🔍',
      title: 'AutoRecon Framework',
      desc: 'Automated recon tool chaining Nmap, Gobuster, and Nikto — generating structured markdown reports for penetration testing engagements.',
      tags: 'r:Red Team,c:Python',
      gh: 'https://github.com/atharvakumbhar',
      demo: '#'
    },
    {
      id: 2, icon: '🛡️',
      title: 'NetWatch IDS',
      desc: 'Lightweight IDS using Scapy to monitor live traffic, detect anomalies, and alert on port scans and ARP spoofing.',
      tags: 'b:Network,a:Forensics',
      gh: 'https://github.com/atharvakumbhar',
      demo: '#'
    },
    {
      id: 3, icon: '🧬',
      title: 'Malware Sandbox Analyser',
      desc: 'Isolated environment for detonating and analysing malware samples — captures syscalls, network traffic, and registry changes.',
      tags: 'a:Malware,r:RE',
      gh: 'https://github.com/atharvakumbhar',
      demo: '#'
    },
    {
      id: 4, icon: '🏴',
      title: 'CTF Challenge Archive',
      desc: 'Collection of 40+ CTF writeups across web exploitation, cryptography, binary exploitation, and OSINT with custom scripts.',
      tags: 'c:CTF,b:Web',
      gh: 'https://github.com/atharvakumbhar',
      demo: '#'
    },
    {
      id: 5, icon: '🔑',
      title: 'Bug Bounty Toolkit',
      desc: 'Personal Bash/Python toolkit automating subdomain enum, XSS scanning, SQLi detection, and SSRF probing across large attack surfaces.',
      tags: 'b:Bug Bounty,c:Web',
      gh: 'https://github.com/atharvakumbhar',
      demo: '#'
    },
    {
      id: 6, icon: '🔐',
      title: 'CryptoBreaker CLI',
      desc: 'CLI tool for breaking classical ciphers — Caesar, Vigenère, XOR, and RC4 with frequency analysis and brute-force modes.',
      tags: 'a:Crypto,c:Tool',
      gh: 'https://github.com/atharvakumbhar',
      demo: '#'
    }
  ],

  /* ── TOOLS ────────────────────────────────────────────
     name : tool name
     cat  : category label shown below
  ──────────────────────────────────────────────────── */
  tools: [
    { name: 'Kali Linux',  cat: 'OS'          },
    { name: 'Metasploit',  cat: 'Exploit'     },
    { name: 'Burp Suite',  cat: 'Web'         },
    { name: 'Nmap',        cat: 'Recon'       },
    { name: 'Wireshark',   cat: 'Network'     },
    { name: 'Ghidra',      cat: 'Reverse Eng' },
    { name: 'OWASP ZAP',   cat: 'Web'         },
    { name: 'Gobuster',    cat: 'Fuzzing'      },
    { name: 'Hashcat',     cat: 'Password'    },
    { name: 'John TRR',    cat: 'Password'    },
    { name: 'Volatility',  cat: 'Forensics'   },
    { name: 'Python',      cat: 'Scripting'   },
    { name: 'Bash',        cat: 'Scripting'   },
    { name: 'Scapy',       cat: 'Network'     },
    { name: 'SQLmap',      cat: 'SQLi'        },
    { name: 'Nikto',       cat: 'Scanner'     },
    { name: 'Docker',      cat: 'Lab Setup'   },
    { name: 'Git',         cat: 'Version Ctrl'}
  ],

  /* ── CERTIFICATIONS ───────────────────────────────────
     status options: "Active" | "Certificate" | "Platform"
  ──────────────────────────────────────────────────── */
  certs: [
    { id: 1, name: 'Certified Ethical Hacker (CEH)',      issuer: 'EC-Council',          year: '2024',    status: 'Active'      },
    { id: 2, name: 'CompTIA Security+',                    issuer: 'CompTIA',             year: '2023',    status: 'Active'      },
    { id: 3, name: 'Google Cybersecurity Professional',    issuer: 'Google / Coursera',   year: '2023',    status: 'Certificate' },
    { id: 4, name: 'TryHackMe — Top 5%',                   issuer: 'TryHackMe Platform',  year: 'Ongoing', status: 'Platform'    },
    { id: 5, name: 'HackTheBox — Pro Hacker',              issuer: 'HackTheBox Platform', year: 'Ongoing', status: 'Platform'    }
  ],

  /* ── SOCIAL / CONTACT LINKS ───────────────────────────
     These power the Contact page buttons.
     label  : button text
     icon   : emoji prefix
     url    : full URL (use "mailto:you@example.com" for email)
     Leave url as '' to hide a button completely.
  ──────────────────────────────────────────────────── */
  socials: [
    { id: 'email',    label: 'Email Me',  icon: '✉',  url: 'mailto:atharva@example.com'            },
    { id: 'linkedin', label: 'LinkedIn',  icon: 'in', url: 'https://linkedin.com/in/atharvakumbhar' },
    { id: 'github',   label: 'GitHub',    icon: '⌥',  url: 'https://github.com/atharvakumbhar'     },
    { id: 'twitter',  label: 'Twitter',   icon: '𝕏',  url: 'https://twitter.com/atharvakumbhar'    },
    { id: 'tryhack',  label: 'TryHackMe', icon: '🏴', url: 'https://tryhackme.com/p/atharvakumbhar' },
    { id: 'htb',      label: 'HackTheBox',icon: '💻', url: ''                                       }
  ]

};
