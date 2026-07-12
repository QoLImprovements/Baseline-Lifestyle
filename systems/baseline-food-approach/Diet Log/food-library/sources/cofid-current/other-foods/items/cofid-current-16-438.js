/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "Calculated from raw (analytical data 2010-2011) using weight loss on cooking",
  "id": "cofid-current-16-438",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Sardines, flesh only, grilled",
  "nutritionPerBasis": {
    "calcium_mg": 63.0,
    "carbs_g": 0.0,
    "energy_kcal": 172.0,
    "fat_g": 7.8,
    "fibre_g": 0.0,
    "folate_ug": 9.0,
    "iron_mg": 1.99,
    "magnesium_mg": 40.0,
    "omega3_g": 1.69,
    "phosphorus_mg": 329.0,
    "potassium_mg": 496.0,
    "protein_g": 25.4,
    "salt_g": 0.435,
    "sat_fat_g": 2.35,
    "sodium_mg": 174.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 13.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.4,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "16-438",
  "state": "Grilled",
  "subcategory": "JC",
  "tags": [
    "grilled",
    "jc",
    "other-foods"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
