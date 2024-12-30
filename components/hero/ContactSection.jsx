import Button from "../Button";

export default function ContactSection() {
  return (
    <div className="bg-zinc-100">
      <div className="container items-center text-center lg:justify-between lg:flex py-16 my-16">
        <div className="py-4">
          <p className="text-2xl">Let's</p>
          <h1 className="text-3xl font-bold lg:text-5xl">Get in touch</h1>
        </div>
        <Button href={'/contact'} title={'Contact Us'} />
      </div>
    </div>
  )
}