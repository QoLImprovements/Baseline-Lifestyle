/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "7 samples, each sampled in spring and autumn",
  "id": "cofid-current-12-494",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Cheese, Dolcelatte, rind removed",
  "nutritionPerBasis": {
    "calcium_mg": 314.0,
    "carbs_g": 0.0,
    "energy_kcal": 394.0,
    "fat_g": 35.8,
    "fibre_g": 0.0,
    "folate_ug": 67.0,
    "iron_mg": 0.0,
    "magnesium_mg": 13.0,
    "omega3_g": 0.26,
    "phosphorus_mg": 253.0,
    "potassium_mg": 94.0,
    "protein_g": 18.0,
    "salt_g": 2.2575,
    "sat_fat_g": 22.23,
    "sodium_mg": 903.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 430.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.82,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "12-494",
  "state": "Unspecified",
  "subcategory": "BL",
  "tags": [
    "bl",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
