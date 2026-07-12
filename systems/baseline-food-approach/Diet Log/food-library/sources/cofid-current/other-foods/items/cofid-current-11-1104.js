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
  "id": "cofid-current-11-1104",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Paratha, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 21.0,
    "carbs_g": 45.8,
    "energy_kcal": 333.0,
    "fat_g": 14.4,
    "fibre_g": 4.9,
    "folate_ug": 14.0,
    "iron_mg": 1.5,
    "magnesium_mg": 46.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 165.0,
    "potassium_mg": 190.0,
    "protein_g": 7.8,
    "salt_g": 0.295,
    "sat_fat_g": 8.51,
    "sodium_mg": 118.0,
    "sugar_g": 0.7,
    "vitamin_a_ug": 169.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.86,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-1104",
  "state": "Unspecified",
  "subcategory": "AF",
  "tags": [
    "af",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
