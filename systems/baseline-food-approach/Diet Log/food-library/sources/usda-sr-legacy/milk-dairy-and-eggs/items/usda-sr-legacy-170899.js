/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "slice-1-oz",
  "description": "Dairy and Egg Products",
  "id": "usda-sr-legacy-170899",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "slice-1-oz",
      "kind": "unit",
      "label": "slice (1 oz)"
    },
    {
      "gramsPerUnit": 21.0,
      "key": "slice-3-4-oz",
      "kind": "unit",
      "label": "slice (3/4 oz)"
    },
    {
      "gramsPerUnit": 19.0,
      "key": "slice-2-3-oz",
      "kind": "unit",
      "label": "slice (2/3 oz)"
    }
  ],
  "name": "Cheese, cheddar, sharp, sliced",
  "nutritionPerBasis": {
    "calcium_mg": 711.0,
    "carbs_g": 2.13,
    "energy_kcal": 1720.0,
    "fat_g": 33.8,
    "fibre_g": 0.0,
    "folate_ug": 27.0,
    "iron_mg": 0.16,
    "magnesium_mg": 27.0,
    "omega3_g": 0.145,
    "phosphorus_mg": 460.0,
    "potassium_mg": 76.0,
    "protein_g": 24.2,
    "salt_g": 1.61,
    "sat_fat_g": 19.4,
    "sodium_mg": 644.0,
    "sugar_g": 0.27,
    "vitamin_a_ug": 263.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.78,
    "vitamin_k_ug": 2.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170899",
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
