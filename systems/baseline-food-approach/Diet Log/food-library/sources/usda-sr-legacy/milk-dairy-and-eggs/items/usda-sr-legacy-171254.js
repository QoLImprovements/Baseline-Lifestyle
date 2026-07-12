/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "cubic-inch",
  "description": "Dairy and Egg Products",
  "id": "usda-sr-legacy-171254",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 18.0,
      "key": "cubic-inch",
      "kind": "unit",
      "label": "cubic inch"
    },
    {
      "gramsPerUnit": 128.0,
      "key": "jar-5-oz",
      "kind": "unit",
      "label": "jar (5 oz)"
    },
    {
      "gramsPerUnit": 244.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 34.0,
      "key": "slice",
      "kind": "unit",
      "label": "slice"
    },
    {
      "gramsPerUnit": 140.0,
      "key": "cup-diced",
      "kind": "unit",
      "label": "cup, diced"
    },
    {
      "gramsPerUnit": 14.0,
      "key": "slice-thin",
      "kind": "unit",
      "label": "slice, thin"
    }
  ],
  "name": "Cheese spread, pasteurized process, American",
  "nutritionPerBasis": {
    "calcium_mg": 562.0,
    "carbs_g": 8.73,
    "energy_kcal": 1220.0,
    "fat_g": 21.2,
    "fibre_g": 0.0,
    "folate_ug": 7.0,
    "iron_mg": 0.33,
    "magnesium_mg": 29.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 875.0,
    "potassium_mg": 242.0,
    "protein_g": 16.4,
    "salt_g": 4.05,
    "sat_fat_g": 13.3,
    "sodium_mg": 1620.0,
    "sugar_g": 7.32,
    "vitamin_a_ug": 173.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.19,
    "vitamin_k_ug": 1.8
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171254",
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
