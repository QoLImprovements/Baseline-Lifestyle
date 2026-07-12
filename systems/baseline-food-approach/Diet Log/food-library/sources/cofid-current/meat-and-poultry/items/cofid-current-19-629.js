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
  "id": "cofid-current-19-629",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Pie, steak and kidney, double crust, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 53.0,
    "carbs_g": 22.2,
    "energy_kcal": 305.0,
    "fat_g": 18.1,
    "fibre_g": 1.8,
    "folate_ug": 3.0,
    "iron_mg": 2.48,
    "magnesium_mg": 17.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 149.0,
    "potassium_mg": 233.0,
    "protein_g": 14.6,
    "salt_g": 0.6575,
    "sat_fat_g": 8.53,
    "sodium_mg": 263.0,
    "sugar_g": 0.9,
    "vitamin_a_ug": 17.0,
    "vitamin_c_mg": 2.0,
    "vitamin_e_mg": 1.36,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "19-629",
  "state": "Unspecified",
  "subcategory": "MR",
  "tags": [
    "meat-and-poultry",
    "mr",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
