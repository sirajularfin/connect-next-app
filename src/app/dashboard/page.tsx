import { useProfile } from '@/context/ProfileContext';

function Page() {
  const { profile } = useProfile();

  if (!profile) return <div>No profile found</div>;

  return (
    <div>
      <h1>Welcome, {profile.name}</h1>
    </div>
  );
}

export default Page;
