---
title: I spent 3 days redesigning my resource directory - DevPillar
date: jun 1 24
slug: devpillar-redesign
---

[![DevPillar Redesign](/devpillar/split.png)](https://devpillar.org)

## **Introduction**

After a brief hiatus. I came back to DevPillar for a redesign. I wanted to make it more community-focused, and grow it as an Open Source project. I also wanted to make it look better.

I think I did a pretty good job. The website is also a lot faster now due to some optimizations I made with passing props & data fetching. It's not perfect, but it's a lot better than it was before.

---

## **1. Total UI Overhaul**

- _New sidebar and overall website feel._
- _More sophisticated and compact layout._
- _Geist font._
- _Light & Dark mode._

The majority of work was done on the UI. Overall, the new design is much more sophisticated and compact.

Here's a quick rundown of the changes:

### **Hero**

![Hero Section](/devpillar/hero.png)

- _Newsletter CTA is now one of the first things the user sees._
- _Cleaner design._
- _Number of resources clearly displayed._

### **Resource Cards**

![Resource Cards](/devpillar/resource-cards.png)

- _Compact design._
- _Design allows for dense, or spaced layouts._
- _Design is consistent with the rest of the site._

### **Sidebar & Categories**

![Side by side of the old and new sidebar.](/devpillar/sidebars.png)

- _New sidebar design._
- _Categories are now more organized._
- _Easier to read._

### Page Layouts

![Route Layouts](/devpillar/page-layouts.png)

- _New layouts for categories, search, profile, etc._
- _Stylish headings for each page._
- _Buttons to submit resources on every page._
- _Consistent layout across all pages._
- _Sort method now in heading & doens't take up extra space._

### Footer

![Footer](/devpillar/footer.png)

- _Consistent with rest of the site._
- _Simple & to the point._
- _Newsletter CTA._

### Login Page

![Login Page](/devpillar/login.png)

- _Clean design._
- _No more weird layout shifts._
- _Added Google sign-in._

### Dark Mode

![Dark Mode](/devpillar/dark-mode.png)

- _Dark mode looks pretty good._
- _So does light mode._
- _What else is there to say?_

And thats basically it for the UI, among other minor tweaks. I think it looks great, and blows the last design out of the water.

---

## **2. Resource Submissions**

![Resource Submissions](/devpillar/contributions.png)

Another core change is how submissions are handled. Previously they hit an API endpoint via a (very poorly designed) dialog form, and were stored in a Supabase table for me to go through later.

Now, they're community-driven and managed through pull requests on GitHub. I really feel like this will improve the user experience and promote a stronger community presence.

_Fun fact: the old design had a secret `/requests` page that I would use to log and track the resources. It was a disaster._

---

## **3. Updated Categories**

With a new sidebar, comes updates to the categories.

Before, I had 41 categories, which was a bit much. Now, there are 10 main categories, and each one has it's own subcategories. This makes it much easier to find resources, and much easier to manage.

---

## **10. Next Up…**

_Current goals for DevPillar are to add a TON of new resources, and do some marketing to get new users and hopefully grow the project. I would love for it to become self-sufficient and grow via mostly community engagement._

Moving forward, the plan is to add a bunch of new resources and ramp up marketing efforts to attract more users.

The ultimate goal is for DevPillar to become self-sufficient and grow predominantly through community engagement.

---

## **Conclusion**

It's a new chapter ladies & gentlemen. I'm grateful to those who pushed me to continue this project.

At one point, I didn't think anybody was using it. Now I see that's not the case, and I'm excited to see where it goes from here.

The website is faster, more beautiful, and more user-focused than ever before. I'm excited to see where it goes from here.

---

Well that about wraps it up. If you have any questions, or want to share your thoughts, I'm always happy to hear them.

Cheers,

Noah

---

[Check out DevPillar here!](https://devpillar.org)

_p.s. I'm always looking for new resources. If you have one in mind, please contribute!_
