/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "12 samples from 3 egg distribution centres, including enriched cage, barn, free-range and organic",
  "id": "cofid-current-12-937",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Eggs, chicken, whole, raw",
  "nutritionPerBasis": {
    "calcium_mg": 46.0,
    "carbs_g": 0.0,
    "energy_kcal": 131.0,
    "fat_g": 9.0,
    "fibre_g": 0.0,
    "folate_ug": 47.0,
    "iron_mg": 1.72,
    "magnesium_mg": 13.0,
    "omega3_g": 0.13,
    "phosphorus_mg": 179.0,
    "potassium_mg": 145.0,
    "protein_g": 12.6,
    "salt_g": 0.385,
    "sat_fat_g": 2.52,
    "sodium_mg": 154.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 126.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.29,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "12-937",
  "state": "Raw",
  "subcategory": "CA",
  "tags": [
    "ca",
    "meat-and-poultry",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
