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
  "id": "usda-sr-legacy-169080",
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
      "gramsPerUnit": 113.0,
      "key": "cup-shredded",
      "kind": "unit",
      "label": "cup, shredded"
    },
    {
      "gramsPerUnit": 140.0,
      "key": "cup-diced",
      "kind": "unit",
      "label": "cup, diced"
    },
    {
      "gramsPerUnit": 21.0,
      "key": "slice-3-4-oz",
      "kind": "unit",
      "label": "slice (3/4 oz)"
    }
  ],
  "name": "Cheese, pasteurized process, American, low fat",
  "nutritionPerBasis": {
    "calcium_mg": 684.0,
    "carbs_g": 3.5,
    "energy_kcal": 753.0,
    "fat_g": 7.0,
    "fibre_g": 0.0,
    "folate_ug": 9.0,
    "iron_mg": 0.43,
    "magnesium_mg": 24.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 827.0,
    "potassium_mg": 180.0,
    "protein_g": 24.6,
    "salt_g": 4.475,
    "sat_fat_g": 4.41,
    "sodium_mg": 1790.0,
    "sugar_g": 0.59,
    "vitamin_a_ug": 57.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.27,
    "vitamin_k_ug": 2.7
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169080",
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
