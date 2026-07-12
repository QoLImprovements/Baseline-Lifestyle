/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "9 samples, sampled in spring and autumn",
  "id": "cofid-current-12-489",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Cheese, Wensleydale",
  "nutritionPerBasis": {
    "calcium_mg": 560.0,
    "carbs_g": 0.1,
    "energy_kcal": 381.0,
    "fat_g": 31.8,
    "fibre_g": 0.0,
    "folate_ug": 43.0,
    "iron_mg": 0.3,
    "magnesium_mg": 19.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 410.0,
    "potassium_mg": 89.0,
    "protein_g": 23.7,
    "salt_g": 1.1,
    "sat_fat_g": 19.7,
    "sodium_mg": 440.0,
    "sugar_g": 0.1,
    "vitamin_a_ug": 391.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.45,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "12-489",
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
