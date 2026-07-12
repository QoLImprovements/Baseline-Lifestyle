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
  "id": "cofid-current-12-367",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Cheese, Stilton, blue",
  "nutritionPerBasis": {
    "calcium_mg": 326.0,
    "carbs_g": 0.1,
    "energy_kcal": 410.0,
    "fat_g": 35.0,
    "fibre_g": 0.0,
    "folate_ug": 78.0,
    "iron_mg": 0.2,
    "magnesium_mg": 15.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 314.0,
    "potassium_mg": 96.0,
    "protein_g": 23.7,
    "salt_g": 1.97,
    "sat_fat_g": 23.02,
    "sodium_mg": 788.0,
    "sugar_g": 0.1,
    "vitamin_a_ug": 390.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.6,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "12-367",
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
