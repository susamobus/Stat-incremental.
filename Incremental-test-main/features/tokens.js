var tokenfuncs = {


    tokensupgrading : function(upgradeid = "",order = Number,type = Number,basecost ,scaling,cap) { // Type ID | 1 = Upgrades | 2 = Buyables | 3 = Upgrade Unlockers // Order is the order of that type, example :the x1.6 sus buyable is order 1
        if ((type == 1) && (ExpantaNum.gte(tokenvars.tokens,basecost))) {
          tokenvars.tokensupgrades.boughtonce[tokenvars.tokensupgrades.boughtonce.length] = upgradeid
          tokenvars.tokens = ExpantaNum.sub(tokenvars.tokens,basecost)
          document.getElementsByClassName("TokenUpgradeButtons")[ExpantaNum.sub(order,1).toNumber()].style.display = "none"
        }
        if ((type == 2) && (ExpantaNum.gte(tokenvars.tokens,ExpantaNum.mul(basecost,ExpantaNum.pow(scaling,tokenvars.tokensupgrades.boughtmore[upgradeid])))) == true) {
          tokenvars.tokens = ExpantaNum.sub(tokenvars.tokens,ExpantaNum.mul(basecost,ExpantaNum.pow(scaling,tokenvars.tokensupgrades.boughtmore[upgradeid])))
          tokenvars.tokensupgrades.boughtmore[upgradeid] = ExpantaNum.add(tokenvars.tokensupgrades.boughtmore[upgradeid],1)
          if (ExpantaNum.gte(tokenvars.tokensupgrades.boughtmore[upgradeid],cap)) {
          document.getElementsByClassName("TokenBuyableButtons")[ExpantaNum.sub(order,1).toNumber()].style.display = "none"
        }}
        if ((type == 3) && (ExpantaNum.gte(tokenvars.tokens,basecost))) {
          tokenvars.tokensupgrades.upgradeunlocks[tokenvars.tokensupgrades.upgradeunlocks.length] = upgradeid
          tokenvars.tokens = ExpantaNum.sub(tokenvars.tokens,basecost)
          document.getElementsByClassName("TokenUnlockButtons")[ExpantaNum.sub(order,1).toNumber()].style.display = "none"
          if (order == 1) {
            document.getElementsByClassName("TokenBuyableButtons")[1].style.display = "inline"
            document.getElementsByClassName("TokenUpgradeButtons")[1].style.display = "inline"
            document.getElementsByClassName("TokenUnlockButtons")[0].style.display = "none"
          }
        }
      },
     addtokens : function(buttonorder) {
        let cost = ExpantaNum.mul(ExpantaNum.pow(5,ExpantaNum.add(ExpantaNum.sub(buttonorder,1),ExpantaNum.mul(ExpantaNum.sub(tokenvars.tokenspage,1),3))),5e15)
      if (ExpantaNum.gte(sus,cost) == true) {
        tokenvars.tokens = ExpantaNum.add(tokenvars.tokens,ExpantaNum.pow(3,ExpantaNum.add(ExpantaNum.sub(buttonorder,1),ExpantaNum.mul(ExpantaNum.sub(tokenvars.tokenspage,1),3))))
        sus = ExpantaNum.sub(sus,cost)
      }
    },
    getTokensCost : function(buttonorder) {
        return ExpantaNum.mul(ExpantaNum.pow(5,ExpantaNum.add(ExpantaNum.sub(buttonorder,1),ExpantaNum.mul(ExpantaNum.sub(tokenvars.tokenspage,1),3))),5e15)
    },
    getTokensGain : function(buttonorder) {
        return ExpantaNum.mul(ExpantaNum.pow(3,ExpantaNum.add(ExpantaNum.sub(buttonorder,1),ExpantaNum.mul(ExpantaNum.sub(tokenvars.tokenspage,1),3))),1)
    },
    addpage : function(increment) {
      if ((increment == -1 && tokenvars.tokenspage == 1) !== true) {
       tokenvars.tokenspage = ExpantaNum.add(tokenvars.tokenspage,increment)
    }},
    tokenbuttonsrefresh : function() {
      if ((ExpantaNum.gte(lifetimesus,5e14) == true) && (unlocks.includes("tokens") !== true) == true) {
        document.getElementById("unlocktokens").style.display = "inline"
      } else {
        document.getElementById("unlocktokens").style.display = "none"
      }
      if (unlocks.includes("tokens") == true) {
        document.getElementById("tokensbutton1").style.display = "inline"
        document.getElementById("tokensbutton2").style.display = "inline"
        document.getElementById("tokensbutton3").style.display = "inline"
        document.getElementById("tokenstext1").style.display = "inline"
        document.getElementById("tokenstext2").style.display = "inline"
        document.getElementsByClassName("costtext")[0].innerHTML = toDisplay(ExpantaNum.floor(ExpantaNum.mul(100,ExpantaNum.pow(2.5,tokenvars.tokensupgrades.boughtmore["moresus1"]))))
        document.getElementsByClassName("costtext")[1].innerHTML = toDisplay(ExpantaNum.floor(ExpantaNum.mul(1000,ExpantaNum.pow(7,tokenvars.tokensupgrades.boughtmore["morecrewmate1"]))))
        document.getElementsByClassName("costtext")[2].innerHTML = toDisplay(ExpantaNum.pow(10,11))
        document.getElementsByClassName("ShowTokensUpgradesPanel")[0].style.display = "inline"
      if (upgradepanelactive == "tokens") {
        document.getElementsByClassName("TokenUpgradesPanel")[0].style.display = "inline"
        document.getElementsByClassName("TokensPanelHeader")[0].style.display = "inline"
        } else {
        document.getElementsByClassName("TokenUpgradesPanel")[0].style.display = "none" 
        document.getElementsByClassName("TokensPanelHeader")[0].style.display = "inline"  
        }
        if (tokenvars.tokensupgrades.boughtonce.includes("tokenpages")) {
          document.getElementsByClassName("TokenPageButtons")[0].style.display = "inline"
          document.getElementsByClassName("TokenPageButtons")[1].style.display = "inline"
          document.getElementsByClassName("TokenUpgradeButtons")[0].style.display = "none"
        }
    }},
    tokenbuttonsload : function() {
      document.getElementsByClassName("TokenBuyableButtons")[0].style.display = "inline"
      document.getElementsByClassName("TokenUpgradeButtons")[0].style.display = "inline"
      document.getElementsByClassName("TokenUnlockButtons")[0].style.display = "inline"
    },
    tokenboostsrefresh : function() {
      tokentotalboosts.sus = ExpantaNum.mul(ExpantaNum.pow(1.35,tokenvars.tokensupgrades.boughtmore.moresus1)
      ,ExpantaNum.add(1,ExpantaNum.mul(booleanToNumber(tokenvars.tokensupgrades.boughtonce.includes("susboost1")),ExpantaNum.pow(ExpantaNum.logarithm(ExpantaNum.add(tokenvars.tokens,1),5),1.5))))
      tokentotalboosts.crewmate = ExpantaNum.pow(1.1,tokenvars.tokensupgrades.boughtmore.morecrewmate1)
    }
}

var tokenvars = {
  tokens : 0,
  tokenspage : 1,
  tokensupgrades : {boughtonce : [], boughtmore : {moresus1 : 0, morecrewmate1 : 0}, upgradeunlocks : []}
}
var tokentotalboosts = {
  tokens : 1,
  sus : 1,
  amogus : 1,
  crewmate : 1,
  impostor : 1
}

window.setInterval(function() {
  tokenfuncs.tokenbuttonsrefresh()
  tokenfuncs.tokenboostsrefresh()
},50);
