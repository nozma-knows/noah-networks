// Copyright copy
const message = `Made with 🤍 in Salem, MA`;
const crYear = `© ${new Date().getFullYear()}`;

const Copyright = () => {
  return (
    <div className="flex flex-col text-center sm:flex-row gap-0 sm:gap-2">
      <div className="text-sm">{message}</div>
      <div className="text-sm">{crYear}</div>
    </div>
  );
};

export default function Footer() {
  return (
    <div className="flex w-full justify-center items-center font-bold px-6 pb-4 self-end">
      <Copyright />
    </div>
  );
}
