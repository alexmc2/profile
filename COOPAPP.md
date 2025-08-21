# Co-op Connect Management App

A modern web application built for Brighton Rock Housing Co-op, featuring both a public website and a comprehensive members portal for co-op management. This application is built with Next.js 15, React 19, TypeScript, Tailwind CSS, and integrates with a PostgreSQL database.

## Overview

The Co-operative Connect Management App consists of two main components:

1. **Public Website**: A public-facing website for general information about the co-op, including:

   - Events page
   - Contact information
   - Meetings
   - Vacancies

2. **Members Portal**: A secure, authenticated area for co-op members that provides tools for co-op management, including:
   - Dashboard for quick access to all features
   - Treasury management system
   - Secretary tools for meetings and correspondence
   - Garden projects and tasks tracking
   - Maintenance request system
   - Calendar and event scheduling
   - Todo and task management
   - And more...

## Technology Stack

- **Frontend**:

  - Next.js 15 (App Router)
  - React 19
  - TypeScript
  - Tailwind CSS
  - Shadcn UI
  - Radix UI components
  - Progressive Web App (PWA) capabilities
  - SWR for client-side data fetching and caching

- **Backend**:

  - PostgreSQL database
  - Next.js API routes
  - Server-side authentication
  - Server Actions for data mutations

- **Authentication**:
  - Custom authentication middleware
  - Protected routes

## Getting Started

