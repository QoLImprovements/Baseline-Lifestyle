/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "lb",
  "description": "Pork Products",
  "id": "usda-sr-legacy-168347",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 453.6,
      "key": "lb",
      "kind": "unit",
      "label": "lb"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "3-oz",
      "kind": "unit",
      "label": "3 oz"
    }
  ],
  "name": "Pork, cured, ham -- water added, shank, bone-in, separable lean and fat, unheated",
  "nutritionPerBasis": {
    "calcium_mg": 7.0,
    "carbs_g": 0.66,
    "energy_kcal": 167.0,
    "fat_g": 11.0,
    "fibre_g": 0.0,
    "folate_ug": 1.0,
    "iron_mg": 0.72,
    "magnesium_mg": 17.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 214.0,
    "potassium_mg": 219.0,
    "protein_g": 16.6,
    "salt_g": 2.41,
    "sat_fat_g": 3.61,
    "sodium_mg": 964.0,
    "sugar_g": 0.66,
    "vitamin_a_ug": 9.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.32,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168347",
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
