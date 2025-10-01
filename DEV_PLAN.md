# Revised Dev Team Task Map for You Speak Hackathon Submission

**Duration:** 7 Days (Oct 1 - Oct 7)  
**Team Structure:** Daily standups (15 mins)

---

## Phase 1: Setup & Planning (Oct 1 - Day 1)

**Goal:** Quick foundation to enable parallel work.

### Tasks:

1. **Set up AWS account/services** (Bedrock, Q, Amplify, etc.); assign IAM roles.
   - **Assigned:** BE (lead)
   - **Time:** 2 hours

2. **Initialize GitHub repo** with README skeleton; create project scaffold (`npx create-expo-app`, Amplify init). ✅ **COMPLETED**
   - **Assigned:** ME
   - **Time:** 2 hours
   - **Status:** Project scaffold created with Expo + Amplify Gen 2 backend

3. **Sketch architecture diagram** (simple Draw.io; include Bedrock/Q).
   - **Assigned:** AI (focus on AI flows), ME (overall)
   - **Time:** 1 hour

4. **Kickoff meeting:** Review plan, assign tasks.
   - **Assigned:** BE
   - **Time:** 30 min

**Milestone:** Repo live, Amplify ready. BE review: Confirm Bedrock/Q access.

---

## Phase 2: Core Development (Oct 2-3 - Days 2-3)

**Goal:** Build components in parallel.

### Mobile/Frontend Tasks:

1. **Implement screens:** Splash/Login (Cognito), Profile (avatars with DiceBear/Bedrock), DICTEST (audio via React Native).
   - **Assigned:** ME
   - **Time:** Day 2 (full)

2. **Build rooms:** AI SpeaX (UI for Bedrock quizzes), SpeakX Arena (leaderboard queries).
   - **Assigned:** ME
   - **Time:** Day 3 (morning)

3. **Add gamification:** Name generator (Faker.js + Bedrock), offline caching.
   - **Assigned:** ME, AI (Bedrock support)
   - **Time:** Day 3 (afternoon)

### Backend Tasks:

1. **Add Amplify categories:** Auth, Storage (S3), API (GraphQL/AppSync).
   - **Assigned:** BE
   - **Time:** Day 2 (morning)

2. **Write Lambdas:** Registration/scoring, matching, rewards (DynamoDB sim).
   - **Assigned:** BE
   - **Time:** Day 2 (afternoon)

3. **Integrate payments mock, notifications** (SNS + Bedrock prompts).
   - **Assigned:** BE, AI (Bedrock)
   - **Time:** Day 3

### AI Tasks:

1. **Integrate Bedrock:** Quizzes, scenarios, customizations.
   - **Assigned:** AI
   - **Time:** Day 2

2. **Embed Amazon Q:** In-app queries, dev optimizations.
   - **Assigned:** AI
   - **Time:** Day 3 (morning)

3. **Add speech:** Polly/Transcribe/Translate for lessons.
   - **Assigned:** AI
   - **Time:** Day 3 (afternoon)

**Milestone:** Basic screens/APIs functional. BE review: Test login/quiz.

---

## Phase 3: Integration & Real-Time (Oct 4 - Day 4)

**Goal:** Connect everything.

### Tasks:

1. **Hook frontend to backend:** APIs for rooms/rewards (AppSync updates).
   - **Assigned:** ME, BE
   - **Time:** Morning

2. **Add real-time:** WebSockets (API Gateway); basic chats (Chime SDK or text fallback).
   - **Assigned:** BE, ME
   - **Time:** Afternoon

3. **Security/fraud:** Gates, encryption.
   - **Assigned:** BE, AI (AI checks)
   - **Time:** 2 hours

4. **Multilingual test:** Bedrock/Translate on select languages.
   - **Assigned:** AI
   - **Time:** 1 hour

**Milestone:** End-to-end flow (e.g., lesson to SPK). BE review: Integration tests.

---

## Phase 4: Testing & Optimization (Oct 5 - Day 5)

**Goal:** Stable MVP.

### Tasks:

1. **Tests:** Unit (Jest/Postman), load (CloudWatch).
   - **Assigned:** All (pair up)
   - **Time:** Morning

2. **Polish UI/navigation;** edge cases (offline, fraud).
   - **Assigned:** ME (UI), AI (AI cases), BE (backend)
   - **Time:** Afternoon

**Milestone:** Bug-free build. BE review: Full demo walkthrough.

---

## Phase 5: Documentation & Deliverables (Oct 6 - Day 6)

**Goal:** Submission-ready.

### Tasks:

1. **Update README:** App details, AWS list, diagram.
   - **Assigned:** BE, ME
   - **Time:** Morning

2. **Record 3-min video:** Show key features (YouTube upload).
   - **Assigned:** ME (record), BE (review/narrate)
   - **Time:** Afternoon

3. **Prep slides** for Oct 11 presentation.
   - **Assigned:** AI, ME
   - **Time:** 2 hours

4. **Compile/submit form** (repo URL, video, etc.).
   - **Assigned:** BE
   - **Time:** 1 hour

**Milestone:** All ready. BE review: Dry-run.

---

## CTO (BE) Oversight

- **Daily:** Stand-ups; resolve issues (e.g., AWS setup)
- **Risks:** Prioritize essentials; simulate advanced features if needed
- **Resources:** Share credentials; aim 4-6 hours/day per person

---

## Team Roles

- **BE (Backend/CTO):** AWS setup, backend infrastructure, oversight
- **ME (Mobile/Frontend):** React Native app, UI/UX, screens
- **AI (AI Integration):** Bedrock, Amazon Q, speech services

