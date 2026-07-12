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
  "id": "cofid-current-12-344",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Cheese, Brie, with outer rind removed",
  "nutritionPerBasis": {
    "calcium_mg": 256.0,
    "carbs_g": 0.0,
    "energy_kcal": 343.0,
    "fat_g": 29.1,
    "fibre_g": 0.0,
    "folate_ug": 55.0,
    "iron_mg": 0.0,
    "magnesium_mg": 15.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 232.0,
    "potassium_mg": 91.0,
    "protein_g": 20.3,
    "salt_g": 1.39,
    "sat_fat_g": 18.2,
    "sodium_mg": 556.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 329.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.81,
    "vitamin_k_ug": 2.4
  },
  "source": "UK CoFID 2021",
  "sourceId": "12-344",
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
