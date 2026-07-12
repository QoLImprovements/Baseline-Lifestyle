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
  "id": "cofid-current-11-1130",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Waffles, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 150.0,
    "carbs_g": 43.0,
    "energy_kcal": 335.0,
    "fat_g": 15.3,
    "fibre_g": 1.9,
    "folate_ug": 12.0,
    "iron_mg": 1.25,
    "magnesium_mg": 21.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 254.0,
    "potassium_mg": 217.0,
    "protein_g": 9.0,
    "salt_g": 0.765,
    "sat_fat_g": 8.96,
    "sodium_mg": 306.0,
    "sugar_g": 3.4,
    "vitamin_a_ug": 190.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 0.81,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-1130",
  "state": "Unspecified",
  "subcategory": "AP",
  "tags": [
    "ap",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
