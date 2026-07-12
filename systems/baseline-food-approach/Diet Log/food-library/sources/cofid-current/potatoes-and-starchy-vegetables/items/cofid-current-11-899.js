/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "g",
  "description": "4 samples, 2 products",
  "id": "cofid-current-11-899",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Flour, gari (cassava flour)",
  "nutritionPerBasis": {
    "calcium_mg": 41.0,
    "carbs_g": 95.1,
    "energy_kcal": 361.0,
    "fat_g": 0.2,
    "fibre_g": 4.6,
    "folate_ug": 38.0,
    "iron_mg": 2.02,
    "magnesium_mg": 42.0,
    "omega3_g": 0.01,
    "phosphorus_mg": 59.0,
    "potassium_mg": 443.0,
    "protein_g": 0.7,
    "salt_g": 0.01,
    "sat_fat_g": 0.04,
    "sodium_mg": 4.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.03,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-899",
  "state": "Unspecified",
  "subcategory": "AA",
  "tags": [
    "aa",
    "potatoes-and-starchy-vegetables",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
