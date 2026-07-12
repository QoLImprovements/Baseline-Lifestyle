/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "packet",
  "description": "Baby Foods",
  "id": "usda-sr-legacy-170999",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 99.0,
      "key": "packet",
      "kind": "unit",
      "label": "packet"
    }
  ],
  "name": "Babyfood, banana with mixed berries, strained",
  "nutritionPerBasis": {
    "calcium_mg": 0.0,
    "carbs_g": 21.3,
    "energy_kcal": 385.0,
    "fat_g": 0.36,
    "fibre_g": 1.0,
    "folate_ug": 20.0,
    "iron_mg": 0.0,
    "magnesium_mg": 23.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 20.0,
    "potassium_mg": 283.0,
    "protein_g": 1.01,
    "salt_g": 0.0,
    "sat_fat_g": 0.081,
    "sodium_mg": 0.0,
    "sugar_g": 15.0,
    "vitamin_a_ug": 3.0,
    "vitamin_c_mg": 18.2,
    "vitamin_e_mg": 0.37,
    "vitamin_k_ug": 6.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170999",
  "state": "Unspecified",
  "subcategory": "Baby Foods",
  "tags": [
    "baby-foods",
    "fruit",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
