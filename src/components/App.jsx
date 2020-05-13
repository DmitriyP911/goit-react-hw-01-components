import React from 'react';

import FriendsList from './friend-list/FriendsList';
import Profile from './social-profile/Profile';
import Statistics from './statistic/Statistics';
import Transactions from './transaction/Transaction'

import user from '../data/user.json';
import statistics from '../data/statistical-data.json';
import transaction from '../data/transaction.json';
import friends from '../data/friends.json'

const App = () => (
    <div>
        <Profile
            name={user.name}
            tag={user.tag}
            location={user.location}
            avatar={user.avatar}
            stats={user.stats}
        />
        <FriendsList friend={friends} />
        <Statistics title="Upload stats" stats={statistics} />
        <Transactions item={transaction} />
    </div>
)

export default App;