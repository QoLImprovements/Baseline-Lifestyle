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
  "id": "cofid-current-19-570",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Chicken, stir-fried with peppers in black bean sauce, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 20.0,
    "carbs_g": 2.7,
    "energy_kcal": 124.0,
    "fat_g": 4.2,
    "fibre_g": 0.0,
    "folate_ug": 7.0,
    "iron_mg": 1.34,
    "magnesium_mg": 29.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 144.0,
    "potassium_mg": 356.0,
    "protein_g": 19.0,
    "salt_g": 0.915,
    "sat_fat_g": 0.0,
    "sodium_mg": 366.0,
    "sugar_g": 2.4,
    "vitamin_a_ug": 18.0,
    "vitamin_c_mg": 7.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "19-570",
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
