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
  "id": "usda-sr-legacy-170562",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 140.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 46.0,
      "key": "cup-with-hulls-edible-yield",
      "kind": "unit",
      "label": "cup, with hulls, edible yield"
    }
  ],
  "name": "Seeds, sunflower seed kernels, dried",
  "nutritionPerBasis": {
    "calcium_mg": 78.0,
    "carbs_g": 20.0,
    "energy_kcal": 2440.0,
    "fat_g": 51.5,
    "fibre_g": 8.6,
    "folate_ug": 227.0,
    "iron_mg": 5.25,
    "magnesium_mg": 325.0,
    "omega3_g": 0.014,
    "phosphorus_mg": 660.0,
    "potassium_mg": 645.0,
    "protein_g": 20.8,
    "salt_g": 0.0225,
    "sat_fat_g": 4.46,
    "sodium_mg": 9.0,
    "sugar_g": 2.62,
    "vitamin_a_ug": 3.0,
    "vitamin_c_mg": 1.4,
    "vitamin_e_mg": 35.2,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170562",
  "state": "Dried",
  "subcategory": "Nut and Seed Products",
  "tags": [
    "dried",
    "nut-and-seed-products",
    "nuts-and-seeds"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
