/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "stalk",
  "description": "Fruits and Fruit Juices",
  "id": "usda-sr-legacy-167758",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 51.0,
      "key": "stalk",
      "kind": "unit",
      "label": "stalk"
    },
    {
      "gramsPerUnit": 122.0,
      "key": "cup-diced",
      "kind": "unit",
      "label": "cup, diced"
    }
  ],
  "name": "Rhubarb, raw",
  "nutritionPerBasis": {
    "calcium_mg": 86.0,
    "carbs_g": 4.54,
    "energy_kcal": 88.0,
    "fat_g": 0.2,
    "fibre_g": 1.8,
    "folate_ug": 7.0,
    "iron_mg": 0.22,
    "magnesium_mg": 12.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 14.0,
    "potassium_mg": 288.0,
    "protein_g": 0.9,
    "salt_g": 0.01,
    "sat_fat_g": 0.053,
    "sodium_mg": 4.0,
    "sugar_g": 1.1,
    "vitamin_a_ug": 5.0,
    "vitamin_c_mg": 8.0,
    "vitamin_e_mg": 0.27,
    "vitamin_k_ug": 29.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167758",
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
