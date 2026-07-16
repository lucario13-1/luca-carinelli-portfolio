# Owner's Guide — How to Run and Update Your Website

This guide is written for you, not for a developer. No prior web experience
assumed. Read it top to bottom once, then keep it around as a reference.

Your site is built with **Next.js** (a React framework), **TypeScript**,
**Tailwind CSS**, **Framer Motion**, and **shadcn/ui** components. You do not
need to understand any of those to make day-to-day edits — almost every
change you'll want to make lives in a handful of plain data files described
below.

---

## 1. Preview the site on your computer

You only need to do the one-time setup once. After that, "start the site"
is a single command.

**One-time setup:**

1. Install [Node.js](https://nodejs.org) (the LTS version) if you don't have
   it already.
2. Open the Terminal app and navigate into the project folder:
   ```
   cd "/Users/lucacarinelli/Desktop/Claude Projects"
   ```
3. Install the project's dependencies (only needed once, or after you change
   dependencies):
   ```
   npm install
   ```

**Every time you want to preview the site:**

```
npm run dev
```

Then open **http://localhost:3000** in your browser. The site will hot-reload
as you edit files — save a file, glance back at the browser, see the change.

Stop the server anytime with `Ctrl + C` in the terminal.

---

## 2. The files you'll actually edit

Everything you'll touch day-to-day lives in `src/data/`. You will almost
never need to open anything in `src/components/` or `src/app/` — those are
the "plumbing" that renders your data.

| File | What it controls |
|---|---|
| `src/data/site.ts` | Your name, title, location, homepage intro paragraph, "what I'm looking for", interests, engineering philosophy, nav links, social links, resume file path |
| `src/data/projects.ts` | Every project card + case study modal on the Projects page |
| `src/data/experience.ts` | Each job card on the Experience page |
| `src/data/timeline.ts` | The combined education + work timeline on the About page |
| `src/data/skills.ts` | The categorized skills on the Skills page |

Every field in these files has a comment above it explaining what it does.
Open any one of them in a text editor (VS Code is a good free option) and
you'll see instructions written directly above each section.

**Golden rule:** only edit the *values* (the text between quotes), not the
structure (the `{`, `}`, `[`, `]`, and field names like `title:`). If you
keep that in mind you basically cannot break the site by editing text.

---

## 3. Updating homepage text, bio, and contact info

Open `src/data/site.ts`. The fields you'll change most:

- `name`, `title`, `location` — top-of-page identity
- `heroIntro` — the paragraph under your name on the homepage
- `about.whoIAm`, `about.whyEngineering`, `about.approachToday` — the About
  page story paragraphs
- `philosophy` — the 4 "how I work" cards on the homepage
- `lookingFor` — the bullet list of what kind of roles you want
- `currentInterests` — the R&D-style topics you're following
- `links.linkedin`, `links.github`, `links.email` — set any of these to an
  empty string `""` to hide that icon/link everywhere on the site
- `resumeFile` — path to your resume PDF (see section 5)

---

## 4. Adding, removing, renaming, and reordering projects

Everything for the Projects page lives in **`src/data/projects.ts`**.

### To add a new project
Copy an existing project object (from the opening `{` to the closing `},`),
paste it as a new entry in the `projects` array, then edit its fields. Give
it a unique `slug` (used in the URL, lowercase-with-dashes, no spaces).

### To remove a project
Delete its entire `{ ... },` object from the array.

