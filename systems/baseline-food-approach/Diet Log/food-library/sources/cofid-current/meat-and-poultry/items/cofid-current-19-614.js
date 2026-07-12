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
  "id": "cofid-current-19-614",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Chow mein, pork and chicken, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 23.0,
    "carbs_g": 5.8,
    "energy_kcal": 72.0,
    "fat_g": 1.9,
    "fibre_g": 0.0,
    "folate_ug": 8.0,
    "iron_mg": 0.93,
    "magnesium_mg": 21.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 110.0,
    "potassium_mg": 210.0,
    "protein_g": 9.2,
    "salt_g": 0.905,
    "sat_fat_g": 0.76,
    "sodium_mg": 362.0,
    "sugar_g": 1.5,
    "vitamin_a_ug": 74.0,
    "vitamin_c_mg": 4.0,
    "vitamin_e_mg": 3.34,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "19-614",
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
