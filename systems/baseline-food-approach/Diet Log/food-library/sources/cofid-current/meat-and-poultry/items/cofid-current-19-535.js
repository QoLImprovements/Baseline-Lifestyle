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
  "id": "cofid-current-19-535",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Curry, lamb, made with cook-in sauce",
  "nutritionPerBasis": {
    "calcium_mg": 24.0,
    "carbs_g": 5.5,
    "energy_kcal": 242.0,
    "fat_g": 17.7,
    "fibre_g": 1.5,
    "folate_ug": 7.0,
    "iron_mg": 1.58,
    "magnesium_mg": 26.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 155.0,
    "potassium_mg": 392.0,
    "protein_g": 15.5,
    "salt_g": 0.5775,
    "sat_fat_g": 7.13,
    "sodium_mg": 231.0,
    "sugar_g": 3.9,
    "vitamin_a_ug": 45.0,
    "vitamin_c_mg": 2.0,
    "vitamin_e_mg": 2.33,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "19-535",
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
