/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "small",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-168580",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "small",
      "kind": "unit",
      "label": "small"
    },
    {
      "gramsPerUnit": 148.0,
      "key": "large",
      "kind": "unit",
      "label": "large"
    },
    {
      "gramsPerUnit": 86.0,
      "key": "cup-sliced",
      "kind": "unit",
      "label": "cup sliced"
    }
  ],
  "name": "Mushrooms, oyster, raw",
  "nutritionPerBasis": {
    "calcium_mg": 3.0,
    "carbs_g": 6.09,
    "energy_kcal": 33.0,
    "fat_g": 0.41,
    "fibre_g": 2.3,
    "folate_ug": 38.0,
    "iron_mg": 1.33,
    "magnesium_mg": 18.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 120.0,
    "potassium_mg": 420.0,
    "protein_g": 3.31,
    "salt_g": 0.045,
    "sat_fat_g": 0.062,
    "sodium_mg": 18.0,
    "sugar_g": 1.11,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168580",
  "state": "Raw",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "fish-and-seafood",
    "raw",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
