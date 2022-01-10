import Modal, { BioModal } from "./";

export default {
  title: "Atomics/Modal",
  component: Modal,
};

const Template = (args) => <Modal {...args} />;

export const Default = Template.bind({});
Default.args = {
  ariaLabel: "Modal Dialog",
  disclosureContent: "Open modal",
  footerCloseContent: "Close modal",
  children: (
    <p>
      Nulla vitae elit libero, a pharetra augue. Cras mattis consectetur purus
      sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris
      condimentum nibh, ut fermentum massa justo sit amet risus.
    </p>
  ),
};

export const DetailTemplate = (args) => <BioModal {...args} />;
DetailTemplate.storyName = "Patterns/BioModal";
DetailTemplate.args = {
  name: "Moira Bowman",
  title: "Director of Advocacy",
  bio: "<p>Moira joined Oregon Food Bank in September 2018 to lead our advocacy and volunteer teams.</p>",
};
DetailTemplate.parameters = {
  controls: { disabled: true },
};
