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
  "id": "usda-sr-legacy-169149",
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
  "name": "Pork, cured, ham -- water added, whole, boneless, separable lean only, unheated",
  "nutritionPerBasis": {
    "calcium_mg": 8.0,
    "carbs_g": 1.45,
    "energy_kcal": 459.0,
    "fat_g": 3.97,
    "fibre_g": 0.0,
    "folate_ug": 2.0,
    "iron_mg": 0.86,
    "magnesium_mg": 19.0,
    "omega3_g": 0.02,
    "phosphorus_mg": 265.0,
    "potassium_mg": 317.0,
    "protein_g": 17.3,
    "salt_g": 2.85,
    "sat_fat_g": 1.43,
    "sodium_mg": 1140.0,
    "sugar_g": 1.45,
    "vitamin_a_ug": 13.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.21,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169149",
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
