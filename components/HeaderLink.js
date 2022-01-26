function HeaderLink({ Icon, text, feed, active, avatar, hidden }) {
  return (
    <div
      // only on medium screens , i want it to be inline flex and hide certain icons
      className={`${
        hidden && "hidden md:inline-flex"
      } cursor-pointer flex flex-col justify-center items-center ${
        feed
          ? "text-black/60 hover:text-black dark:text-white/75 dark:hover:text-white lg:-mb-1.5 space-y-1"
          : "text-gray-500 hover:text-gray-700"
        // if active is true, i want to change colors (using ! to override original text)
      } ${active && "!text-black dark:!text-white"}`}
    >
      {avatar ? <Icon className="!h-7 !w-7 lg:!-mb-1" /> : <Icon />}
      <h4
        className={`text-sm ${
          // if feed is true, text is hidden on smaller devices
          feed && "hidden lg:flex justify-center w-full mx-auto"
        }`}
      >
        {text}
      </h4>
    </div>
  );
}

export default HeaderLink;
