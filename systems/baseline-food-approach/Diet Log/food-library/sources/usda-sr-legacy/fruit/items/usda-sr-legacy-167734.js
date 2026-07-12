/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "bar",
  "description": "Snacks",
  "id": "usda-sr-legacy-167734",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 37.0,
      "key": "bar",
      "kind": "unit",
      "label": "bar"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    }
  ],
  "name": "Breakfast bar, corn flake crust with fruit",
  "nutritionPerBasis": {
    "calcium_mg": 41.0,
    "carbs_g": 72.8,
    "energy_kcal": 1570.0,
    "fat_g": 7.5,
    "fibre_g": 2.1,
    "folate_ug": 108.0,
    "iron_mg": 4.86,
    "magnesium_mg": 27.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 103.0,
    "potassium_mg": 197.0,
    "protein_g": 4.4,
    "salt_g": 0.8425,
    "sat_fat_g": 1.5,
    "sodium_mg": 337.0,
    "sugar_g": 35.1,
    "vitamin_a_ug": 608.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.76,
    "vitamin_k_ug": 13.8
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167734",
  "state": "Unspecified",
  "subcategory": "Snacks",
  "tags": [
    "fruit",
    "snacks",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
