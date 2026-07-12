/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "cup-shredded",
  "description": "Dairy and Egg Products",
  "id": "usda-sr-legacy-167735",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 113.0,
      "key": "cup-shredded",
      "kind": "unit",
      "label": "cup, shredded"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "slice-1-oz",
      "kind": "unit",
      "label": "slice (1 oz)"
    },
    {
      "gramsPerUnit": 18.0,
      "key": "cubic-inch",
      "kind": "unit",
      "label": "cubic inch"
    },
    {
      "gramsPerUnit": 132.0,
      "key": "cup-diced",
      "kind": "unit",
      "label": "cup, diced"
    }
  ],
  "name": "Cheese, mozzarella, low sodium",
  "nutritionPerBasis": {
    "calcium_mg": 731.0,
    "carbs_g": 3.1,
    "energy_kcal": 1170.0,
    "fat_g": 17.1,
    "fibre_g": 0.0,
    "folate_ug": 9.0,
    "iron_mg": 0.25,
    "magnesium_mg": 26.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 524.0,
    "potassium_mg": 95.0,
    "protein_g": 27.5,
    "salt_g": 0.04,
    "sat_fat_g": 10.9,
    "sodium_mg": 16.0,
    "sugar_g": 1.23,
    "vitamin_a_ug": 137.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.15,
    "vitamin_k_ug": 1.8
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167735",
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
