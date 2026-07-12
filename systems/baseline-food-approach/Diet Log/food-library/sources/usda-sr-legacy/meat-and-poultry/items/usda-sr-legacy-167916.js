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
  "id": "usda-sr-legacy-167916",
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
  "name": "Pork, cured, ham -- water added, rump, bone-in, separable lean only, unheated",
  "nutritionPerBasis": {
    "calcium_mg": 7.0,
    "carbs_g": 0.67,
    "energy_kcal": 399.0,
    "fat_g": 3.48,
    "fibre_g": 0.0,
    "folate_ug": 3.0,
    "iron_mg": 1.13,
    "magnesium_mg": 16.0,
    "omega3_g": 0.01,
    "phosphorus_mg": 235.0,
    "potassium_mg": 205.0,
    "protein_g": 15.4,
    "salt_g": 2.925,
    "sat_fat_g": 1.23,
    "sodium_mg": 1170.0,
    "sugar_g": 0.67,
    "vitamin_a_ug": 9.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.16,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167916",
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