### To rename a project
Change its `title` field. You can also change `slug`, but if you do, update
any link that points to `/projects?project=old-slug` elsewhere on the site
(the homepage's "Featured Project" section links by slug).

### To reorder projects
Change the `order` number (lower numbers show first), or just move the
object up/down within the array — either works, `order` wins if they
conflict.

### To feature a project on the homepage
Set `featured: true` on that project. The homepage shows the first featured
project it finds (by `order`). Only one project should really be featured
at a time for the cleanest homepage layout.

### Field reference

| Field | What it is |
|---|---|
| `title` | Project name shown everywhere |
| `slug` | URL-safe id, must be unique |
| `date` | e.g. `"Capstone · 2024"` |
| `category` | Must match one of the categories already used elsewhere (or add a new one — see below) |
| `thumbnail` | Path to the grid-card image (see section 5) |
| `gallery` | Array of image paths for the modal's Gallery tab |
| `video` | A full YouTube or Vimeo URL, or `""` to hide the video |
| `tags` | Short chips shown on the card and modal |
| `tools` | Software/tools list shown in the modal |
| `skills` | Skills-demonstrated list shown in the modal |
| `overview`, `problem`, `role`, `process`, `analysis`, `results`, `lessons` | The case-study writing — plain paragraphs |
| `downloads` | Array of `{ label, href }` links to PDFs (see section 5) |

If you want a brand-new **category** (the filter pills on the Projects
page), add it to the `category` union type at the top of the file (the list
right after `category:`), then use it on any project.

---

## 5. Adding photos, videos, and downloadable files

All images and files live in the `public/` folder, and you reference them
from the data files using a path that starts with `/`.

### Headshot (homepage hero + About page photo)
These are currently placeholders. To add real photos:
1. Add your image file to `public/images/`, e.g. `public/images/headshot.jpg`.
2. Open `src/components/home/hero.tsx` and give the `<ImagePlaceholder>`
   component a `src="/images/headshot.jpg"` prop (right next to `alt=`).
3. Do the same in `src/app/about/page.tsx` for the About page photo.

### Project thumbnails and gallery photos
1. Create a folder per project, e.g. `public/images/projects/smart-surf-buoy/`.
2. Drop your images in there, e.g. `thumbnail.jpg`, `render-1.jpg`, `photo-1.jpg`.
3. In `src/data/projects.ts`, set that project's `thumbnail` field to
   `"/images/projects/smart-surf-buoy/thumbnail.jpg"`, and fill the `gallery`
   array with paths to the rest, e.g.:
   ```ts
   thumbnail: "/images/projects/smart-surf-buoy/thumbnail.jpg",
   gallery: [
     "/images/projects/smart-surf-buoy/render-1.jpg",
     "/images/projects/smart-surf-buoy/photo-1.jpg",
   ],
   ```
   Leave an entry as `""` to keep showing a placeholder tile for that slot.

### Company logos (Experience page)
Same idea: put a logo file in `public/images/logos/`, then pass it as `src`
to the `<ImagePlaceholder>` in `src/components/experience/experience-card.tsx`
— or, simpler, just leave logos as placeholders until you have real ones;
nothing breaks either way.

### Videos
No file upload needed — just paste a normal YouTube or Vimeo share link
into a project's `video` field in `projects.ts`, e.g.:
```ts
video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
```
The site automatically converts it into an embedded player.

### Downloadable files (project reports, capstone PDFs, etc.)
1. Put the PDF in `public/downloads/`, e.g.
   `public/downloads/smart-surf-buoy-report.pdf`.
2. Reference it in that project's `downloads` array:
   ```ts
   downloads: [
     { label: "Capstone final report (PDF)", href: "/downloads/smart-surf-buoy-report.pdf" },
   ],
   ```

**Image tips:** use `.jpg` for photos and `.png` for renders/screenshots
with transparency. Keep files under ~500KB each if you can (export at
"web quality", not full camera resolution) so pages load fast.

---

## 6. Updating your resume

1. Export your resume as a PDF.
2. Name it exactly `luca-carinelli-resume.pdf` and place it in
   `public/resume/`.
3. That's it — the navbar's "Resume" button, the homepage "View Resume"
   button, and the `/resume` page (which embeds it full-page) all pick it
   up automatically, because they all read the path from `resumeFile` in
   `src/data/site.ts`.

If you'd rather use a different filename, just update `resumeFile` in
`site.ts` to match.

---

## 7. Updating experience, education, and skills

- **Jobs/internships:** edit `src/data/experience.ts`. Each object is one
  card on the Experience page. Same add/remove/reorder rules as projects.
- **Timeline on the About page:** edit `src/data/timeline.ts`. This is
  separate from `experience.ts` on purpose — it's the condensed, mixed
  education+work view.
- **Skills:** edit `src/data/skills.ts`. Add or remove items from any
  category's `items` array. Give an item a `level` (0–100) to show a
  proficiency bar, or omit `level` to just show it as a plain tag.

---

## 8. The contact form (how it works today, and how to upgrade it)

The contact form doesn't have a backend server — it's a fully static site.
When someone submits it, it opens their email app with a pre-filled message
addressed to you. This works everywhere with zero setup and zero ongoing
cost, but it does require the visitor to have an email client configured.

If you'd like actual form submissions (no email client required), the
easiest upgrade path is a free tier of a form service like
[Formspree](https://formspree.io) or [Web3Forms](https://web3forms.com):
you'd replace the `handleSubmit` function in
`src/components/contact/contact-form.tsx` with a `fetch()` call to their
API. This is optional — the current version is a completely normal choice
for a portfolio site.

---

## 9. Making changes safely (don't skip this)

Before you trust a change, run these two commands from the project folder:

```
npm run lint
npm run build
```

- `npm run lint` catches typos in code syntax and common mistakes.
- `npm run build` does a full production build — if there's a real error
  (like a missing comma or an unclosed quote), it will tell you exactly
  which file and line.

If both commands finish without errors, your change is safe to deploy.
If you ever get stuck, undo your last edit and re-run `npm run build` to
confirm the site is back to a working state before trying again.

---

## 10. Deploying the site publicly (Vercel — recommended)

Vercel is built by the same team as Next.js, has a generous free tier for a
personal site, and deploying takes about 5 minutes.

1. **Put your code on GitHub** (if it isn't already):
   ```
   git init
   git add .
   git commit -m "Initial portfolio site"
   ```
   Create a new repository on [github.com](https://github.com/new), then
   follow GitHub's instructions to push your existing code to it.

2. **Import the project into Vercel:**
   - Go to [vercel.com](https://vercel.com) and sign up/log in with GitHub.
   - Click **Add New → Project**, select your repository, and click **Deploy**.
   - Vercel auto-detects Next.js — you don't need to change any settings.
   - After a minute or two, you'll get a live URL like
     `luca-carinelli-portfolio.vercel.app`.

3. **Every future update is automatic:** once connected, any time you
   `git push` a change to GitHub, Vercel rebuilds and redeploys the live
   site within a minute or two. You never need to manually "upload" anything
   again.

---

## 11. Connecting your own custom domain

Once your project is live on Vercel:

1. Buy a domain from a registrar — see domain recommendations below.
   (You can buy directly through Vercel's dashboard too, which skips a step,
   but is sometimes pricier than a dedicated registrar.)
2. In your Vercel project, go to **Settings → Domains** and add your domain
   (e.g. `lucacarinelli.ca`).
3. Vercel shows you exactly which DNS records to add (usually one `A`
   record and one `CNAME` record, or just an `A`/`ALIAS` record depending
   on the registrar).
4. Log into your domain registrar's dashboard, find the DNS settings for
   your domain, and add the records Vercel showed you.
5. DNS changes can take anywhere from a few minutes to ~24 hours to take
   effect. Vercel's dashboard will show a green checkmark once it detects
   the domain is correctly pointed.

Once that's done, `lucacarinelli.ca` (or whichever domain you pick) will
show your site directly — no `.vercel.app` needed.

### Domain name ideas

| Domain | Take |
|---|---|
| **`lucacarinelli.ca`** | **Recommended.** Short, exactly your name, `.ca` signals you're Canada-based (relevant for Calgary/Alberta employers), and reads as a serious personal-brand domain rather than a project site. |
| `lucacarinelli.com` | Also excellent — `.com` is the most universally trusted TLD for recruiters who may not think to try `.ca`. If both are available, buying both and pointing `.com` at the same site (or redirecting it to `.ca`) is a reasonable $12/year insurance policy. |
| `lucacarinelli.engineer` | Fun and on-the-nose, but newer TLDs can look slightly less "established" to conservative hiring managers at firms like Enbridge or Surerus Murphy. Better as a secondary/redirect domain than your primary link on a resume. |
| `lucacarinelli.dev` | Reads as software-engineer-coded to many recruiters; slightly off-brand for a mechanical engineering portfolio. |
| `lucacarinelli.me` | Fine, but `.me` skews more "personal blog" than "professional portfolio." |
| `lucacarinelliportfolio.com` | Avoid — longer domains are harder to say out loud in an interview and to type correctly from a business card. |
| `builtbyluca.ca` / `lucaengineers.com` / `carinelliengineering.com` | Cute as a tagline, but a domain that isn't your literal name is one extra thing a recruiter has to remember or mistype. Your name alone is the strongest, most portable choice. |
| `lucacarinelli.design` | Wrong signal entirely for this site — `.design` reads as a design/creative portfolio, which conflicts with your stated goal of not looking like a design portfolio. |

**Bottom line:** buy `lucacarinelli.ca` (and ideally `lucacarinelli.com` as
well if it's available and cheap) and point both at the same Vercel
project. Put the `.ca` link on your resume and LinkedIn.

---

## 12. Ongoing maintenance, as someone who isn't a web developer

- **Small text/content changes** (fixing a typo, updating a job description,
  swapping a project photo): just edit the relevant file in `src/data/`,
  run `npm run build` to confirm nothing broke, then `git add . && git commit
  -m "update X" && git push`. Vercel handles the rest.
- **You don't need to touch anything in `node_modules/`, `.next/`, or any
  file you don't recognize.** If you're ever unsure whether a file is safe
  to edit, it's safe if it's inside `src/data/` or `public/`.
- **If the site won't build,** the error message from `npm run build`
  almost always names the exact file and line number. The most common
  causes are a missing comma between two objects in an array, or a quote
  mark that wasn't closed.
- **Updating dependencies** (Next.js, React, etc.) isn't something you need
  to do regularly for a personal site — it's fine to leave versions as-is
  for months at a time. If you want to update later, run `npm outdated` to
  see what's available and `npm update` to pull in safe updates.
- **Backups:** as long as your code lives on GitHub, you have automatic
  version history. If you ever break something, you can always go back to
  an earlier commit.
