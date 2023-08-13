import { AccordionX } from "../Layout/AccordionX";

const data = [
  {
    title: "Is there any cost to me?",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book in it",
  },
  {
    title: "How will I know if I have been selected for the job?",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book in it",
  },
  {
    title: "What is the length of the Contract?",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book in it",
  },
  {
    title: "How long will I stay on the job (if selected)?",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book in it",
  },
  {
    title: "When do you pay?",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book in it",
  },
  {
    title: "Am I paid relocation expenses?",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book in it",
  },
];

export function Desktop_2_Section_6() {
  let count = 1;
  return (
    <section className="p-10 flex flex-col gap-y-10 bg-[#1B1D32] text-white">
      <h1 className="md:text-3xl lg:text-5xl font-bold text-center">
        Frequently Asked Questions
      </h1>
      <article className="flex flex-col items-center justify-center gap-7">
        {data.map((elem) => (
          <AccordionX key={"accordion-" + count++} info={elem} />
        ))}
        <button
          type="button"
          className="text-bold text-lg xxs:text-lx md:text-2xl"
        >
          Learn More +
        </button>
      </article>
    </section>
  );
}
