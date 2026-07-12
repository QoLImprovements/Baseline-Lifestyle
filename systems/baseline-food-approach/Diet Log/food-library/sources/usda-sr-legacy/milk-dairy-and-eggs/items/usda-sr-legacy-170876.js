/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "0-25-cup",
  "description": "Dairy and Egg Products",
  "id": "usda-sr-legacy-170876",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 32.0,
      "key": "0-25-cup",
      "kind": "unit",
      "label": "0.25 cup"
    },
    {
      "gramsPerUnit": 128.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Milk, dry, whole, with added vitamin D",
  "nutritionPerBasis": {
    "calcium_mg": 912.0,
    "carbs_g": 38.4,
    "energy_kcal": 2080.0,
    "fat_g": 26.7,
    "fibre_g": 0.0,
    "folate_ug": 37.0,
    "iron_mg": 0.47,
    "magnesium_mg": 85.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 776.0,
    "potassium_mg": 1330.0,
    "protein_g": 26.3,
    "salt_g": 0.9275,
    "sat_fat_g": 16.7,
    "sodium_mg": 371.0,
    "sugar_g": 38.4,
    "vitamin_a_ug": 258.0,
    "vitamin_c_mg": 8.6,
    "vitamin_e_mg": 0.58,
    "vitamin_k_ug": 2.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170876",
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
