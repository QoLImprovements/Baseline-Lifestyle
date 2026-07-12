/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "medium",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-170465",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 122.0,
      "key": "medium",
      "kind": "unit",
      "label": "medium"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "slice",
      "kind": "unit",
      "label": "slice"
    },
    {
      "gramsPerUnit": 130.0,
      "key": "cup-cubes",
      "kind": "unit",
      "label": "cup, cubes"
    },
    {
      "gramsPerUnit": 65.0,
      "key": "0-5-cup-cubes",
      "kind": "unit",
      "label": "0.5 cup, cubes"
    },
    {
      "gramsPerUnit": 61.0,
      "key": "small",
      "kind": "unit",
      "label": "small"
    },
    {
      "gramsPerUnit": 183.0,
      "key": "large",
      "kind": "unit",
      "label": "large"
    }
  ],
  "name": "Turnips, raw",
  "nutritionPerBasis": {
    "calcium_mg": 30.0,
    "carbs_g": 6.43,
    "energy_kcal": 117.0,
    "fat_g": 0.1,
    "fibre_g": 1.8,
    "folate_ug": 15.0,
    "iron_mg": 0.3,
    "magnesium_mg": 11.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 27.0,
    "potassium_mg": 191.0,
    "protein_g": 0.9,
    "salt_g": 0.1675,
    "sat_fat_g": 0.011,
    "sodium_mg": 67.0,
    "sugar_g": 3.8,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 21.0,
    "vitamin_e_mg": 0.03,
    "vitamin_k_ug": 0.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170465",
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
