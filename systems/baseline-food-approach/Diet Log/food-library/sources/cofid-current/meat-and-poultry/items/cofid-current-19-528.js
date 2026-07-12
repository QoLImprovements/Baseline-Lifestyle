/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "Calculated from 55% chicken curry (19-188) and 45% retail, ready cooked, plain white rice",
  "id": "cofid-current-19-528",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Curry, chicken, average, retail, reheated with rice",
  "nutritionPerBasis": {
    "calcium_mg": 0.0,
    "carbs_g": 18.2,
    "energy_kcal": 154.0,
    "fat_g": 5.8,
    "fibre_g": 1.3,
    "folate_ug": 0.0,
    "iron_mg": 0.0,
    "magnesium_mg": 0.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 0.0,
    "potassium_mg": 188.0,
    "protein_g": 8.5,
    "salt_g": 0.5,
    "sat_fat_g": 2.34,
    "sodium_mg": 200.0,
    "sugar_g": 2.4,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 0.88,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "19-528",
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
