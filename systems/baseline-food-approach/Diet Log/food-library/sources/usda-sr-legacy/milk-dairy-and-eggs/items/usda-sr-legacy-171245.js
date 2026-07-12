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
  "id": "usda-sr-legacy-171245",
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
      "gramsPerUnit": 28.0,
      "key": "slice-1-oz",
      "kind": "unit",
      "label": "slice (1 oz)"
    },
    {
      "gramsPerUnit": 113.0,
      "key": "cup-shredded",
      "kind": "unit",
      "label": "cup, shredded"
    },
    {
      "gramsPerUnit": 170.0,
      "key": "package-6-oz",
      "kind": "unit",
      "label": "package (6 oz)"
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
  "name": "Cheese, muenster",
  "nutritionPerBasis": {
    "calcium_mg": 717.0,
    "carbs_g": 1.12,
    "energy_kcal": 368.0,
    "fat_g": 30.0,
    "fibre_g": 0.0,
    "folate_ug": 12.0,
    "iron_mg": 0.41,
    "magnesium_mg": 27.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 468.0,
    "potassium_mg": 134.0,
    "protein_g": 23.4,
    "salt_g": 1.57,
    "sat_fat_g": 19.1,
    "sodium_mg": 628.0,
    "sugar_g": 1.12,
    "vitamin_a_ug": 298.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.26,
    "vitamin_k_ug": 2.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171245",
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
