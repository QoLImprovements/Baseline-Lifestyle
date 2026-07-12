/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "0-5-cup-dry",
  "description": "Cereal Grains and Pasta",
  "id": "usda-sr-legacy-168905",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "0-5-cup-dry",
      "kind": "unit",
      "label": "0.5 cup dry"
    },
    {
      "gramsPerUnit": 43.0,
      "key": "1-5-oz",
      "kind": "unit",
      "label": "1.5 oz"
    }
  ],
  "name": "Noodles, chinese, chow mein",
  "nutritionPerBasis": {
    "calcium_mg": 0.0,
    "carbs_g": 63.6,
    "energy_kcal": 1970.0,
    "fat_g": 21.2,
    "fibre_g": 6.7,
    "folate_ug": 125.0,
    "iron_mg": 6.43,
    "magnesium_mg": 19.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 98.0,
    "potassium_mg": 103.0,
    "protein_g": 10.9,
    "salt_g": 2.165,
    "sat_fat_g": 6.74,
    "sodium_mg": 866.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.83,
    "vitamin_k_ug": 5.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168905",
  "state": "Unspecified",
  "subcategory": "Cereal Grains and Pasta",
  "tags": [
    "cereal-grains-and-pasta",
    "grains-bread-and-pasta",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
