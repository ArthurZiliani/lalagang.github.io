
import React from "react";
import Footer from "../Components/footer";
import Icon from "../Components/icons";

// eslint-disable-next-line import/prefer-default-export
export function FooterContainer() {
    return (
        <Footer>
            <Footer.Wrapper>
                <Footer.Row>
                    <Footer.Column>
                        <Footer.Title>
                            {" "}

                        </Footer.Title>
                    </Footer.Column>
                    <Footer.Column>
                        <Footer.Title>Patrocinadores</Footer.Title>
                        <Footer.Link
                            href="https://www.instagram.com/febaee/?hl=pt-br"
                            target="_blank"
                        >

                        </Footer.Link>


                    </Footer.Column>
                    <Footer.Column>
                        <Footer.Title>Contato</Footer.Title>
                        <Footer.Link
                            href="mailto:goldenvulpesgaming@gmail.com"
                            target="_blank"
                        >
                            <Icon className="far fa-envelope" />
              Email
            </Footer.Link>
                        <Footer.Link href="#" />
                        <Footer.Link href="#" />
                        <Footer.Link href="#" />
                    </Footer.Column>
                    <Footer.Column>
                        <Footer.Title>Social</Footer.Title>

                        <Footer.Link
                            href="https://www.instagram.com/goldenvulpes/"
                            target="_blank"
                        >
                            <Icon className="fab fa-instagram" />
              Instagram
            </Footer.Link>
                        <Footer.Link href="https://www.youtube.com/channel/UCfFLPCkW4KzOVK1aslD41Fg">
                            <Icon className="fab fa-youtube" target="_blank" />
              Youtube
            </Footer.Link>
                        <Footer.Link
                            href="https://twitter.com/GoldenVulpes"
                            target="_blank"
                        >
                            <Icon className="fab fa-twitter" />
              Twitter
            </Footer.Link>
                    </Footer.Column>
                </Footer.Row>
            </Footer.Wrapper>
        </Footer>
    );
}
