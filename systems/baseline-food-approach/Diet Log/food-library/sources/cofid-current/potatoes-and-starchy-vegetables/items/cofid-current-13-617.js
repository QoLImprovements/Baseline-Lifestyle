/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "g",
  "description": "Calculated from ingredients; made up as packet directions",
  "id": "cofid-current-13-617",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Potato powder, instant, made up with whole milk",
  "nutritionPerBasis": {
    "calcium_mg": 44.0,
    "carbs_g": 14.8,
    "energy_kcal": 76.0,
    "fat_g": 1.2,
    "fibre_g": 0.0,
    "folate_ug": 4.0,
    "iron_mg": 0.4,
    "magnesium_mg": 15.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 66.0,
    "potassium_mg": 290.0,
    "protein_g": 2.4,
    "salt_g": 0.25,
    "sat_fat_g": 0.0,
    "sodium_mg": 100.0,
    "sugar_g": 2.0,
    "vitamin_a_ug": 15.0,
    "vitamin_c_mg": 23.0,
    "vitamin_e_mg": 0.05,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-617",
  "state": "Unspecified",
  "subcategory": "DAR",
  "tags": [
    "dar",
    "potatoes-and-starchy-vegetables",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
