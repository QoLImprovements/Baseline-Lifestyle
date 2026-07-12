/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "10 samples, 3 brands, ambient",
  "id": "cofid-current-12-543",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Custard, ready to eat, canned and tetra-pak",
  "nutritionPerBasis": {
    "calcium_mg": 91.0,
    "carbs_g": 16.3,
    "energy_kcal": 98.0,
    "fat_g": 2.9,
    "fibre_g": 0.0,
    "folate_ug": 2.0,
    "iron_mg": 0.05,
    "magnesium_mg": 9.0,
    "omega3_g": 0.01,
    "phosphorus_mg": 83.0,
    "potassium_mg": 129.0,
    "protein_g": 2.7,
    "salt_g": 0.1025,
    "sat_fat_g": 1.89,
    "sodium_mg": 41.0,
    "sugar_g": 12.8,
    "vitamin_a_ug": 99.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.29,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "12-543",
  "state": "Canned",
  "subcategory": "BR",
  "tags": [
    "br",
    "canned",
    "milk-dairy-and-eggs"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
