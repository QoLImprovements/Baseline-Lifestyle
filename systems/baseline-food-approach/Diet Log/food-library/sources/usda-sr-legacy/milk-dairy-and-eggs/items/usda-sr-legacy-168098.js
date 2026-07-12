/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "cup-diced",
  "description": "Dairy and Egg Products",
  "id": "usda-sr-legacy-168098",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 132.0,
      "key": "cup-diced",
      "kind": "unit",
      "label": "cup, diced"
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
      "gramsPerUnit": 28.0,
      "key": "slice-1-oz",
      "kind": "unit",
      "label": "slice (1 oz)"
    }
  ],
  "name": "Cheese, monterey, low fat",
  "nutritionPerBasis": {
    "calcium_mg": 705.0,
    "carbs_g": 0.7,
    "energy_kcal": 313.0,
    "fat_g": 21.6,
    "fibre_g": 0.0,
    "folate_ug": 18.0,
    "iron_mg": 0.72,
    "magnesium_mg": 27.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 444.0,
    "potassium_mg": 81.0,
    "protein_g": 28.2,
    "salt_g": 1.9525,
    "sat_fat_g": 14.0,
    "sodium_mg": 781.0,
    "sugar_g": 0.56,
    "vitamin_a_ug": 142.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.19,
    "vitamin_k_ug": 1.8
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168098",
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
