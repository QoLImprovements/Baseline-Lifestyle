/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "fruit-3-3-8-high-x-3-diameter",
  "description": "Fruits and Fruit Juices",
  "id": "usda-sr-legacy-168177",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 275.0,
      "key": "fruit-3-3-8-high-x-3-diameter",
      "kind": "unit",
      "label": "fruit 3-3/8\" high x 3\" diameter"
    },
    {
      "gramsPerUnit": 122.0,
      "key": "fruit-2-1-4-high-x-2-1-2-dia",
      "kind": "unit",
      "label": "fruit 2-1/4\" high x 2-1/2\" dia"
    }
  ],
  "name": "Pears, asian, raw",
  "nutritionPerBasis": {
    "calcium_mg": 4.0,
    "carbs_g": 10.6,
    "energy_kcal": 176.0,
    "fat_g": 0.23,
    "fibre_g": 3.6,
    "folate_ug": 8.0,
    "iron_mg": 0.0,
    "magnesium_mg": 8.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 11.0,
    "potassium_mg": 121.0,
    "protein_g": 0.5,
    "salt_g": 0.0,
    "sat_fat_g": 0.012,
    "sodium_mg": 0.0,
    "sugar_g": 7.05,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 3.8,
    "vitamin_e_mg": 0.12,
    "vitamin_k_ug": 4.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168177",
  "state": "Raw",
  "subcategory": "Fruits and Fruit Juices",
  "tags": [
    "fruit",
    "fruits-and-fruit-juices",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
