const data = {   
    player: {
        progressSkill:1,
        qualitySkill:20
    },
    craft: {
        testItem: {
            title: "testItem",
            reqProgress: 5,
            maxQuality: 100,
            itemDurability: 40,
            img:"/test-item.jpg"
        }
    }
}


export default function handler(req, res) {
    res.status(200).json(data);
  }