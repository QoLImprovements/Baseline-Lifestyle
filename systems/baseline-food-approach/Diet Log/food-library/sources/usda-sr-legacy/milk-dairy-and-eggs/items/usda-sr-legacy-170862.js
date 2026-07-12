/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "fl-oz",
  "description": "Dairy and Egg Products",
  "id": "usda-sr-legacy-170862",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 30.5,
      "key": "fl-oz",
      "kind": "unit",
      "label": "fl oz"
    },
    {
      "gramsPerUnit": 244.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 976.0,
      "key": "quart",
      "kind": "unit",
      "label": "quart"
    }
  ],
  "name": "Milk, filled, fluid, with lauric acid oil",
  "nutritionPerBasis": {
    "calcium_mg": 128.0,
    "carbs_g": 4.74,
    "energy_kcal": 262.0,
    "fat_g": 3.4,
    "fibre_g": 0.0,
    "folate_ug": 5.0,
    "iron_mg": 0.05,
    "magnesium_mg": 13.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 97.0,
    "potassium_mg": 139.0,
    "protein_g": 3.33,
    "salt_g": 0.1425,
    "sat_fat_g": 3.1,
    "sodium_mg": 57.0,
    "sugar_g": 4.74,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 0.9,
    "vitamin_e_mg": 0.13,
    "vitamin_k_ug": 0.8
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170862",
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
