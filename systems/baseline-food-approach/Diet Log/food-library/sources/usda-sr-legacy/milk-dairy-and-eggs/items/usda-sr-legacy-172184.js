/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "large",
  "description": "Dairy and Egg Products",
  "id": "usda-sr-legacy-172184",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 17.0,
      "key": "large",
      "kind": "unit",
      "label": "large"
    },
    {
      "gramsPerUnit": 243.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Egg, yolk, raw, fresh",
  "nutritionPerBasis": {
    "calcium_mg": 129.0,
    "carbs_g": 3.59,
    "energy_kcal": 322.0,
    "fat_g": 26.5,
    "fibre_g": 0.0,
    "folate_ug": 146.0,
    "iron_mg": 2.73,
    "magnesium_mg": 5.0,
    "omega3_g": 0.125,
    "phosphorus_mg": 390.0,
    "potassium_mg": 109.0,
    "protein_g": 15.9,
    "salt_g": 0.12,
    "sat_fat_g": 9.55,
    "sodium_mg": 48.0,
    "sugar_g": 0.56,
    "vitamin_a_ug": 381.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 2.58,
    "vitamin_k_ug": 0.7
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172184",
  "state": "Raw",
  "subcategory": "Dairy and Egg Products",
  "tags": [
    "dairy-and-egg-products",
    "milk-dairy-and-eggs",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
