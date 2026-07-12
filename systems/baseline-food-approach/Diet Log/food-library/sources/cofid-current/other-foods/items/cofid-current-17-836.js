/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "Recipe, savoury Indian snack",
  "id": "cofid-current-17-836",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Sev/ganthia, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 48.0,
    "carbs_g": 47.1,
    "energy_kcal": 478.0,
    "fat_g": 25.1,
    "fibre_g": 8.4,
    "folate_ug": 72.0,
    "iron_mg": 2.2,
    "magnesium_mg": 51.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 182.0,
    "potassium_mg": 246.0,
    "protein_g": 18.8,
    "salt_g": 0.005,
    "sat_fat_g": 1.87,
    "sodium_mg": 2.0,
    "sugar_g": 1.9,
    "vitamin_a_ug": 4.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 6.69,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "17-836",
  "state": "Unspecified",
  "subcategory": "SNC",
  "tags": [
    "other-foods",
    "snc",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
