/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "Average of glass bottles, plastic containers and cartons",
  "id": "cofid-current-12-309",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Milk, skimmed, pasteurised, winter",
  "nutritionPerBasis": {
    "calcium_mg": 124.0,
    "carbs_g": 4.2,
    "energy_kcal": 32.0,
    "fat_g": 0.2,
    "fibre_g": 0.0,
    "folate_ug": 14.0,
    "iron_mg": 0.01,
    "magnesium_mg": 11.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 99.0,
    "potassium_mg": 163.0,
    "protein_g": 3.5,
    "salt_g": 0.105,
    "sat_fat_g": 0.1,
    "sodium_mg": 42.0,
    "sugar_g": 4.2,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "12-309",
  "state": "Unspecified",
  "subcategory": "BAE",
  "tags": [
    "bae",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
