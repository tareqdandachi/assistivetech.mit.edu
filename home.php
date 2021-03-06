<!DOCTYPE html>

<html>

  <?php include 'includes/head.php'; ?>

  <body>

    <?php include 'includes/nav.php'; ?>

    <div class="banner" id="mainBanner">

      <div class="separator small"></div>

      <center>

        <img src="/resources/brand/group_logo.png" class="mainTitle" id="mainTitle">

        <div class="separator small"></div>

        <div class="button_container right"><div class="buttonAlt widthCompact scrollTo" id="ATHack"><center>ATHack</center></div></div>

        <div class="button_container left"><div class="button widthCompact"  onclick="location.href='./apply'"><center>Register Now</center></div></div>

        <br>

        <div class="button_container right"><div class="buttonAlt widthCompact" onclick="location.href='./projects'"><center>Our Projects</center></div></div>

        <div class="button_container left"><div class="button widthCompact" id="ourSponsors"><center>Our Sponsors</center></div></div>

      </center>

    </div>

    <div class="banner default centerOnSmall" id="ourMissionSection">

      <h1 class="centerOnSmall sideTitle"><x class="black">Our</x><br>Mission</h1>

        <p class="sectionSmallP" id="home-mission">

          Our mission is to make the world more <x class="c1 ub">accessible to everyone</x> by building connections within our community and fostering <x class="c2 ub">collaborative efforts</x> to create <x  class="c1 ub">inclusive technology.</x> Through ATHack, we introduce students to the fun (and challenging) design space of assistive technology while <x  class="c2 ub">building connections</x> between community members, engineers, and designers.  We hope to inspire participants to pursue projects in the AT space in the future.

        </p>

        <div class='separator'></div>

    </div>

    <div class="banner default blueBG centerOnSmall">

      <center>

        <div class="mobileHide">

          <img src="/resources/images/1.jpeg" class="vertImg down">
          <img src="/resources/images/2.jpeg" class="vertImg up">
          <img src="/resources/images/3.jpeg" class="vertImg down">

        </div>

        <div class="mobileShow">

          <img src="/resources/images/1s.jpeg" class="vertImg down">
          <img src="/resources/images/2s.jpeg" class="vertImg up">
          <img src="/resources/images/3.jpeg" class="vertImg down">

        </div>

        <div class="separator small"></div>

        <div class="button ignore widthWide noAnim" onclick="location.href='/gallery'"><center>See Our Photos</center></div>
        <div class="button ignore widthWide noAnim" id="openVideo"><center>Watch Our Video</center></div>

      </center>

    </div>

    <div class="banner default indented" id="ATHackSection">

      <img src="/resources/brand/athack_new.png" class="logoBanner sideLogo">

      <h2>What is <span class="c2 ub"><span class="c1 ub">AT</span>Hack</span></h2>

      <div id="home-athack-what">

        <p>ATHack matches groups of students with clients from the Cambridge/Boston community who are looking to work with students to prototype an assistive technology solution that addresses a problem they are having in their day-to-day life.  ATHack has two primary events: a “Meet The Co-Designers” dinner, followed two weeks later by a day-long hackathon.  Teams are welcome to do as much as they would like in between the two events!</p>

        <p>After the dinner, hackers have the opportunity to request specialized materials for their project.  On the day of the hackathon, hackers have access to a workspace that includes hand tools, 3D printers, a laser cutter, a full machine shop, and basic stock materials (e.g. adhesives, fasteners).</p>

      </div>

      <h2>When is <span class="c2 ub"><span class="c1 ub">AT</span>Hack</span></h2>

      <div id="home-athack-when">

        <p>Every year, ATHack is hosted around early March. This year's hackathon will be happening on March 2nd, while the “Meet The Co-Designers” dinner will be on Monday, February 11, 2019.</p>

      </div>

      <h2>How Do I <span class="c2 ub"><span class="c1 ub">Sign </span>Up</span></h2>

      <div id="home-athack-signup">

        <p>You can sign up to be a co-designer or to work with one.</p>

      </div>

      <center>
        <div class="buttonAltDark widthRelaxed" onclick="location.href='./events'">ATHack Details</div>
        <div class="buttonDark widthRelaxed" onclick="location.href='./apply'">Apply Now</div>
      </center>

      <div class="separator small"></div>

    </div>

    <div class="banner blend centerOnSmall" id="ourSponsorsSection">

      <center>

        <h1 class="b black titleSize2">Our <x class="b c1">Sponsors</x></h1>

        <div id="home-sponsors">

          <!-- This will be loaded dynamically without fallback content -->

        </div>

        <div class="separator small"></div>

        <div class="buttonDark" onclick="window.open('https://giving.mit.edu/search/node/2530097')">Donate Now</div>

      </center>

      <div class="separator"></div>

    </div>

    <?php include 'includes/footer.php' ?>

    <div id="hiddenVideo">

      <div id="closeVideo" class="close">
        <div class="close1"></div><div class="close2"></div>
      </div>

      <iframe class="videoFrame" src="https://www.youtube.com/embed/PEW-eqRvARg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

    </div>

  </body>

</html>
