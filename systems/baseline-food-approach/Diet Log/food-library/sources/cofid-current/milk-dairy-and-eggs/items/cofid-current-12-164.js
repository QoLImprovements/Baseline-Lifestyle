/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "10 samples",
  "id": "cofid-current-12-164",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Cheese, Gruyere",
  "nutritionPerBasis": {
    "calcium_mg": 950.0,
    "carbs_g": 0.0,
    "energy_kcal": 409.0,
    "fat_g": 33.3,
    "fibre_g": 0.0,
    "folate_ug": 12.0,
    "iron_mg": 0.3,
    "magnesium_mg": 37.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 610.0,
    "potassium_mg": 99.0,
    "protein_g": 27.2,
    "salt_g": 1.675,
    "sat_fat_g": 20.8,
    "sodium_mg": 670.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 363.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.58,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "12-164",
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
