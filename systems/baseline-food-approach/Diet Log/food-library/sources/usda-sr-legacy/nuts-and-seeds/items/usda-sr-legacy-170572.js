/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Nuts & Seeds",
  "defaultMeasure": "cup-whole",
  "description": "Nut and Seed Products",
  "id": "usda-sr-legacy-170572",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 129.0,
      "key": "cup-whole",
      "kind": "unit",
      "label": "cup, whole"
    },
    {
      "gramsPerUnit": 129.0,
      "key": "cup-halves-and-pieces",
      "kind": "unit",
      "label": "cup, halves and pieces"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz-18-kernels",
      "kind": "unit",
      "label": "oz (18 kernels)"
    }
  ],
  "name": "Nuts, cashew nuts, oil roasted, without salt added",
  "nutritionPerBasis": {
    "calcium_mg": 43.0,
    "carbs_g": 29.9,
    "energy_kcal": 580.0,
    "fat_g": 47.8,
    "fibre_g": 3.3,
    "folate_ug": 25.0,
    "iron_mg": 6.05,
    "magnesium_mg": 273.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 531.0,
    "potassium_mg": 632.0,
    "protein_g": 16.8,
    "salt_g": 0.0325,
    "sat_fat_g": 8.48,
    "sodium_mg": 13.0,
    "sugar_g": 5.01,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.3,
    "vitamin_e_mg": 0.92,
    "vitamin_k_ug": 34.7
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170572",
  "state": "Roasted",
  "subcategory": "Nut and Seed Products",
  "tags": [
    "nut-and-seed-products",
    "nuts-and-seeds",
    "roasted"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
