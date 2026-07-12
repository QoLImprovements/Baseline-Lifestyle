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
  "id": "cofid-current-16-393",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Mackerel, flesh only, raw",
  "nutritionPerBasis": {
    "calcium_mg": 20.0,
    "carbs_g": 0.0,
    "energy_kcal": 233.0,
    "fat_g": 17.9,
    "fibre_g": 0.0,
    "folate_ug": 1.0,
    "iron_mg": 0.98,
    "magnesium_mg": 37.0,
    "omega3_g": 4.05,
    "phosphorus_mg": 220.0,
    "potassium_mg": 335.0,
    "protein_g": 18.0,
    "salt_g": 0.3825,
    "sat_fat_g": 3.85,
    "sodium_mg": 153.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 54.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.43,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "16-393",
  "state": "Raw",
  "subcategory": "JC",
  "tags": [
    "fish-and-seafood",
    "jc",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
