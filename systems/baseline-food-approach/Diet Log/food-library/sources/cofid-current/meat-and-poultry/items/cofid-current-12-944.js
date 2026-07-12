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
  "id": "cofid-current-12-944",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Eggs, chicken, whole, fried in sunflower oil",
  "nutritionPerBasis": {
    "calcium_mg": 53.0,
    "carbs_g": 0.0,
    "energy_kcal": 200.0,
    "fat_g": 15.7,
    "fibre_g": 0.0,
    "folate_ug": 25.0,
    "iron_mg": 2.03,
    "magnesium_mg": 14.0,
    "omega3_g": 0.14,
    "phosphorus_mg": 209.0,
    "potassium_mg": 164.0,
    "protein_g": 14.7,
    "salt_g": 0.43,
    "sat_fat_g": 3.35,
    "sodium_mg": 172.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 190.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 3.84,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "12-944",
  "state": "Fried",
  "subcategory": "CA",
  "tags": [
    "ca",
    "fried",
    "meat-and-poultry"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
