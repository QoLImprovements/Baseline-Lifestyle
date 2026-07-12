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
  "id": "usda-sr-legacy-170849",
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
      "gramsPerUnit": 17.0,
      "key": "cubic-inch",
      "kind": "unit",
      "label": "cubic inch"
    },
    {
      "gramsPerUnit": 132.0,
      "key": "cup-diced",
      "kind": "unit",
      "label": "cup, diced"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    },
    {
      "gramsPerUnit": 170.0,
      "key": "package-6-oz",
      "kind": "unit",
      "label": "package (6 oz)"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "slice-1-oz",
      "kind": "unit",
      "label": "slice (1 oz)"
    }
  ],
  "name": "Cheese, port de salut",
  "nutritionPerBasis": {
    "calcium_mg": 650.0,
    "carbs_g": 0.57,
    "energy_kcal": 1470.0,
    "fat_g": 28.2,
    "fibre_g": 0.0,
    "folate_ug": 18.0,
    "iron_mg": 0.43,
    "magnesium_mg": 24.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 360.0,
    "potassium_mg": 136.0,
    "protein_g": 23.8,
    "salt_g": 1.335,
    "sat_fat_g": 16.7,
    "sodium_mg": 534.0,
    "sugar_g": 0.57,
    "vitamin_a_ug": 315.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.24,
    "vitamin_k_ug": 2.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170849",
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
