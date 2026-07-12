/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "large",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-169382",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 5.0,
      "key": "large",
      "kind": "unit",
      "label": "large"
    },
    {
      "gramsPerUnit": 3.0,
      "key": "medium",
      "kind": "unit",
      "label": "medium"
    },
    {
      "gramsPerUnit": 65.0,
      "key": "cup-sliced",
      "kind": "unit",
      "label": "cup sliced"
    },
    {
      "gramsPerUnit": 64.0,
      "key": "cup-whole",
      "kind": "unit",
      "label": "cup whole"
    }
  ],
  "name": "Mushrooms, enoki, raw",
  "nutritionPerBasis": {
    "calcium_mg": 0.0,
    "carbs_g": 7.81,
    "energy_kcal": 37.0,
    "fat_g": 0.29,
    "fibre_g": 2.7,
    "folate_ug": 48.0,
    "iron_mg": 1.15,
    "magnesium_mg": 16.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 105.0,
    "potassium_mg": 359.0,
    "protein_g": 2.66,
    "salt_g": 0.0075,
    "sat_fat_g": 0.027,
    "sodium_mg": 3.0,
    "sugar_g": 0.22,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.01,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169382",
  "state": "Raw",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "raw",
    "vegetables",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
