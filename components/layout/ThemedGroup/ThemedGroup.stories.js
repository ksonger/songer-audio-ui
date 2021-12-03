import Container from "@/layout/Container";
import ThemedGroupComponent from "./";

export default {
  title: "Layout/Themed Group",
  component: ThemedGroupComponent,
};

export const ThemedGroup = () => (
  <>
    <ThemedGroupComponent bgColor="green">
      <Container>
        <h2>Group #1</h2>
        <p>
          Use the ThemedGroup component for a set of content blocks that share
          the same background color. It’s smart about handling the space between
          blocks.
        </p>
        <p>
          <em>
            Under the hood, ThemedGroup sends a signal to any children via React
            Context that they are grouped, which allows them to disable their
            own padding and theme settings and inherit them instead.
          </em>
        </p>
      </Container>
    </ThemedGroupComponent>
    <ThemedGroupComponent bgColor="gray">
      <Container>
        <h2>Group #2</h2>
        <p>
          Is this my espresso machine? Wh-what is-h-how did you get my espresso
          machine? God creates dinosaurs. God destroys dinosaurs. God creates
          Man. Man destroys God. Man creates Dinosaurs. Must go faster... go,
          go, go, go, go! Yes, Yes, without the oops!
        </p>
      </Container>
    </ThemedGroupComponent>
    <ThemedGroupComponent bgColor="white">
      <Container>
        <h2>Group #3</h2>
        <p>
          Jaguar shark! So tell me - does it really exist? Must go faster. So
          you two dig up, dig up dinosaurs? Yeah, but your scientists were so
          preoccupied with whether or not they could, they didn’t stop to think
          if they should.
        </p>
      </Container>
    </ThemedGroupComponent>
  </>
);
ThemedGroup.parameters = {
  controls: { disabled: true },
};
