/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Nuts & Seeds",
  "defaultMeasure": "oz",
  "description": "Snacks",
  "id": "usda-sr-legacy-167969",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    },
    {
      "gramsPerUnit": 146.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 42.0,
      "key": "1-5-oz",
      "kind": "unit",
      "label": "1.5 oz"
    }
  ],
  "name": "Snacks, trail mix, regular, with chocolate chips, salted nuts and seeds",
  "nutritionPerBasis": {
    "calcium_mg": 109.0,
    "carbs_g": 44.9,
    "energy_kcal": 2020.0,
    "fat_g": 31.9,
    "fibre_g": 5.0,
    "folate_ug": 52.0,
    "iron_mg": 3.39,
    "magnesium_mg": 161.0,
    "omega3_g": 0.002,
    "phosphorus_mg": 387.0,
    "potassium_mg": 648.0,
    "protein_g": 14.2,
    "salt_g": 0.3025,
    "sat_fat_g": 6.09,
    "sodium_mg": 121.0,
    "sugar_g": 23.9,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 1.3,
    "vitamin_e_mg": 8.4,
    "vitamin_k_ug": 6.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167969",
  "state": "Unspecified",
  "subcategory": "Snacks",
  "tags": [
    "nuts-and-seeds",
    "snacks",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
