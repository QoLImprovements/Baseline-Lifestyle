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
  "id": "usda-sr-legacy-169151",
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
  "name": "Pork, cured, ham -- water added, slice, bone-in, separable lean only, unheated",
  "nutritionPerBasis": {
    "calcium_mg": 9.0,
    "carbs_g": 1.23,
    "energy_kcal": 398.0,
    "fat_g": 2.29,
    "fibre_g": 0.0,
    "folate_ug": 1.0,
    "iron_mg": 1.08,
    "magnesium_mg": 17.0,
    "omega3_g": 0.011,
    "phosphorus_mg": 235.0,
    "potassium_mg": 221.0,
    "protein_g": 17.4,
    "salt_g": 2.725,
    "sat_fat_g": 0.768,
    "sodium_mg": 1090.0,
    "sugar_g": 1.23,
    "vitamin_a_ug": 9.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.19,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169151",
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
