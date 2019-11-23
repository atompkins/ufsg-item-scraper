const sqlite3 = require('sqlite3').verbose();

let db;
let statement;

const toParam = ([key, value]) => [`$${key}`, value];

function createTable() {
  db.run(`CREATE TABLE IF NOT EXISTS data (
      id               integer primary key
    , name             text    null
    , rarity           text    null
    , Type             text    null
    , Level            integer null
    , Attack           integer null
    , Defense          integer null
    , Armor            integer null
    , Damage           integer null
    , HP               integer null
    , XPGain           integer null
    , Stamina          integer null
    , StaminaGain      integer null
    , GoldGain         integer null
    , Banishment       integer null
    , BeastSlayer      integer null
    , Breaker          integer null
    , CriticalHit      integer null
    , Disarm           integer null
    , Dodge            integer null
    , Duelist          integer null
    , EliteHunter      integer null
    , FirstStrike      integer null
    , FuryCaster       integer null
    , GlorySeeker      integer null
    , GreenskinSlayer  integer null
    , Holy             integer null
    , Hypnotize        integer null
    , MasterBlacksmith integer null
    , MasterCrafter    integer null
    , MasterInventor   integer null
    , MasterThief      integer null
    , Nullify          integer null
    , Oceanic          integer null
    , PiercingStrike   integer null
    , ProtectGold      integer null
    , Protection       integer null
    , ReinforcedArmor  integer null
    , Sustain          integer null
    , TemporalShift    integer null
    , Thievery         integer null
    , craftAttack      integer null
    , craftDefense     integer null
    , craftArmor       integer null
    , craftDamage      integer null
    , craftHP          integer null
    , craftXPGain      integer null
    , craftStamina     integer null
    , craftGoldGain    integer null
    , setName          text    null
    , setAttack        integer null
    , setDefense       integer null
    , setArmor         integer null
    , setDamage        integer null
    , setHP            integer null
    , setXPGain        integer null
    , setStamina       integer null
    , setStaminaGain   integer null
    , setGoldGain      integer null
  )`);
}

function prepareStmt() {
  statement = db.prepare(`REPLACE INTO data (
      id
    , name
    , rarity
    , Type
    , Level
    , Attack
    , Defense
    , Armor
    , Damage
    , HP
    , XPGain
    , Stamina
    , StaminaGain
    , GoldGain
    , Banishment
    , BeastSlayer
    , Breaker
    , CriticalHit
    , Disarm
    , Dodge
    , Duelist
    , EliteHunter
    , FirstStrike
    , FuryCaster
    , GlorySeeker
    , GreenskinSlayer
    , Holy
    , Hypnotize
    , MasterBlacksmith
    , MasterCrafter
    , MasterInventor
    , MasterThief
    , Nullify
    , Oceanic
    , PiercingStrike
    , ProtectGold
    , Protection
    , ReinforcedArmor
    , Sustain
    , TemporalShift
    , Thievery
    , craftAttack
    , craftDefense
    , craftArmor
    , craftDamage
    , craftHP
    , craftXPGain
    , craftStamina
    , craftGoldGain
    , setName
    , setAttack
    , setDefense
    , setArmor
    , setDamage
    , setHP
    , setXPGain
    , setStamina
    , setStaminaGain
    , setGoldGain
  )
  VALUES (
      $id
    , $name
    , $rarity
    , $Type
    , $Level
    , $Attack
    , $Defense
    , $Armor
    , $Damage
    , $HP
    , $XPGain
    , $Stamina
    , $StaminaGain
    , $GoldGain
    , $Banishment
    , $BeastSlayer
    , $Breaker
    , $CriticalHit
    , $Disarm
    , $Dodge
    , $Duelist
    , $EliteHunter
    , $FirstStrike
    , $FuryCaster
    , $GlorySeeker
    , $GreenskinSlayer
    , $Holy
    , $Hypnotize
    , $MasterBlacksmith
    , $MasterCrafter
    , $MasterInventor
    , $MasterThief
    , $Nullify
    , $Oceanic
    , $PiercingStrike
    , $ProtectGold
    , $Protection
    , $ReinforcedArmor
    , $Sustain
    , $TemporalShift
    , $Thievery
    , $craftAttack
    , $craftDefense
    , $craftArmor
    , $craftDamage
    , $craftHP
    , $craftXPGain
    , $craftStamina
    , $craftGoldGain
    , $setName
    , $setAttack
    , $setDefense
    , $setArmor
    , $setDamage
    , $setHP
    , $setXPGain
    , $setStamina
    , $setStaminaGain
    , $setGoldGain
  )`);
}

function initSql() {
  db = new sqlite3.Database('data.sqlite');
  db.serialize(() => {
    createTable();
    prepareStmt();
  });
}

function sqlWriter(parsedItem) {
  statement.run(Object.fromEntries(Object.entries(parsedItem).map(toParam)));
}

function closeSql() {
  statement.finalize();
  db.close();
}

module.exports = { closeSql, initSql, sqlWriter };
