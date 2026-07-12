/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Nuts & Seeds",
  "defaultMeasure": "oz-19-halves",
  "description": "Nut and Seed Products",
  "id": "usda-sr-legacy-170182",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz-19-halves",
      "kind": "unit",
      "label": "oz (19 halves)"
    },
    {
      "gramsPerUnit": 109.0,
      "key": "cup-chopped",
      "kind": "unit",
      "label": "cup, chopped"
    },
    {
      "gramsPerUnit": 99.0,
      "key": "cup-halves",
      "kind": "unit",
      "label": "cup, halves"
    }
  ],
  "name": "Nuts, pecans",
  "nutritionPerBasis": {
    "calcium_mg": 70.0,
    "carbs_g": 13.9,
    "energy_kcal": 2890.0,
    "fat_g": 72.0,
    "fibre_g": 9.6,
    "folate_ug": 22.0,
    "iron_mg": 2.53,
    "magnesium_mg": 121.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 277.0,
    "potassium_mg": 410.0,
    "protein_g": 9.17,
    "salt_g": 0.0,
    "sat_fat_g": 6.18,
    "sodium_mg": 0.0,
    "sugar_g": 3.97,
    "vitamin_a_ug": 3.0,
    "vitamin_c_mg": 1.1,
    "vitamin_e_mg": 1.4,
    "vitamin_k_ug": 3.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170182",
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
