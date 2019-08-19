<template>
  <footer
    class="footer has-background-light"
    id="pagefooter"
    aria-label="page footer"
  >
    <section class="section">
      <div class="container">
        <div class="columns">
          <article class="column">
            <h5 class="title is-5 has-text-darkest">Chapters</h5>
            <nav>
              <ul class="menu-list">
                <li>
                  <a
                    href="https://ti.to/cyprusjs/cyprusjs-nicosia"
                    target="_blank"
                  >
                    <i class="fab fa-home"></i> Nicosia
                  </a>
                </li>
                <li>
                  <a
                    href="https://ti.to/cyprusjs/cyprusjs-limassol"
                    target="_blank"
                  >
                    <i class="fab fa-home"></i> Limassol
                  </a>
                </li>
                <li>
                  <a
                    href="https://ti.to/cyprusjs/cyprusjs-paphos"
                    target="_blank"
                  >
                    <i class="fab fa-home"></i> Paphos
                  </a>
                </li>
                <li>
                  <a
                    href="https://ti.to/cyprusjs/cyprusjs-larnaca"
                    target="_blank"
                  >
                    <i class="fab fa-home"></i> Larnaca
                  </a>
                </li>
              </ul>
            </nav>
          </article>
          <article class="column">
            <h5 class="title is-5 has-text-darkest">Partners</h5>
            <nav>
              <ul class="menu-list">
                <li>
                  <a href="https://hugge.space/" target="_blank">Hügge Space</a>
                </li>
                <li>
                  <a href="http://www.ariscy.com/" target="_blank">ARIS</a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/FutureWorldsCenter/"
                    target="_blank"
                    >Future Worlds Center</a
                  >
                </li>
                <li>
                  <a href="http://www.heneise.co/" target="_blank">HC</a>
                </li>
                <li>
                  <a href="https://www.odduse.com/" target="_blank">Odduse</a>
                </li>
              </ul>
            </nav>
          </article>
          <article class="column" id="socialmedia">
            <h5 class="title is-5 has-text-darkest">Get in touch</h5>
            <nav class="level is-mobile">
              <div class="level-item has-text-centered">
                <div>
                  <a
                    class="link-twitter"
                    href="https://twitter.com/cyprusjs"
                    target="_blank"
                    aria-label="CyprusJS Twitter Page"
                  >
                    <i class="fab fa-twitter fa-2x"></i>
                  </a>
                </div>
              </div>
              <div class="level-item has-text-centered">
                <div>
                  <a
                    class="link-github"
                    href="https://github.com/cyprusjs/"
                    target="_blank"
                    aria-label="CyprusJS GitHub Page"
                  >
                    <i class="fab fa-github fa-2x"></i>
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
          <p class="is-size-7">
            Copyright © 2019 to the Authors of CyprusJS. All rights reserved.
            The source code is licensed
            <a
              href="https://github.com/cyprusjs/cyprusjs.org/LICENSE"
              target="_blank"
              >MIT</a
            >. The website content is licensed
            <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/"
              >CC BY NC SA 4.0</a
            >
          </p>
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
  color: rgba(0, 43, 77, 0.38);
  transition: 0.3s;
  border-radius: 3px;
}
.menu-list a:hover {
  color: rgba(0, 43, 77, 0.87);
  background-color: rgba(0, 43, 77, 0.1);
}
.link-twitter {
  color: rgb(29, 161, 242);
  transition: 0.3s;
}
.link-facebook {
  color: rgb(60, 90, 153);
  transition: 0.3s;
}
.link-instagram {
  color: rgb(131, 58, 180);
  transition: 0.3s;
}
.link-linkedin {
  color: rgb(0, 119, 181);
  transition: 0.3s;
}
.link-github {
  color: rgb(51, 51, 51);
  transition: 0.3s;
}
.link-twitter:hover,
.link-facebook:hover,
.link-instagram:hover,
.link-linkedin:hover,
.link-github:hover {
  opacity: 0.6;
}
footer#pagefooter section.section {
  background: none;
}
</style>
