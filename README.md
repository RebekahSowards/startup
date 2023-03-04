# startup
My startup project for BYU CS 260 (Web Programming)

Community Cookbook is a recipe organizing and sharing webapp, where you can keep a record of recipes you have made, how much time they actually took,how much they cost, whether they were worth making again, etc.
We all use online recipes, but they're difficult to keep track of, and Pinterest doesn't show all of the information you want to see about them. 
With Community Cookbook you can follow recipe creators (food bloggers) to see their newest recipes, and you can also add friends to see their recipe collections.
Everyone knows that the worst part of being an adult is choosing what to eat for dinner every day for the rest of your life. Community Cookbook takes some of that work away by creating a record of things you have made, things other cooks you trust have made, and how much time/effort is actually required to make those things. Make meal planning easier with Community Cookbook.

![Community Cookbook mockup](/assets/images/mockup0.jpg)

Key Features:
 - Recipes organized in a cookbook on your personal page
 - Add key details to recipes such as time to make, expense, comments, and tags
 - Tags (dinner, dessert, extra fast, very cheap, etc.) to help you pick recipes based on what you need
 - Add friends to see their cookbooks
 - Review recipes you have made to contribute to the online conversation
 - Add custom recipes (not from external sites) to share your family-favorite recipes with friends

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