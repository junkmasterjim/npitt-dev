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

- *New sidebar and overall website feel.*
- *More sophisticated and compact layout.*
- *Geist font.*
- *Light & Dark mode.*


The majority of work was done on the UI. Overall, the new design is much more sophisticated and compact.

Here's a quick rundown of the changes:

### **Hero**

![Hero Section](/devpillar/hero.png)

- *Newsletter CTA is now one of the first things the user sees.*
- *Cleaner design.*
- *Number of resources clearly displayed.*

### **Resource Cards**

![Resource Cards](/devpillar/resource-cards.png)

- *Compact design.*
- *Design allows for dense, or spaced layouts.*
- *Design is consistent with the rest of the site.*

### **Sidebar & Categories**

![Side by side of the old and new sidebar.](/devpillar/sidebars.png)

- *New sidebar design.*
- *Categories are now more organized.*
- *Easier to read.*

### Page Layouts

![Route Layouts](/devpillar/page-layouts.png)

- *New layouts for categories, search, profile, etc.*
- *Stylish headings for each page.*
- *Buttons to submit resources on every page.*
- *Consistent layout across all pages.*
- *Sort method now in heading & doens't take up extra space.*

### Footer

![Footer](/devpillar/footer.png)

- *Consistent with rest of the site.*
- *Simple & to the point.*
- *Newsletter CTA.*

### Login Page

![Login Page](/devpillar/login.png)

- *Clean design.*
- *No more weird layout shifts.*
- *Added Google sign-in.*

### Dark Mode

![Dark Mode](/devpillar/dark-mode.png)

- *Dark mode looks pretty good.*
- *So does light mode.*
- *What else is there to say?*

And thats basically it for the UI, among other minor tweaks. I think it looks great, and blows the last design out of the water.

---

## **2. Resource Submissions**

![Resource Submissions](/devpillar/contributions.png)

Another core change is how submissions are handled. Previously they hit an API endpoint via a (very poorly designed) dialog form, and were stored in a Supabase table for me to go through later.

Now, they're community-driven and managed through pull requests on GitHub. I really feel like this will improve the user experience and promote a stronger community presence.

*Fun fact: the old design had a secret `/requests` page that I would use to log and track the resources. It was a disaster.*

---

## **3. Updated Categories**

With a new sidebar, comes updates to the categories.

Before, I had 41 categories, which was a bit much. Now, there are 10 main categories, and each one has it's own subcategories. This makes it much easier to find resources, and much easier to manage.

---

## **10. Next Up…**
*Current goals for DevPillar are to add a TON of new resources, and do some marketing to get new users and hopefully grow the project. I would love for it to become self-sufficient and grow via mostly community engagement.*

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

*p.s. I'm always looking for new resources. If you have one in mind, please contribute!*
