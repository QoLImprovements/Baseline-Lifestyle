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
  "id": "cofid-current-12-562",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Cheesecake, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 67.0,
    "carbs_g": 25.4,
    "energy_kcal": 325.0,
    "fat_g": 22.8,
    "fibre_g": 0.6,
    "folate_ug": 16.0,
    "iron_mg": 0.54,
    "magnesium_mg": 12.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 96.0,
    "potassium_mg": 117.0,
    "protein_g": 6.2,
    "salt_g": 0.665,
    "sat_fat_g": 13.18,
    "sodium_mg": 266.0,
    "sugar_g": 15.5,
    "vitamin_a_ug": 283.0,
    "vitamin_c_mg": 2.0,
    "vitamin_e_mg": 1.39,
    "vitamin_k_ug": 1.76
  },
  "source": "UK CoFID 2021",
  "sourceId": "12-562",
  "state": "Unspecified",
  "subcategory": "BR",
  "tags": [
    "br",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
