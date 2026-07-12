/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Nuts & Seeds",
  "defaultMeasure": "coconut-yields",
  "description": "Nut and Seed Products",
  "id": "usda-sr-legacy-170174",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 206.0,
      "key": "coconut-yields",
      "kind": "unit",
      "label": "coconut yields"
    },
    {
      "gramsPerUnit": 240.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    }
  ],
  "name": "Nuts, coconut water (liquid from coconuts)",
  "nutritionPerBasis": {
    "calcium_mg": 24.0,
    "carbs_g": 3.71,
    "energy_kcal": 79.0,
    "fat_g": 0.2,
    "fibre_g": 1.1,
    "folate_ug": 3.0,
    "iron_mg": 0.29,
    "magnesium_mg": 25.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 20.0,
    "potassium_mg": 250.0,
    "protein_g": 0.72,
    "salt_g": 0.2625,
    "sat_fat_g": 0.176,
    "sodium_mg": 105.0,
    "sugar_g": 2.61,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 2.4,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170174",
  "state": "Unspecified",
  "subcategory": "Nut and Seed Products",
  "tags": [
    "nut-and-seed-products",
    "nuts-and-seeds",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
