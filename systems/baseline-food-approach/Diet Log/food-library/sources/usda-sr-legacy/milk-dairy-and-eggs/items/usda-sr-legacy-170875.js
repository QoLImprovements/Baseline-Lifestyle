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
  "id": "usda-sr-legacy-170875",
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
  "name": "Milk, low sodium, fluid",
  "nutritionPerBasis": {
    "calcium_mg": 101.0,
    "carbs_g": 4.46,
    "energy_kcal": 255.0,
    "fat_g": 3.46,
    "fibre_g": 0.0,
    "folate_ug": 5.0,
    "iron_mg": 0.05,
    "magnesium_mg": 5.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 86.0,
    "potassium_mg": 253.0,
    "protein_g": 3.1,
    "salt_g": 0.0075,
    "sat_fat_g": 2.15,
    "sodium_mg": 3.0,
    "sugar_g": 4.46,
    "vitamin_a_ug": 29.0,
    "vitamin_c_mg": 0.9,
    "vitamin_e_mg": 0.08,
    "vitamin_k_ug": 0.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170875",
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
