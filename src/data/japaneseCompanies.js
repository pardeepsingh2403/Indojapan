// Complete Database of Major Japanese Multinational Companies Operating in India
// Useful for students learning Japanese (JLPT N5 to N1) seeking careers in India & Japan

export const companyCategories = [
  { id: 'all', label: 'All Companies', count: 125, icon: 'Building2' },
  { id: 'auto', label: 'Automotive & Components', count: 18, icon: 'Car' },
  { id: 'tech', label: 'Electronics, IT & Tech', count: 21, icon: 'Laptop' },
  { id: 'trading', label: 'Trading Houses (Sogo Shosha)', count: 6, icon: 'Building' },
  { id: 'pharma', label: 'Pharma & Healthcare', count: 6, icon: 'Pill' },
  { id: 'chemicals', label: 'Chemicals & Materials', count: 10, icon: 'FlaskConical' },
  { id: 'engineering', label: 'Engineering & Construction', count: 8, icon: 'HardHat' },
  { id: 'logistics', label: 'Logistics & Shipping', count: 7, icon: 'Truck' },
  { id: 'finance', label: 'Finance & Banking', count: 10, icon: 'Coins' },
  { id: 'manufacturing', label: 'Consumer & Manufacturing', count: 39, icon: 'Factory' }
];

