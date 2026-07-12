/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "g",
  "description": "11 samples including beef and lamb, chilled and frozen, 11.5-25% meat",
  "id": "cofid-current-19-494",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Pie, Cottage/Shepherd's, reheated",
  "nutritionPerBasis": {
    "calcium_mg": 20.0,
    "carbs_g": 11.9,
    "energy_kcal": 111.0,
    "fat_g": 5.4,
    "fibre_g": 1.2,
    "folate_ug": 14.0,
    "iron_mg": 0.7,
    "magnesium_mg": 14.0,
    "omega3_g": 0.06,
    "phosphorus_mg": 65.0,
    "potassium_mg": 240.0,
    "protein_g": 4.5,
    "salt_g": 0.6,
    "sat_fat_g": 2.4,
    "sodium_mg": 240.0,
    "sugar_g": 1.6,
    "vitamin_a_ug": 35.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 0.28,
    "vitamin_k_ug": 1.09
  },
  "source": "UK CoFID 2021",
  "sourceId": "19-494",
  "state": "Unspecified",
  "subcategory": "MR",
  "tags": [
    "mr",
    "sweets-and-desserts",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
