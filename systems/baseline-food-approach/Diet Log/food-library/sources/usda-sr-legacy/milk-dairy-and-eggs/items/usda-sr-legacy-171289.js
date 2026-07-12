/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "slice-2-3-oz",
  "description": "Dairy and Egg Products",
  "id": "usda-sr-legacy-171289",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 19.0,
      "key": "slice-2-3-oz",
      "kind": "unit",
      "label": "slice (2/3 oz)"
    },
    {
      "gramsPerUnit": 21.0,
      "key": "slice-3-4-oz",
      "kind": "unit",
      "label": "slice (3/4 oz)"
    }
  ],
  "name": "Cheese product, pasteurized process, American, vitamin D fortified",
  "nutritionPerBasis": {
    "calcium_mg": 1380.0,
    "carbs_g": 8.85,
    "energy_kcal": 1290.0,
    "fat_g": 23.1,
    "fibre_g": 0.0,
    "folate_ug": 18.0,
    "iron_mg": 0.95,
    "magnesium_mg": 34.0,
    "omega3_g": 0.113,
    "phosphorus_mg": 768.0,
    "potassium_mg": 295.0,
    "protein_g": 16.1,
    "salt_g": 3.2,
    "sat_fat_g": 12.9,
    "sodium_mg": 1280.0,
    "sugar_g": 6.24,
    "vitamin_a_ug": 270.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.84,
    "vitamin_k_ug": 3.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171289",
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
