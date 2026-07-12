/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "3-oz",
  "description": "Poultry Products",
  "id": "usda-sr-legacy-174500",
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
    },
    {
      "gramsPerUnit": 112.0,
      "key": "thigh-without-skin",
      "kind": "unit",
      "label": "thigh without skin"
    },
    {
      "gramsPerUnit": 130.0,
      "key": "thigh-with-skin",
      "kind": "unit",
      "label": "thigh with skin"
    }
  ],
  "name": "Chicken, dark meat, thigh, meat only, with added solution, cooked, roasted",
  "nutritionPerBasis": {
    "calcium_mg": 10.0,
    "carbs_g": 0.0,
    "energy_kcal": 688.0,
    "fat_g": 7.73,
    "fibre_g": 0.0,
    "folate_ug": 4.0,
    "iron_mg": 0.98,
    "magnesium_mg": 24.0,
    "omega3_g": 0.089,
    "phosphorus_mg": 202.0,
    "potassium_mg": 268.0,
    "protein_g": 24.2,
    "salt_g": 0.4425,
    "sat_fat_g": 2.4,
    "sodium_mg": 177.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 8.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.36,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174500",
  "state": "Roasted",
  "subcategory": "Poultry Products",
  "tags": [
    "meat-and-poultry",
    "poultry-products",
    "roasted"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
