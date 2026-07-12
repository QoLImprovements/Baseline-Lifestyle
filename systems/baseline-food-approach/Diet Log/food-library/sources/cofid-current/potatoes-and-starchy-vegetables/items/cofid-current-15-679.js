/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "g",
  "description": "Bangladeshi dish. Recipe adapted from literature sources",
  "id": "cofid-current-15-679",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Bhaji, cauliflower and potato, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 39.0,
    "carbs_g": 10.1,
    "energy_kcal": 106.0,
    "fat_g": 6.8,
    "fibre_g": 2.3,
    "folate_ug": 28.0,
    "iron_mg": 2.07,
    "magnesium_mg": 27.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 58.0,
    "potassium_mg": 417.0,
    "protein_g": 3.3,
    "salt_g": 0.0425,
    "sat_fat_g": 0.52,
    "sodium_mg": 17.0,
    "sugar_g": 2.8,
    "vitamin_a_ug": 30.0,
    "vitamin_c_mg": 26.0,
    "vitamin_e_mg": 1.39,
    "vitamin_k_ug": 34.07
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-679",
  "state": "Unspecified",
  "subcategory": "DR",
  "tags": [
    "dr",
    "potatoes-and-starchy-vegetables",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
