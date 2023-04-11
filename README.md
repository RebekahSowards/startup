# startup
My startup project for BYU CS 260 (Web Programming)

The "flip and write" game "Welcome to Your Perfect Home" can be played synchronously by up to 100 people and is ideal for a remote FHE experience; however, it does present some logistical issues when players are in multiple locations.
My webapp is a card generator designed to make the experience seamless.
Players in multiple locations see the same cards at the same time, and cards only advance when all players signal that they are done. 
This makes it easier to enjoy family night together!
(A note -- my family plays this remotely, but each household has its own copy of the game. I respect the IP in this game, and I intend to implement only the features required to make it easier to play remotely, not any features that would infringe on the creators' rights.)
Key Features:
- A randomized card generator to simulate a game of "Welcome to Your Perfect Home"
- A button for players to indicate that they are finished, so that cards only advance after all players have finished their turn
- A record of games played in the past, with the winner and winning score for each
- An API to reference cards used in previous turns

![Card Generator Page mockup](/assets/images/mockup2.jpg)
   
TODO:
1. New mockup image for card generator
2. Add login page and score page to Perfect Home
3. Turn in Perfect Home JS checkpoint
4. Simon MongoDB assignment
5. Simon Login
6. Simon WebSocket
7. Perfect Home service 
    - WebSocket (for the card advancing)
    - MongoDB (for the high scores)
    - API (for getting old scores)
    - Login
    - IN THAT ORDER (By importance to functionality)
8. Simon React
9. Perfect Home React
10. If we get to this point, we'll evaluate what else we need to do...

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