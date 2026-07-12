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
  "id": "cofid-current-19-476",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Bolognese sauce (with meat), homemade",
  "nutritionPerBasis": {
    "calcium_mg": 16.0,
    "carbs_g": 2.8,
    "energy_kcal": 161.0,
    "fat_g": 11.6,
    "fibre_g": 0.7,
    "folate_ug": 7.0,
    "iron_mg": 1.13,
    "magnesium_mg": 16.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 104.0,
    "potassium_mg": 288.0,
    "protein_g": 11.8,
    "salt_g": 0.45,
    "sat_fat_g": 4.2,
    "sodium_mg": 180.0,
    "sugar_g": 2.6,
    "vitamin_a_ug": 116.0,
    "vitamin_c_mg": 3.0,
    "vitamin_e_mg": 1.97,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "19-476",
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
