/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "oz",
  "description": "Dairy and Egg Products",
  "id": "usda-sr-legacy-171244",
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
      "gramsPerUnit": 132.0,
      "key": "cup-diced",
      "kind": "unit",
      "label": "cup, diced"
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
      "gramsPerUnit": 113.0,
      "key": "cup-shredded",
      "kind": "unit",
      "label": "cup, shredded"
    }
  ],
  "name": "Cheese, mozzarella, low moisture, part-skim",
  "nutritionPerBasis": {
    "calcium_mg": 697.0,
    "carbs_g": 5.58,
    "energy_kcal": 1240.0,
    "fat_g": 19.8,
    "fibre_g": 0.0,
    "folate_ug": 27.0,
    "iron_mg": 0.22,
    "magnesium_mg": 27.0,
    "omega3_g": 0.015,
    "phosphorus_mg": 548.0,
    "potassium_mg": 188.0,
    "protein_g": 23.8,
    "salt_g": 1.665,
    "sat_fat_g": 11.3,
    "sodium_mg": 666.0,
    "sugar_g": 1.9,
    "vitamin_a_ug": 227.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.5,
    "vitamin_k_ug": 1.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171244",
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
