<template>
  <footer class="footer has-background-dark-gradient" id="pagefooter" aria-label="page footer">
    <section class="section">
      <div class="container">
        <div class="columns">
          <article class="column">
            <h5 class="title is-5 has-text-lightest">Chapters</h5>
            <nav>
              <ul class="menu-list">
                <li>
                  <a href="https://ti.to/cyprusjs/cyprusjs-nicosia" target="_blank">
                    <i class="fab fa-home"></i> Nicosia
                  </a>
                </li>
                <li>
                  <a href="https://ti.to/cyprusjs/cyprusjs-limassol" target="_blank">
                    <i class="fab fa-home"></i> Limassol
                  </a>
                </li>
                <li>
                  <a href="https://ti.to/cyprusjs/cyprusjs-paphos" target="_blank">
                    <i class="fab fa-home"></i> Paphos
                  </a>
                </li>
                <li>
                  <a href="https://ti.to/cyprusjs/cyprusjs-larnaca" target="_blank">
                    <i class="fab fa-home"></i> Larnaca
                  </a>
                </li>
              </ul>
            </nav>
          </article>
          <article class="column">
            <h5 class="title is-5 has-text-lightest">The Team</h5>
            <nav>
              <ul class="menu-list">
                <li>
                  <a href="https://twitter.com/PatrickHeneise" target="_blank">
                    <i class="fab fa-user-circle"></i> Patrick Heneise
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/jonasbroms" target="_blank">
                    <i class="fab fa-user-circle"></i> Jonas Bröms
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/alexandr_bbm" target="_blank">
                    <i class="fab fa-user-circle"></i> Alexander Gazizov
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/elgin_ali" target="_blank">
                    <i class="fab fa-user-circle"></i> Ali Elgin
                  </a>
                </li>
              </ul>
            </nav>
          </article>
          <article class="column">
            <h5 class="title is-5 has-text-lightest">Partners</h5>
            <nav>
              <ul class="menu-list">
                <li>
                  <a href="https://hugge.space/" target="_blank">Hügge Space</a>
                </li>
                <li>
                  <a href="http://www.ariscy.com/" target="_blank">ARIS</a>
                </li>
                <li>
                  <a href="https://www.facebook.com/FutureWorldsCenter/" target="_blank">Future Worlds Center</a>
                </li>
                <li>
                  <a href="https://www.odduse.com/" target="_blank">Odduse</a>
                </li>
              </ul>
            </nav>
          </article>
          <article class="column" id="socialmedia">
            <h5 class="title is-5 has-text-lightest">Get in touch</h5>
            <nav class="level is-mobile">
              <div class="level-item has-text-centered">
                <div>
                  <a class="link-twitter" href="https://twitter.com/cyprusjs" target="_blank" aria-label="CyprusJS Twitter Page">
                    <i class="fab fa-twitter fa-2x"></i>
                  </a>
                </div>
              </div>
              <div class="level-item has-text-centered">
                <div>
                  <a class="link-github" href="https://github.com/cyprusjs/cyprusjs.org" target="_blank" aria-label="CyprusJS LinkedIn Page">
                    <i class="fab fa-github fa-2x"></i>
                  </a>
                </div>
              </div>
              <div class="level-item has-text-centered">
                <div>
                  <a class="link-facebook" href="https://www.facebook.com/Cyprusjs-431172884395749/" target="_blank" aria-label="CyprusJS Facebook Page">
                    <i class="fab fa-facebook fa-2x"></i>
                  </a>
                </div>
              </div>
              <div class="level-item has-text-centered">
                <div>
                  <a class="link-instagram" href="https://github.com/cyprusjs/cyprusjs.org" target="_blank" aria-label="CyprusJS Instagram Page">
                    <i class="fab fa-instagram fa-2x"></i>
                  </a>
                </div>
              </div>
              <div class="level-item has-text-centered">
                <div>
                  <a class="link-linkedin" href="https://www.linkedin.com/groups/12274238/" target="_blank" aria-label="CyprusJS LinkedIn Page">
                    <i class="fab fa-linkedin fa-2x"></i>
                  </a>
                </div>
              </div>
            </nav>
          </article>
        </div>
      </div>
    </section>
    <section class="section" id="pagesocket" aria-label="page socket">
      <div class="container">
        <div class="column">
          <p class="is-size-7">Copyright © 2019 to the Authors of CyprusJS. All rights reserved. The source code is licensed <a href="https://github.com/cyprusjs/cyprusjs.org/LICENSE" target="_blank">MIT</a>. The website content is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a></p>
        </div>
      </div>
    </section>
  </footer>
</template>

<script>
export default {}
</script>

<style scoped>
.menu-list a {
  color: rgba(255, 255, 255, 0.38);
  transition: 0.3s;
  border-radius: 3px;
}
.menu-list a:hover {
  color: rgba(255, 255, 255, 0.87);
  background-color: rgba(255, 255, 255, 0.1);
}
.link-twitter,
.link-facebook,
.link-instagram,
.link-linkedin,
.link-github {
  color: rgba(255, 255, 255, 0.6);
  transition: 0.3s;
}
.link-twitter:hover,
.link-facebook:hover,
.link-instagram:hover,
.link-linkedin:hover,
.link-github:hover {
  color: rgba(255, 255, 255, 0.87);
}
</style>
