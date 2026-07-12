/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "10 samples, proximates as Derby",
  "id": "cofid-current-12-178",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Cheese, Sage Derby",
  "nutritionPerBasis": {
    "calcium_mg": 610.0,
    "carbs_g": 0.1,
    "energy_kcal": 402.0,
    "fat_g": 33.9,
    "fibre_g": 0.0,
    "folate_ug": 24.0,
    "iron_mg": 0.7,
    "magnesium_mg": 23.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 480.0,
    "potassium_mg": 64.0,
    "protein_g": 24.2,
    "salt_g": 1.5,
    "sat_fat_g": 21.2,
    "sodium_mg": 600.0,
    "sugar_g": 0.1,
    "vitamin_a_ug": 381.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.53,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "12-178",
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