First, install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the public website.
Open [http://localhost:3000/members](http://localhost:3000/members) to access the members portal (requires authentication).

## Application Structure

### Key Directories

- `/app`: Next.js App Router pages and layouts

  - `/(website)`: Public website routes
  - `/members`: Members portal routes and API endpoints
    - `/(auth)`: Authentication-related pages (login, signup, password reset)
    - `/(default)`: Main authenticated member routes
    - `/api`: API endpoints for the members portal

- `/components`: React components

  - `/members`: Components specific to the members portal
    - `/common`: Common UI components
    - `/navigation`: Navigation components (sidebar, tabs)
    - `/editor`: Rich text editor components
    - `/ui`: UI components and widgets

- `/utils`: Utility functions and helpers

- `/styles`: Global CSS and styling

## Features

### Public Website

- Events listing
- Contact information
- Co-op information pages

### Members Portal

#### Dashboard

A central hub providing quick access to all co-op management features.

#### Treasury Module 💰

![Financial Tracking](https://img.shields.io/badge/Financial_Tracking-Enabled-success)
![Budgeting](https://img.shields.io/badge/Budgeting-Advanced-blue)
![Expense Claims](https://img.shields.io/badge/Expense_Claims-Integrated-orange)
![Bank Reconciliation](https://img.shields.io/badge/Bank_Reconciliation-Automated-brightgreen)
![Financial Reporting](https://img.shields.io/badge/Financial_Reporting-Comprehensive-blueviolet)

The Treasury Module is a robust financial management system designed specifically for housing cooperatives. It provides a comprehensive set of tools for tracking finances, managing budgets, processing expense claims, and generating financial reports.

**Key Features:**

1. **Bookkeeping System** 📒

   - Transaction entry and management with detailed splits
   - Monthly overview dashboard with key financial metrics
   - Bank statement reconciliation with verification workflow
   - Monthly balance tracking and automatic reporting
   - Transaction history with comprehensive search and filtering
   - Category pattern management for efficient transaction entry
   - Excel import functionality for bulk transaction handling
   - Multi-tab interface with dedicated views for different tasks

2. **Budget Management** 📊

   - Annual budget creation and planning
   - Multiple budget proposals for collaborative review
   - Budget vs. actual comparison reports with variance analysis
   - Fiscal year tracking and performance analysis
   - Category-based budget allocation and reporting
   - Visual budget dashboards with performance indicators
   - Exportable budget reports for meetings and documentation
   - Budget overview, proposals, and reporting tabs

3. **Expense Claims** 🧾

   - Member expense submission with structured workflow
   - Receipt attachment and management
   - Multi-stage approval process with status tracking
   - Detailed expense claim forms with categorization
   - Complete expense history with filtering options
   - Detailed view for expense processing and review
   - Edit functionality for expense claim management
   - Mobile-responsive design for on-the-go submissions

4. **Financial Reporting** 📈

   - Annual financial statements and summaries
   - Financial Conduct Authority (FCA) returns preparation
   - Customizable financial reports with filtering options
   - Treasury reports panel with downloadable documents
   - Period-based reporting for financial analysis

5. **Accounts Overview** 🏦
   - Financial account management and tracking
   - Annual accounts preparation and submission
   - Account balances and reconciliation status
   - Tab-based navigation with specialized interfaces
   - FCA returns management and compliance

**Technical Implementation:**

The Treasury Module is built with modern architecture using:

- PostgreSQL database for reliable financial data storage
- Server-side actions for secure financial transactions
- React Server Components for efficient rendering
- Client-side components for interactive financial interfaces
- Optimistic UI updates for responsive user experience
- SWR for client-side data fetching and caching
- Comprehensive error handling for financial data integrity
- Data validation to ensure accurate financial records
- Skeletons for improved loading states

**Database Schema:**

The module is powered by a comprehensive set of database tables including:

- `treasury_transactions`: Core transaction records
- `treasury_categories`: Financial categorisation system
- `treasury_transaction_splits`: Split transactions across categories
- `treasury_ledger_entries`: Double-entry accounting records
- `treasury_annual_budgets`: Budget planning and tracking
- `treasury_expense_claims`: Member expense submission and tracking
- `treasury_monthly_balances`: Reconciled monthly financial positions
- `treasury_bank_statements`: Bank statement records and reconciliation
- `treasury_reports`: Generated financial reports and documents

**User Experience:**

The Treasury interface is designed to be accessible for co-op members without financial expertise while providing powerful tools for treasurers:

- Intuitive transaction entry forms
- Visual budget vs. actual comparisons
- Clear expense claim status indicators
- Simplified reconciliation process
- Tab-based navigation for focused workflows
- Layout clients for consistent UI across sections
- Loading skeletons for improved perceived performance
- Mobile-responsive design for on-the-go financial management

**Integration:**

The Treasury Module integrates with other co-op systems:

- User profiles for member identification and authorisation
- Notification system for expense claim status updates
- Document storage for financial statements and receipts
- Reporting tools for meetings and financial analysis
- Error handling components for graceful degradation
- Calendar system for financial deadlines and events

#### Secretary Module 📝

![Meeting Management](https://img.shields.io/badge/Meeting_Management-Comprehensive-success)
![Document Storage](https://img.shields.io/badge/Document_Storage-Centralised-blue)
![Membership Records](https://img.shields.io/badge/Membership_Records-Complete-orange)
![Minutes Taking](https://img.shields.io/badge/Minutes_Taking-Structured-brightgreen)
![Communications](https://img.shields.io/badge/Communications-Organised-blueviolet)
![Agenda Management](https://img.shields.io/badge/Agenda-Collaborative-purple)
![Attendance Tracking](https://img.shields.io/badge/Attendance_Tracking-Detailed-success)

The Secretary Module provides essential administrative tools for housing cooperative secretaries, streamlining governance processes and ensuring proper documentation of co-op activities.

**Key Features:**

1. **Meeting Management** 📅

   - Comprehensive meeting scheduling and organisation
   - Support for different meeting types (GM, AGM, EGM, etc.)
   - Detailed attendance tracking and reporting
   - Tab-based interface for meeting details and agenda
   - Calendar integration for scheduling
   - Meeting status tracking with visual indicators
   - Responsive interface for both desktop and mobile access

2. **Agenda Management** 📋

   - Rich text agenda editor with formatting options
   - Template-based agenda creation system
   - Customizable templates for different meeting types
   - Full-screen editing mode with width controls
   - Document download capabilities
   - Real-time preview with expandable sections
   - Version history and change tracking
   - Visual editor with intuitive controls
   - Mobile-optimized viewing and editing experience

3. **Attendance Tracking** 👥

   - Detailed attendance statistics with visual indicators
   - Member-by-member attendance reporting
   - Attendance rate calculations and trends
   - Status tracking (present, late, apologies, absent)
   - Recent meeting attendance visualization
   - Sortable member list by various criteria
   - Meeting participation overview
   - Interactive attendance reports

4. **Communications Management** 📨

   - Comprehensive communication tracking with contacts
   - Multiple communication types (email, phone, letter, in-person)
   - Searchable communications history
   - Advanced filtering options (by contact, type, date)
   - File and image attachment capabilities
   - Chronological communication tracking
   - Cloudinary integration for image storage
   - SWR implementation for real-time data updates

5. **Administrative Tools** 🛠️

   - Membership records management
   - User-friendly administrative interface
   - Tab-based navigation structure
   - Responsive layout for all device sizes
   - Loading skeletons for improved UX
   - Advanced sorting and filtering capabilities
   - Pagination for large data sets
   - Data visualization for key metrics

6. **Document Repository** 📚

   - Central storage for co-op documents
   - Document categorisation and management
   - Version history tracking for important files
   - Search and filtering capabilities
   - Access control and permissions
   - Template library for common documents
   - Document download and sharing options

7. **Membership Administration** 👥
   - Member join/leave tracking with history
   - Membership change documentation
   - Key dates recording for member milestones
   - Detailed member profiles and information
   - Directory integration with contact details
   - Status tracking for current and past members

**Technical Implementation:**

The Secretary Module leverages:

- React Server Components for initial data loading
- Client components for interactive features
- SWR for client-side data fetching and caching
- Optimistic UI updates for responsive user experience
- Rich text editing with customizable options
- Form validation for data integrity
- URL state management with nuqs for shareable views
- Cloudinary integration for document and image management
- Modal interfaces for focused interactions
- Tab-based navigation for intuitive workflow
- Responsive layouts for all device sizes

**Database Schema:**

The module is supported by a comprehensive set of database tables:

- `secretary_meetings`: Meeting scheduling and information
- `secretary_meeting_attendance`: Member attendance records
- `secretary_meeting_agendas`: Agenda content and metadata
- `secretary_meeting_minutes`: Minutes content and metadata
- `secretary_meeting_minutes_comments`: Discussion on minutes
- `secretary_documents`: Document storage and categorisation
- `secretary_membership_changes`: Member join/leave tracking
- `secretary_communications`: Communication history and tracking
- `secretary_contacts`: Contact information for external parties
- `secretary_contact_categories`: Contact categorisation system

**User Experience:**

The Secretary interface prioritises:

- Intuitive document creation and editing
- Clear meeting organisation and visualization
- Comprehensive communication tracking
- Detailed attendance reporting with visual cues
- Mobile-friendly design for on-the-go updates
- Simplified workflows for common secretary tasks
- Interactive data presentation with charts and graphs
- Loading states with skeleton screens for better perceived performance
- Clear visual hierarchy for important information

**Integration:**

The Secretary Module connects with:

- Calendar system for meeting scheduling and reminders
- User profiles for attendance tracking and authorship
- Treasury module for financial document management
- Notification system for meeting alerts and reminders
- Image storage for document attachments
- PDF generation for official records and reports
- Email systems for communications management
- SWR data fetching for real-time updates

#### Garden Module 🌱

![Project Management](https://img.shields.io/badge/Project_Management-Comprehensive-success)
![Task Tracking](https://img.shields.io/badge/Task_Tracking-organised-blue)
![Image Documentation](https://img.shields.io/badge/Image_Documentation-Cloud_Based-orange)
![Participant Management](https://img.shields.io/badge/Participant_Management-Collaborative-brightgreen)
![Area organisation](https://img.shields.io/badge/Area_organisation-Structured-blueviolet)
![Progress Reporting](https://img.shields.io/badge/Progress_Reporting-Detailed-purple)

The Garden Module is a purpose-built system designed to help housing cooperatives manage their communal garden spaces efficiently. It provides tools for planning projects, organising tasks, tracking participation, documenting progress with images, and maintaining garden areas.

**Key Features:**

1. **Garden Project Management** 🌿

   - Comprehensive project creation and editing
   - Status tracking (planning, active, in_progress, completed, etc.)
   - Area assignment for spatial organisation
   - Project description and goals documentation
   - Main project image for visual identification
   - Progress reporting with rich text content
   - Project participant tracking and management
   - Comment-based discussion capabilities

2. **Garden Task System** 🛠️

   - Task creation with title, description, and area assignment
   - Priority levels (low, medium, high, urgent)
   - Status tracking (pending, upcoming, in_progress, completed, cancelled)
   - Scheduled time and duration planning
   - Due date assignment and tracking
   - Task assignment to specific members or groups
   - Participant registration and availability management
   - Detailed task search and filtering options

3. **Garden Areas** 🏡

   - Garden area definition and management
   - Area status tracking (active, inactive)
   - Visual area organisation with display order
   - Task and project association with specific areas
   - Garden plant tracking by area
   - Area-specific task and project filtering

4. **Image Documentation** 📸

   - Cloud-based image storage with Cloudinary
   - Task and project image galleries
   - Image attribution to uploaders
   - Image caption support
   - Secure upload and deletion workflows
   - Zoomable image viewing experience
   - Chronological image sorting
   - Visual garden progress documentation

5. **Participation Management** 👥

   - Three-state participation system (helping, maybe, unavailable)
   - Real-time participant tracking for tasks and projects
   - Visual indicators of participation status
   - Historical participation record maintenance
   - Member involvement monitoring across garden activities
   - Collaborative garden work coordination
   - Optimistic UI updates for participation changes

6. **Progress Reporting** 📋
   - Project-specific report creation
   - Detailed progress documentation
   - Historical record of garden development
   - Report editing and updating capabilities
   - Clear attribution of report authors
   - Chronological progression tracking
   - Rich text reporting with formatting options

**Technical Implementation:**

The Garden Module leverages:

- React Server Components for initial data loading
- Client components for interactive elements
- Form validation for data integrity
- Server actions for secure database operations
- Optimistic UI updates for responsive user experience
- Cloudinary integration for image management
- Tab-based interface for project and task separation
- Modal interfaces for creation and editing workflows
- Query parameter state management with nuqs

**Database Schema:**

The module is supported by a comprehensive set of database tables:

- `garden_areas`: Garden zones and spatial organisation
- `garden_tasks`: Individual garden jobs and maintenance activities
- `garden_projects`: Larger garden initiatives and planning
- `garden_images`: Image documentation for tasks and projects
- `garden_task_participants`: Member participation in tasks
- `garden_project_participants`: Member involvement in projects
- `garden_comments`: Discussion threads for tasks and projects
- `garden_project_reports`: Detailed progress documentation
- `garden_plants`: Plant inventory and tracking

**User Experience:**

The Garden interface prioritizes:

- Intuitive tab-based organisation of projects and tasks
- Visual status indicators with colour coding
- Modal-based creation and editing flows
- Responsive design for both desktop and mobile usage
- Sortable and filterable list views
- Card-based project visualisation
- Table-based task management
- Streamlined participation registration
- Image gallery integration

**Integration:**

The Garden Module connects with:

- User profiles for member identification and task assignment
- Calendar system for scheduled garden tasks
- Image storage system for visual documentation
- Comment system for project and task discussions
- Cloudinary for cloud-based image management
- URL state management for filtering and view preferences
- Notification system for task and project updates

#### Maintenance Module 🔧

![Request Tracking](https://img.shields.io/badge/Request_Tracking-Complete-success)
![Visit Scheduling](https://img.shields.io/badge/Visit_Scheduling-Integrated-blue)
![Image Management](https://img.shields.io/badge/Image_Management-Advanced-orange)
![Priority Management](https://img.shields.io/badge/Priority_Management-Structured-brightgreen)
![Comment System](https://img.shields.io/badge/Comment_System-Collaborative-blueviolet)
![House Assignment](https://img.shields.io/badge/House_Assignment-Organised-purple)

The Maintenance Module is a system designed for housing cooperatives to efficiently track, manage, and resolve property maintenance issues. It provides a comprehensive set of tools for reporting maintenance problems, scheduling contractor visits, documenting the maintenance process with images, and facilitating communication through comments.

**Key Features:**

1. **Maintenance Request Management** 🏠

   - Multi-level priority system (urgent, high, low)
   - Status tracking (pending, scheduled, completed)
   - Request assignment to specific houses
   - Detailed request information
   - Assignment to responsible members
   - Historical request archive and tracking
   - Filtering by status, priority, and house

2. **Visit Scheduling** 📅

   - Contractor visit scheduling
   - Duration estimation
   - Visit notes and details
   - Automatic status updates based on scheduled visits
   - Calendar integration with the co-op's central calendar
   - Visit completion tracking
   - Scheduling notifications

3. **Image Documentation** 📸

   - Multiple image uploads per maintenance request
   - Caption and metadata for each image
   - Image organisation by upload date
   - Image zoom functionality for detailed inspection
   - Download capability for sharing with contractors
   - User attribution for uploaded images
   - Secure cloud storage integration

4. **Communication Tools** 💬

   - Comment threads on maintenance requests
   - Discussion capability between members
   - Notification system for updates
   - Historical communication archive
   - User attribution for all comments
   - Rich text formatting for detailed explanations

5. **Reporting and Overview** 📊
   - Maintenance request dashboard
   - Sortable and filterable request listings
   - Priority highlighting for urgent issues
   - House-specific maintenance views
   - Status visualisation with colour coding
   - Maintenance history per property

**Technical Implementation:**

The Maintenance Module leverages:

- React Server Components for efficient data display
- Client-side components for interactive features
- Image upload and processing capabilities
- Form validation for data integrity
- Optimistic UI updates for responsive user experience
- Integration with calendar for visit scheduling
- PDF generation for maintenance reports

**Database Schema:**

The module is supported by a comprehensive set of database tables:

- `maintenance_requests`: Core request information and metadata
- `maintenance_visits`: Scheduled contractor visits
- `maintenance_images`: Image storage and organisation
- `maintenance_comments`: Discussion and communication
- `houses`: Property information and identification

**User Experience:**

The Maintenance interface prioritizes:

- Intuitive request creation and management
- Clear status and priority visualisation
- Simplified image upload and management
- Mobile-responsive design for on-site documentation
- Streamlined contractor visit scheduling
- Accessible communication tools

**Integration:**

The Maintenance Module connects with:

- Calendar system for visit scheduling
- User profiles for request assignment and tracking
- Notification system for status updates
- Document storage for maintenance documentation
- Image processing for visual documentation

#### Development Module 🌐

![Initiative Management](https://img.shields.io/badge/Initiative_Management-Comprehensive-success)
![Event Planning](https://img.shields.io/badge/Event_Planning-Integrated-blue)
![Project Tracking](https://img.shields.io/badge/Project_Tracking-Structured-orange)
![Participation System](https://img.shields.io/badge/Participation_System-Interactive-brightgreen)
![Partner organisations](https://img.shields.io/badge/Partner_organisations-Collaborative-blueviolet)
![Category Management](https://img.shields.io/badge/Category_Management-organised-purple)

The Development Module provides a comprehensive system for housing cooperatives to manage their development initiatives, including both events and projects. It enables co-op members to plan, track, and participate in various development activities, from outreach events to policy development projects, while facilitating collaboration and communication.

**Key Features:**

1. **Initiative Management** 📋

   - Dual initiative types: events and projects
   - Comprehensive initiative creation and editing
   - Status tracking (active, completed, on_hold, cancelled)
   - Priority levels (low, medium, high, urgent)
   - Category classification (development_meeting, outreach, policy, training, research, social, general)
   - Detailed initiative information with rich text descriptions
   - Initiative ownership and attribution
   - Historical initiative archive

2. **Event Planning** 📅

   - Event scheduling with date and time selection
   - Duration planning and management
   - Location specification
   - Participant capacity settings
   - Open-to-everyone toggle for public/private events
   - Event-specific details and requirements
   - Integration with calendar system

3. **Project Tracking** 📊

   - Project status monitoring
   - Budget allocation and tracking
   - Progress reporting and updates
   - Project-specific documentation
   - Task assignment and management
   - Timeline visualisation
   - Resource allocation

4. **Participation System** 👥

   - Three-state participation tracking (going, maybe, not_going)
   - Real-time participant listing and counting
   - Visual indicators for attendance status
   - One-click response updating
   - Optimistic UI updates for immediate feedback
   - Participant profiles with name display
   - Mobile-friendly participation controls

5. **Partner organisation Management** 🤝

   - Partner organisation directory
   - organisation categorization (housing_coop, network, federation, council, charity, other)
   - Contact information management
   - Meeting scheduling and tracking
   - Notes and communication history
   - Website and resource linking
   - Relationship management

6. **Discussion System** 💬
   - Initiative-specific comment threads
   - Real-time comment posting
   - User attribution for all comments
   - Chronological comment ordering
   - Integrated with shared comments component
   - Mobile-responsive comment display
   - Support for conversations around initiatives

**Technical Implementation:**

The Development Module leverages:

- React Server Components for initial data loading
- Client components with React hooks for interactive elements
- Optimistic UI updates for responsive user experience
- Form validation for data integrity
- Server actions for secure database operations
- Responsive layouts for desktop and mobile access
- Query parameter state management with nuqs

**Database Schema:**

The module is supported by a comprehensive set of database tables:

- `development_initiatives`: Core initiative information including type, status, priority, and category
- `event_participants`: Participant tracking with status options (going, maybe, not_going)
- `development_comments`: Discussion threads for initiatives
- `partner_organisations`: Partner organisation directory and relationship management

**User Experience:**

The Development interface prioritizes:

- Intuitive initiative creation and management
- Clear status and priority visualisation
- Simplified participation registration
- Comprehensive filtering and sorting options
- Card-based initiative discovery
- Modal interfaces for creating and editing initiatives
- Mobile-responsive design for on-the-go access

**Integration:**

The Development Module connects with:

- User profiles for participant identification and initiative ownership
- Comments system for discussions
- Calendar system for event scheduling
- URL state management for filtering and sorting preferences
- Alert systems for notifications and confirmations
- Social events module for community engagement

#### Calendar Module 📆

![Event Management](https://img.shields.io/badge/Event_Management-Comprehensive-success)
![Multiple Views](https://img.shields.io/badge/Multiple_Views-Interactive-blue)
![Cross-Module Integration](https://img.shields.io/badge/Cross_Module_Integration-Seamless-orange)
![iCalendar Support](https://img.shields.io/badge/iCalendar_Support-Standards_Compliant-brightgreen)
![Event Categories](https://img.shields.io/badge/Event_Categories-colour_Coded-blueviolet)
![External Sync](https://img.shields.io/badge/External_Sync-Enabled-purple)

The Calendar Module provides a centralized system for managing and visualising all co-op events and activities. It serves as a hub that integrates events from various modules, offering a comprehensive view of scheduled activities while enabling members to create, edit, and manage calendar events directly.

**Key Features:**

1. **Unified Event Management** 🗓️

   - Centralized view of all co-op activities
   - Multiple event types (manual, garden_task, development_event, social_event, maintenance_visit)
   - Event creation with title, description, start/end times
   - Event editing and deletion capabilities
   - Event categorization and colour-coding
   - Reference linking to source modules
   - Comprehensive event details display

2. **Multiple Calendar Views** 👁️

   - Month view with full calendar grid
   - Week view with hourly breakdown
   - Day view with detailed scheduling
   - Dynamic view switching
   - Responsive design for all screen sizes
   - Intuitive navigation between time periods
   - Today button for quick access to current date

3. **Cross-Module Integration** 🔄

   - Automatic event creation from garden tasks
   - Development event synchronization
   - Maintenance visit scheduling integration
   - Social event calendar representation
   - Bidirectional updates between modules
   - Consistent event representation
   - Source module attribution and linking

4. **iCalendar Feed Support** 🔗

   - Personal calendar feed generation
   - Secure token-based authentication
   - Standards-compliant iCalendar format
   - Subscription support for external calendar apps
   - Real-time feed updates
   - Private URL sharing capabilities
   - Integration with popular calendar applications

5. **Event Categorization** 🏷️

   - colour-coded event categories
   - Visual category legend
   - Category-based filtering
   - Custom category assignment
   - Consistent colour scheme across views
   - Category-based organisation
   - Subcategory support for detailed classification

6. **User Experience Enhancements** ✨
   - Intuitive modal interfaces for event management
   - Drag-and-drop capabilities (planned)
   - Event tooltips with quick information
   - Responsive design for mobile access
   - Keyboard navigation support
   - Accessibility considerations
   - Dark mode compatibility

**Technical Implementation:**

The Calendar Module leverages:

- React Server Components for initial data loading
- Client components with React hooks for interactive elements
- Context API for state management across components
- Dynamic imports for view-specific components
- Server actions for secure database operations
- Date manipulation with date-fns library
- Optimistic UI updates for responsive user experience

**Database Schema:**

The module is supported by a comprehensive database structure:

- `calendar_events`: Core event information including title, description, timing, and categorization
- Integration with source module tables through reference_id field
- Event type classification for module-specific handling
- User attribution for event creation and modification

**User Experience:**

The Calendar interface prioritizes:

- Clean, intuitive calendar visualisation
- Simplified event creation and management
- Clear colour-coding for event categorization
- Flexible view options for different planning needs
- Mobile-responsive design for on-the-go access
- Streamlined navigation between time periods
- Quick access to event details

**Integration:**

The Calendar Module connects with:

- Garden Module for task scheduling
- Development Module for event planning
- Maintenance Module for visit scheduling
- Social Events Module for community activities
- External calendar applications via iCalendar feed
- User profiles for event attribution
- Notification system for event reminders

#### Discussion Forum Module 🗣️

![Threaded Discussions](https://img.shields.io/badge/Threaded_Discussions-Nested-success)
![Rich Text Editing](https://img.shields.io/badge/Rich_Text_Editing-TipTap-blue)
![Topic Voting](https://img.shields.io/badge/Topic_Voting-Integrated-orange)
![Reactions](https://img.shields.io/badge/Reactions-Emoji-brightgreen)
![Attachments](https://img.shields.io/badge/Attachments-Cloud_Based-blueviolet)
![Real-time Updates](https://img.shields.io/badge/Real--time_Updates-SWR-purple)

The Discussion Forum Module provides a platform for members to engage in asynchronous conversations, propose topics, vote on them, and share information within the co-op community. It supports threaded replies, rich text content, reactions, and attachments.

**Key Features:**

1. **Threaded Discussions** 💬

   - Create new discussion topics with rich text content (TipTap)
   - Post replies to topics or other replies, forming nested threads
   - Edit and delete own replies (subject to permissions)
   - View discussions in a list with sorting and search capabilities

2. **Content Voting (Up/Down)** 👍👎

   - Upvote or downvote main discussion topics and individual replies
   - Visual indication of vote counts

3. **Topic Voting (Polls)** ✅❌❓

   - Optionally enable a formal Yes/No/Abstain poll on a discussion topic upon creation
   - Set start and end times for voting
   - Members can cast their vote within the active period
   - View poll results after the voting period ends

4. **Reactions** 😀❤️🎉

   - React to main discussion topics and replies using emojis
   - View aggregated reaction counts
   - Toggle own reactions

5. **Rich Text & Attachments** 📝📎

   - Compose topics and replies using a rich text editor (TipTap)
   - Attach files (images, documents) to replies, stored in cloud storage (Cloudinary/Supabase Storage)
   - View and download attachments

6. **Real-time Updates & State Management** 🔄
   - Client-side data fetching and caching using useApiSWR for responsiveness
   - Optimistic UI updates for actions like voting, reacting, and replying
   - URL state management (nuqs) for list view filters (page, sort, search)

**Technical Implementation:**

The Discussion Forum Module leverages:

- Next.js 15 App Router with Server Components for initial loads (/page.tsx, /[id]/page.tsx)
- Client Components (discussion-list-panel.tsx, discussion-detail-panel.tsx, reply-item.tsx) for interactivity
- useApiSWR hook for client-side data fetching, revalidation, and managing cache updates after mutations
- Server Actions (/actions/discussion-forum/) for all data mutations (create, update, delete, vote, react) returning Promise<ActionResult<...>>
- TipTap editor (components/members/my-editor/forum-editor.tsx) for rich text input
- Cloudinary or Supabase Storage for handling file attachments (attachment-actions.ts)
- nuqs library for managing list view state (pagination, sorting, search) in URL query parameters
- Recursive rendering (reply-list.tsx, reply-item.tsx) to display nested reply threads based on data processed by utils/forum-utils.ts (buildReplyTree)

**Database Schema:**

The module is supported by several PostgreSQL tables within Supabase:

- `discussions`: Stores main topic details (title, content, author, poll settings)
- `discussion_replies`: Stores replies (content, author, parent reply/discussion ID)
- `discussion_votes`: Tracks up/down votes on discussions and replies
- `discussion_reactions`: Tracks emoji reactions on discussions and replies
- `discussion_polls`: Stores poll details linked to a discussion (question, start/end times)
- `discussion_poll_votes`: Tracks member votes (yes/no/abstain) on polls
- `discussion_reply_attachments`: Stores metadata about attachments linked to replies (file URL, type, size)
- RLS Policies: Row Level Security is critical to ensure users can only perform actions they are authorized for (e.g., voting once, editing own replies, respecting poll timings)

**User Experience:**

The Discussion Forum interface prioritizes:

- Clear separation between discussion topics and threaded replies
- Intuitive controls for voting, reacting, replying, and editing
- Responsive design for usability across devices
- Rich text editing experience with TipTap
- Secure and easy attachment handling
- Loading states (skeletons for initial load, subtle indicators for revalidation) and error feedback (e.g., via toasts)
- Optimistic UI updates for a snappy feel during interactions

**Integration:**

The Discussion Forum Module connects with:

- User Profiles (profiles table) for authorship, voting, and reactions attribution
- Cloud Storage (Cloudinary / Supabase Storage) for managing attachments
- Notification System (potentially) for alerting users about new replies or mentions
- Shared Components (emoji-reactions, render-tiptap-content)

#### Doodle Polls Module 📊

![Event Scheduling](https://img.shields.io/badge/Event_Scheduling-Flexible-success)
![Response Collection](https://img.shields.io/badge/Response_Collection-Interactive-blue)
![Event Creation](https://img.shields.io/badge/Event_Creation-Integrated-orange)
![Multiple Event Types](https://img.shields.io/badge/Multiple_Event_Types-Comprehensive-brightgreen)
![Participant Management](https://img.shields.io/badge/Participant_Management-Collaborative-blueviolet)
![Response Deadline](https://img.shields.io/badge/Response_Deadline-Automated-purple)

The Doodle Polls Module provides a flexible event scheduling system inspired by Doodle.com, allowing co-op members to propose multiple date and time options for events and collect availability responses from participants. This streamlines the process of finding optimal meeting times that work for the majority of members.

**Key Features:**

1. **Poll Creation and Management** 📆

   - Intuitive poll creation interface
   - Multiple date and time option support
   - Event type categorization (social events, meetings, maintenance, etc.)
   - Event description and location details
   - Response deadline setting
   - Poll status tracking (open, closed)
   - Poll editing capabilities for organisers

2. **Participant Response System** 👥

   - Simple yes/maybe/no response options
   - Visual response grid for easy overview
   - Response tracking by participant
   - Response modification capabilities
   - Real-time updates to poll status
   - Clear visual indication of availability
   - Participant list management

3. **Time Slot Analysis** ⏰

   - Automatic calculation of optimal time slots
   - Visual highlighting of best options
   - Participant count summaries per time slot
   - Availability breakdown (yes/maybe/no)
   - Easy identification of most suitable times
   - Sort options by highest availability

4. **Event Creation** 🎯

   - One-click event creation from poll results
   - Automatic transfer of poll details to event
   - Participant response conversion to event attendance
   - Integration with calendar system
   - Post-creation poll status updates
   - Seamless transition from scheduling to event management

5. **Poll Overview and Navigation** 🔍
   - Sortable poll listings
   - Filtering options (my polls, all polls, active polls)
   - Search functionality
   - Date range filtering
   - Event type filtering
   - Visual status indicators
   - Quick access to recent and upcoming polls

**Technical Implementation:**

The Doodle Polls Module leverages:

- React Server Components for efficient data loading
- Client-side interactivity for response collection
- Optimistic UI updates for responsive user experience
- Server actions for secure data operations
- Form validation for data integrity
- Date and time manipulation utilities
- Integration with calendar system for event creation

**Database Schema:**

The module is supported by a comprehensive set of database tables:

- `doodle_polls`: Core poll information and metadata
- `doodle_poll_options`: Date and time options for each poll
- `doodle_poll_participants`: Participant responses and tracking
- Integration with user profiles and event tables

**User Experience:**

The Doodle Polls interface prioritizes:

- Intuitive poll creation process
- Clear visual representation of availability
- Simple response mechanism for participants
- Mobile-responsive design for on-the-go responses
- Streamlined event creation from poll results
- Accessible overview of all active polls

**Integration:**

The Doodle Polls Module connects with:

- Calendar system for event creation and scheduling
- User profiles for participant identification
- Notification system for poll updates and deadlines
- Event management for post-poll event creation
- Social event system for social gathering scheduling
- Meeting management for official meeting scheduling

#### Gallery Module 📸

![Image Management](https://img.shields.io/badge/Image_Management-Cloud_Based-success)
![Image Viewing](https://img.shields.io/badge/Image_Viewing-Interactive-blue)
![Website Integration](https://img.shields.io/badge/Website_Integration-Seamless-orange)
![Upload Interface](https://img.shields.io/badge/Upload_Interface-User_Friendly-brightgreen)
![Image optimisation](https://img.shields.io/badge/Image_optimisation-Automatic-blueviolet)
![Lightbox Display](https://img.shields.io/badge/Lightbox_Display-Responsive-purple)

The Gallery Module provides a comprehensive image management system that allows co-op members to upload, view, and share images through both the members portal and the public website. Built on Cloudinary cloud storage, it ensures efficient handling of images while providing an intuitive user interface.

**Key Features:**

1. **Image Management** 🖼️

   - Cloud-based image storage with Cloudinary
   - Secure upload functionality
   - Image deletion capabilities
   - Metadata tracking for images
   - Automatic image optimisation
   - Upload date tracking
   - Bulk management operations

2. **Viewing Experience** 👁️

   - Responsive image grid layout
   - Lightbox/carousel for fullscreen viewing
   - Image zooming capabilities
   - Mobile-friendly design
   - Pagination for large image collections
   - Loading state indicators with skeletons
   - Sort options for different viewing preferences

3. **Image Manipulation** ✂️

   - On-the-fly image optimisation
   - Responsive sizing based on device
   - Automatic format conversion for optimal delivery
   - Quality adjustments for bandwidth saving
   - Preview generation for thumbnails
   - Zoom functionality for detailed inspection
   - High-quality preservation of original images

4. **Website Integration** 🌐

   - Public-facing gallery on the co-op website
   - API endpoints for secure image access
   - Selective sharing of images to public site
   - Consistent design across member and public views
   - Direct links for sharing specific images
   - SEO-friendly image attributes
   - Accessible image viewing for all users

5. **User Controls** 🔑
   - Download functionality
   - Refresh capability for real-time updates
   - Intuitive drag-and-drop upload interface
   - Progress indicators for uploads
   - Descriptive error messaging
   - Confirmation dialogs for deletions
   - Mobile-optimised controls

**Technical Implementation:**

The Gallery Module leverages:

- Cloudinary for cloud-based image storage and manipulation
- React Server Components for initial image loading
- Client-side interactivity for dynamic gallery experiences
- Optimistic UI updates for immediate feedback
- Server actions for secure image operations
- Custom image optimisation using Cloudinary transformations
- Progressive loading techniques for performance
- Next.js Image component for optimised delivery

**Storage Architecture:**

The module uses Cloudinary cloud storage instead of traditional database tables:

- Images stored in dedicated 'coop-images/' prefix
- Metadata including upload date, dimensions, and format
- Secure API integration with environment variable configuration
- Cloudinary SDKs for server and client-side operations
- No direct database tables needed, leveraging cloud storage instead

**User Experience:**

The Gallery interface prioritizes:

- Fast and responsive image loading
- Intuitive navigation between gallery and individual images
- Smooth transitions in lightbox/carousel view
- Simple drag-and-drop upload experience
- Clear visual feedback for operations
- Skeleton loading states for perceived performance
- Accessible image viewing with proper alt text

**Integration:**

The Gallery Module connects with:

- Public website through dedicated API endpoints
- Cloud storage for image persistence
- User profiles for upload attribution
- Notification system for upload/delete confirmations
- Maintenance module for maintenance-related images
- Garden module for garden documentation
- Events system for event photography

#### Social Events Module 🎉

![Event Organisation](https://img.shields.io/badge/Event_Organisation-Comprehensive-success)
![Attendance Management](https://img.shields.io/badge/Attendance_Management-Interactive-blue)
![Photo Sharing](https://img.shields.io/badge/Photo_Sharing-Cloud_Based-orange)
![Responsive UI](https://img.shields.io/badge/Responsive_UI-Adaptive_Layout-brightgreen)
![Event Filtering](https://img.shields.io/badge/Event_Filtering-Multi_Parameter-blueviolet)
![Community Building](https://img.shields.io/badge/Community_Building-Engagement_Focused-purple)

The Social Events Module provides a dedicated platform for co-op members to organise and participate in community events. This module facilitates stronger community bonds through shared social activities, allowing members to easily create events, track attendance, share photographs, and engage in discussions.

**Key Features:**

1. **Event Management** 🗓️

   - Intuitive modal interface for creating new social events
   - Category-based event organisation (film nights, meals, parties, etc.)
   - Flexible scheduling with date, time and duration fields
   - Location specification for event planning
   - Public/private event options with "open to everyone" toggle
   - Comprehensive event editing capabilities
   - Status tracking (upcoming, completed, cancelled)
   - Event deletion with confirmation dialog

2. **Participation System** 👤

   - Three-state attendance tracking (going, maybe, not going)
   - Real-time participant listing and counting
   - Visual indicators for attendance status
   - One-click response updating
   - Optimistic UI updates for immediate feedback
   - Participant profiles with name display
   - Colour-coded user identifiers
   - Mobile-friendly participation controls

3. **Event Photos** 📸

   - Event-specific image galleries
   - Direct image uploads via modal interface
   - Cloud storage integration with Cloudinary
   - Chronological sorting of event photographs
   - Image attribution to uploaders
   - Image download functionality
   - Secure deletion with confirmation
   - Image zoom capability for detailed viewing

4. **Event Discovery** 🔍

   - Card-based event listing interface
   - Multi-parameter filtering (category, status)
   - Customisable sorting options (creation date, event date)
   - Sort direction control (ascending/descending)
   - Pagination for browsing large event collections
   - Responsive grid layout for various devices
   - Visual event cards with key information
   - Quick access to event details

5. **Discussion System** 💬
   - Event-specific comment threads
   - Real-time comment posting
   - User attribution for all comments
   - Chronological comment ordering
   - Integrated with shared comments component
   - Mobile-responsive comment display
   - Support for conversations around events

**Technical Implementation:**

The Social Events Module leverages:

- React Server Components for initial data loading
- Client components with React hooks for interactive elements
- Optimistic UI updates for responsive user experience
- Form validation for data integrity
- Server actions for secure database operations
- Responsive layouts for desktop and mobile access
- Query parameter state management with nuqs
- CloudSnap integration for image storage and retrieval

**Database Schema:**

The module is supported by a set of interconnected tables:

- `social_events`: Stores event details including title, description, category, status, timing, and location
- `social_event_participants`: Tracks member attendance with status options (going, maybe, not going)
- `social_event_images`: Manages event photos with Cloudinary integration
- `social_event_comments`: Stores discussion threads for social events

**User Experience:**

The module features:

- Adaptive layouts for both desktop and mobile devices
- Two-column desktop view for optimal information display
- Single-column mobile view for streamlined access
- Modal interfaces for creating and editing events
- Intuitive card-based event discovery
- Simple attendance response mechanism
- Straightforward image uploading and viewing
- Integrated discussion capability

**Integration:**

The Social Events Module connects with:

- User profiles for participant identification
- Comments system for discussions
- Cloudinary for image management
- URL state management for filtering and sorting preferences
- Gallery components for image display
- Alert systems for notifications and confirmations

#### Feature Request Module 💡

![Request Tracking](https://img.shields.io/badge/Request_Tracking-Comprehensive-success)
![Priority Management](https://img.shields.io/badge/Priority_Management-Structured-blue)
![Status Workflow](https://img.shields.io/badge/Status_Workflow-organised-orange)
![Image Documentation](https://img.shields.io/badge/Image_Documentation-Cloud_Based-brightgreen)
![Comment System](https://img.shields.io/badge/Comment_System-Collaborative-blueviolet)
![Admin Management](https://img.shields.io/badge/Admin_Management-Integrated-purple)

The Feature Request Module is a purpose-built system designed to help housing cooperatives manage and track member suggestions for new features and improvements. It provides a structured workflow for submitting, reviewing, and implementing feature requests, with support for priority management, status tracking, image documentation, and collaborative discussion.

**Key Features:**

1. **Feature Request Management** 📝

   - Comprehensive request creation with title and detailed description
   - Multi-level priority system (low, medium, high, urgent)
   - Status workflow tracking (pending, under_review, approved, rejected, implemented)
   - Admin notification system for new requests
   - Assignment capability to responsible members
   - Expected completion date tracking
   - Admin notes for internal documentation
   - Detailed filtering and sorting options

2. **Status Workflow** 🔄

   - Five-stage status progression (pending → under_review → approved/rejected → implemented)
   - Visual status indicators with colour coding
   - Admin-controlled status transitions
   - Status change history tracking
   - Last modified tracking with user attribution
   - Admin visibility controls with "seen" status

3. **Image Documentation** 📸

   - Cloud-based image storage with Cloudinary
   - Multiple image uploads per feature request
   - Secure image management
   - Image attribution to uploaders
   - Image count tracking
   - Visual documentation of feature requests
   - optimised image delivery for performance

4. **Comment System** 💬

   - Threaded discussions on feature requests
   - User attribution for all comments
   - Chronological comment organisation
   - Emoji reaction capability
   - Historical communication archive
   - Collaborative decision-making support
   - Rich text formatting options

5. **Admin Management** 👤
   - Admin-specific views and controls
   - Request assignment to team members
   - Admin notes for internal communication
   - Admin notification system
   - Seen/unseen tracking for new requests
   - Priority adjustment capabilities
   - Implementation scheduling

**Technical Implementation:**

The Feature Request Module leverages:

- React Server Components for efficient data loading
- Client components for interactive elements
- Server actions for secure database operations
- Optimistic UI updates for responsive user experience
- Cloudinary integration for image management
- Form validation for data integrity
- Admin-specific permissions and capabilities
- URL state management with nuqs

**Database Schema:**

The module is supported by a comprehensive set of database tables:

- `feature_requests`: Core request information including title, description, status, priority
- `feature_request_images`: Image documentation with Cloudinary integration
- `feature_request_comments`: Discussion threads for collaborative decision-making
- `profiles`: User information for attribution and assignment

**User Experience:**

The Feature Request interface prioritizes:

- Intuitive request creation and submission
- Clear status visualisation with colour coding
- Sortable and filterable request listings
- Priority highlighting for important requests
- Streamlined image uploading and viewing
- Integrated discussion capability
- Mobile-responsive design for access anywhere

**Integration:**

The Feature Request Module connects with:

- User profiles for member identification and request attribution
- Admin permissions system for status management
- Comments system for collaborative discussions
- Cloudinary for image storage and optimisation
- URL state management for filtering and sorting preferences
- Notification system for status updates and new requests

#### Todo Management

- Task creation and assignment
- Progress tracking
- Due dates and reminders

#### Settings

- User profile management
- Notification preferences

#### Bug Report Module 🐛

![Bug Tracking](https://img.shields.io/badge/Bug_Tracking-Comprehensive-success)
![Priority Management](https://img.shields.io/badge/Priority_Management-Structured-blue)
![Status Workflow](https://img.shields.io/badge/Status_Workflow-organised-orange)
![Image Documentation](https://img.shields.io/badge/Image_Documentation-Cloud_Based-brightgreen)
![Comment System](https://img.shields.io/badge/Comment_System-Collaborative-blueviolet)
![Admin Management](https://img.shields.io/badge/Admin_Management-Integrated-purple)

The Bug Report Module provides a structured system for tracking and resolving issues within the co-op application. It enables members to report bugs, administrators to prioritize and manage issues, and developers to track the resolution process from identification to fixing.

**Key Features:**

1. **Bug Report Management** 🐞

   - Comprehensive bug submission with title and detailed description
   - Multi-level priority system (low, medium, high, critical)
   - Status workflow tracking (pending, under_review, confirmed, rejected, fixed)
   - Admin notification system for new bug reports
   - Assignment capability to responsible developers
   - Browser and device information capture
   - Bug reproduction steps documentation
   - Detailed filtering and sorting options

2. **Status Workflow** 🔄

   - Five-stage status progression (pending → under_review → confirmed/rejected → fixed)
   - Visual status indicators with colour coding
   - Admin-controlled status transitions
   - Status change history tracking
   - Last modified tracking with user attribution
   - Admin visibility controls with "seen" status

3. **Image Documentation** 📸

   - Cloud-based image storage with Cloudinary
   - Multiple screenshots per bug report
   - Secure image management
   - Image attribution to uploaders
   - Image count tracking
   - Visual documentation of issues
   - optimised image delivery for performance

4. **Comment System** 💬

   - Threaded discussions on bug reports
   - User attribution for all comments
   - Chronological comment organisation
   - Historical communication archive
   - Collaborative troubleshooting support
   - Developer notes and updates

5. **Administrator Tools** 👤
   - Admin-specific views and controls
   - Bug assignment to developers
   - Admin notes for internal communication
   - Admin notification system
   - Seen/unseen tracking for new reports
   - Priority adjustment capabilities
   - Fix verification workflow

**Technical Implementation:**

The Bug Report Module leverages:

- React Server Components for efficient data loading
- Client components for interactive elements
- Server actions for secure database operations
- Optimistic UI updates for responsive user experience
- Cloudinary integration for image management
- Form validation for data integrity
- Admin-specific permissions and capabilities
- URL state management with nuqs

**Database Schema:**

The module is supported by a comprehensive set of database tables:

- `bug_reports`: Core report information including title, description, status, priority
- `bug_report_images`: Image documentation with Cloudinary integration
- `bug_report_comments`: Discussion threads for collaborative troubleshooting
- `profiles`: User information for attribution and assignment

**User Experience:**

The Bug Report interface prioritizes:

- Intuitive bug reporting with clear form design
- Clear status visualisation with colour coding
- Sortable and filterable report listings
- Priority highlighting for critical issues
- Streamlined image uploading for screenshots
- Integrated discussion capability for troubleshooting
- Mobile-responsive design for reporting issues anywhere

**Integration:**

The Bug Report Module connects with:

- User profiles for member identification and bug attribution
- Admin permissions system for status management
- Comments system for collaborative discussions
- Cloudinary for image storage and optimisation
- URL state management for filtering and sorting preferences
- Notification system for status updates and new reports

#### Help Documentation Module 📚

![MDX Content](https://img.shields.io/badge/MDX_Content-Interactive-success)
![Category organisation](https://img.shields.io/badge/Category_organisation-Structured-blue)
![Section Navigation](https://img.shields.io/badge/Section_Navigation-Intuitive-orange)
![Responsive Design](https://img.shields.io/badge/Responsive_Design-Adaptive-brightgreen)
![Custom Components](https://img.shields.io/badge/Custom_Components-Integrated-blueviolet)
![Content Registry](https://img.shields.io/badge/Content_Registry-Centralized-purple)

The Help Documentation Module provides a comprehensive knowledge base for co-op members to understand the application's features, workflows, and best practices. It features interactive MDX content organised into logical sections, with an intuitive navigation system for quickly finding relevant information.

**Key Features:**

1. **MDX Content System** 📄

   - Interactive documentation with MDX format
   - Rich content capabilities beyond standard Markdown
   - Code examples with syntax highlighting
   - Custom React components in documentation
   - Embedded images and visual elements
   - Visual step-by-step guides
   - Keyboard shortcut documentation

2. **Section organisation** 📋

   - Logical categorization of help topics
   - Section-based navigation structure
   - Topic grouping by application module
   - Consistent section layout and design
   - Section descriptions for quick overview
   - Module-specific documentation areas
   - Feature-focused organisation

3. **Navigation Interface** 🧭

   - Sidebar navigation with section links
   - Persistent navigation across documentation
   - Visual indicators for current section
   - Mobile-responsive navigation adaptation
   - Table of contents for long sections
   - Search capability for finding topics (planned)
   - Quick access to related documentation

4. **Custom MDX Components** 🧩

   - Callout boxes for important information
   - Step sequence components for tutorials
   - Code blocks with copy functionality
   - Collapsible sections for detailed information
   - Visual comparison components (before/after)
   - Keyboard shortcut visualisation
   - Video embedding for tutorial content

5. **Content Registry** 📚
   - Centralized registry of all documentation
   - Automated section discovery and registration
   - Metadata for each documentation section
   - Path-based content organisation
   - Section title and description management
   - Dynamic section loading
   - Consistent documentation structure

**Technical Implementation:**

The Help Documentation Module leverages:

- Next.js MDX integration for content rendering
- React components for interactive documentation elements
- Server components for efficient content delivery
- Client components for interactive documentation features
- MDX registry for content organisation
- Dynamic imports for efficient code splitting
- Responsive design for all device types

**Content Structure:**

The module organises documentation into topic-based sections:

- Getting Started guide for new users
- Module-specific documentation (Treasury, Secretary, Garden, etc.)
- Feature-specific guides (Todos, Calendar, Social Events, etc.)
- Task-oriented documentation (Doodle Polls, etc.)
- Advanced usage documentation for power users (planned)

**User Experience:**

The Help Documentation interface prioritizes:

- Clear and readable content presentation
- Intuitive navigation between documentation sections
- Visual elements to enhance understanding
- Mobile-friendly responsive design
- Consistent layout and styling
- Progressive disclosure of complex information
- Quick access to relevant documentation

**Integration:**

The Help Documentation Module connects with:

- Application modules for context-specific help
- UI components for consistent experience
- Image management for visual documentation
- Code formatting for technical examples
- Responsive layout system for all devices
- URL-based navigation for direct section access

#### Push Notifications System 🔔

![Notification Delivery](https://img.shields.io/badge/Notification_Delivery-Realtime-success)
![Subscription Management](https://img.shields.io/badge/Subscription_Management-User_Controlled-blue)
![Multi-channel](https://img.shields.io/badge/Multi_channel-Comprehensive-orange)
![Service Worker](https://img.shields.io/badge/Service_Worker-PWA_Integrated-brightgreen)
![User Preferences](https://img.shields.io/badge/User_Preferences-Customizable-blueviolet)
![Cross-Module](https://img.shields.io/badge/Cross_Module-Integrated-purple)

## Progressive Web App (PWA)

The members portal is configured as a Progressive Web App, allowing members to install it on their devices and access it offline with cached data.

## Modern Data Fetching Architecture

The application implements a modern, efficient data fetching architecture using SWR (Stale-While-Revalidate) for client-side data fetching and caching. This approach combines the strengths of server-side rendering for initial page loads with client-side data fetching for dynamic updates.

### SWR Implementation

The SWR (Stale-While-Revalidate) implementation provides several key benefits:

1. **Automatic Caching**

   - Client-side data caching for improved performance
   - Automatic revalidation strategies
   - Deduplication of requests to minimize network traffic
   - Stale data display while fetching fresh data

2. **Optimistic UI Updates**

   - Immediate UI feedback before server confirmation
   - Automatic rollback on errors
   - Improved perceived performance for users
   - Real-time interface updates

3. **Consistent Error Handling**

   - Standardized error response format
   - Graceful fallback to cached data on errors
   - Automatic retry on failures
   - Comprehensive error reporting to users

4. **Server-Side Initial Data**
   - Server-rendered initial state for fast page loads
   - Hydration with client-side data for dynamic updates
   - SEO-friendly content delivery
   - Reduced initial load time

### Data Fetching Pattern

The application follows a consistent data fetching pattern:

1. **Server Components** fetch initial data during server-side rendering:

   ```typescript
   // Server Component
   const initialData = await fetchInitialData(searchParams);

   return <ClientComponent initialData={initialData} />;
   ```

2. **Client Components** use SWR with the initial data as fallback:

   ```typescript
   // Client Component
   const { data, error, isLoading, mutate } = useSWR(apiUrl, fetcher, {
     fallbackData: initialData,
     revalidateOnFocus: false,
   });
   ```

3. **API Routes** provide standardized data interfaces:

   ```typescript
   // API Route
   export async function GET(request: NextRequest) {
     try {
       const searchParams = request.nextUrl.searchParams;
       const result = await getData(searchParams);
       return NextResponse.json(result);
     } catch (error) {
       return NextResponse.json(
         { success: false, error: String(error) },
         { status: 500 }
       );
     }
   }
   ```

4. **Server Actions** handle data mutations:
   ```typescript
   // Server Action
   export async function updateData(id: string, data: DataType) {
     try {
       const result = await database.update(id, data);
       return { success: true, data: result };
     } catch (error) {
       return { success: false, error: String(error) };
     }
   }
   ```

### URL State Management

The application uses URL state management with `nuqs` for shareable state:

```typescript
// URL State Management
const [page, setPage] = useQueryState('page', {
  defaultValue: initialPage.toString(),
  parse: (value) => value,
});

const [filter, setFilter] = useQueryState('filter', {
  defaultValue: initialFilter,
  parse: (value) => value,
});
```

This approach ensures:

- Shareable URLs with complete application state
- Persistent state during navigation
- Bookmarkable filter and sort configurations
- SEO-friendly content parameters

### Modules Using SWR

The following modules have been migrated to the SWR data fetching pattern:

- Treasury Module
- Secretary Module
- Social Events Module
- Bug Reporting Module
- Feature Request Module
- Contacts Management
- Garden Module (in progress)

### Response Format Standard

All API responses follow a consistent format:

```typescript
interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  pagination?: {
    currentPage: number;
    pageSize: number;
    totalItems: number;
    totalPages: number;
  };
}
```

This standardization ensures consistent error handling, pagination support, and data structure across all application features.

### Scripts

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run start`: Start production server
- `npm run lint`: Run linting
- `npm run lint:fix`: Fix linting issues
- `npm run format`: Format code
- `npm test`: Run tests
- `npm run test:watch`: Run tests in watch mode

## Database Schema

The application uses a PostgreSQL database with tables for various features:

- User profiles and authentication
- Treasury management
- Secretary functions
- Garden projects and tasks
- Maintenance requests
- Social events
- Calendar events
- Todo items
- Bug reports
- Feature requests
- And more...

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
