/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "20 samples",
  "id": "cofid-current-12-355",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Cheese, Edam",
  "nutritionPerBasis": {
    "calcium_mg": 795.0,
    "carbs_g": 0.0,
    "energy_kcal": 341.0,
    "fat_g": 26.0,
    "fibre_g": 0.0,
    "folate_ug": 36.0,
    "iron_mg": 0.3,
    "magnesium_mg": 34.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 508.0,
    "potassium_mg": 89.0,
    "protein_g": 26.7,
    "salt_g": 2.49,
    "sat_fat_g": 15.8,
    "sodium_mg": 996.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 218.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.48,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "12-355",
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
