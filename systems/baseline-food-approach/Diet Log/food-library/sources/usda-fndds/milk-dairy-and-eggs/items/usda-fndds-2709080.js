/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "1-cup",
  "description": "Rice mixed dishes",
  "id": "usda-fndds-2709080",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 230.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 434.0,
      "key": "1-package-5-1-oz-yields",
      "kind": "unit",
      "label": "1 package (5.1 oz) yields"
    },
    {
      "gramsPerUnit": 173.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Flavored rice mixture with cheese",
  "nutritionPerBasis": {
    "calcium_mg": 47.0,
    "carbs_g": 25.2,
    "energy_kcal": 124.0,
    "fat_g": 1.2,
    "fibre_g": 0.6,
    "folate_ug": 36.0,
    "iron_mg": 1.46,
    "magnesium_mg": 29.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 113.0,
    "potassium_mg": 102.0,
    "protein_g": 2.99,
    "salt_g": 0.9725,
    "sat_fat_g": 0.599,
    "sodium_mg": 389.0,
    "sugar_g": 1.8,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 0.5,
    "vitamin_e_mg": 0.17,
    "vitamin_k_ug": 7.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709080",
  "state": "Unspecified",
  "subcategory": "Rice mixed dishes",
  "tags": [
    "milk-dairy-and-eggs",
    "rice-mixed-dishes",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
