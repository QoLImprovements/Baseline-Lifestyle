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
  "id": "cofid-current-19-561",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Chicken fricassee, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 20.0,
    "carbs_g": 2.8,
    "energy_kcal": 115.0,
    "fat_g": 6.1,
    "fibre_g": 0.0,
    "folate_ug": 7.0,
    "iron_mg": 0.68,
    "magnesium_mg": 15.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 99.0,
    "potassium_mg": 256.0,
    "protein_g": 10.0,
    "salt_g": 0.6575,
    "sat_fat_g": 2.4,
    "sodium_mg": 263.0,
    "sugar_g": 1.5,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 2.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 1.41
  },
  "source": "UK CoFID 2021",
  "sourceId": "19-561",
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
