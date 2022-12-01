import { Profile } from "./Profile/Profile";
import user from './Profile/user.json'

import { Statistics } from "./Statistics/Statistics";
import data from './data.json'




export const App = () => {
  return (
    <div>
      <Profile user={user} />
      <Statistics title="Upload stats" stats={data} />
    </div>
  );
};



