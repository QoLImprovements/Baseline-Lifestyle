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
  "id": "cofid-current-12-600",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Trifle, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 62.0,
    "carbs_g": 21.6,
    "energy_kcal": 167.0,
    "fat_g": 7.9,
    "fibre_g": 0.0,
    "folate_ug": 7.0,
    "iron_mg": 0.3,
    "magnesium_mg": 12.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 83.0,
    "potassium_mg": 121.0,
    "protein_g": 2.7,
    "salt_g": 0.19,
    "sat_fat_g": 4.42,
    "sodium_mg": 76.0,
    "sugar_g": 16.7,
    "vitamin_a_ug": 127.0,
    "vitamin_c_mg": 5.0,
    "vitamin_e_mg": 0.6,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "12-600",
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
