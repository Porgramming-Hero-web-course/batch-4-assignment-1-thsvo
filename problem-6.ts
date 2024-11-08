interface CurrentProfile {
  name: string;
  age: number;
  email: string;
}

function updateProfile(
  currentProfile: CurrentProfile,
  updatedProfile: Partial<CurrentProfile>
): CurrentProfile {
  return {
    ...currentProfile,
    ...updatedProfile,
  };
}
const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
console.log(updateProfile(myProfile, { email: "alice@exsdfsdfdsample.com" }));
