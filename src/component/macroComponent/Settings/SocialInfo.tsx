import React, { type FC } from "react";
import { Input } from "~/component/miniComponent";
import { type UserDetails } from "~/types";

const SocialInfo: FC<{
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  handleSocialChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  data: UserDetails;
}> = ({ handleSocialChange, handleChange, data }) => {
  return (
    <div className="flex-1">
      <h1 className="mb-4 text-xl font-semibold text-gray-700 dark:text-text-secondary">
        Social
      </h1>
      <Input
        label="Twitter"
        type="INPUT"
        variant="FILLED"
        placeholder="https://twitter.com/HarshwardhanPatil"
        input_type="text"
        disabled={false}
        required={false}
        value={data.social.twitter}
        name="twitter"
        onChange={handleSocialChange}
      />

      <Input
        label="Instagram"
        type="INPUT"
        variant="FILLED"
        placeholder="https://www.instagram.com/harshwardhanpatil_07/"
        input_type="text"
        disabled={false}
        required={false}
        value={data.social.instagram}
        name="instagram"
        onChange={handleSocialChange}
      />

      <Input
        label="Facebook"
        type="INPUT"
        variant="FILLED"
        placeholder="https://facebook.com/HarshwardhanPatil"
        input_type="text"
        disabled={false}
        required={false}
        value={data.social.facebook}
        name="facebook"
        onChange={handleSocialChange}
      />

      <Input
        label="LinkedIn"
        type="INPUT"
        variant="FILLED"
        placeholder="https://www.linkedin.com/in/patilharshwardhan/"
        input_type="text"
        disabled={false}
        required={false}
        value={data.social.linkedin}
        name="linkedin"
        onChange={handleSocialChange}
      />

      <Input
        label="Youtube"
        type="INPUT"
        variant="FILLED"
        placeholder="https://youtube.com/HarshwardhanPatil"
        input_type="text"
        disabled={false}
        required={false}
        value={data.social.youtube}
        name="youtube"
        onChange={handleSocialChange}
      />

      <Input
        label="Stackoverflow"
        type="INPUT"
        variant="FILLED"
        placeholder="https://stackoverflow.com/HarshwardhanPatil"
        input_type="text"
        disabled={false}
        required={false}
        value={data.social.stackoverflow}
        name="stackoverflow"
        onChange={handleSocialChange}
      />

      <Input
        label="Github"
        type="INPUT"
        variant="FILLED"
        placeholder="https://github.com/HarshwardhanPatil07"
        input_type="text"
        disabled={false}
        required={false}
        value={data.social.github}
        name="github"
        onChange={handleSocialChange}
      />

      <Input
        label="Website"
        type="INPUT"
        variant="FILLED"
        placeholder="https://harshwardhan.com"
        input_type="text"
        disabled={false}
        required={false}
        value={data.social.website}
        name="website"
        onChange={handleSocialChange}
      />

      <h1 className="mb-4 mt-8 text-base font-semibold text-gray-700 dark:text-text-secondary">
        Profile Identity
      </h1>

      <Input
        label="Username"
        type="INPUT"
        variant="FILLED"
        placeholder="Harshwardhan"
        input_type="text"
        disabled={false}
        required={true}
        value={data.username}
        name="username"
        onChange={handleChange}
      />

      <Input
        label="Email"
        type="INPUT"
        variant="FILLED"
        placeholder="harshwardhan@example.com"
        input_type="email"
        disabled={true}
        required={true}
        value={data.email}
        name="email"
        onChange={handleChange}
      />
    </div>
  );
};

export default SocialInfo;
