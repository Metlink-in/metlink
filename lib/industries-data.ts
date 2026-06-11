export interface IndustryTopic {
  name: string;
  slug: string;
  tagline: string;       // short hook (we use the business-impact line)
  description: string;   // what it does & how it helps
  impact: string;        // business impact / outcome
  icon: string;
}

export interface Industry {
  name: string;
  slug: string;
  icon: string;
  tagline: string;
  description: string;
  topics: IndustryTopic[];
}

const slugify = (s: string) =>
  s.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');

// Build a topic from name / what-it-does / business-impact.
const t = (name: string, description: string, impact: string): IndustryTopic => ({
  name,
  slug: slugify(name),
  tagline: impact,
  description,
  impact,
  icon: '',
});

export const industries: Industry[] = [
  {
    name: 'Restaurant & Cafe',
    slug: 'restaurant-cafe',
    icon: '🍽️',
    tagline: 'From reactive operations to a proactive revenue engine',
    description:
      'AI automation transforms restaurants from reactive operations into proactive revenue engines — reducing manual overhead, preventing food waste, and delivering personalised guest experiences that drive repeat visits.',
    topics: [
      t('WhatsApp Ordering Bot', 'Lets customers browse the menu, place orders, and pay directly via WhatsApp. Eliminates phone-call errors, reduces wait-staff pressure, and captures orders 24/7 even when the restaurant is closed.', 'Order volume up 30%+ with zero extra staff'),
      t('QR Menu AI Assistant', 'A scannable QR code links to an intelligent digital menu that answers customer questions, highlights allergens, suggests pairings, and takes dine-in orders directly.', 'Reduces menu printing costs & speeds table turns'),
      t('Table Reservation Automation', 'Customers self-book tables via website, Google, or WhatsApp. The system confirms, sends reminders, handles cancellations, and fills gaps.', 'No-shows down by up to 60%, higher seating utilisation'),
      t('Review Collection Workflow', 'After each visit, an automated message invites guests to leave a review. Happy guests are routed to public platforms; unhappy ones are handled privately first.', '4–5× more 5-star reviews without manual effort'),
      t('AI Feedback Analysis System', 'Aggregates reviews from all platforms and uses AI to surface recurring complaints, star-dish mentions, and staff compliments in weekly reports.', 'Turn guest voice into actionable menu/ops changes'),
      t('Customer Loyalty Automation', 'Tracks visits and spend per customer, then issues points, stamps, or tier upgrades automatically with personalised reward notifications.', 'Repeat-visit rate up 25–40%'),
      t('Birthday & Anniversary Offer Automation', 'Pulls customer birthday and anniversary data and sends personalised offers one week before the date — the highest-converting restaurant campaign type.', 'Up to 70% redemption on personalised offers'),
      t('Kitchen Order Routing System', 'Routes incoming dine-in, takeaway, and delivery orders to the correct kitchen station with timestamps and priority flags.', 'Faster ticket times, fewer kitchen errors'),
      t('AI Voice Ordering Assistant', 'A voice-enabled AI handles phone orders, answers menu and hours FAQs, and books tables — even at peak times or after closing.', 'Never miss a phone order again'),
      t('Food Recommendation Chatbot', 'Asks guests about preferences, dietary needs, and occasion, then recommends dishes and combos tailored to them.', 'Higher average order value through smart upsell'),
      t('Smart Upselling Assistant', 'At the point of ordering, the AI suggests add-ons, upgrades, and meal deals based on the current cart.', '5–15% uplift in revenue per transaction'),
      t('Inventory Alert Automation', 'Monitors real-time stock levels and alerts managers when ingredients fall below threshold.', 'Reduce food waste & stockouts simultaneously'),
      t('Vendor Reorder Workflow', 'Auto-generates purchase orders to approved vendors at reorder levels, routes for approval, and tracks delivery.', 'Save 3–5 hours of procurement admin per week'),
      t('Delivery Status Notifications', 'Sends real-time order status updates via WhatsApp or SMS, cutting inbound "where is my order" calls.', 'Support queries down 50%+'),
      t('Staff Attendance Automation', 'QR or biometric clock-in records attendance, calculates hours, flags lateness, and feeds payroll.', 'Saves 2–4 hours of HR admin per week'),
      t('AI Sales Analytics Dashboard', 'A live dashboard of daily revenue, top items, peak hours, table efficiency, and trends.', 'Make faster, smarter business decisions'),
      t('Restaurant CRM System', 'Centralises all guest data — visits, preferences, spend, feedback — into one profile for personalised service.', 'Foundation for all retention & marketing automation'),
      t('Customer Segmentation Engine', 'Groups customers into segments (VIP, at-risk, new) and triggers tailored re-engagement campaigns.', 'Higher campaign ROI through precise targeting'),
      t('Coupon Distribution Automation', 'Generates unique, trackable discount codes per campaign and distributes via WhatsApp/email with live redemption tracking.', 'Drive traffic during off-peak hours'),
      t('AI-Powered Customer Support', 'Handles common queries — hours, menu, allergy info, parking, booking changes — across WhatsApp, website, and Instagram.', 'Resolve 70%+ of queries without human involvement'),
      t('Franchise Reporting Dashboard', 'Aggregates sales, staff, inventory, and customer data from all locations into one benchmarked dashboard.', 'HQ oversight without phone calls or spreadsheets'),
      t('Dynamic Pricing Recommendation', 'Analyses demand, day-part data, and competitor pricing to recommend optimal menu prices for each time and day.', 'Capture more revenue from high-demand periods'),
      t('Social Media Automation', 'Schedules and publishes specials, events, and reels across Instagram, Facebook, and Google Business.', 'Consistent brand presence on zero extra headcount'),
      t('Event Booking Management System', 'Lets customers enquire, book, and pay for private events online while managing rooms, catering, and reminders.', 'New revenue stream with zero manual follow-up'),
      t('Daily Business Summary Reports', 'Every morning the owner gets an automated summary: revenue, covers, top dishes, complaints, and stock alerts.', 'Stay in control without being on-site 24/7'),
    ],
  },
  {
    name: 'Real Estate',
    slug: 'real-estate',
    icon: '🏠',
    tagline: 'The agent who responds first wins the deal',
    description:
      'Real estate runs on speed. AI automation ensures no lead is missed, every buyer gets a personalised experience, and brokers spend their time closing rather than chasing.',
    topics: [
      t('AI Lead Qualification System', 'Instantly scores and qualifies incoming leads from all channels using AI, separating serious buyers from window shoppers.', '3× more closings from the same lead volume'),
      t('Property Recommendation Chatbot', 'Engages every enquiry within seconds, asks qualifying questions, and recommends matched properties like a top sales agent.', '24/7 lead engagement with zero agent time'),
      t('Site Visit Booking Automation', 'Qualified leads self-schedule site visits integrated with agent calendars, with confirmations, reminders, and follow-ups.', 'Site-visit show-up rate up 40%+'),
      t('AI Calling Assistant', 'An AI voice agent calls new leads within 60 seconds, pre-qualifies them, and transfers hot prospects to a human agent.', 'First response in under 60 seconds, always'),
      t('Automated Follow-Up Workflows', 'Nurtures leads who visited but did not buy via personalised multi-step sequences over 30–90 days.', 'Recover 20–30% of leads that went cold'),
      t('Real Estate CRM Automation', 'Logs every interaction to each lead record, assigns pipeline stages, sets agent tasks, and flags stalled deals.', 'Full pipeline visibility with zero admin burden'),
      t('WhatsApp Inquiry Assistant', 'Handles inbound property enquiries, sends brochures, floor plans, and pricing, and captures contact details 24/7.', 'Never lose an enquiry due to response delay'),
      t('AI Property Description Generation', 'Generates compelling, SEO-optimised listings from a simple data input in seconds.', 'List faster, rank higher, attract more buyers'),
      t('Buyer Behaviour Analytics', 'Tracks which properties each buyer viewed, time spent, price range, and questions asked.', 'Walk into every call knowing exactly what buyers want'),
      t('Rental Inquiry Automation', 'Manages rental enquiries end-to-end: collects requirements, matches properties, schedules viewings, and sends lease docs.', 'Reduce vacancy periods & letting admin by 60%'),
      t('Broker Management Dashboard', 'A self-service portal for channel partners to view inventory, check commissions, download material, and submit leads.', 'Scale your partner network without scaling ops'),
      t('Property Matching Engine', 'Automatically matches new listings to existing buyer profiles and sends personalised alerts.', 'Every new listing reaches the right buyers instantly'),
      t('AI Lead Scoring System', 'Analyses 20+ signals per lead and assigns a real-time score so teams prioritise the right leads.', 'Focus on leads most likely to convert'),
      t('Investment ROI Calculator', 'An interactive tool to model rental yield, appreciation, and ROI across properties.', 'Convert investor enquiries faster with data'),
      t('Mortgage Assistance Chatbot', 'Helps buyers understand loan eligibility, compare EMIs, and connect with lending partners.', 'Remove the mortgage barrier from your funnel'),
      t('Property Document OCR', 'Extracts key data from title deeds, floor plans, and NOCs using AI OCR, making records searchable.', 'Diligence in minutes instead of days'),
      t('AI Market Trend Reporting', 'Delivers weekly AI reports on local price trends, inventory, and demand signals.', 'Stay ahead of the market with zero research effort'),
      t('Social Media Lead Automation', 'Runs Facebook/Instagram lead campaigns, captures leads into the CRM, and triggers instant follow-up.', 'Paid ads that convert without manual follow-up'),
      t('Appointment Reminder System', 'Sends multi-channel reminders before every call, site visit, or meeting.', 'No-show rate down 50%+'),
      t('Smart Email Nurturing System', 'Sends behaviour-triggered email sequences based on properties viewed and buyer stage.', 'Stay relevant across a 3–12 month buying journey'),
      t('AI Virtual Property Assistant', 'An AI tour guide that answers questions during a 3D/video tour and captures interest signals.', 'Sell to out-of-city buyers without travel'),
      t('Customer Onboarding Automation', 'After booking, sends welcome kits, payment schedules, construction updates, and document checklists.', 'Delight buyers post-sale & reduce support volume'),
      t('Real Estate Analytics Dashboard', 'A unified dashboard of leads, conversions, agent performance, inventory, and revenue forecasts.', 'Data-driven decisions at every level'),
      t('Voice-Based Property Search', 'Buyers search using natural voice commands via a voice AI interface on the website or app.', 'Capture mobile-first buyers with frictionless search'),
      t('Automated Contract Workflow', 'Drafts agreements from templates, routes for e-signature, tracks approval, and stores signed docs.', 'Close deals faster with digital contracts'),
    ],
  },
  {
    name: 'Healthcare & Clinics',
    slug: 'healthcare-clinics',
    icon: '🏥',
    tagline: 'Fewer missed appointments, less paperwork, better care',
    description:
      'Clinics and hospitals lose revenue through missed appointments, manual paperwork, and slow patient communication. AI automation fixes all three — improving outcomes while freeing clinical staff to focus on care.',
    topics: [
      t('Appointment Booking Automation', 'Patients book, reschedule, or cancel 24/7 via website, WhatsApp, or phone, syncing directly with the doctor calendar.', 'Bookings up 40% with zero extra reception staff'),
      t('Patient Reminder System', 'Sends automated multi-channel reminders 48 hours and 2 hours before appointments.', 'No-shows down 50–60%, recovering lost slots'),
      t('AI Clinic Support Chatbot', 'Handles patient enquiries on website and WhatsApp about timings, fees, doctors, and procedures.', 'Resolve 70%+ of patient queries automatically'),
      t('Medical Report OCR Extraction', 'Extracts structured data from lab reports, X-rays, and discharge summaries, flagging abnormal values.', 'Eliminate manual data entry from paper reports'),
      t('Prescription Digitisation Workflow', 'Converts handwritten or scanned prescriptions into structured records with refill tracking and interaction checks.', 'Reduce prescription errors & improve compliance'),
      t('Doctor Availability Management', 'Reflects doctor schedules, leave, and OPD changes across all booking channels in real time.', 'Zero double-bookings or scheduling conflicts'),
      t('Queue Management System', 'Issues digital tokens with real-time queue position and estimated wait time via WhatsApp.', 'Better patient experience, less walk-out risk'),
      t('Telemedicine Scheduling Automation', 'Manages teleconsultation bookings end-to-end with meeting links, intake forms, and reminders.', 'Expand reach beyond physical clinic geography'),
      t('AI Symptom Triage Assistant', 'Patients describe symptoms to a chatbot that assesses urgency, recommends a specialist, and books or escalates.', 'Direct patients to the right care faster'),
      t('Health Record Management Workflow', 'Maintains a unified digital patient file aggregating visits, prescriptions, reports, and billing.', 'Complete patient history in seconds, not file rooms'),
      t('Insurance Verification Automation', 'Checks coverage and pre-authorisation before appointments to reduce billing disputes and rejections.', 'Higher insurance claim approval rate'),
      t('Lab Report Delivery Automation', 'Sends completed reports securely via WhatsApp/email with an AI summary of key values.', 'Faster results delivery, fewer reception calls'),
      t('Emergency Response Workflow', 'Detects high-priority cases, alerts the right team, prepares a patient summary, and triggers protocol.', 'Faster emergency coordination saves lives'),
      t('Patient Feedback Analysis', 'Collects post-visit feedback and uses AI to detect patterns and service gaps.', 'Improve patient satisfaction scores systematically'),
      t('AI Voice Receptionist', 'Handles inbound calls — FAQs, bookings, result status — and transfers complex cases, 24/7.', 'Never miss a patient call, even after hours'),
      t('Multi-Language Support Chatbot', 'Serves patients in their preferred language via WhatsApp or web chat.', 'Serve a broader community without interpreters'),
      t('Medical Inventory Tracking', 'Monitors medicine, consumable, and equipment stock with low-stock and expiry alerts and auto-reorder.', 'Eliminate stockouts & reduce expiry wastage'),
      t('Medicine Refill Reminders', 'Tracks prescription end dates and reminds patients to reorder.', 'Higher adherence & pharmacy repeat revenue'),
      t('AI Hospital Dashboard', 'Real-time view of OPD count, revenue, bed occupancy, pending reports, and doctor utilisation.', 'Run the hospital from one screen'),
      t('Staff Shift Automation', 'Manages nurse and support rosters, swaps, leave, and coverage gaps while ensuring minimum staffing.', 'Eliminate roster conflicts & understaffing'),
      t('Patient Onboarding Workflow', 'New patients complete digital registration, consent, and history before the first visit.', 'Paperless onboarding in under 5 minutes'),
      t('Follow-Up Care Reminders', 'Sends post-discharge follow-up reminders, care instructions, and medication schedules.', 'Lower readmission rates & better outcomes'),
      t('AI Billing Automation', 'Generates itemised bills from treatment records, checks insurance deductions, and sends digital invoices.', 'Faster billing cycles & fewer disputes'),
      t('Hospital CRM System', 'Centralises patient data, history, preferences, and communication for personalised care.', 'Foundation for lifelong patient relationships'),
      t('Healthcare Analytics Reporting', 'Automated reports on patient volumes, revenue by department, productivity, and outcomes.', 'Evidence-based hospital management'),
    ],
  },
  {
    name: 'Education',
    slug: 'education',
    icon: '🎓',
    tagline: 'Scale without proportional headcount growth',
    description:
      'Education institutions face rising student expectations alongside shrinking admin budgets. AI automation handles the repetitive work — from admissions to alumni — so educators can focus on teaching.',
    topics: [
      t('Student Inquiry Chatbot', 'Instantly responds to prospective-student enquiries about courses, fees, eligibility, and deadlines, capturing lead details.', 'Convert 3× more enquiries into applications'),
      t('Admission Workflow Automation', 'Guides applicants from form submission and document upload to fee payment and offer-letter dispatch.', 'Handle 5× more applications without more staff'),
      t('Fee Reminder System', 'Sends personalised fee reminders at configurable intervals before and after the due date.', 'On-time fee collection up 40%+'),
      t('AI Attendance Automation', 'Captures attendance via QR, biometric, or RFID, calculates totals, flags shortages, and alerts parents.', 'Real-time attendance with zero manual effort'),
      t('Exam Scheduling Workflow', 'Generates conflict-free exam timetables and distributes hall tickets and reminders automatically.', 'Error-free exam scheduling in hours, not weeks'),
      t('Student Performance Dashboard', 'Live view of grades, assignment completion, attendance trends, and subject strengths for early intervention.', 'Intervene before students fall behind'),
      t('AI Assignment Evaluation', 'Assists in evaluating written assignments and MCQs with instant feedback and plagiarism flags.', 'Faster feedback, fairer assessment, less burnout'),
      t('Smart LMS Assistant', 'An AI assistant in the LMS that answers questions, suggests resources, and tracks learning progress.', 'Personalised learning support at scale'),
      t('Parent Notification System', 'Notifies parents about attendance, results, discipline, fee dues, and events via WhatsApp/SMS.', 'Stronger parent engagement, fewer escalations'),
      t('Student Onboarding Workflow', 'New students get an automated welcome sequence — ID, timetable, portal access, orientation.', 'Reduce orientation confusion & admin queries'),
      t('AI Study Recommendation Engine', 'Recommends personalised study material, practice tests, and revision schedules from performance data.', 'Personalised learning without private tutors'),
      t('Scholarship Eligibility Automation', 'Screens student profiles against scholarship criteria and notifies eligible students with guidance.', 'No eligible student misses out on funding'),
      t('Placement Support Chatbot', 'Shares company profiles, interview tips, deadlines, and shortlist updates with final-year students.', 'Better placements with less manual coordination'),
      t('AI Career Guidance Assistant', 'Runs AI career assessments and recommends pathways, higher-education options, and industry insights.', 'Scalable career guidance for every student'),
      t('Course Recommendation System', 'Recommends the most relevant courses to each enquiry based on background, interests, and goals.', 'Better enrolment fit, lower dropout rates'),
      t('Digital Certificate Generation', 'Generates, signs, and delivers completion certificates, mark sheets, and awards automatically.', 'Issue certificates in minutes, not days'),
      t('AI Doubt Resolution Bot', 'Provides instant AI-generated explanations, examples, and resources for subject doubts.', '24/7 academic support without more tutors'),
      t('Online Class Management Workflow', 'Sends class links, records sessions, distributes notes, tracks attendance, and follows up absentees.', 'Smooth online delivery at any scale'),
      t('Academic Reporting Dashboard', 'Real-time view of enrolment, attendance, pass rates, fee collection, and faculty performance.', 'Leadership insights without waiting for reports'),
      t('Student Feedback Automation', 'Collects and analyses post-session, post-exam, and end-of-semester feedback with sentiment.', 'Continuously improve teaching quality with data'),
      t('AI Timetable Management', 'Generates optimised timetables across faculty, rooms, subjects, and student groups, updating stakeholders on change.', 'Conflict-free schedules generated in minutes'),
      t('Smart Learning Analytics', 'Analyses learning patterns, engagement, scores, and dropout-risk signals across the student body.', 'Data-driven curriculum improvements'),
      t('Faculty Task Automation', 'Automates attendance submission, grade upload, lesson-plan filing, and leave applications.', 'Give faculty back 5+ hours per week'),
      t('Alumni Engagement Workflow', 'Keeps alumni connected with milestone messages, events, updates, and mentorship notifications.', 'Build a powerful alumni network on autopilot'),
      t('Educational Content Automation', 'Generates course summaries, quiz questions, study guides, and social content from existing material.', '10× content output from existing resources'),
    ],
  },
  {
    name: 'E-Commerce & D2C',
    slug: 'ecommerce-d2c',
    icon: '🛍️',
    tagline: 'Compounding marginal gains across every touchpoint',
    description:
      'E-commerce growth is won through marginal gains — recovering abandoned carts, personalising recommendations, and retaining customers. AI automation compounds these gains across every buyer touchpoint, 24 hours a day.',
    topics: [
      t('Abandoned Cart Recovery Automation', 'Detects abandoned carts and triggers a personalised multi-step recovery sequence across WhatsApp, email, and SMS.', 'Recover 15–25% of abandoned cart revenue'),
      t('AI Product Recommendation Engine', 'Serves hyper-personalised recommendations on the site, in emails, and via WhatsApp from browse and purchase history.', 'AOV up 20–35% through personalisation'),
      t('Customer Support Chatbot', 'Handles common post-purchase queries — order status, returns, sizing, payments — across WhatsApp and web.', 'Cut support headcount while improving CSAT'),
      t('Order Tracking Automation', 'Sends proactive real-time order status updates via WhatsApp and SMS.', 'WISMO tickets down 70%+'),
      t('Refund Management Workflow', 'Automates returns and refunds — request, eligibility, reverse logistics, and payout.', 'Faster refunds = higher repeat-purchase intent'),
      t('AI Inventory Forecasting', 'Predicts demand per SKU from sales history, seasonality, and marketing calendar.', 'Optimise working capital tied up in stock'),
      t('Product Description Generation', 'Generates SEO-optimised descriptions, titles, and meta tags from basic product data.', 'Scale catalogue without scaling content team'),
      t('AI Review Analysis System', 'Surfaces recurring praise, complaints, and feature requests from reviews across platforms.', 'Use customer voice to improve products & listings'),
      t('Dynamic Pricing Assistant', 'Monitors competitor pricing, stock, and demand to recommend or auto-adjust prices.', 'Always competitively priced, automatically'),
      t('Customer Segmentation Engine', 'Groups customers by frequency, spend, category, and lifecycle for precisely targeted campaigns.', 'Higher ROAS through precise targeting'),
      t('WhatsApp Commerce Automation', 'Lets customers browse, get recommendations, order, and pay entirely within WhatsApp.', 'Sell through the highest-engagement channel'),
      t('AI Upselling Workflows', 'Recommends complementary products, bundles, and upgrades at checkout and post-purchase.', '5–15% revenue uplift from existing customers'),
      t('Personalized Email Campaigns', 'Sends behaviour-triggered, individually personalised email campaigns at scale.', 'Email revenue that rivals paid ads in ROI'),
      t('Smart Loyalty Programme Automation', 'Manages a points or tiered loyalty programme with rewards, birthday surprises, and reactivation.', 'Higher lifetime value & repeat-purchase rate'),
      t('AI Ad Copy Generation', 'Generates hundreds of ad-copy variants for Meta, Google, and marketplaces from a brief.', 'Test more creatives, find winners faster'),
      t('Social Commerce Automation', 'Connects Instagram/Facebook shops with inventory, orders, and customer communication.', 'Monetise social traffic without extra ops'),
      t('Sales Reporting Dashboard', 'Real-time revenue, conversion, CAC, LTV, refund rate, and channel attribution.', 'Make data-driven decisions every day'),
      t('Fraud Detection Workflow', 'Flags suspicious orders before dispatch to reduce chargebacks and protect margin.', 'Lower chargeback rate & protect profitability'),
      t('Return Prediction System', 'Predicts return likelihood per order to enable proactive interventions like size guidance.', 'Reduce returns without hurting satisfaction'),
      t('Voice Commerce Assistant', 'Lets customers search, enquire, and reorder via voice through WhatsApp voice or smart speakers.', 'Capture voice-first mobile shoppers'),
      t('AI Customer Retention System', 'Identifies churn-risk customers and triggers personalised win-back campaigns before they leave.', 'Retain customers for a fraction of acquisition cost'),
      t('Automated Seller Reporting', 'Generates per-seller performance reports for marketplaces and multi-vendor platforms.', 'Scale to hundreds of sellers without ops overhead'),
      t('Marketplace Integration Workflow', 'Syncs listings, pricing, inventory, and orders across Amazon, Flipkart, Meesho, and more in real time.', 'Sell on 5+ marketplaces without 5× the work'),
      t('AI Shipping Optimization', 'Selects the optimal courier per order by speed, cost, serviceability, and preference.', 'Shipping cost per order down 15–25%'),
      t('Influencer Campaign Automation', 'Manages outreach, seeding tracking, performance, and commission automatically.', '10× your influencer programme without 10× the team'),
    ],
  },
  {
    name: 'HR & Recruitment',
    slug: 'hr-recruitment',
    icon: '👥',
    tagline: 'Free HR from admin for the human work that matters',
    description:
      'HR teams are buried in repetitive admin — screening CVs, scheduling interviews, chasing documents, and answering policy questions. AI automation handles all of it, freeing HR for the strategic, human work that drives culture and performance.',
    topics: [
      t('Resume Screening System', 'AI scores every application against the job description, skills, and experience, surfacing the top candidates and discarding clearly unsuitable ones.', 'Reduce screening time from days to minutes'),
      t('AI Candidate Ranking', 'Ranks candidates using contextual analysis of experience, achievements, and fit with reasoning for each.', 'Better shortlists, better hires, less bias'),
      t('Interview Scheduling Automation', 'Coordinates interview slots between candidates and managers, sending invites and handling rescheduling.', 'Cut interview coordination time by 80%'),
      t('Employee Onboarding Workflow', 'Automates offer letters, document collection, tool/access provisioning, induction, and completion tracking.', 'New hires productive from Day 1'),
      t('HR Support Chatbot', 'Answers employee queries about leave, payroll, benefits, expenses, and policies via WhatsApp or intranet.', 'HR query volume down 70%, satisfaction up'),
      t('Leave Management Automation', 'Employees apply via WhatsApp or portal; the system checks balance, routes for approval, and updates the roster.', 'Zero-touch leave management'),
      t('Payroll Workflow Automation', 'Collects attendance, leave, overtime, and variable pay to prepare payroll inputs.', 'Faster, more accurate payroll every month'),
      t('Candidate Outreach Automation', 'AI identifies and messages qualified passive candidates with personalised outreach.', 'Build a pipeline before roles open up'),
      t('Employee Engagement Analytics', 'Runs pulse surveys, analyses sentiment, and flags attrition risk for HR leadership.', 'Detect disengagement before people resign'),
      t('AI Hiring Assistant', 'Suggests interview questions, summarises profiles, flags red flags, and compares shortlisted candidates.', 'Better-informed hiring decisions, faster'),
      t('Attendance Tracking Workflow', 'Integrates biometric, QR, or mobile clock-in for real-time attendance reports and irregularity flags.', 'Accurate attendance data with zero manual effort'),
      t('Internal Policy Chatbot', 'An AI knowledge base of all company policies accessible via WhatsApp or intranet for instant answers.', 'Self-service policy access for the whole org'),
      t('Employee Performance Dashboard', 'Aggregates KPIs, OKRs, 360-feedback, and ratings into individual and team dashboards.', 'Fairer, faster, more credible performance reviews'),
      t('Recruitment CRM System', 'Centralises all candidate interactions in a structured pipeline with full visibility.', 'Never lose a great candidate in the process'),
      t('AI Job Description Generation', 'Generates inclusive, SEO-optimised job descriptions from a simple role brief.', 'Better JDs in 2 minutes instead of 60'),
      t('Candidate Skill Assessment Automation', 'Sends role-specific assessments, scores results with AI, and ranks candidates before interviews.', 'Only interview candidates who can do the job'),
      t('HR Ticket Management Workflow', 'Routes HR requests through a ticketing system with SLA tracking and status updates.', 'Structured, trackable HR service delivery'),
      t('Exit Interview Automation', 'Departing employees complete an AI-facilitated exit interview; themes are extracted into a retention report.', 'Turn attrition into actionable retention insight'),
      t('Employee Feedback Analysis', 'Aggregates feedback from surveys and reviews to identify systemic issues and positive trends.', 'Act on data, not gut feel, to improve culture'),
      t('AI Learning Recommendation Engine', 'Recommends relevant learning content per employee role, skill gaps, and goals.', 'Personalised L&D without a dedicated team'),
      t('Compliance Reminder System', 'Reminds employees and managers of training, certifications, and acknowledgement deadlines, tracking completion.', 'Zero compliance gaps or missed deadlines'),
      t('Training Workflow Automation', 'Enrols employees in required training, tracks progress, sends reminders, and issues certificates.', '100% training compliance on autopilot'),
      t('AI Internal Communication Assistant', 'Drafts announcements, policy updates, and team comms in the company tone.', 'Professional internal comms in minutes'),
      t('Workforce Analytics Dashboard', 'Real-time headcount, attrition, time-to-hire, absenteeism, cost-per-hire, and diversity metrics.', 'Strategic HR decisions backed by live data'),
      t('Smart Employee Referral System', 'Prompts employees to refer for open roles, tracks status, and processes referral bonuses.', 'Your best hires come from your best employees'),
    ],
  },
  {
    name: 'Finance & Accounting',
    slug: 'finance-accounting',
    icon: '💰',
    tagline: 'Eliminate financial admin, gain real-time intelligence',
    description:
      'Manual processes, data silos, and compliance pressure slow finance teams down. AI automation eliminates repetitive financial admin and gives leaders the real-time intelligence they need to drive growth.',
    topics: [
      t('Invoice OCR Automation', 'Extracts vendor, amount, due date, line items, and GST from scanned or PDF invoices, populating the accounting system.', 'Process 10× more invoices with the same team'),
      t('Expense Tracking System', 'Employees photograph receipts; AI categorises, checks policy, routes for approval, and posts to the ledger.', 'Real-time expense visibility, 80% less admin'),
      t('AI Bookkeeping Assistant', 'Categorises transactions, matches invoices and POs, and reconciles accounts automatically.', 'Month-end close in days instead of weeks'),
      t('Payment Reminder Automation', 'Sends personalised payment reminders at configurable intervals around the due date.', 'Average debtor days down 30–50%'),
      t('GST & Tax Reminder System', 'Tracks all GST and income-tax deadlines and reminds the team and clients.', 'Zero penalties from missed tax deadlines'),
      t('Financial Reporting Dashboard', 'Live P&L, balance sheet, cash position, receivables, and payables, replacing monthly report cycles.', 'Always-current financial picture for leadership'),
      t('Budget Forecasting Automation', 'Generates rolling budget forecasts from historical spend, seasonality, and business drivers.', 'Proactive cash planning, not reactive crisis management'),
      t('AI Fraud Detection Workflow', 'Monitors transactions for duplicate invoices, abnormal amounts, and unusual payments, alerting with evidence.', 'Detect and stop fraud before it causes damage'),
      t('Vendor Payment Approval Workflow', 'Digitises invoice receipt, 3-way match, multi-level approval, and bank transfer with full audit trail.', 'Faster vendor payments, stronger audit trail'),
      t('Receipt Digitisation System', 'Converts physical receipts into structured digital records instantly via mobile capture.', 'Paperless expense management from day one'),
      t('AI Audit Assistance', 'Prepares audit-ready workpapers by aggregating transactions, documents, and reconciliations.', 'Faster audits at lower cost'),
      t('Smart Reconciliation Engine', 'Matches bank entries against records, flags discrepancies, and suggests resolutions.', 'Reconciliation time down 75%'),
      t('AI Investment Analytics', 'Recommends treasury investments, excess-cash deployment, and working-capital optimisation.', 'Maximise return on every rupee of idle cash'),
      t('Loan Eligibility Chatbot', 'Guides customers through eligibility, collects documents, and connects qualified applicants to RMs.', 'More loan applications with less RM time'),
      t('AI Collections Assistant', 'Segments debtors by risk, sends appropriately toned reminders, escalates, and logs interactions.', 'Improve collections without damaging relationships'),
      t('Cashflow Monitoring Dashboard', 'Real-time rolling cash-flow forecast from receivables, payables, payroll, and bank data.', 'Never be surprised by a cash crunch again'),
      t('Automated Compliance Workflows', 'Tracks regulatory requirements with deadlines, auto-generates reports, and routes for review.', 'Full compliance with zero missed deadlines'),
      t('AI Risk Scoring System', 'Scores customer, vendor, and counterparty risk from financial data, history, and external signals.', 'Data-driven risk management at every decision'),
      t('Financial Document Classification', 'Classifies invoices, contracts, POs, and statements, extracts data, and routes to the right workflow.', 'Documents processed in seconds, not hours'),
      t('Payroll Accounting Automation', 'Posts payroll journals, calculates TDS and PF liabilities, and generates statutory reports.', 'Seamless payroll-to-ledger integration every month'),
      t('AI Accounting Support Bot', 'Answers accounting-team queries on transaction coding, GST rates, and account mapping.', 'Junior staff perform like seniors with AI support'),
      t('Subscription Billing Automation', 'Automates invoicing, proration, failed payments, and dunning for subscription businesses.', 'Scale recurring revenue without scaling billing ops'),
      t('Revenue Forecasting System', 'Generates accurate revenue forecasts from pipeline, conversion rates, and seasonality.', 'Make growth decisions with revenue confidence'),
      t('Business KPI Reporting', 'Generates and distributes personalised KPI reports to each business unit automatically.', 'Every team sees their numbers, every week'),
      t('CFO Analytics Dashboard', 'Combines performance, cash position, risk indicators, and strategic KPIs in one real-time command centre.', 'CFO-grade intelligence at your fingertips'),
    ],
  },
];

export function getIndustryBySlug(slug: string): Industry | undefined {
  return industries.find((i) => i.slug === slug);
}

export function getTopicBySlug(industrySlug: string, topicSlug: string): IndustryTopic | undefined {
  return getIndustryBySlug(industrySlug)?.topics.find((tp) => tp.slug === topicSlug);
}

export function getAllIndustryTopicSlugs(): { industry: string; topic: string }[] {
  return industries.flatMap((ind) =>
    ind.topics.map((tp) => ({ industry: ind.slug, topic: tp.slug }))
  );
}
