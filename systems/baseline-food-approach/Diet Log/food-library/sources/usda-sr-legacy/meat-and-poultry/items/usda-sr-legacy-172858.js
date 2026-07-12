/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "thigh-without-skin",
  "description": "Poultry Products",
  "id": "usda-sr-legacy-172858",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 132.0,
      "key": "thigh-without-skin",
      "kind": "unit",
      "label": "thigh without skin"
    },
    {
      "gramsPerUnit": 158.0,
      "key": "thigh-with-skin",
      "kind": "unit",
      "label": "thigh with skin"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "3-oz",
      "kind": "unit",
      "label": "3 oz"
    }
  ],
  "name": "Chicken, dark meat, thigh, meat only, with added solution, cooked, braised",
  "nutritionPerBasis": {
    "calcium_mg": 12.0,
    "carbs_g": 0.0,
    "energy_kcal": 685.0,
    "fat_g": 7.96,
    "fibre_g": 0.0,
    "folate_ug": 4.0,
    "iron_mg": 1.07,
    "magnesium_mg": 24.0,
    "omega3_g": 0.063,
    "phosphorus_mg": 203.0,
    "potassium_mg": 290.0,
    "protein_g": 23.0,
    "salt_g": 0.4925,
    "sat_fat_g": 2.04,
    "sodium_mg": 197.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 8.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.24,
    "vitamin_k_ug": 0.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172858",
  "state": "Cooked",
  "subcategory": "Poultry Products",
  "tags": [
    "cooked",
    "meat-and-poultry",
    "poultry-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
