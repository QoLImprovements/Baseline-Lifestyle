/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "3-oz",
  "description": "Pork Products",
  "id": "usda-sr-legacy-168337",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "3-oz",
      "kind": "unit",
      "label": "3 oz"
    }
  ],
  "name": "Pork, cured, ham with natural juices, rump, bone-in, separable lean only, unheated",
  "nutritionPerBasis": {
    "calcium_mg": 9.0,
    "carbs_g": 0.43,
    "energy_kcal": 512.0,
    "fat_g": 3.47,
    "fibre_g": 0.0,
    "folate_ug": 1.0,
    "iron_mg": 1.05,
    "magnesium_mg": 21.0,
    "omega3_g": 0.017,
    "phosphorus_mg": 253.0,
    "potassium_mg": 303.0,
    "protein_g": 22.7,
    "salt_g": 2.2325,
    "sat_fat_g": 1.16,
    "sodium_mg": 893.0,
    "sugar_g": 0.43,
    "vitamin_a_ug": 10.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.24,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168337",
  "state": "Unspecified",
  "subcategory": "Pork Products",
  "tags": [
    "meat-and-poultry",
    "pork-products",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
