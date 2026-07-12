/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "10 samples",
  "id": "cofid-current-19-323",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Chicken satay, takeaway",
  "nutritionPerBasis": {
    "calcium_mg": 30.0,
    "carbs_g": 3.0,
    "energy_kcal": 191.0,
    "fat_g": 10.3,
    "fibre_g": 2.0,
    "folate_ug": 27.0,
    "iron_mg": 1.04,
    "magnesium_mg": 43.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 223.0,
    "potassium_mg": 363.0,
    "protein_g": 21.7,
    "salt_g": 1.5325,
    "sat_fat_g": 3.02,
    "sodium_mg": 613.0,
    "sugar_g": 1.6,
    "vitamin_a_ug": 9.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.41,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "19-323",
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
