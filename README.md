# startup
My startup project for BYU CS 260 (Web Programming)

The Peoria Area Community Festival of Nativities is a non-profit organization dedicated to creating an experience that allows people to reflect on the Savior in their observance of Christmas.
People living in the Peoria area and elsewhere lend their nativities to be displayed at the festival. 
I intend to create a website with an organized, integrated nativity registration and volunteer experience.
The main goals:
1. Maintainability -- The people who will be in charge of maintaining the website over time do not have in-depth knowledge of programming and need easy tools to maintain the site.
2. Easy to use -- Many people with varying levels of comfort with technology provide nativities and volunteer hours for the festival, ad the website needs to be accessible for all of them.

![Nativity Registration Page mockup](/assets/images/mockup1.jpg)

Key Features:
 - Personalized nativity dashboard with all registered nativities, important dates, and to-dos. 
 - Administrator-specific pages to do things like send emails, retrieve information about all registered nativities, etc.
 - Button-activated scripts to perform key administrator tasks.
   + (I don't know yet what all of these tasks will be, and I need to talk to my mom about what features she needs. At least one of them will be to switch the website from an active mode to a dormant mode. Because the Community Festival of Nativities is a seasonal event, many of the features of the website should only be accessible for part of the year, especially if a reduced version of the server will have a lower operating cost in off-season months.)
   
Good documentation is essential to a successful project.
Clear instructions make assignments easier to complete.

Assignments:
1. Discord
    - For this assignment I joined the class Discord and familiarized myself with the different channels and available reference materials in each.
2. Console
    - From this assignment I learned two new commands: top and less, which seem really useful. I'll have to look at their man pages to get more familiar with them.
    - I was reminded of the pwd command, which I always forget about.
3. GitHub
    - From this assignment I learned about viewing commits in vscode and GitHub.
    - I also learned about how to view diffs in vscode to effectively resolve merge conflicts.
4. Startup Specification
    - For this assignment I wrote up an elevator pitch for my webapp idea, Community Cookbook.
    - I also made a simple mockup of one of the pages of my webapp. More to come.
5. EC2
    - For this assignment I created an EC2 instance, so I now have a running server!
    - SSH command: `ssh -i [keypair] ubuntu@18.219.86.195`
6. Route 53
    - It was really easy to register a domain name. Picking a good one is probably the hardest part most of the time.
    - In order to get my domain name connected to my server, I had to create an A record redirecting it to the IP address of my server.
    - A second A record with a wildcard character redirects all the subdomains.
7. Caddy
    - I'm not actually 100% sure how the Caddyfile works (I'd have to dig in more to the syntax to know what I did)
    - But in the meantime, I'm serving a secure connection to my server!
8. Simon HTML
    - HTML is a language for expressing the structure of content.
    - See https://github.com/RebekahSowards/simon for some examples of HTML.
9. Startup HTML and CSS
    - I did these two assignments together, because I found that I didn't fully understand what I needed in my HTML until I was trying to style it.
    - I found it easier to style the window at the size I had and then add reactive styling.
    - It's easy to spend a lot longer on styling than you think you need; make incremental goals and take small steps (and don't get too sucked in).
10. Simon JS
    - Every script must be linked in a <script/> tag so that the HTML can find the code to connect to.
    - Everything you want to change has to be found in the DOM somehow, good unique tags are the easiest way to do that.
    - Tables are easy to make! That will make some aspects of my life a lot easier!
11. Simon Service
    - The express package makes it really easy to deploy an API service from the same server as your website.
    - I learned how to use npm a little bit!