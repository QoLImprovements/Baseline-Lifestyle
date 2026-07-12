/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "cup-halves",
  "description": "Fruits and Fruit Juices",
  "id": "usda-sr-legacy-173938",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 247.0,
      "key": "cup-halves",
      "kind": "unit",
      "label": "cup, halves"
    }
  ],
  "name": "Apricots, canned, extra light syrup pack, with skin, solids and liquids (Includes foods for USDA's Food Distribution Program)",
  "nutritionPerBasis": {
    "calcium_mg": 10.0,
    "carbs_g": 12.5,
    "energy_kcal": 205.0,
    "fat_g": 0.1,
    "fibre_g": 1.6,
    "folate_ug": 2.0,
    "iron_mg": 0.3,
    "magnesium_mg": 6.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 12.0,
    "potassium_mg": 140.0,
    "protein_g": 0.6,
    "salt_g": 0.005,
    "sat_fat_g": 0.007,
    "sodium_mg": 2.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 64.0,
    "vitamin_c_mg": 4.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173938",
  "state": "Canned",
  "subcategory": "Fruits and Fruit Juices",
  "tags": [
    "canned",
    "fruit",
    "fruits-and-fruit-juices"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
