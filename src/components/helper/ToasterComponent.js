import toast, { Toaster } from "react-hot-toast";
const ToasterComponent = () => {
  const notify = () => {
    toast.success("Hello world", {
      duration: 3000,
      position: "top-right",
      ariaProps: {
        role: "status",
        "aria-live": "polite",
      },
    });
  };
  return (
    <div>
      <button onClick={notify}>Make me a toast</button>
      <Toaster />
    </div>
  );
};

export default ToasterComponent;
