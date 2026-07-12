/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Nuts & Seeds",
  "defaultMeasure": "cup",
  "description": "Nut and Seed Products",
  "id": "usda-sr-legacy-170586",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 147.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Nuts, mixed nuts, dry roasted, with peanuts, salt added, PLANTERS pistachio blend",
  "nutritionPerBasis": {
    "calcium_mg": 129.0,
    "carbs_g": 23.1,
    "energy_kcal": 2400.0,
    "fat_g": 47.5,
    "fibre_g": 8.1,
    "folate_ug": 60.0,
    "iron_mg": 3.43,
    "magnesium_mg": 209.0,
    "omega3_g": 0.094,
    "phosphorus_mg": 493.0,
    "potassium_mg": 758.0,
    "protein_g": 23.3,
    "salt_g": 0.58,
    "sat_fat_g": 6.71,
    "sodium_mg": 232.0,
    "sugar_g": 4.45,
    "vitamin_a_ug": 4.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 5.65,
    "vitamin_k_ug": 8.9
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170586",
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
