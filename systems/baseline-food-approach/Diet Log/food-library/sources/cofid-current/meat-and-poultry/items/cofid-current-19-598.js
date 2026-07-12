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
  "id": "cofid-current-19-598",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Lamb stir-fried with vegetables, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 20.0,
    "carbs_g": 2.3,
    "energy_kcal": 244.0,
    "fat_g": 18.4,
    "fibre_g": 0.0,
    "folate_ug": 10.0,
    "iron_mg": 1.84,
    "magnesium_mg": 22.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 158.0,
    "potassium_mg": 374.0,
    "protein_g": 16.4,
    "salt_g": 0.5925,
    "sat_fat_g": 7.36,
    "sodium_mg": 237.0,
    "sugar_g": 2.0,
    "vitamin_a_ug": 46.0,
    "vitamin_c_mg": 7.0,
    "vitamin_e_mg": 0.45,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "19-598",
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
