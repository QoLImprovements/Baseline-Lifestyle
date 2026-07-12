/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "g",
  "description": "Calculated from 14-159",
  "id": "cofid-current-14-160",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Melon, Galia, flesh only, weighed whole",
  "nutritionPerBasis": {
    "calcium_mg": 8.0,
    "carbs_g": 3.6,
    "energy_kcal": 16.0,
    "fat_g": 0.1,
    "fibre_g": 0.0,
    "folate_ug": 2.0,
    "iron_mg": 0.1,
    "magnesium_mg": 8.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 6.0,
    "potassium_mg": 96.0,
    "protein_g": 0.3,
    "salt_g": 0.05,
    "sat_fat_g": 0.0,
    "sodium_mg": 20.0,
    "sugar_g": 3.6,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 10.0,
    "vitamin_e_mg": 0.06,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "14-160",
  "state": "Unspecified",
  "subcategory": "FA",
  "tags": [
    "fa",
    "fruit",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
