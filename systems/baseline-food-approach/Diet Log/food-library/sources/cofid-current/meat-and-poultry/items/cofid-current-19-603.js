/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "Recipe",
  "id": "cofid-current-19-603",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Liver and bacon, fried, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 8.0,
    "carbs_g": 0.0,
    "energy_kcal": 247.0,
    "fat_g": 14.7,
    "fibre_g": 0.0,
    "folate_ug": 166.0,
    "iron_mg": 6.28,
    "magnesium_mg": 24.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 436.0,
    "potassium_mg": 344.0,
    "protein_g": 28.9,
    "salt_g": 0.8675,
    "sat_fat_g": 0.0,
    "sodium_mg": 347.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 15760.0,
    "vitamin_c_mg": 15.0,
    "vitamin_e_mg": 0.27,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "19-603",
  "state": "Fried",
  "subcategory": "MR",
  "tags": [
    "fried",
    "meat-and-poultry",
    "mr"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
