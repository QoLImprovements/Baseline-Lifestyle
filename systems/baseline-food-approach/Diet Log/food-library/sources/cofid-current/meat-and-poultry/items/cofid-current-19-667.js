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
  "id": "cofid-current-19-667",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Pork, stir-fried with vegetables, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 12.0,
    "carbs_g": 2.6,
    "energy_kcal": 103.0,
    "fat_g": 2.9,
    "fibre_g": 0.0,
    "folate_ug": 9.0,
    "iron_mg": 1.2,
    "magnesium_mg": 27.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 165.0,
    "potassium_mg": 351.0,
    "protein_g": 16.4,
    "salt_g": 0.84,
    "sat_fat_g": 0.58,
    "sodium_mg": 336.0,
    "sugar_g": 1.2,
    "vitamin_a_ug": 15.0,
    "vitamin_c_mg": 14.0,
    "vitamin_e_mg": 0.61,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "19-667",
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
