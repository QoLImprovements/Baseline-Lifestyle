/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "Average of summer and winter milk. Samples from 11 areas, in glass bottles (50%), plastic containers (30%) and cartons (20%)",
  "id": "cofid-current-12-307",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Milk, skimmed, pasteurised, average",
  "nutritionPerBasis": {
    "calcium_mg": 125.0,
    "carbs_g": 4.8,
    "energy_kcal": 34.0,
    "fat_g": 0.3,
    "fibre_g": 0.0,
    "folate_ug": 9.0,
    "iron_mg": 0.03,
    "magnesium_mg": 11.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 96.0,
    "potassium_mg": 162.0,
    "protein_g": 3.5,
    "salt_g": 0.11,
    "sat_fat_g": 0.13,
    "sodium_mg": 44.0,
    "sugar_g": 4.8,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.02
  },
  "source": "UK CoFID 2021",
  "sourceId": "12-307",
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
