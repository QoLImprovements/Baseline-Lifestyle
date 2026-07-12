/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "head",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-169249",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 360.0,
      "key": "head",
      "kind": "unit",
      "label": "head"
    },
    {
      "gramsPerUnit": 4.8,
      "key": "leaf-inner",
      "kind": "unit",
      "label": "leaf inner"
    },
    {
      "gramsPerUnit": 24.0,
      "key": "leaf-outer",
      "kind": "unit",
      "label": "leaf outer"
    },
    {
      "gramsPerUnit": 36.0,
      "key": "cup-shredded",
      "kind": "unit",
      "label": "cup shredded"
    }
  ],
  "name": "Lettuce, green leaf, raw",
  "nutritionPerBasis": {
    "calcium_mg": 36.0,
    "carbs_g": 2.87,
    "energy_kcal": 15.0,
    "fat_g": 0.15,
    "fibre_g": 1.3,
    "folate_ug": 38.0,
    "iron_mg": 0.86,
    "magnesium_mg": 13.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 29.0,
    "potassium_mg": 194.0,
    "protein_g": 1.36,
    "salt_g": 0.07,
    "sat_fat_g": 0.02,
    "sodium_mg": 28.0,
    "sugar_g": 0.78,
    "vitamin_a_ug": 370.0,
    "vitamin_c_mg": 9.2,
    "vitamin_e_mg": 0.22,
    "vitamin_k_ug": 126.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169249",
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
