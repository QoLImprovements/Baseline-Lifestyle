/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "can",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-169254",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 132.0,
      "key": "can",
      "kind": "unit",
      "label": "can"
    },
    {
      "gramsPerUnit": 12.0,
      "key": "medium",
      "kind": "unit",
      "label": "medium"
    },
    {
      "gramsPerUnit": 156.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 47.0,
      "key": "8-caps",
      "kind": "unit",
      "label": "8 caps"
    },
    {
      "gramsPerUnit": 78.0,
      "key": "0-5-cup-pieces",
      "kind": "unit",
      "label": "0.5 cup pieces"
    },
    {
      "gramsPerUnit": 7.0,
      "key": "small",
      "kind": "unit",
      "label": "small"
    },
    {
      "gramsPerUnit": 40.0,
      "key": "10-slices",
      "kind": "unit",
      "label": "10 slices"
    },
    {
      "gramsPerUnit": 16.0,
      "key": "large",
      "kind": "unit",
      "label": "large"
    }
  ],
  "name": "Mushrooms, canned, drained solids",
  "nutritionPerBasis": {
    "calcium_mg": 11.0,
    "carbs_g": 5.09,
    "energy_kcal": 25.0,
    "fat_g": 0.29,
    "fibre_g": 2.4,
    "folate_ug": 12.0,
    "iron_mg": 0.79,
    "magnesium_mg": 15.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 66.0,
    "potassium_mg": 129.0,
    "protein_g": 1.87,
    "salt_g": 1.0625,
    "sat_fat_g": 0.038,
    "sodium_mg": 425.0,
    "sugar_g": 2.34,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.01,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169254",
  "state": "Canned",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "canned",
    "vegetables",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
