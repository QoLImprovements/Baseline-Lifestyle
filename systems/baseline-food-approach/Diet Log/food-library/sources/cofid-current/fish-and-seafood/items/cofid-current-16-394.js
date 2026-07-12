/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "g",
  "description": "7 samples, 7 products, frozen and chilled",
  "id": "cofid-current-16-394",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Mackerel, flesh only, grilled",
  "nutritionPerBasis": {
    "calcium_mg": 17.0,
    "carbs_g": 0.0,
    "energy_kcal": 283.0,
    "fat_g": 22.4,
    "fibre_g": 0.0,
    "folate_ug": 1.0,
    "iron_mg": 1.28,
    "magnesium_mg": 38.0,
    "omega3_g": 4.83,
    "phosphorus_mg": 236.0,
    "potassium_mg": 349.0,
    "protein_g": 20.3,
    "salt_g": 0.4075,
    "sat_fat_g": 5.1,
    "sodium_mg": 163.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 61.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.46,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "16-394",
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
