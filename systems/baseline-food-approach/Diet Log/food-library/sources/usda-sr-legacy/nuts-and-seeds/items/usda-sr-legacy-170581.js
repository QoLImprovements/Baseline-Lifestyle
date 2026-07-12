/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Nuts & Seeds",
  "defaultMeasure": "cup-chopped",
  "description": "Nut and Seed Products",
  "id": "usda-sr-legacy-170581",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 115.0,
      "key": "cup-chopped",
      "kind": "unit",
      "label": "cup, chopped"
    },
    {
      "gramsPerUnit": 14.0,
      "key": "10-nuts",
      "kind": "unit",
      "label": "10 nuts"
    },
    {
      "gramsPerUnit": 135.0,
      "key": "cup-whole",
      "kind": "unit",
      "label": "cup, whole"
    },
    {
      "gramsPerUnit": 75.0,
      "key": "cup-ground",
      "kind": "unit",
      "label": "cup, ground"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz-21-whole-kernels",
      "kind": "unit",
      "label": "oz (21 whole kernels)"
    }
  ],
  "name": "Nuts, hazelnuts or filberts",
  "nutritionPerBasis": {
    "calcium_mg": 114.0,
    "carbs_g": 16.7,
    "energy_kcal": 628.0,
    "fat_g": 60.8,
    "fibre_g": 9.7,
    "folate_ug": 113.0,
    "iron_mg": 4.7,
    "magnesium_mg": 163.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 290.0,
    "potassium_mg": 680.0,
    "protein_g": 15.0,
    "salt_g": 0.0,
    "sat_fat_g": 4.46,
    "sodium_mg": 0.0,
    "sugar_g": 4.34,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 6.3,
    "vitamin_e_mg": 15.0,
    "vitamin_k_ug": 14.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170581",
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
