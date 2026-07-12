/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "Recipe. Calculated from 19-350 using 0.89 conversion factor",
  "id": "cofid-current-19-663",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Chicken chasseur, homemade, weighed with bone",
  "nutritionPerBasis": {
    "calcium_mg": 10.0,
    "carbs_g": 2.0,
    "energy_kcal": 69.0,
    "fat_g": 1.3,
    "fibre_g": 0.2,
    "folate_ug": 7.0,
    "iron_mg": 0.53,
    "magnesium_mg": 18.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 122.0,
    "potassium_mg": 253.0,
    "protein_g": 12.0,
    "salt_g": 0.295,
    "sat_fat_g": 0.22,
    "sodium_mg": 118.0,
    "sugar_g": 1.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "19-663",
  "state": "Unspecified",
  "subcategory": "MR",
  "tags": [
    "meat-and-poultry",
    "mr",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
