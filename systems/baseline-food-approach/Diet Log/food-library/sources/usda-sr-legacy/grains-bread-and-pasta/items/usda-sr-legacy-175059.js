/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "cup-crushed",
  "description": "Baked Products",
  "id": "usda-sr-legacy-175059",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 83.0,
      "key": "cup-crushed",
      "kind": "unit",
      "label": "cup, crushed"
    },
    {
      "gramsPerUnit": 14.2,
      "key": "0-5-oz",
      "kind": "unit",
      "label": "0.5 oz"
    },
    {
      "gramsPerUnit": 2.0,
      "key": "cracker-thin-square",
      "kind": "unit",
      "label": "cracker, thin square"
    },
    {
      "gramsPerUnit": 2.0,
      "key": "cracker",
      "kind": "unit",
      "label": "cracker"
    }
  ],
  "name": "Crackers, wheat, low salt",
  "nutritionPerBasis": {
    "calcium_mg": 49.0,
    "carbs_g": 64.9,
    "energy_kcal": 1980.0,
    "fat_g": 20.6,
    "fibre_g": 4.5,
    "folate_ug": 50.0,
    "iron_mg": 4.4,
    "magnesium_mg": 62.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 220.0,
    "potassium_mg": 203.0,
    "protein_g": 8.6,
    "salt_g": 0.475,
    "sat_fat_g": 5.18,
    "sodium_mg": 190.0,
    "sugar_g": 13.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.5,
    "vitamin_k_ug": 9.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "175059",
  "state": "Unspecified",
  "subcategory": "Baked Products",
  "tags": [
    "baked-products",
    "grains-bread-and-pasta",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
