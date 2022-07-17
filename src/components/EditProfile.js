import { useState } from "react";
import { CameraIcon, LinkIcon } from "@heroicons/react/outline";
import { XCircleIcon, PlusIcon } from "@heroicons/react/solid";
import { updateProfile } from "../libs";
import toast from "react-hot-toast";
import { Storage } from "aws-amplify";
const Input = ({ dataValue, onChangeValue, labelFor }) => (
  <div className="grid items-center ml-20 hover:border-cyan-400  mt-3 w-[80%] border-2 border-gray-700 p-2">
    <span className="text-bold text-gray-400 text-[0.8rem] fontFamily mb-2 ml-2 text-semibold">
      {labelFor}
    </span>
    <input
      className="text-[0.9rem] focus:outline-none bg-transparent text-white ml-3 border-none fontFamily text-semibold"
      type="text"
      value={dataValue}
      onChange={onChangeValue}
    />
  </div>
);
const EditProfile = ({ user, setEditProfile }) => {
  const [uname, setUName] = useState(user?.name);
  const [profilePic, setProfilePic] = useState(user?.image ? user?.image : []);
  const [website, setWebsite] = useState(user?.website);
  const [preference, setPreference] = useState(
    user?.preference !== [] ? user?.preference : []
  );
  const [field, setField] = useState("");

  const [about, setAbout] = useState(user?.about);

  const [country, setCountry] = useState(user?.country ? user?.country : "");
  async function onChange(e) {
    const file = e.target.files[0];
    await onChangePic(file);
  }

  console.log(user);

  const onChangePic = async (file) => {
    try {
      const fileName = `${Date.now()}-${file.name}`;

      const uploadedFile = await Storage.put(fileName, file, {
        contentType: file.name.type,
      });

      const newFile = {
        key: uploadedFile.key,
        bucket: process.env.REACT_APP_S3_BUCKET,
        region: process.env.REACT_APP_PROJECT_REGION,
      };
      setProfilePic(newFile);
      console.log("Profile Pic updated successfully");
    } catch (err) {
      console.log("Error updating profile:", err);
    }
  };

  console.log(profilePic);
  // Add Preference
  const addPreference = (item) => {
    if (preference !== null) {
      setPreference((prevState) => [
        ...prevState,
        {
          id: item,
          name: item,
        },
      ]);
    } else {
      setPreference([{ id: item, name: item }]);
    }
    setField("");
  };

  // Edit Preference

  const removePreference = (item) => {
    console.log("You selected", item);
    let selectionAfterRemoval = preference;
    selectionAfterRemoval = selectionAfterRemoval.filter(
      (current) => current.id !== item.id
    );
    setPreference([...selectionAfterRemoval]);
  };

  // Submit Profile
  const handleSaveProfile = async () => {
    if (
      uname !== user?.name ||
      about !== user?.about ||
      country !== user?.country ||
      website !== user?.website ||
      preference !== user?.preference ||
      profilePic !== user?.image
    ) {
      const profileData = {
        id: user.id,
        name: uname,
        about: about,
        country: country,
        website: website,
        preference: preference,
        image: profilePic,
      };

      await updateProfile(profileData);
    } else {
      toast.error("Nothing to change !!");
    }
    setEditProfile(false);
  };
  return (
    <div className="relative ">
      <button
        onClick={handleSaveProfile}
        className="absolute md:w-[100px] hover:bg-orange-400  bg-cyan-300 text-slate-900 fontFamily font-semibold text-[0.8rem] p-2 right-[1vw] rounded"
      >
        Save
      </button>
      <h3 className="text-white fontFamily text-[1.2rem] mt-2 font-semibold text-center">
        Edit Profile
      </h3>
      <div className="bg-gray-400 md:ml-[12%] 2xl:ml-[7%] mt-2 p-3 w-[60px] h-[60px] rounded-full">
        <label>
          <CameraIcon className="text-white cursor-pointer" />
          <input type="file" className="opacity-0" onChange={onChange} />
        </label>
      </div>
      <Input
        dataValue={uname}
        onChangeValue={(e) => setUName(e.target.value)}
        labelFor="Name"
      />
      <Input
        dataValue={about !== null ? about : ""}
        onChangeValue={(e) => setAbout(e.target.value)}
        labelFor="About you"
      />
      <div className="grid items-center ml-20 hover:border-cyan-400  mt-3 w-[80%] border-2 border-gray-700 p-2">
        <h3 className="text-bold flex text-gray-400 text-[0.8rem] fontFamily mb-2 ml-2 text-semibold">
          <span> Website</span>
          <LinkIcon className="w-4 h-4 ml-2 text-cyan-300" />
        </h3>
        <input
          className="rounded-2xl text-[0.9rem] focus:outline-none bg-transparent text-white ml-3 border-none fontFamily text-semibold"
          type="text"
          value={website ? website : ""}
          onChange={(e) => setWebsite(e.target.value)}
        />
      </div>
      <Input
        dataValue={country}
        onChangeValue={(e) => setCountry(e.target.value)}
        labelFor="Country"
      />
      <div className="grid items-center ml-20 hover:border-cyan-400  mt-3 w-[80%] border-2 border-gray-700 p-2">
        <h3 className="text-bold flex text-gray-400 text-[0.8rem] fontFamily mb-2 ml-2 text-semibold">
          <span>Preference</span>
        </h3>
        <div className="flex justify-between">
          <input
            className="rounded-2xl text-[0.9rem] focus:outline-none bg-transparent text-white ml-3 border-none fontFamily text-semibold"
            type="text"
            value={field}
            onChange={(e) => setField(e.target.value)}
          />
          <PlusIcon
            className="w-6 h-6 text-white"
            onClick={() => addPreference(field)}
          />
        </div>
      </div>
      <div className="grid grid-flow-col grid-cols-auto  gap-2 w-[80%] overflow-scroll overflow-x-scroll ml-20 mt-3">
        {preference?.map((data) => (
          <div key={data?.id} className="flex relative w-[9vw]  bg-green-400">
            <span className="p-1 border-1 text-[0.8rem]  text-white fontFamily font-semibold">
              #{data?.name}
            </span>
            <XCircleIcon
              onClick={() => removePreference(data)}
              className="h-4 w-4 absolute cursor-pointer  right-0"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default EditProfile;
