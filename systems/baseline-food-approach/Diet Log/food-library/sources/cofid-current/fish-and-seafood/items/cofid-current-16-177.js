/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "g",
  "description": "Calculated from grilled 16-176",
  "id": "cofid-current-16-177",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Herring, flesh only, grilled, weighed with bones and skin",
  "nutritionPerBasis": {
    "calcium_mg": 54.0,
    "carbs_g": 0.0,
    "energy_kcal": 123.0,
    "fat_g": 7.6,
    "fibre_g": 0.0,
    "folate_ug": 7.0,
    "iron_mg": 1.1,
    "magnesium_mg": 29.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 210.0,
    "potassium_mg": 300.0,
    "protein_g": 13.7,
    "salt_g": 0.275,
    "sat_fat_g": 1.9,
    "sodium_mg": 110.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 23.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.44,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "16-177",
  "state": "Grilled",
  "subcategory": "JC",
  "tags": [
    "fish-and-seafood",
    "grilled",
    "jc"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
