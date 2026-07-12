/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "Calculated from 14-327 using edible conversion factor of 0.71",
  "id": "cofid-current-14-360",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Oranges, flesh only, weighed with peel and pips",
  "nutritionPerBasis": {
    "calcium_mg": 17.0,
    "carbs_g": 5.8,
    "energy_kcal": 27.0,
    "fat_g": 0.2,
    "fibre_g": 1.2,
    "folate_ug": 23.0,
    "iron_mg": 0.08,
    "magnesium_mg": 6.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 11.0,
    "potassium_mg": 87.0,
    "protein_g": 0.8,
    "salt_g": 0.0,
    "sat_fat_g": 0.04,
    "sodium_mg": 0.0,
    "sugar_g": 5.8,
    "vitamin_a_ug": 7.0,
    "vitamin_c_mg": 37.0,
    "vitamin_e_mg": 0.25,
    "vitamin_k_ug": 0.04
  },
  "source": "UK CoFID 2021",
  "sourceId": "14-360",
  "state": "Unspecified",
  "subcategory": "FA",
  "tags": [
    "fa",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
