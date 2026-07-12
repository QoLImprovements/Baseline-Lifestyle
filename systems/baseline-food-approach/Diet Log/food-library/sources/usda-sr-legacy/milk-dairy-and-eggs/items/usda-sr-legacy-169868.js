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
  "id": "usda-sr-legacy-169868",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 30.9,
      "key": "fl-oz",
      "kind": "unit",
      "label": "fl oz"
    },
    {
      "gramsPerUnit": 247.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Milk, fluid, nonfat, calcium fortified (fat free or skim)",
  "nutritionPerBasis": {
    "calcium_mg": 204.0,
    "carbs_g": 4.85,
    "energy_kcal": 35.0,
    "fat_g": 0.18,
    "fibre_g": 0.0,
    "folate_ug": 5.0,
    "iron_mg": 0.04,
    "magnesium_mg": 11.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 101.0,
    "potassium_mg": 166.0,
    "protein_g": 3.4,
    "salt_g": 0.13,
    "sat_fat_g": 0.117,
    "sodium_mg": 52.0,
    "sugar_g": 4.85,
    "vitamin_a_ug": 137.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 0.01,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169868",
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
