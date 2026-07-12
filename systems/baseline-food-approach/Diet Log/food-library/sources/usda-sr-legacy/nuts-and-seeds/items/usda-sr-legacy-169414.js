/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Nuts & Seeds",
  "defaultMeasure": "tsp-ground",
  "description": "Nut and Seed Products",
  "id": "usda-sr-legacy-169414",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 2.5,
      "key": "tsp-ground",
      "kind": "unit",
      "label": "tsp, ground"
    },
    {
      "gramsPerUnit": 7.0,
      "key": "tbsp-ground",
      "kind": "unit",
      "label": "tbsp, ground"
    },
    {
      "gramsPerUnit": 168.0,
      "key": "cup-whole",
      "kind": "unit",
      "label": "cup, whole"
    },
    {
      "gramsPerUnit": 10.3,
      "key": "tbsp-whole",
      "kind": "unit",
      "label": "tbsp, whole"
    },
    {
      "gramsPerUnit": 3.4,
      "key": "tsp-whole",
      "kind": "unit",
      "label": "tsp, whole"
    }
  ],
  "name": "Seeds, flaxseed",
  "nutritionPerBasis": {
    "calcium_mg": 255.0,
    "carbs_g": 28.9,
    "energy_kcal": 534.0,
    "fat_g": 42.2,
    "fibre_g": 27.3,
    "folate_ug": 87.0,
    "iron_mg": 5.73,
    "magnesium_mg": 392.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 642.0,
    "potassium_mg": 813.0,
    "protein_g": 18.3,
    "salt_g": 0.075,
    "sat_fat_g": 3.66,
    "sodium_mg": 30.0,
    "sugar_g": 1.55,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.6,
    "vitamin_e_mg": 0.31,
    "vitamin_k_ug": 4.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169414",
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
