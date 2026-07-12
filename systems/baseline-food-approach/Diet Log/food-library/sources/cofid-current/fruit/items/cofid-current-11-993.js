/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "g",
  "description": "10 samples, 5 brands, 3 bakeries",
  "id": "cofid-current-11-993",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Scones, fruit, retail",
  "nutritionPerBasis": {
    "calcium_mg": 150.0,
    "carbs_g": 56.2,
    "energy_kcal": 338.0,
    "fat_g": 11.2,
    "fibre_g": 2.9,
    "folate_ug": 6.0,
    "iron_mg": 1.5,
    "magnesium_mg": 24.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 360.0,
    "potassium_mg": 220.0,
    "protein_g": 6.5,
    "salt_g": 1.0,
    "sat_fat_g": 6.3,
    "sodium_mg": 400.0,
    "sugar_g": 18.9,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.11,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-993",
  "state": "Unspecified",
  "subcategory": "AP",
  "tags": [
    "ap",
    "fruit",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
