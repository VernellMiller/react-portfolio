import React from 'react'

const Projects = () => {
    return (
        <div id="projects" className="container bg-light">
            <div class="container row">
                <div id="portfolio" class="text-start">
                    <h1 class="fw-bold ">Development Projects</h1>
                </div>
{/* project1 */}
                <div class="row flex-row align-items-center gap100">
                    <div id="decripton" class="col-md-6">
                        <p class="text-start" id="pnotes">project one</p>
                        <h5 class="text-start" id="ptitle">CHOOSE YOUR POKEMON.</h5>
                        <p class="text-start" id="pnotes">Allows you to live out your pokemon trainer <br></br>fantasies while testing your Pokemon knowledge. <br></br> Are you the Very Best Pokemon Trainer? </p>
                    </div>
                        <div class="col-md-6">
                            <img class="shadow-sm p-3 bg-body rounded bg-body rounded" id="pIMG" src="/images/project1.png" alt="Project1" />
                        </div>
                </div>
{/* project2 */}
                <div class="row flex-row align-items-center gap100">
                    <div class="col-md-6">
                        <img class="shadow-sm p-3 bg-body rounded bg-body rounded" id="pIMG" src="/images/project2.png" alt="Project2" />
                    </div>
                    <div id="description" class="col-md-6">
                        <p class="text-start" id="pnotes">project two</p>
                        <h5 class="text-start" id="ptitle">LEVEL UP YOUR LINEUP</h5>
                        <p class="text-start" id="pnotes">KEEPME allows me or YOU to schedule me in your lineup. That way we can kEEP track of what games I can play. Just enter a little bit of info on your team, time and place and we're ready to play.</p>
                    </div>
                </div>
{/* project3 */}
                <div class="row gap100">
                    <div id="description" class="col-md-6">
                        <p class="text-start" id="pnotes">project three</p>
                        <h5 class="text-start" id="ptitle">BUILD YOUR TEAM.</h5>
                        <p class="text-start" id="pnotes">Calling all sports Fanatics. Your time has come. Use your knowledge of the game, create your players and build your favorite teams.</p>
                    </div>
                    <div class="col-md-6">
                        <img class="shadow-sm p-3 bg-body rounded bg-body rounded" id="pIMG" src="/images/project3.png" alt="Project3" />
                    </div>
                </div>
{/* project4 */}
                <div class="row gap100">
                    <div class="col-md-6">
                        <img class="shadow-sm p-3 bg-body rounded bg-body rounded" id="pIMG" src="/images/project4.png" alt="Project1" />
                    </div>
                    <div id="description" class="col-md-6">
                        <p class="text-start" id="pnotes">project four</p>
                        <h5 class="text-start" id="ptitle">RAAM - A FOOD PANTRY APP</h5>
                        <p class="text-start" id="pnotes">Community based, all-in-one app where anyone can create a local food pantry to lend a helping hand to their community. Also, locate a local pantry to donate or pick up essential items.</p>
                    </div>
                </div>
{/* project5 */}
                <div id="portfolio" class="text-start">
                    <h1 class="fw-bold ">Design Projects</h1>
                </div>
                <div class="row gap100">
                    <div id="description" class="col-md-6">
                        <p class="text-start" id="pnotes">branding, design and learning</p>
                        <h5 class="text-start" id="ptitle">TRAFFIC</h5>
                        <p class="text-start" id="pnotes">An app where I designed all aspects of the project. This was a personal project where taught myself various design techniques</p>
                    </div>
                    <div class="col-md-6">
                        <img class="shadow-sm p-3 bg-body rounded bg-body rounded" id="pIMG" src="/images/project5.png" alt="Project5" />
                    </div>
                </div>
{/* project6 */}
                <div class="row">
                    <div class="col-md-6">
                        <img class="shadow-sm p-3 bg-body rounded bg-body rounded" id="pIMG" src="/images/project6.png" alt="Project1" />
                    </div>
                    <div id="description" class="col-md-6">
                        <p class="text-start" id="pnotes">branding, design and learning</p>
                        <h5 class="text-start" id="ptitle">LOGO DESIGN</h5>
                        <p class="text-start" id="pnotes">One of many logo designs I've created. This was a personal project where I learned more about design</p>
                    </div>
                </div>
{/* project7 */}
                <div class="row gap100">
                    <div id="description" class="col-md-6">
                        <p class="text-start" id="pnotes">hobby and learning</p>
                        <h5 class="text-start" id="ptitle">Illustrator Design</h5>
                        <p class="text-start" id="pnotes">Learning and practicing in my favorite vector base software, Adobe Illustrator. I was inspired by various 3d renders.</p>
                    </div>
                    <div class="col-md-6">
                        <img class="shadow-sm p-3 bg-body rounded bg-body rounded" id="pIMG" src="/images/project7.png" alt="Project7" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects
