// -- basic library --
import React, {useState, useEffect} from 'react';

// -- http connections --
import { API } from 'aws-amplify';
import { listMonsters } from 'graphql/queries';
import { createMonster } from 'graphql/mutations';

// -- external components --
import { Button } from "@blueprintjs/core";
import AlertDialog from 'components/molecules/AlertDialog';

// aws-amplify
// import awsconfig from 'aws-exports';

// Amplify.configure(awsconfig);

// -- main component --
const Homes: React.FC = () => {
  const [monsters, setMonsters] = useState([])
  const [url, setUrl] = useState<string>('https://atcoder.jp/contests/typical90/tasks/typical90_a')
  const [name, setName] = useState<string>('001 - Yokan Party（★4')

  const getMonsters = async() => {
    const res = await API.graphql({query: listMonsters})
    console.log(res)
  }

  const createMonsters = async() => {
    if(!name){
      AlertDialog.show('nameは必須')
      return
    }
    if(!url){
      AlertDialog.show('urlは必須')
      return
    }
    const input = {
      name: name,
      url: url,
      challenges: 0,
      category: 'AtCoder',
    }
    const res = await API.graphql({ query: createMonster, variables: { input: input} });
    console.log(res)
  }

  useEffect(() => {
    (async function () {
      // テーブル情報取得
      await getMonsters();
    })();
  }, [])

  // -- render part --
  return (
    <div>
      <Button onClick={createMonsters} text="作成"/>
    </div>
  );
};


// -- finally export part --

export default Homes;
