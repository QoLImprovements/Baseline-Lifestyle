/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "g",
  "description": "Calculated from 14-386",
  "id": "cofid-current-14-387",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Avocado, Hass, flesh only, weighed with skin and stone",
  "nutritionPerBasis": {
    "calcium_mg": 13.0,
    "carbs_g": 1.3,
    "energy_kcal": 118.0,
    "fat_g": 12.0,
    "fibre_g": 2.1,
    "folate_ug": 21.6,
    "iron_mg": 0.35,
    "magnesium_mg": 19.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 39.0,
    "potassium_mg": 402.0,
    "protein_g": 1.3,
    "salt_g": 0.0125,
    "sat_fat_g": 2.86,
    "sodium_mg": 5.0,
    "sugar_g": 0.3,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 0.8,
    "vitamin_e_mg": 1.51,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "14-387",
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
