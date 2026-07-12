/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "Average of summer/autumn and winter/spring milk. Samples from 11 areas, in glass bottles (50%), plastic containers (30%) and cartons (20%)",
  "id": "cofid-current-12-313",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Milk, semi-skimmed, pasteurised, average",
  "nutritionPerBasis": {
    "calcium_mg": 120.0,
    "carbs_g": 4.7,
    "energy_kcal": 46.0,
    "fat_g": 1.7,
    "fibre_g": 0.0,
    "folate_ug": 9.0,
    "iron_mg": 0.02,
    "magnesium_mg": 11.0,
    "omega3_g": 0.01,
    "phosphorus_mg": 94.0,
    "potassium_mg": 156.0,
    "protein_g": 3.5,
    "salt_g": 0.1075,
    "sat_fat_g": 1.07,
    "sodium_mg": 43.0,
    "sugar_g": 4.7,
    "vitamin_a_ug": 20.0,
    "vitamin_c_mg": 2.0,
    "vitamin_e_mg": 0.04,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "12-313",
  "state": "Unspecified",
  "subcategory": "BAH",
  "tags": [
    "bah",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