export const japaneseCompanies = [
  // ==========================================
  // 1. AUTOMOTIVE & AUTO COMPONENTS (18)
  // ==========================================
  {
    id: 1,
    category: 'auto',
    categoryName: 'Automotive & Auto Components',
    name: 'Suzuki Motor Corporation',
    japaneseName: 'スズキ株式会社',
    locations: ['Gurugram', 'Manesar', 'Hansalpur', 'Kharkhoda'],
    operations: 'Maruti Suzuki ke through India ki sabse badi car manufacturer; 4 massive manufacturing plants with 50%+ domestic passenger car market share.',
    keyRoles: 'Japanese Translator/Interpreter, Production Engineer, R&D Liaison, Expat Coordinator, Supply Chain Planner',
    minJLPT: 'JLPT N4 – N2'
  },
  {
    id: 2,
    category: 'auto',
    categoryName: 'Automotive & Auto Components',
    name: 'Toyota Motor Corporation',
    japaneseName: 'トヨタ自動車株式会社',
    locations: ['Bidadi (Karnataka)', 'Bidkin (Maharashtra - planned)'],
    operations: 'Toyota Kirloskar Motor ke through Innova, Fortuner, Legender, Hyryder etc. ka world-class production aur EV/hybrid manufacturing.',
    keyRoles: 'Quality Assurance Liaison, Bilingual Engineer, Assembly Line Coordinator, Technical Documentation',
    minJLPT: 'JLPT N4 – N2'
  },
  {
    id: 3,
    category: 'auto',
    categoryName: 'Automotive & Auto Components',
    name: 'Honda Motor Co., Ltd.',
    japaneseName: '本田技研工業株式会社',
    locations: ['Greater Noida', 'Tapukara (Rajasthan)', 'Manesar', 'Narsapura', 'Vithalapur'],
    operations: 'Honda Cars India (passenger cars) aur HMSI (Honda Motorcycle & Scooter India) ke 4+ integrated plants producing Activa, Shine, City, Elevate.',
    keyRoles: 'Plant Japanese Coordinator, Vendor Management, Bilingual Technical Support, Executive Assistant',
    minJLPT: 'JLPT N5 – N3'
  },
  {
    id: 4,
    category: 'auto',
    categoryName: 'Automotive & Auto Components',
    name: 'Denso Corporation',
    japaneseName: '株式会社デンソー',
    locations: ['Gurugram', 'Pune', 'Chennai', 'Manesar'],
    operations: 'Automotive climate control systems (AC), engine electricals, powertrain electronics aur sensors ka leading manufacturing & sales.',
    keyRoles: 'Electrical Design Liaison, Japanese Quality Control Analyst, Procurement Specialist',
    minJLPT: 'JLPT N4 – N3'
  },
  {
    id: 5,
    category: 'auto',
    categoryName: 'Automotive & Auto Components',
    name: 'Aisin Seiki Co., Ltd. (Aisin)',
    japaneseName: 'アイシン精機株式会社',
    locations: ['Bangalore', 'Chennai'],
    operations: 'Automotive transmissions, clutch systems, brake systems aur engine parts ka precision manufacturing.',
    keyRoles: 'Bilingual Mechanical Engineer, Transmission System Specialist, Cross-border Supply Chain',
    minJLPT: 'JLPT N4 – N3'
  },
  {
    id: 6,
    category: 'auto',
    categoryName: 'Automotive & Auto Components',
    name: 'JTEKT Corporation',
    japaneseName: '株式会社ジェイテクト',
    locations: ['Bangalore', 'Gurugram', 'Chennai'],
    operations: 'Automotive power steering systems (Jtekt India / Jtekt Sona Automotive), driveline components aur precision bearings.',
    keyRoles: 'Steering Mechanism QA, Japanese Business Analyst, Vendor Development Executive',
    minJLPT: 'JLPT N5 – N3'
  },
  {
    id: 7,
    category: 'auto',
    categoryName: 'Automotive & Auto Components',
    name: 'NSK Ltd.',
    japaneseName: '日本精工株式会社',
    locations: ['Chennai', 'Gurugram'],
    operations: 'Automotive and industrial precision bearings manufacturing aur sales (Rane NSK Steering Systems / NSK-ABC Bearings).',
    keyRoles: 'Mechanical Application Engineer, Japanese Client Servicing, Technical Sales Specialist',
    minJLPT: 'JLPT N4 – N3'
  },
  {
    id: 8,
    category: 'auto',
    categoryName: 'Automotive & Auto Components',
    name: 'Toyota Tsusho Corporation',
    japaneseName: '豊田通商株式会社',
    locations: ['Mumbai', 'New Delhi', 'Chennai', 'Bengaluru'],
    operations: 'Automotive global trading, steel processing, raw material logistics aur automotive supply chain management.',
    keyRoles: 'International Trade Coordinator, Japanese Logistics Manager, Commercial Executive',
    minJLPT: 'JLPT N3 – N1'
  },
  {
    id: 9,
    category: 'auto',
    categoryName: 'Automotive & Auto Components',
    name: 'Yazaki Corporation',
    japaneseName: '矢崎総業株式会社',
    locations: ['Pune', 'Ahmedabad', 'Bhiwadi', 'Chennai'],
    operations: 'Automotive wiring harnesses, connectors aur instrumentation ka manufacturing (Tata Yazaki joint venture & Yazaki India).',
    keyRoles: 'Harness Design Engineer, Japanese Interpretation Specialist, Assembly Floor Supervisor',
    minJLPT: 'JLPT N5 – N3'
  },
  {
    id: 10,
    category: 'auto',
    categoryName: 'Automotive & Auto Components',
    name: 'Sumitomo Electric Industries',
    japaneseName: '住友電気工業株式会社',
    locations: ['Gurugram', 'Noida', 'Bengaluru', 'Chennai'],
    operations: 'Automotive wiring harnesses, optical fibers, printed circuits, power cables aur electronic materials.',
    keyRoles: 'Optoelectronics Project Lead, Japanese Documentation Specialist, QA Coordinator',
    minJLPT: 'JLPT N4 – N2'
  },
  {
    id: 11,
    category: 'auto',
    categoryName: 'Automotive & Auto Components',
    name: 'Motherson Sumi Systems',
    japaneseName: 'マザーソン・スミ・システムズ',
    locations: ['Noida', 'Chennai', 'Pune', 'Gurugram'],
    operations: 'India-Japan premier joint venture producing automotive mirrors, wiring harnesses, polymer modules aur cockpit assemblies globally.',
    keyRoles: 'Global Liaison Executive, Bilingual SCM Analyst, Plant Operations Coordinator',
    minJLPT: 'JLPT N4 – N2'
  },
  {
    id: 12,
    category: 'auto',
    categoryName: 'Automotive & Auto Components',
    name: 'Stanzen Toyotetsu',
    japaneseName: 'スタンツェン豊田鉄工',
    locations: ['Bangalore', 'Bidadi'],
    operations: 'Automotive body stampings, structural welded parts aur safety chassis components ka manufacturing.',
    keyRoles: 'Press Shop Supervisor, Japanese Quality Auditor, Tooling Engineer',
    minJLPT: 'JLPT N5 – N3'
  },
  {
    id: 13,
    category: 'auto',
    categoryName: 'Automotive & Auto Components',
    name: 'Sunchirin Autoparts',
    japaneseName: 'サンチリンオートパーツ',
    locations: ['Bangalore'],
    operations: 'Air conditioning fluid piping, brake hoses aur automotive fluid handling assemblies manufacturing.',
    keyRoles: 'Fluid Piping QA Inspector, Japanese Technical Assistant, Production Planner',
    minJLPT: 'JLPT N5 – N3'
  },
  {
    id: 14,
    category: 'auto',
    categoryName: 'Automotive & Auto Components',
    name: 'Owari Precision Products',
    japaneseName: '尾張精密',
    locations: ['Bangalore'],
    operations: 'High-precision automotive fasteners, cold forged screws, synchronizer rings aur powertrain fasteners.',
    keyRoles: 'Precision Tooling Engineer, Japanese Documentation Specialist, Export Liaison',
    minJLPT: 'JLPT N5 – N3'
  },
  {
    id: 15,
    category: 'auto',
    categoryName: 'Automotive & Auto Components',
    name: 'JBM Ogihara Automotive',
    japaneseName: 'JBMオギハラ',
    locations: ['Bangalore', 'Faridabad'],
    operations: 'High-tensile sheet metal stamping dies, body-in-white (BIW) modules aur press tooling.',
    keyRoles: 'Tool & Die Specialist, Bilingual Project Manager, CAD/CAM Liaison',
    minJLPT: 'JLPT N4 – N3'
  },
  {
    id: 16,
    category: 'auto',
    categoryName: 'Automotive & Auto Components',
    name: 'Kirloskar Toyoda Textile Machinery',
    japaneseName: 'キルロスカ豊田',
    locations: ['Bangalore', 'Hubballi'],
    operations: 'Textile spinning machinery aur precision automotive transmission components joint venture.',
    keyRoles: 'Machinery Service Engineer, Japanese Technical Translator, Commercial Operations',
    minJLPT: 'JLPT N5 – N3'
  },
  {
    id: 17,
    category: 'auto',
    categoryName: 'Automotive & Auto Components',
    name: 'L & T Komatsu',
    japaneseName: 'L&Tコマツ',
    locations: ['Bangalore'],
    operations: 'Hydraulic excavators aur heavy construction machinery engineering and manufacturing.',
    keyRoles: 'Hydraulics Design Engineer, Japanese Field Service Lead, Maintenance Specialist',
    minJLPT: 'JLPT N4 – N2'
  },
  {
    id: 18,
    category: 'auto',
    categoryName: 'Automotive & Auto Components',
    name: 'Komatsu India',
    japaneseName: 'コマツ',
    locations: ['Chennai (Oragadam)', 'Bangalore', 'Kolkata'],
    operations: 'Large dump trucks, hydraulic mining excavators aur heavy construction equipment manufacturing, sales aur after-sales service.',
    keyRoles: 'Heavy Equipment Engineer, Japanese Service Liaison, Key Account Manager',
    minJLPT: 'JLPT N4 – N2'
  },

  // ==========================================
  // 2. ELECTRONICS, IT & TECHNOLOGY (21)
  // ==========================================
  {
    id: 19,
    category: 'tech',
    categoryName: 'Electronics, IT & Technology',
    name: 'Sony Corporation',
    japaneseName: 'ソニー株式会社',
    locations: ['Mumbai (HQ)', 'New Delhi', 'Bengaluru', 'Pan-India'],
    operations: 'Consumer electronics (Bravia TVs, PlayStation gaming, Alpha mirrorless cameras, high-res audio) sales & nationwide support; India is Sony\'s 4th largest global market.',
    keyRoles: 'Bilingual Product Manager, Japanese Marketing Specialist, Brand Representative, Technical Support Lead',
    minJLPT: 'JLPT N4 – N2'
  },
  {
    id: 20,
    category: 'tech',
    categoryName: 'Electronics, IT & Technology',
    name: 'Sony India Software Centre',
    japaneseName: 'ソニー・ソフトウェア・センター',
    locations: ['Bengaluru'],
    operations: 'Advanced software R&D hub developing operating systems, AI, imaging algorithms, audio DSP, and cloud services for Sony’s global products.',
    keyRoles: 'Bilingual Software Engineer, Japanese Scrum Master, Firmware Developer, Cloud Architect',
    minJLPT: 'JLPT N3 – N1'
  },
  {
    id: 21,
    category: 'tech',
    categoryName: 'Electronics, IT & Technology',
    name: 'Panasonic Corporation',
    japaneseName: 'パナソニック株式会社',
    locations: ['Vadodara', 'Mumbai', 'Gurugram', 'Jhajjar (Technopark)'],
    operations: 'Home appliances, energy storage, smart automation, electric wiring devices; operates 7 major manufacturing facilities in India.',
    keyRoles: 'Appliance R&D Engineer, Japanese Supply Chain Planner, Energy Systems Coordinator',
    minJLPT: 'JLPT N4 – N2'
  },
  {
    id: 22,
    category: 'tech',
    categoryName: 'Electronics, IT & Technology',
    name: 'Hitachi, Ltd.',
    japaneseName: '株式会社日立製作所',
    locations: ['Mumbai', 'Bengaluru', 'Vadodara', 'Gandhinagar', 'New Delhi'],
    operations: 'Power grids, rail rolling stock (Hitachi Rail), digital enterprise services, payment systems, healthcare; ~28 group companies across India.',
    keyRoles: 'Railway Systems Coordinator, Japanese Enterprise Solution Consultant, Smart City Project Manager',
    minJLPT: 'JLPT N3 – N1'
  },
  {
    id: 23,
    category: 'tech',
    categoryName: 'Electronics, IT & Technology',
    name: 'Fujitsu Limited',
    japaneseName: '富士通株式会社',
    locations: ['Pune', 'Bengaluru', 'Noida', 'Hyderabad', 'Chennai'],
    operations: 'Global enterprise IT services, cloud consulting, high-performance computing, R&D at Fujitsu Research of India.',
    keyRoles: 'Bilingual Cloud Architect, Japanese Service Delivery Manager, IT Translator/Bridge SE',
    minJLPT: 'JLPT N3 – N1'
  },
  {
    id: 24,
    category: 'tech',
    categoryName: 'Electronics, IT & Technology',
    name: 'NEC Corporation',
    japaneseName: '日本電気株式会社',
    locations: ['New Delhi', 'Mumbai', 'Noida', 'Bengaluru'],
    operations: 'Smart cities infrastructure, Aadhaar biometrics processing, submarine optical cable systems, 5G Open RAN telecom networks.',
    keyRoles: 'Biometric Systems Analyst, Japanese Telecom Project Coordinator, Network Delivery Engineer',
    minJLPT: 'JLPT N4 – N2'
  },
  {
    id: 25,
    category: 'tech',
    categoryName: 'Electronics, IT & Technology',
    name: 'NTT Corporation (NTT DATA / NTT Ltd.)',
    japaneseName: '日本電信電話株式会社',
    locations: ['Mumbai', 'Bengaluru', 'Chennai', 'Noida'],
    operations: 'India\'s largest hyperscale data center provider (22+ live operational facilities), global telecom, IT security & managed cloud services.',
    keyRoles: 'Data Center Operations Lead, Japanese Client Liaison, Enterprise Network Architect',
    minJLPT: 'JLPT N3 – N2'
  },
  {
    id: 26,
    category: 'tech',
    categoryName: 'Electronics, IT & Technology',
    name: 'Sharp Corporation',
    japaneseName: 'シャープ株式会社',
    locations: ['Pune', 'Mumbai', 'New Delhi'],
    operations: 'Consumer electronics, Plasmacluster air purifiers, multi-function printers, commercial digital displays and solar solutions sales.',
    keyRoles: 'Commercial Display Sales Specialist, Technical Training Officer, Japanese Liaison Specialist',
    minJLPT: 'JLPT N5 – N3'
  },
  {
    id: 27,
    category: 'tech',
    categoryName: 'Electronics, IT & Technology',
    name: 'Kyocera Corporation',
    japaneseName: '京セラ株式会社',
    locations: ['Bangalore', 'Chennai', 'Gurugram'],
    operations: 'Fine ceramic components, semiconductor packaging, cutting tools, solar power products aur electronic components.',
    keyRoles: 'Ceramics Applications Engineer, Japanese Key Account Specialist, Product Support Executive',
    minJLPT: 'JLPT N4 – N3'
  },
  {
    id: 28,
    category: 'tech',
    categoryName: 'Electronics, IT & Technology',
    name: 'Epson (Seiko Epson)',
    japaneseName: 'セイコーエプソン',
    locations: ['Bangalore', 'Mumbai', 'Delhi'],
    operations: 'EcoTank inkjet printers, large format photographic printers, business projectors, robotic arms and timing devices.',
    keyRoles: 'Printer Hardware Engineer, Japanese Corporate Communications, Regional Sales Lead',
    minJLPT: 'JLPT N5 – N3'
  },
  {
    id: 29,
    category: 'tech',
    categoryName: 'Electronics, IT & Technology',
    name: 'Ricoh Company, Ltd.',
    japaneseName: '株式会社リコー',
    locations: ['Mumbai', 'Gurugram', 'Bengaluru'],
    operations: 'Office digital printing equipment, enterprise document management software, interactive whiteboards aur managed IT services.',
    keyRoles: 'Document Solutions Specialist, Japanese Operations Coordinator, Commercial Account Manager',
    minJLPT: 'JLPT N5 – N3'
  },
  {
    id: 30,
    category: 'tech',
    categoryName: 'Electronics, IT & Technology',
    name: 'Canon Inc.',
    japaneseName: 'キヤノン株式会社',
    locations: ['Mumbai', 'New Delhi', 'Gurugram', 'Bengaluru'],
    operations: 'EOS digital cameras, cinema lenses, enterprise imageRUNNER printers, medical imaging CT/MRI systems.',
    keyRoles: 'Medical Imaging Specialist, Japanese Customer Experience Executive, Optical Solutions Liaison',
    minJLPT: 'JLPT N4 – N3'
  },
  {
    id: 31,
    category: 'tech',
    categoryName: 'Electronics, IT & Technology',
    name: 'Olympus Corporation',
    japaneseName: 'オリンパス株式会社',
    locations: ['Mumbai', 'Gurugram', 'Bengaluru'],
    operations: 'Medical gastrointestinal endoscopes, surgical visualization systems, scientific laser microscopes and industrial non-destructive testing.',
    keyRoles: 'Endoscopy Technical Specialist, Japanese Regulatory Affairs Associate, Service Engineer',
    minJLPT: 'JLPT N4 – N2'
  },
  {
    id: 32,
    category: 'tech',
    categoryName: 'Electronics, IT & Technology',
    name: 'Yokogawa Electric Corporation',
    japaneseName: '横河電機株式会社',
    locations: ['Bangalore', 'Mumbai', 'Vadodara'],
    operations: 'Industrial automation, distributed control systems (DCS), safety instrumentation for oil refineries, chemical plants and energy utilities.',
    keyRoles: 'Automation DCS Project Engineer, Japanese Client Delivery Manager, SCADA Specialist',
    minJLPT: 'JLPT N4 – N2'
  },
  {
    id: 33,
    category: 'tech',
    categoryName: 'Electronics, IT & Technology',
    name: 'FANUC Corporation',
    japaneseName: 'ファナック株式会社',
    locations: ['Bangalore', 'Pune', 'Gurugram', 'Manesar'],
    operations: 'World leader in factory automation, computer numerical controls (CNC), industrial articulated robotics aur RoboDrill machining centers.',
    keyRoles: 'Robotics Application Engineer, Japanese CNC Programming Specialist, Service Executive',
    minJLPT: 'JLPT N4 – N2'
  },
  {
    id: 34,
    category: 'tech',
    categoryName: 'Electronics, IT & Technology',
    name: 'Makino Milling Machine',
    japaneseName: '牧野フライス製作所',
    locations: ['Bangalore', 'Pune'],
    operations: 'High-speed horizontal & vertical machining centers, EDM wire-cut systems for automotive and aerospace tooling.',
    keyRoles: 'Machining Application Specialist, Japanese Tooling Liaison, Technical Support Engineer',
    minJLPT: 'JLPT N5 – N3'
  },
  {
    id: 35,
    category: 'tech',
    categoryName: 'Electronics, IT & Technology',
    name: 'Makita Corporation',
    japaneseName: '株式会社マキタ',
    locations: ['Bangalore', 'Mumbai', 'Delhi'],
    operations: 'Professional cordless power tools, construction equipment, outdoor power garden tools manufacturing & sales.',
    keyRoles: 'Power Tool Product Specialist, Japanese Vendor Coordinator, After-sales Service Lead',
    minJLPT: 'JLPT N5 – N3'
  },
  {
    id: 36,
    category: 'tech',
    categoryName: 'Electronics, IT & Technology',
    name: 'Mitutoyo Corporation',
    japaneseName: '株式会社ミツトヨ',
    locations: ['Bangalore', 'New Delhi', 'Pune'],
    operations: 'Coordinate measuring machines (CMM), micrometers, calipers, optical vision measuring systems for aerospace/automotive quality control.',
    keyRoles: 'Metrology Applications Engineer, Quality Assurance Specialist, Japanese Technical Translator',
    minJLPT: 'JLPT N5 – N3'
  },
  {
    id: 37,
    category: 'tech',
    categoryName: 'Electronics, IT & Technology',
    name: 'Omron Corporation',
    japaneseName: 'オムロン株式会社',
    locations: ['Bangalore', 'Gurugram', 'Mumbai'],
    operations: 'Industrial factory sensors, safety relays, PLC automation and home digital blood pressure monitors & nebulizers.',
    keyRoles: 'Factory Automation Field Specialist, Japanese Healthcare Liaison, Product Support Engineer',
    minJLPT: 'JLPT N5 – N3'
  },
  {
    id: 38,
    category: 'tech',
    categoryName: 'Electronics, IT & Technology',
    name: 'Rakuten Group, Inc.',
    japaneseName: '楽天グループ株式会社',
    locations: ['Bengaluru'],
    operations: 'Rakuten India Tech Hub (largest technology center outside Japan) driving e-commerce, cloud platforms, fintech, AI and Rakuten Symphony telecom tech.',
    keyRoles: 'Bridge Software Engineer (BSE), Japanese Data Scientist, Bilingual Agile Coach, Cloud DevOps',
    minJLPT: 'JLPT N3 – N1'
  },
  {
    id: 39,
    category: 'tech',
    categoryName: 'Electronics, IT & Technology',
    name: 'SoftBank Group Corp.',
    japaneseName: 'ソフトバンクグループ株式会社',
    locations: ['Mumbai', 'Bengaluru'],
    operations: 'Massive venture capital & tech investment (SoftBank Vision Fund) in India\'s leading unicorn startups; $13.7B+ investment portfolio.',
    keyRoles: 'Venture Investment Associate, Japanese Financial Analyst, Portfolio Governance Coordinator',
    minJLPT: 'JLPT N3 – N1'
  },

  // ==========================================
  // 3. TRADING HOUSES (SOGO SHOSHA) (6)
  // ==========================================
  {
    id: 40,
    category: 'trading',
    categoryName: 'Trading Houses (Sogo Shosha)',
    name: 'Mitsubishi Corporation',
    japaneseName: '三菱商事株式会社',
    locations: ['New Delhi', 'Mumbai', 'Chennai'],
    operations: 'Comprehensive global trading, infrastructure investment, urban mobility, green energy and mineral resources; active in India for over 9 decades.',
    keyRoles: 'Bilingual Business Development Manager, International Trade Executive, Investment Associate',
    minJLPT: 'JLPT N3 – N1'
  },
  {
    id: 41,
    category: 'trading',
    categoryName: 'Trading Houses (Sogo Shosha)',
    name: 'Mitsui & Co., Ltd.',
    japaneseName: '三井物産株式会社',
    locations: ['Mumbai', 'New Delhi', 'Bengaluru'],
    operations: 'Trading & equity investments in steel, chemicals, green ammonia, renewable energy, healthcare infrastructure and pharmaceuticals.',
    keyRoles: 'Commodities Trading Analyst, Japanese Liaison Officer, Commercial Operations Specialist',
    minJLPT: 'JLPT N3 – N1'
  },
  {
    id: 42,
    category: 'trading',
    categoryName: 'Trading Houses (Sogo Shosha)',
    name: 'Itochu Corporation',
    japaneseName: '伊藤忠商事株式会社',
    locations: ['Mumbai', 'New Delhi'],
    operations: 'Textiles, machinery trade, energy & chemicals; constructed and operates cryogenic ammonia storage terminal at Port Pipavav.',
    keyRoles: 'Energy Trading Specialist, Japanese Supply Chain Planner, Trade Compliance Officer',
    minJLPT: 'JLPT N3 – N1'
  },
  {
    id: 43,
    category: 'trading',
    categoryName: 'Trading Houses (Sogo Shosha)',
    name: 'Sumitomo Corporation',
    japaneseName: '住友商事株式会社',
    locations: ['New Delhi', 'Mumbai', 'Chennai', 'Bengaluru'],
    operations: 'Industrial park development (ORIGINS Chennai / ORIGINS Ahmedabad), tubular steel products, mobility, renewable power and chemicals.',
    keyRoles: 'Industrial Park Operations Manager, Japanese Trade Coordinator, Project Finance Analyst',
    minJLPT: 'JLPT N3 – N1'
  },
  {
    id: 44,
    category: 'trading',
    categoryName: 'Trading Houses (Sogo Shosha)',
    name: 'Marubeni Corporation',
    japaneseName: '丸紅株式会社',
    locations: ['Mumbai', 'New Delhi'],
    operations: 'Independent power producer (IPP) projects, industrial infrastructure, chemicals, agro-products and metal trading.',
    keyRoles: 'Power Infrastructure Project Lead, Japanese Commodities Trader, Legal Compliance Specialist',
    minJLPT: 'JLPT N3 – N1'
  },
  {
    id: 45,
    category: 'trading',
    categoryName: 'Trading Houses (Sogo Shosha)',
    name: 'Sojitz Corporation',
    japaneseName: '双日株式会社',
    locations: ['Mumbai', 'New Delhi', 'Chennai'],
    operations: 'Trading and investment in automotive supply chain, synthetic resins, chemical plants, mining, and Western Dedicated Freight Corridor (DFC).',
    keyRoles: 'Freight Corridor Project Liaison, Japanese Commercial Analyst, Chemical Trading Specialist',
    minJLPT: 'JLPT N3 – N1'
  },

  // ==========================================
  // 4. PHARMACEUTICALS & HEALTHCARE (6)
  // ==========================================
  {
    id: 46,
    category: 'pharma',
    categoryName: 'Pharmaceuticals & Healthcare',
    name: 'Takeda Pharmaceutical',
    japaneseName: '武田薬品工業株式会社',
    locations: ['Mumbai (Vashi)', 'Bengaluru', 'Gurugram'],
    operations: 'Active Pharmaceutical Ingredients (API) manufacturing (Zydus Takeda JV) aur Global Capability Center (GCC) in Bengaluru for clinical data.',
    keyRoles: 'Clinical Data Manager, Japanese Regulatory Associate, Quality Assurance Chemist',
    minJLPT: 'JLPT N4 – N2'
  },
  {
    id: 47,
    category: 'pharma',
    categoryName: 'Pharmaceuticals & Healthcare',
    name: 'Otsuka Pharmaceutical',
    japaneseName: '大塚製薬株式会社',
    locations: ['Mumbai', 'Ahmedabad', 'Hyderabad'],
    operations: 'Intravenous infusion therapies, clinical nutrition, pharmaceutical APIs aur nutraceuticals (Pocari Sweat, SOYJOY).',
    keyRoles: 'Pharma QC Specialist, Japanese Clinical Affairs Lead, Export Compliance Officer',
    minJLPT: 'JLPT N4 – N2'
  },
  {
    id: 48,
    category: 'pharma',
    categoryName: 'Pharmaceuticals & Healthcare',
    name: 'Eisai Co., Ltd.',
    japaneseName: 'エーザイ株式会社',
    locations: ['Visakhapatnam (Pharma City)', 'Mumbai'],
    operations: 'Large-scale pharmaceutical manufacturing plant, Global Capability Centre; launched breakthrough Alzheimer’s disease therapy Leqembi.',
    keyRoles: 'Pharmaceutical Research Chemist, Japanese Medical Writer, Global Regulatory Auditor',
    minJLPT: 'JLPT N3 – N1'
  },
  {
    id: 49,
    category: 'pharma',
    categoryName: 'Pharmaceuticals & Healthcare',
    name: 'Astellas Pharma',
    japaneseName: 'アステラス製薬株式会社',
    locations: ['Mumbai', 'Bengaluru'],
    operations: 'Innovative prescription pharmaceutical therapies in oncology, urology and immunology; Capability Centre in Bengaluru.',
    keyRoles: 'Clinical Operations Specialist, Japanese Medical Science Liaison, Regulatory Affairs Lead',
    minJLPT: 'JLPT N3 – N2'
  },
  {
    id: 50,
    category: 'pharma',
    categoryName: 'Pharmaceuticals & Healthcare',
    name: 'Daiichi Sankyo',
    japaneseName: '第一三共株式会社',
    locations: ['Gurugram', 'Mumbai'],
    operations: 'Cardiovascular, oncology, antibody-drug conjugates (ADCs) research, clinical trial monitoring and intellectual property coordination.',
    keyRoles: 'Oncology Data Analyst, Japanese Pharmacovigilance Associate, Research Coordinator',
    minJLPT: 'JLPT N4 – N2'
  },
  {
    id: 51,
    category: 'pharma',
    categoryName: 'Pharmaceuticals & Healthcare',
    name: 'Shimadzu Corporation',
    japaneseName: '株式会社島津製作所',
    locations: ['Mumbai', 'Bangalore', 'Delhi', 'Hyderabad'],
    operations: 'Advanced analytical instruments (HPLC, mass spectrometers), medical diagnostic X-ray imaging systems and environmental testing devices.',
    keyRoles: 'Chromatography Application Specialist, Japanese Instrument Support Engineer, QA Analyst',
    minJLPT: 'JLPT N4 – N3'
  },

  // ==========================================
  // 5. CHEMICALS & MATERIALS (10)
  // ==========================================
  {
    id: 52,
    category: 'chemicals',
    categoryName: 'Chemicals & Materials',
    name: 'Mitsubishi Chemical',
    japaneseName: '三菱ケミカル株式会社',
    locations: ['Gurugram', 'Mumbai', 'Neemrana', 'Pune'],
    operations: 'High-performance polymers, specialty chemical coatings, optical polyester films, industrial gases and battery materials.',
    keyRoles: 'Polymer Application Chemist, Japanese Supply Chain Specialist, Technical Sales Executive',
    minJLPT: 'JLPT N4 – N2'
  },
  {
    id: 53,
    category: 'chemicals',
    categoryName: 'Chemicals & Materials',
    name: 'Toray Industries',
    japaneseName: '東レ株式会社',
    locations: ['Gurgaon', 'Chennai', 'Sri City', 'Pune'],
    operations: 'Engineering plastics, carbon fiber composites, synthetic fibers, water treatment membranes; new PPS automotive resin plant in Andhra Pradesh.',
    keyRoles: 'Membrane Filtration Engineer, Japanese Plant Coordinator, Quality Auditor',
    minJLPT: 'JLPT N4 – N2'
  },
  {
    id: 54,
    category: 'chemicals',
    categoryName: 'Chemicals & Materials',
    name: 'Asahi Kasei',
    japaneseName: '旭化成株式会社',
    locations: ['Mumbai', 'Bengaluru', 'Gurugram'],
    operations: 'Regenerated cellulose cupro fibers (Bemberg), lithium-ion battery separators, electronic plastics and microelectronics.',
    keyRoles: 'Textile Technical Consultant, Battery Material Liaison, Japanese Sales Executive',
    minJLPT: 'JLPT N4 – N2'
  },
  {
    id: 55,
    category: 'chemicals',
    categoryName: 'Chemicals & Materials',
    name: 'Sumitomo Chemical',
    japaneseName: '住友化学株式会社',
    locations: ['Mumbai', 'Bhavnagar (Gujarat)', 'Tarapur'],
    operations: 'Crop protection chemicals, insecticides, herbicides, pharmaceuticals (Sumitomo Chemical India Ltd - public listed company).',
    keyRoles: 'Agrochemical Product Manager, Japanese Formulation Specialist, Export Regulatory Officer',
    minJLPT: 'JLPT N4 – N3'
  },
  {
    id: 56,
    category: 'chemicals',
    categoryName: 'Chemicals & Materials',
    name: 'Shin-Etsu Chemical',
    japaneseName: '信越化学工業株式会社',
    locations: ['Mumbai', 'New Delhi'],
    operations: 'World leader in semiconductor silicon wafers, PVC resins, silicone fluids and synthetic quartz.',
    keyRoles: 'Semiconductor Material Specialist, Japanese Industrial Sales Lead, Trade Operations',
    minJLPT: 'JLPT N4 – N2'
  },
  {
    id: 57,
    category: 'chemicals',
    categoryName: 'Chemicals & Materials',
    name: 'DIC Corporation',
    japaneseName: 'DIC株式会社',
    locations: ['Mumbai', 'Gurugram', 'Noida', 'Kolkata'],
    operations: 'Printing inks for packaging & publications, organic pigments, synthetic resins and performance additives (DIC India Ltd).',
    keyRoles: 'Packaging Inks Technical Specialist, Japanese Plant Operations Lead, QC Chemist',
    minJLPT: 'JLPT N5 – N3'
  },
  {
    id: 58,
    category: 'chemicals',
    categoryName: 'Chemicals & Materials',
    name: 'Teijin Limited',
    japaneseName: '帝人株式会社',
    locations: ['Mumbai', 'New Delhi'],
    operations: 'High-strength aramid fibers (Twaron, Technora), carbon fiber composites, healthcare products and engineering plastics.',
    keyRoles: 'High-Performance Fiber Consultant, Japanese Commercial Lead, Technical Account Manager',
    minJLPT: 'JLPT N4 – N2'
  },
  {
    id: 59,
    category: 'chemicals',
    categoryName: 'Chemicals & Materials',
    name: 'Kuraray Co., Ltd.',
    japaneseName: '株式会社クラレ',
    locations: ['Mumbai', 'New Delhi'],
    operations: 'Specialty synthetic resins, EVAL barrier polymers, polyvinyl alcohol (PVA) fibers, dental materials and synthetic leather.',
    keyRoles: 'Barrier Resin Application Engineer, Japanese Corporate Sales Executive, Technical Liaison',
    minJLPT: 'JLPT N4 – N3'
  },
  {
    id: 60,
    category: 'chemicals',
    categoryName: 'Chemicals & Materials',
    name: 'Nippon Paint',
    japaneseName: '日本ペイント株式会社',
    locations: ['Chennai', 'Mumbai', 'New Delhi', 'Pune'],
    operations: 'Automotive OEM paints, industrial coatings, architectural decorative paints and coil coatings (Nippon Paint India).',
    keyRoles: 'Automotive Paint Color Specialist, Japanese Technical Servicing Lead, Plant QC Supervisor',
    minJLPT: 'JLPT N5 – N3'
  },
  {
    id: 61,
    category: 'chemicals',
    categoryName: 'Chemicals & Materials',
    name: 'YKK Corporation',
    japaneseName: 'YKK株式会社',
    locations: ['Bawal (Haryana)', 'Bengaluru', 'Mumbai', 'Multiple'],
    operations: 'World\'s undisputed leader in zippers, metal fasteners, snaps, buttons and architectural aluminum windows.',
    keyRoles: 'Fastener Application Specialist, Japanese Operations Coordinator, Quality Control Inspector',
    minJLPT: 'JLPT N5 – N3'
  },

  // ==========================================
  // 6. ENGINEERING & CONSTRUCTION (8)
  // ==========================================
  {
    id: 62,
    category: 'engineering',
    categoryName: 'Engineering & Construction',
    name: 'Shimizu Corporation',
    japaneseName: '清水建設株式会社',
    locations: ['Bangalore', 'Gurugram', 'Ahmedabad', 'Chennai'],
    operations: 'General contracting, structural engineering, construction of Japanese manufacturing plants, cleanrooms, and tech parks in India.',
    keyRoles: 'Bilingual Civil Site Engineer, Japanese Project Scheduler, BIM Modeler, MEP Coordinator',
    minJLPT: 'JLPT N4 – N2'
  },
  {
    id: 63,
    category: 'engineering',
    categoryName: 'Engineering & Construction',
    name: 'Taikisha Ltd.',
    japaneseName: '株式会社大気社',
    locations: ['Gurugram', 'Pune', 'Bengaluru'],
    operations: 'Automotive paint finishing spray booths, cleanrooms for semiconductor/pharma, and industrial HVAC environmental systems.',
    keyRoles: 'HVAC Design Engineer, Japanese Paint Shop Liaison, Field Commissioning Specialist',
    minJLPT: 'JLPT N4 – N3'
  },
  {
    id: 64,
    category: 'engineering',
    categoryName: 'Engineering & Construction',
    name: 'Toyo Engineering Corporation',
    japaneseName: '東洋エンジニアリング株式会社',
    locations: ['Mumbai (Kanjurmarg)', 'Bengaluru'],
    operations: 'EPC (engineering, procurement, construction) for petrochemical plants, LNG terminals, fertilizer complexes; large Global Capability Center in Bengaluru.',
    keyRoles: 'Plant Piping Engineer, Japanese EPC Project Coordinator, Contract Administrator',
    minJLPT: 'JLPT N3 – N1'
  },
  {
    id: 65,
    category: 'engineering',
    categoryName: 'Engineering & Construction',
    name: 'MODEC, Inc.',
    japaneseName: '三井海洋開発',
    locations: ['Bengaluru'],
    operations: 'Offshore engineering, design and construction of FPSO (Floating Production Storage & Offloading) oil and gas vessels; joint GCC with Toyo Engineering.',
    keyRoles: 'Offshore Structural Engineer, Japanese Marine Project Coordinator, Instrumentation Designer',
    minJLPT: 'JLPT N3 – N1'
  },
  {
    id: 66,
    category: 'engineering',
    categoryName: 'Engineering & Construction',
    name: 'JGC Corporation (JGC India)',
    japaneseName: '日揮株式会社',
    locations: ['Mumbai', 'New Delhi', 'Chennai'],
    operations: 'International mega-engineering for oil & gas processing, LNG liquefaction, refinery revamping, and green hydrogen plants.',
    keyRoles: 'Process Simulation Engineer, Japanese Vendor Liaison, Project Cost Controller',
    minJLPT: 'JLPT N3 – N1'
  },
  {
    id: 67,
    category: 'engineering',
    categoryName: 'Engineering & Construction',
    name: 'Chiyoda Corporation',
    japaneseName: '千代田化工建設株式会社',
    locations: ['Mumbai'],
    operations: 'Global engineering and construction for LNG terminals, clean energy, carbon recycling, and pharmaceutical engineering.',
    keyRoles: 'Chemical Process Engineer, Japanese Client Representative, Engineering Quality Auditor',
    minJLPT: 'JLPT N3 – N1'
  },
  {
    id: 68,
    category: 'engineering',
    categoryName: 'Engineering & Construction',
    name: 'Kawasaki Heavy Industries',
    japaneseName: '川崎重工業株式会社',
    locations: ['Pune (Chakan)', 'New Delhi'],
    operations: 'High-performance Ninja/Z motorcycles assembly, industrial hydraulic machinery, gas turbines and metro rolling stock.',
    keyRoles: 'Motorcycle Assembly QA, Japanese Gas Turbine Field Engineer, Procurement Executive',
    minJLPT: 'JLPT N4 – N2'
  },
  {
    id: 69,
    category: 'engineering',
    categoryName: 'Engineering & Construction',
    name: 'Mitsubishi Heavy Industries',
    japaneseName: '三菱重工業株式会社',
    locations: ['Mumbai', 'New Delhi', 'Bengaluru'],
    operations: 'Thermal & nuclear power plant machinery, industrial gas turbines, turbochargers, aerospace structures, defense equipment.',
    keyRoles: 'Turbomachinery Engineer, Japanese Government Project Liaison, Technical Translator',
    minJLPT: 'JLPT N3 – N1'
  },

  // ==========================================
  // 7. LOGISTICS & SHIPPING (7)
  // ==========================================
  {
    id: 70,
    category: 'logistics',
    categoryName: 'Logistics & Shipping',
    name: 'Nippon Express (NX Group)',
    japaneseName: '日本通運株式会社',
    locations: ['Mumbai', 'Chennai', 'Delhi', 'Bangalore', 'Neemrana'],
    operations: 'Global air & ocean freight forwarding, automotive parts milk-run logistics, bonded warehousing, and heavy transport.',
    keyRoles: 'Freight Operations Lead, Japanese Accounts Coordinator, Customs Clearance Specialist',
    minJLPT: 'JLPT N4 – N2'
  },
  {
    id: 71,
    category: 'logistics',
    categoryName: 'Logistics & Shipping',
    name: 'Kintetsu World Express (KWE)',
    japaneseName: '近鉄エクスプレス',
    locations: ['Mumbai', 'Chennai', 'Bangalore', 'Gurugram'],
    operations: 'International air freight forwarding, ocean cargo consolidation, temperature-controlled pharma logistics.',
    keyRoles: 'Air Cargo Specialist, Japanese Client Liaison, Supply Chain Analyst',
    minJLPT: 'JLPT N4 – N3'
  },
  {
    id: 72,
    category: 'logistics',
    categoryName: 'Logistics & Shipping',
    name: 'Yusen Logistics',
    japaneseName: '郵船ロジスティクス',
    locations: ['Mumbai', 'Chennai', 'Delhi', 'Kolkata'],
    operations: 'End-to-end supply chain logistics, contract warehousing, automotive logistics hubs across Indian industrial corridors.',
    keyRoles: 'Contract Logistics Manager, Japanese Key Account Executive, Warehouse Supervisor',
    minJLPT: 'JLPT N4 – N3'
  },
  {
    id: 73,
    category: 'logistics',
    categoryName: 'Logistics & Shipping',
    name: 'Nippon Yusen (NYK Line)',
    japaneseName: '日本郵船株式会社',
    locations: ['Mumbai', 'Chennai', 'New Delhi'],
    operations: 'Container ocean liners, roll-on/roll-off (Ro-Ro) car carriers, bulk mineral vessels, energy transport.',
    keyRoles: 'Vessel Operations Coordinator, Japanese Shipping Coordinator, Maritime Trade Specialist',
    minJLPT: 'JLPT N3 – N2'
  },
  {
    id: 74,
    category: 'logistics',
    categoryName: 'Logistics & Shipping',
    name: 'Mitsui O.S.K. Lines (MOL)',
    japaneseName: '商船三井',
    locations: ['Mumbai', 'New Delhi', 'Kolkata'],
    operations: 'Global ocean shipping fleet: LNG carriers, dry bulkers, automotive car carriers, and multimodal inland transport.',
    keyRoles: 'Marine Logistics Planner, Japanese Line Manager, Port Operations Specialist',
    minJLPT: 'JLPT N3 – N2'
  },
  {
    id: 75,
    category: 'logistics',
    categoryName: 'Logistics & Shipping',
    name: 'Kawasaki Kisen Kaisha (K Line)',
    japaneseName: '川崎汽船',
    locations: ['Mumbai', 'Chennai'],
    operations: 'Integrated maritime transport: car carriers, thermal coal vessels, offshore support vessels, logistics hubs.',
    keyRoles: 'Shipping Documentation Analyst, Japanese Commercial Coordinator, Port Agent',
    minJLPT: 'JLPT N4 – N2'
  },
  {
    id: 76,
    category: 'logistics',
    categoryName: 'Logistics & Shipping',
    name: 'Sankyu Inc.',
    japaneseName: '山九株式会社',
    locations: ['Gurugram', 'Chennai'],
    operations: 'Specialized industrial plant installation logistics, heavy equipment erection, factory operational support.',
    keyRoles: 'Heavy Rigging Project Engineer, Japanese Plant Installation Liaison, Safety Officer',
    minJLPT: 'JLPT N4 – N3'
  },

  // ==========================================
  // 8. FINANCE & INSURANCE (10)
  // ==========================================
  {
    id: 77,
    category: 'finance',
    categoryName: 'Finance & Banking',
    name: 'MUFG Bank (Mitsubishi UFJ Financial Group)',
    japaneseName: '三菱UFJフィナンシャル・グループ',
    locations: ['Mumbai', 'New Delhi', 'Chennai', 'Neemrana', 'Bengaluru'],
    operations: 'Japan\'s largest banking institution; first India branch opened in 1953; corporate banking, project financing, syndication.',
    keyRoles: 'Bilingual Corporate Banker, Japanese Credit Analyst, Relationship Manager for Japanese MNCs',
    minJLPT: 'JLPT N3 – N1'
  },
  {
    id: 78,
    category: 'finance',
    categoryName: 'Finance & Banking',
    name: 'SMBC (Sumitomo Mitsui Banking Corporation)',
    japaneseName: '三井住友銀行',
    locations: ['New Delhi', 'Mumbai', 'Chennai', 'Bengaluru'],
    operations: 'Major international banking group converting to wholly-owned subsidiary; specialized in financing infrastructure and Indo-Japan FDI.',
    keyRoles: 'Project Finance Associate, Japanese Treasury Specialist, Compliance Officer',
    minJLPT: 'JLPT N3 – N1'
  },
  {
    id: 79,
    category: 'finance',
    categoryName: 'Finance & Banking',
    name: 'Mizuho Financial Group',
    japaneseName: 'みずほフィナンシャルグループ',
    locations: ['Mumbai', 'Navi Mumbai', 'Pune', 'New Delhi'],
    operations: 'Corporate and investment banking; operates major Global Capability Center (GCC) in Pune for global financial analytics & technology.',
    keyRoles: 'Financial Systems Engineer, Japanese Risk Management Analyst, Settlement Specialist',
    minJLPT: 'JLPT N3 – N1'
  },
  {
    id: 80,
    category: 'finance',
    categoryName: 'Finance & Banking',
    name: 'Nomura Holdings',
    japaneseName: '野村ホールディングス',
    locations: ['Mumbai (Powai)'],
    operations: 'Global investment banking, wealth management, securities; massive Nomura Services India hub in Powai powering global operations.',
    keyRoles: 'Equity Research Associate, Japanese Quantitative Analyst, Investment Banking Liaison',
    minJLPT: 'JLPT N3 – N1'
  },
  {
    id: 81,
    category: 'finance',
    categoryName: 'Finance & Banking',
    name: 'Daiwa Securities Group',
    japaneseName: '大和証券グループ',
    locations: ['Mumbai'],
    operations: 'Investment banking, cross-border M&A advisory between Indian and Japanese companies, capital markets partnership with Ambit Group.',
    keyRoles: 'M&A Advisory Analyst, Japanese Business Development Specialist, Corporate Finance Lead',
    minJLPT: 'JLPT N3 – N1'
  },
  {
    id: 82,
    category: 'finance',
    categoryName: 'Finance & Banking',
    name: 'Nippon Life Insurance',
    japaneseName: '日本生命保険',
    locations: ['Mumbai'],
    operations: 'Mutual funds, asset management (Nippon India Mutual Fund / Nippon Life India AMC) aur life insurance partnerships in India.',
    keyRoles: 'Investment Portfolio Analyst, Japanese Corporate Governance Manager, Risk Auditor',
    minJLPT: 'JLPT N3 – N1'
  },
  {
    id: 83,
    category: 'finance',
    categoryName: 'Finance & Banking',
    name: 'Tokio Marine Holdings',
    japaneseName: '東京海上日動',
    locations: ['Mumbai', 'New Delhi', 'Pan-India'],
    operations: 'General insurance services through leading joint venture IFFCO-Tokio General Insurance Co. Ltd.',
    keyRoles: 'Underwriting Specialist, Japanese Corporate Claims Manager, Commercial Risk Lead',
    minJLPT: 'JLPT N4 – N2'
  },
  {
    id: 84,
    category: 'finance',
    categoryName: 'Finance & Banking',
    name: 'Sompo Holdings',
    japaneseName: 'SOMPOホールディングス',
    locations: ['Mumbai', 'Pan-India'],
    operations: 'General insurance and commercial risk coverage through Universal Sompo General Insurance Co. Ltd.',
    keyRoles: 'Reinsurance Analyst, Japanese Client Servicing Executive, Risk Surveyor',
    minJLPT: 'JLPT N4 – N2'
  },
  {
    id: 85,
    category: 'finance',
    categoryName: 'Finance & Banking',
    name: 'Japan Post Insurance',
    japaneseName: 'かんぽ生命',
    locations: ['Mumbai'],
    operations: 'Strategic life insurance reinsurance partnerships, capital investment in Indian financial markets.',
    keyRoles: 'Actuarial Support Specialist, Japanese Strategic Alliance Coordinator, Compliance Lead',
    minJLPT: 'JLPT N3 – N1'
  },
  {
    id: 86,
    category: 'finance',
    categoryName: 'Finance & Banking',
    name: 'ORIX Corporation',
    japaneseName: 'オリックス株式会社',
    locations: ['Mumbai', 'Chennai', 'Bengaluru'],
    operations: 'Automobile leasing, commercial equipment leasing, real estate development, and renewable clean energy assets.',
    keyRoles: 'Fleet Leasing Manager, Japanese Commercial Credit Analyst, Asset Finance Specialist',
    minJLPT: 'JLPT N4 – N2'
  },

  // ==========================================
  // 9. OTHER MANUFACTURING & DIVERSIFIED (39)
  // ==========================================
  {
    id: 87,
    category: 'manufacturing',
    categoryName: 'Consumer & Manufacturing',
    name: 'Keyence Corporation',
    japaneseName: '株式会社キーエンス',
    locations: ['Mumbai', 'Gurugram', 'Pune', 'Bengaluru', 'Chennai'],
    operations: 'World-renowned high-margin sensors, vision systems, barcode readers, laser markers, digital microscopes and measurement instruments.',
    keyRoles: 'Technical Sales Consultant, Japanese Product Specialist, Industrial Application Lead',
    minJLPT: 'JLPT N4 – N2'
  },
  {
    id: 88,
    category: 'manufacturing',
    categoryName: 'Consumer & Manufacturing',
    name: 'Nidec Corporation',
    japaneseName: 'ニデック株式会社',
    locations: ['Chennai', 'Pune', 'Hubli'],
    operations: 'World\'s #1 manufacturer of precision small brushless motors, automotive electric traction motors, and industrial appliance motors.',
    keyRoles: 'Motor Design Engineer, Japanese Quality Inspector, Manufacturing Coordinator',
    minJLPT: 'JLPT N4 – N3'
  },
  {
    id: 89,
    category: 'manufacturing',
    categoryName: 'Consumer & Manufacturing',
    name: 'Daikin Industries, Ltd.',
    japaneseName: 'ダイキン工業株式会社',
    locations: ['Neemrana (Rajasthan)', 'Sri City (Andhra Pradesh)', 'Gurugram'],
    operations: 'India\'s leading HVAC manufacturer of residential air conditioners, commercial VRV systems, and chillers with 2 mega manufacturing facilities.',
    keyRoles: 'HVAC Application Specialist, Japanese Operations Coordinator, Quality Assurance Lead',
    minJLPT: 'JLPT N4 – N2'
  },
  {
    id: 90,
    category: 'manufacturing',
    categoryName: 'Consumer & Manufacturing',
    name: 'Unicharm Corporation',
    japaneseName: 'ユニ・チャーム株式会社',
    locations: ['Mumbai', 'Ahmedabad (Sanand)', 'Sri City'],
    operations: 'India\'s market leader in baby diapers (MamyPoko Pants), feminine care products (Sofy), and wellness pet hygiene items.',
    keyRoles: 'FMCG Production Supervisor, Japanese Marketing Coordinator, Supply Chain Analyst',
    minJLPT: 'JLPT N5 – N3'
  },
  {
    id: 91,
    category: 'manufacturing',
    categoryName: 'Consumer & Manufacturing',
    name: 'Yakult Honsha',
    japaneseName: 'ヤクルト本社',
    locations: ['Sonipat (Haryana)', 'Mumbai', 'Chennai', 'Delhi'],
    operations: 'Pioneering probiotic cultured milk drinks manufacturing and direct-to-home distribution (Yakult Danone India).',
    keyRoles: 'Food Microbiologist, Japanese Corporate Communications, Distribution Operations Specialist',
    minJLPT: 'JLPT N5 – N3'
  },
  {
    id: 92,
    category: 'manufacturing',
    categoryName: 'Consumer & Manufacturing',
    name: 'Nissin Foods (Indo Nissin)',
    japaneseName: '日清食品',
    locations: ['Bengaluru', 'Rewari (Haryana)', 'Khordha (Odisha)'],
    operations: 'Inventor of instant noodles producing Cup Noodles, Top Ramen, Soba noodles across 3 major production facilities.',
    keyRoles: 'Food Process Engineer, Japanese Quality Control Analyst, Brand Growth Specialist',
    minJLPT: 'JLPT N5 – N3'
  },
  {
    id: 93,
    category: 'manufacturing',
    categoryName: 'Consumer & Manufacturing',
    name: 'Kikkoman Corporation',
    japaneseName: 'キッコーマン株式会社',
    locations: ['Mumbai', 'New Delhi', 'Bengaluru'],
    operations: 'World leader in naturally brewed soy sauce, Japanese culinary seasonings, and international restaurant supply chains.',
    keyRoles: 'Food Service Sales Manager, Japanese Chef Liaison, Culinary Product Specialist',
    minJLPT: 'JLPT N4 – N2'
  },
  {
    id: 94,
    category: 'manufacturing',
    categoryName: 'Consumer & Manufacturing',
    name: 'Ajinomoto Co., Inc.',
    japaneseName: '味の素株式会社',
    locations: ['Kanchipuram (Chennai)', 'Mumbai', 'Pune'],
    operations: 'Monosodium glutamate (MSG) seasoning, amino acids for pharmaceuticals, functional food products and specialty nutrition.',
    keyRoles: 'Biochemical Formulation Lead, Japanese Regulatory Specialist, Food Application Specialist',
    minJLPT: 'JLPT N4 – N3'
  },
  {
    id: 95,
    category: 'manufacturing',
    categoryName: 'Consumer & Manufacturing',
    name: 'Nichirei Corporation',
    japaneseName: '株式会社ニチレイ',
    locations: ['Mumbai', 'Chennai'],
    operations: 'Temperature-controlled cold-chain logistics, processed frozen foods, and temperature-sensitive food distribution.',
    keyRoles: 'Cold Chain Logistics Manager, Japanese Supply Chain Planner, Food Safety Officer',
    minJLPT: 'JLPT N5 – N3'
  },
  {
    id: 96,
    category: 'manufacturing',
    categoryName: 'Consumer & Manufacturing',
    name: 'Suntory Beverage & Food',
    japaneseName: 'サントリービバレッジ＆フード',
    locations: ['Mumbai', 'Bengaluru'],
    operations: 'Ready-to-drink teas, functional beverages, packaged mineral waters, and nutritional wellness supplements.',
    keyRoles: 'Beverage Innovation Specialist, Japanese Brand Executive, Route-to-Market Analyst',
    minJLPT: 'JLPT N4 – N2'
  },
  {
    id: 97,
    category: 'manufacturing',
    categoryName: 'Consumer & Manufacturing',
    name: 'Kao Corporation',
    japaneseName: '花王株式会社',
    locations: ['Mumbai', 'Chennai'],
    operations: 'Consumer beauty care (Bioré skincare), fabric & household care (Attack detergent), and industrial oleochemicals.',
    keyRoles: 'Cosmetic Formulation Specialist, Japanese Marketing Executive, Quality Assurance Associate',
    minJLPT: 'JLPT N4 – N2'
  },
  {
    id: 98,
    category: 'manufacturing',
    categoryName: 'Consumer & Manufacturing',
    name: 'Shiseido Company, Limited',
    japaneseName: '株式会社資生堂',
    locations: ['Mumbai', 'New Delhi', 'Bengaluru'],
    operations: 'Prestige luxury cosmetics, skincare, and fragrance retail counters in premium department stores across metro cities.',
    keyRoles: 'Luxury Retail Brand Manager, Japanese Training Coordinator, Product Specialist',
    minJLPT: 'JLPT N3 – N1'
  },
  {
    id: 99,
    category: 'manufacturing',
    categoryName: 'Consumer & Manufacturing',
    name: 'Lion Corporation',
    japaneseName: 'ライオン株式会社',
    locations: ['Mumbai'],
    operations: 'Oral healthcare products (toothpaste, Systema toothbrushes), household cleaners, and pharmaceutical wellness goods.',
    keyRoles: 'Consumer Healthcare Specialist, Japanese Vendor Liaison, Trade Marketing Specialist',
    minJLPT: 'JLPT N5 – N3'
  },
  {
    id: 100,
    category: 'manufacturing',
    categoryName: 'Consumer & Manufacturing',
    name: 'Mandom Corporation',
    japaneseName: '株式会社マンダム',
    locations: ['Mumbai', 'New Delhi'],
    operations: 'Men’s grooming cosmetics (Gatsby hair wax, deodorants, face wash) and styling products manufacturing & sales.',
    keyRoles: 'Men’s Grooming Brand Executive, Japanese Production Coordinator, Key Account Executive',
    minJLPT: 'JLPT N5 – N3'
  },
  {
    id: 101,
    category: 'manufacturing',
    categoryName: 'Consumer & Manufacturing',
    name: 'Hoya Corporation',
    japaneseName: 'HOYA株式会社',
    locations: ['Mumbai', 'Bengaluru', 'Delhi'],
    operations: 'High-precision optical lenses for eyeglasses, endoscopic medical equipment (PENTAX Medical), and photomasks for microchips.',
    keyRoles: 'Ophthalmic Optical Specialist, Medical Device Technical Trainer, Japanese Liaison Specialist',
    minJLPT: 'JLPT N4 – N2'
  },
  {
    id: 102,
    category: 'manufacturing',
    categoryName: 'Consumer & Manufacturing',
    name: 'Terumo Corporation',
    japaneseName: 'テルモ株式会社',
    locations: ['Mumbai', 'Chennai', 'New Delhi'],
    operations: 'Medical disposable syringes, cardiovascular catheters, blood bag systems, and hospital infusion pump technologies.',
    keyRoles: 'Cardiovascular Technical Specialist, Japanese Medical Regulatory Analyst, Hospital Client Executive',
    minJLPT: 'JLPT N4 – N2'
  },
  {
    id: 103,
    category: 'manufacturing',
    categoryName: 'Consumer & Manufacturing',
    name: 'Brother Industries',
    japaneseName: 'ブラザー工業株式会社',
    locations: ['Mumbai', 'New Delhi', 'Bengaluru'],
    operations: 'Laser printers, label printers, industrial sewing machines for garment manufacturers, and garment digital printers.',
    keyRoles: 'Industrial Sewing Machine Specialist, Japanese Field Service Lead, Channel Sales Manager',
    minJLPT: 'JLPT N5 – N3'
  },
  {
    id: 104,
    category: 'manufacturing',
    categoryName: 'Consumer & Manufacturing',
    name: 'Casio Computer Co., Ltd.',
    japaneseName: 'カシオ計算機株式会社',
    locations: ['Mumbai', 'New Delhi', 'Bengaluru'],
    operations: 'G-Shock & Edifice watches, scientific calculators, electronic musical keyboards, and commercial labeling systems.',
    keyRoles: 'Consumer Electronics Brand Specialist, Japanese Supply Coordinator, Education Outreach Lead',
    minJLPT: 'JLPT N5 – N3'
  },
  {
    id: 105,
    category: 'manufacturing',
    categoryName: 'Consumer & Manufacturing',
    name: 'Citizen Watch Co., Ltd.',
    japaneseName: 'シチズン時計株式会社',
    locations: ['Bangalore', 'Mumbai'],
    operations: 'Eco-Drive solar quartz watches, Miyota precision watch movements, electronic thermal printers, and precision machine tools.',
    keyRoles: 'Horology Technical Specialist, Japanese Manufacturing Coordinator, Retail Sales Lead',
    minJLPT: 'JLPT N5 – N3'
  },
  {
    id: 106,
    category: 'manufacturing',
    categoryName: 'Consumer & Manufacturing',
    name: 'Seiko Watch Corporation',
    japaneseName: 'セイコーウオッチ株式会社',
    locations: ['Mumbai', 'New Delhi'],
    operations: 'Grand Seiko luxury mechanical watches, Prospex diving watches, and precision chronographs sales & boutique operations.',
    keyRoles: 'Luxury Watch Specialist, Japanese Customer Service Manager, Brand Ambassador',
    minJLPT: 'JLPT N4 – N2'
  },
  {
    id: 107,
    category: 'manufacturing',
    categoryName: 'Consumer & Manufacturing',
    name: 'Mitsubishi Electric Corporation',
    japaneseName: '三菱電機株式会社',
    locations: ['Gurugram', 'Pune', 'Chennai', 'Mumbai'],
    operations: 'High-speed elevators & escalators, factory automation PLCs, room air conditioners, and power semiconductor chips.',
    keyRoles: 'Elevator Project Field Engineer, Factory Automation Specialist, Japanese Technical Translator',
    minJLPT: 'JLPT N4 – N2'
  },
  {
    id: 108,
    category: 'manufacturing',
    categoryName: 'Consumer & Manufacturing',
    name: 'Toshiba Corporation',
    japaneseName: '株式会社東芝',
    locations: ['Gurugram', 'Hyderabad', 'Chennai', 'Mumbai'],
    operations: 'Thermal & hydroelectric turbine generators, transmission transformers (TTDI Hyderabad), SCiB rechargeable batteries, railway propulsion.',
    keyRoles: 'Power Transformer Design Engineer, Japanese Energy Systems Liaison, Quality Auditor',
    minJLPT: 'JLPT N3 – N2'
  },
  {
    id: 109,
    category: 'manufacturing',
    categoryName: 'Consumer & Manufacturing',
    name: 'Furukawa Electric Co., Ltd.',
    japaneseName: '古河電気工業株式会社',
    locations: ['Haridwar', 'Mumbai', 'Chennai', 'Noida'],
    operations: 'Optical fiber communication cables, automotive wiring components, copper alloys, and power grid distribution wires.',
    keyRoles: 'Fiber Optics Project Engineer, Japanese Manufacturing Supervisor, Material Testing Lead',
    minJLPT: 'JLPT N4 – N3'
  },
  {
    id: 110,
    category: 'manufacturing',
    categoryName: 'Consumer & Manufacturing',
    name: 'Sumitomo Heavy Industries',
    japaneseName: '住友重機械工業株式会社',
    locations: ['Mumbai', 'Chennai', 'Bengaluru'],
    operations: 'Cyclo industrial speed reducers & gearboxes, all-electric plastic injection molding machines, cryogenic refrigeration equipment.',
    keyRoles: 'Molding Machinery Application Specialist, Japanese Service Engineer, Heavy Industrial Sales',
    minJLPT: 'JLPT N4 – N3'
  },
  {
    id: 111,
    category: 'manufacturing',
    categoryName: 'Consumer & Manufacturing',
    name: 'Hitachi Construction Machinery (Tata Hitachi)',
    japaneseName: '日立建機株式会社',
    locations: ['Kharagpur', 'Dharwad', 'Bengaluru'],
    operations: 'Premier joint venture manufacturing hydraulic excavators, backhoe loaders, wheel loaders and mining equipment.',
    keyRoles: 'Heavy Machinery Assembly Supervisor, Japanese Field Service Specialist, Product Support Manager',
    minJLPT: 'JLPT N4 – N2'
  },
  {
    id: 112,
    category: 'manufacturing',
    categoryName: 'Consumer & Manufacturing',
    name: 'Kobelco Construction Machinery',
    japaneseName: 'コベルコ建機株式会社',
    locations: ['Sri City (Andhra Pradesh)', 'Chennai', 'Noida'],
    operations: 'High-efficiency hydraulic excavators, crawler cranes manufacturing and nationwide authorized dealership service network.',
    keyRoles: 'Excavator Quality Control Engineer, Japanese Warranty Coordinator, Heavy Equipment Sales Lead',
    minJLPT: 'JLPT N5 – N3'
  },
  {
    id: 113,
    category: 'manufacturing',
    categoryName: 'Consumer & Manufacturing',
    name: 'Yanmar Co., Ltd.',
    japaneseName: 'ヤンマー株式会社',
    locations: ['Chennai', 'Pune', 'Gurugram'],
    operations: 'Clean diesel industrial engines, agricultural tractors, rice transplanters, combine harvesters and mini excavators.',
    keyRoles: 'Agro Machinery Design Engineer, Japanese Field Service Lead, Engine Application Specialist',
    minJLPT: 'JLPT N4 – N3'
  },
  {
    id: 114,
    category: 'manufacturing',
    categoryName: 'Consumer & Manufacturing',
    name: 'Iseki & Co., Ltd.',
    japaneseName: '井関農機株式会社',
    locations: ['Chennai'],
    operations: 'Agricultural machinery, high-precision rice farming equipment, paddy transplanters and tractor components.',
    keyRoles: 'Agricultural Field Trials Engineer, Japanese Technical Writer, Dealer Network Specialist',
    minJLPT: 'JLPT N5 – N3'
  },
  {
    id: 115,
    category: 'manufacturing',
    categoryName: 'Consumer & Manufacturing',
    name: 'Daifuku Co., Ltd.',
    japaneseName: '株式会社ダイフク',
    locations: ['Bengaluru', 'Mumbai', 'Hyderabad'],
    operations: 'World #1 material handling systems: automated storage & retrieval systems (AS/RS), airport baggage handling, conveyor automation.',
    keyRoles: 'Automated Warehouse PLC Engineer, Japanese Systems Commissioning Specialist, Project Manager',
    minJLPT: 'JLPT N4 – N2'
  },
  {
    id: 116,
    category: 'manufacturing',
    categoryName: 'Consumer & Manufacturing',
    name: 'Murata Machinery, Ltd. (Muratec)',
    japaneseName: '村田機械株式会社',
    locations: ['Mumbai', 'Chennai', 'Coimbatore'],
    operations: 'Textile automatic winding machinery, CNC sheet metal turret punch presses, cleanroom AGVs, logistics material automation.',
    keyRoles: 'Textile Machinery Service Engineer, Japanese CNC Application Specialist, Customer Trainer',
    minJLPT: 'JLPT N4 – N3'
  },
  {
    id: 117,
    category: 'manufacturing',
    categoryName: 'Consumer & Manufacturing',
    name: 'Toyota Industries Corporation (TICO)',
    japaneseName: '豊田自動織機',
    locations: ['Bangalore', 'Pune'],
    operations: 'Toyota Material Handling industrial forklifts, air-jet textile weaving looms, automotive air-conditioning compressors.',
    keyRoles: 'Forklift Fleet Service Engineer, Japanese Automotive Assembly Specialist, Plant Operations Lead',
    minJLPT: 'JLPT N4 – N3'
  },
  {
    id: 118,
    category: 'manufacturing',
    categoryName: 'Consumer & Manufacturing',
    name: 'NTN Corporation',
    japaneseName: 'NTN株式会社',
    locations: ['Bawal (Haryana)', 'Chennai', 'New Delhi'],
    operations: 'Precision ball & roller bearings, automotive constant velocity joints (CVJ), precision drive components.',
    keyRoles: 'Bearing Applications Engineer, Japanese Automotive QA Specialist, Manufacturing Planner',
    minJLPT: 'JLPT N5 – N3'
  },
  {
    id: 119,
    category: 'manufacturing',
    categoryName: 'Consumer & Manufacturing',
    name: 'Tsubaki Nakashima Co., Ltd.',
    japaneseName: 'ツバキナカシマ',
    locations: ['Chennai', 'Bengaluru'],
    operations: 'Ultra-precision steel balls, ceramic balls, rollers, and linear precision bearing components for automotive/aerospace.',
    keyRoles: 'Precision Metrology Inspector, Japanese Production Coordinator, Export Quality Analyst',
    minJLPT: 'JLPT N5 – N3'
  },
  {
    id: 120,
    category: 'manufacturing',
    categoryName: 'Consumer & Manufacturing',
    name: 'THK Co., Ltd.',
    japaneseName: 'THK株式会社',
    locations: ['Sri City (Andhra Pradesh)', 'Chennai', 'Bangalore'],
    operations: 'Pioneering linear motion (LM) guides, ball screws, robotic actuators, and micro-precision mechanics.',
    keyRoles: 'Linear Motion Application Engineer, Japanese Robotics Liaison, Technical Sales Lead',
    minJLPT: 'JLPT N4 – N3'
  },
  {
    id: 121,
    category: 'manufacturing',
    categoryName: 'Consumer & Manufacturing',
    name: 'SMC Corporation',
    japaneseName: 'SMC株式会社',
    locations: ['Noida', 'Mumbai', 'Pune', 'Bengaluru', 'Chennai'],
    operations: 'World leader in pneumatic automation components: directional control valves, air cylinders, airline equipment, sensors.',
    keyRoles: 'Pneumatic Automation Consultant, Japanese Documentation Specialist, Key Account Engineer',
    minJLPT: 'JLPT N5 – N3'
  },
  {
    id: 122,
    category: 'manufacturing',
    categoryName: 'Consumer & Manufacturing',
    name: 'Kubota Corporation',
    japaneseName: '株式会社クボタ',
    locations: ['Faridabad', 'Chennai', 'Pune'],
    operations: 'High-performance agricultural tractors (Escorts Kubota JV), combine harvesters, ductile iron pipes, water purification facilities.',
    keyRoles: 'Tractor Systems Test Engineer, Japanese Field Trials Coordinator, Agricultural Technology Lead',
    minJLPT: 'JLPT N4 – N2'
  },
  {
    id: 123,
    category: 'manufacturing',
    categoryName: 'Consumer & Manufacturing',
    name: 'Hitachi Zosen Corporation',
    japaneseName: '日立造船株式会社',
    locations: ['Mumbai', 'Chennai', 'New Delhi'],
    operations: 'Waste-to-energy environmental incineration plants, pressure vessels, desalination plants, industrial machinery.',
    keyRoles: 'Environmental Plant Project Engineer, Japanese Client Representative, Proposal Specialist',
    minJLPT: 'JLPT N3 – N2'
  },
  {
    id: 124,
    category: 'manufacturing',
    categoryName: 'Consumer & Manufacturing',
    name: 'Ebara Corporation',
    japaneseName: '荏原製作所',
    locations: ['Mumbai', 'Chennai', 'Bengaluru'],
    operations: 'Industrial water pumps, petrochemical compressors, municipal flood control pumps, semiconductor chemical mechanical polishing (CMP).',
    keyRoles: 'Hydraulic Pump Systems Engineer, Japanese Technical Service Lead, Commercial Sales Executive',
    minJLPT: 'JLPT N4 – N2'
  },
  {
    id: 125,
    category: 'manufacturing',
    categoryName: 'Consumer & Manufacturing',
    name: 'Kirloskar Ebara Pumps Ltd.',
    japaneseName: 'キルロスカ荏原ポンプ',
    locations: ['Kirloskarvadi (Maharashtra)', 'Pune'],
    operations: 'Premier joint venture manufacturing high-pressure API boiler feed pumps, refinery multi-stage water injection pumps.',
    keyRoles: 'High-Pressure Pump Design Specialist, Japanese Joint-Venture Coordinator, Quality Inspector',
    minJLPT: 'JLPT N5 – N3'
  }
];

export const careerBenefitsInIndia = [
  {
    title: 'High Salary Premium in India',
    desc: 'Professionals with Japanese proficiency (JLPT N4 to N1) earn 30% to 70% higher salaries in India compared to English-only peers in automotive, IT, finance, and engineering.',
    badge: '30% – 70% Higher Pay'
  },
  {
    title: '1,400+ Japanese Companies in India',
    desc: 'Over 1,400 registered Japanese business establishments operate across Gurugram, Bengaluru, Chennai, Pune, Mumbai, and Neemrana with a critical shortage of bilingual talent.',
    badge: 'Massive Talent Shortage'
  },
  {
    title: 'Direct Fast-Track to Japan Intra-Company Transfer',
    desc: 'Working for a Japanese MNC in India provides the smoothest corporate path to an H-1/Intra-company transfer visa directly to Tokyo, Osaka, or Nagoya head offices.',
    badge: 'Transfer to Japan'
  },
  {
    title: 'Diverse High-Value Roles Beyond Translating',
    desc: 'Job openings include Bilingual Software Engineers, Project Managers, Expat Coordinators, Supply Chain Analysts, Legal/Regulatory Associates, and Technical Interpreters.',
    badge: 'Executive & Tech Roles'
  }
];
