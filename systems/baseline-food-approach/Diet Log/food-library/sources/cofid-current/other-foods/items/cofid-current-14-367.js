/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "Calculation from 1000g fruit, 190g water, 120g sugar",
  "id": "cofid-current-14-367",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Pears, average, stewed with sugar",
  "nutritionPerBasis": {
    "calcium_mg": 6.0,
    "carbs_g": 18.8,
    "energy_kcal": 72.0,
    "fat_g": 0.1,
    "fibre_g": 2.1,
    "folate_ug": 1.0,
    "iron_mg": 0.13,
    "magnesium_mg": 4.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 7.0,
    "potassium_mg": 83.0,
    "protein_g": 0.2,
    "salt_g": 0.0025,
    "sat_fat_g": 0.01,
    "sodium_mg": 1.0,
    "sugar_g": 18.8,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 2.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "14-367",
  "state": "Unspecified",
  "subcategory": "F",
  "tags": [
    "f",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
