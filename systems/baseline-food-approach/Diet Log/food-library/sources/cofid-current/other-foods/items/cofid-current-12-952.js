/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "Recipe",
  "id": "cofid-current-12-952",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Quiche, Lorraine, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 228.0,
    "carbs_g": 16.8,
    "energy_kcal": 358.0,
    "fat_g": 26.0,
    "fibre_g": 1.3,
    "folate_ug": 12.0,
    "iron_mg": 0.9,
    "magnesium_mg": 20.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 224.0,
    "potassium_mg": 206.0,
    "protein_g": 15.3,
    "salt_g": 1.47,
    "sat_fat_g": 11.19,
    "sodium_mg": 588.0,
    "sugar_g": 2.2,
    "vitamin_a_ug": 105.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "12-952",
  "state": "Unspecified",
  "subcategory": "CD",
  "tags": [
    "cd",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
