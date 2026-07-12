/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "Rolled beef stuffed with bacon and onions. Recipe",
  "id": "cofid-current-19-588",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Beef olives, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 9.0,
    "carbs_g": 1.6,
    "energy_kcal": 159.0,
    "fat_g": 11.0,
    "fibre_g": 0.2,
    "folate_ug": 6.0,
    "iron_mg": 1.06,
    "magnesium_mg": 16.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 131.0,
    "potassium_mg": 248.0,
    "protein_g": 13.9,
    "salt_g": 1.0925,
    "sat_fat_g": 4.07,
    "sodium_mg": 437.0,
    "sugar_g": 0.3,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.34,
    "vitamin_k_ug": 1.29
  },
  "source": "UK CoFID 2021",
  "sourceId": "19-588",
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
