/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "quart",
  "description": "Dairy and Egg Products",
  "id": "usda-sr-legacy-173450",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 1000.0,
      "key": "quart",
      "kind": "unit",
      "label": "quart"
    },
    {
      "gramsPerUnit": 250.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 31.2,
      "key": "fl-oz",
      "kind": "unit",
      "label": "fl oz"
    }
  ],
  "name": "Milk, chocolate, fluid, commercial, reduced fat, with added calcium",
  "nutritionPerBasis": {
    "calcium_mg": 194.0,
    "carbs_g": 12.1,
    "energy_kcal": 325.0,
    "fat_g": 1.9,
    "fibre_g": 0.7,
    "folate_ug": 2.0,
    "iron_mg": 0.24,
    "magnesium_mg": 14.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 76.0,
    "potassium_mg": 123.0,
    "protein_g": 2.99,
    "salt_g": 0.165,
    "sat_fat_g": 1.18,
    "sodium_mg": 66.0,
    "sugar_g": 9.55,
    "vitamin_a_ug": 64.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.04,
    "vitamin_k_ug": 0.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173450",
  "state": "Unspecified",
  "subcategory": "Dairy and Egg Products",
  "tags": [
    "dairy-and-egg-products",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
