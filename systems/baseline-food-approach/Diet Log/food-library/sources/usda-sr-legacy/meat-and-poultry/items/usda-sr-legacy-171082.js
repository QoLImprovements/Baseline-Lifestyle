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
  "id": "usda-sr-legacy-171082",
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
  "name": "Turkey, whole, skin (light and dark), roasted",
  "nutritionPerBasis": {
    "calcium_mg": 21.0,
    "carbs_g": 0.57,
    "energy_kcal": 459.0,
    "fat_g": 39.3,
    "fibre_g": 0.0,
    "folate_ug": 8.0,
    "iron_mg": 1.63,
    "magnesium_mg": 33.0,
    "omega3_g": 0.7,
    "phosphorus_mg": 233.0,
    "potassium_mg": 242.0,
    "protein_g": 23.9,
    "salt_g": 0.29,
    "sat_fat_g": 11.4,
    "sodium_mg": 116.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 79.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.15,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171082",
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
