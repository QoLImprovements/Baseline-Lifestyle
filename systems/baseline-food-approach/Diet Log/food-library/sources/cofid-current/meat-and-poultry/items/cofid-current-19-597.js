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
  "id": "cofid-current-19-597",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Samosas, lamb, deep fried in rapeseed oil, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 30.0,
    "carbs_g": 16.9,
    "energy_kcal": 379.0,
    "fat_g": 31.5,
    "fibre_g": 1.7,
    "folate_ug": 7.0,
    "iron_mg": 1.15,
    "magnesium_mg": 17.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 95.0,
    "potassium_mg": 219.0,
    "protein_g": 8.1,
    "salt_g": 0.0725,
    "sat_fat_g": 3.72,
    "sodium_mg": 29.0,
    "sugar_g": 1.2,
    "vitamin_a_ug": 11.0,
    "vitamin_c_mg": 3.0,
    "vitamin_e_mg": 6.25,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "19-597",
  "state": "Deep-fried",
  "subcategory": "MI",
  "tags": [
    "deep-fried",
    "meat-and-poultry",
    "mi"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
