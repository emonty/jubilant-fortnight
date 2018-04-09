import React from 'react'

export default class IndexPage extends React.Component {
  render() {
    return (
      // Content must be wrapped in a container
      <div>

        {/* Banner */}
        <section id="banner">
          <header>
            <h2>Cross-Project CI/CD with Ansible</h2>
          </header>
        </section>

        {/* Highlights */}
        <section class="wrapper style1">
          <div class="container">
            <div class="row 200%">
              <section class="4u 12u(narrower)">
                <div class="box highlight">
                  <i class="icon major fa-gears"></i>
                  <h3>Project Gating</h3>
                  <p>Keep your builds evergreen by automatically merging changes only if they pass tests.</p>
                </div>
              </section>
              <section class="4u 12u(narrower)">
                <div class="box highlight">
                  <i class="icon major fa-pencil"></i>
                  <h3>CI/CD with Ansible</h3>
                  <p>Use the same Ansible to deploy your system and run your tests.</p>
                </div>
              </section>
              <section class="4u 12u(narrower)">
                <div class="box highlight">
                  <i class="icon major fa-wrench"></i>
                  <h3>Cross-Project Dependencies</h3>
                  <p>Easily test changes to multiple systems together before landing a single patch.</p>
                </div>
              </section>
            </div>
          </div>
        </section>

        {/* Gigantic Heading */}
        <section class="wrapper style2">
          <div class="container">
            <header class="major">
              <h2>Tested at scale</h2>
              <p>Zuul powers some of the largest Open Source development efforts</p>
            </header>
          </div>
        </section>

        {/* Posts */}
        <section class="wrapper style1">
          <div class="container">
            <div class="row">
              <section class="6u 12u(narrower)">
                <div class="box post">
                  <a href="https://git.openstack.org/cgit/openstack-infra/zuul/tree/" class="image left"><img src="images/code.png" alt="" /></a>
                  <div class="inner">
                    <h3>Get the Source</h3>
                    <p>Zuul is Free and Open Source Software.  Download the source from <a href="https://git.openstack.org/cgit/openstack-infra/zuul/tree/">git.openstack.org</a> or install it from <a href="https://pypi.python.org/pypi/zuul/">PyPI</a></p>
                  </div>
                </div>
              </section>
              <section class="6u 12u(narrower)">
                <div class="box post">
                  <a href="#" class="image left"><img src="images/docs.png" alt="" /></a>
                  <div class="inner">
                    <h3>Read the Docs</h3>
                    <p>Zuul has extensive <a href="https://docs.openstack.org/infra/zuul/">documentation</a>.</p>
                  </div>
                </div>
              </section>
            </div>
            <div class="row">
              <section class="6u 12u(narrower)">
                <div class="box post">
                  <a href="#" class="image left"><img src="images/lists.png" alt="" /></a>
                  <div class="inner">
                    <h3>Join the Mailing List</h3>
                    <p>Zuul has <a href="http://lists.zuul-ci.org/cgi-bin/mailman/listinfo">mailing lists</a> for announcements and discussions.</p>
                  </div>
                </div>
              </section>
              <section class="6u 12u(narrower)">
                <div class="box post">
                  <a href="#" class="image left"><img src="images/irc.png" alt="" /></a>
                  <div class="inner">
                    <h3>Chat on IRC</h3>
                    <p>Join <a href="http://webchat.freenode.net/?channels=%23zuul">#zuul</a> on FreeNode</p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </section>

      </div>
    )
  }
}
