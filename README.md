# Strobe
There's an entertaining idea that you could spin up a docker container PER REQUEST thus isolating every request. So I gave it a whirl.

I would call this a hack at best, but it's a fun proof of concept idea.

### Dependencies
docker (Yep that's it)

### Run
From the project directory, run ` bin/run.sh `

It will download and build the required containers and eventually go live on "http://localhost:5050"

Every new page request will be handled by a new container

### Notes / Thoughts
*Is this inefficient?* Absolutely.

*Why?* Buddy of mine and I thought about this a year ago, I finally got around to exploring it.

*Any gotchas?* If you mash refresh (in browser) and the request doesn't fully complete, the container will not clean up. Fair warning!

### Contact

jeef111x@gmail.com / @jeefy