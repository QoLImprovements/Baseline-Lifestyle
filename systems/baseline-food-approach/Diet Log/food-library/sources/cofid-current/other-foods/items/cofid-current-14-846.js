/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "Calculated from 14-845",
  "id": "cofid-current-14-846",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Sunflower seeds, toasted",
  "nutritionPerBasis": {
    "calcium_mg": 110.0,
    "carbs_g": 19.3,
    "energy_kcal": 602.0,
    "fat_g": 49.2,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 6.6,
    "magnesium_mg": 400.0,
    "omega3_g": 0.1,
    "phosphorus_mg": 660.0,
    "potassium_mg": 730.0,
    "protein_g": 20.5,
    "salt_g": 0.0075,
    "sat_fat_g": 6.8,
    "sodium_mg": 3.0,
    "sugar_g": 1.8,
    "vitamin_a_ug": 3.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 39.11,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "14-846",
  "state": "Unspecified",
  "subcategory": "GA",
  "tags": [
    "ga",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
