/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "cup-chopped-1-2-pieces-loosely-packed",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-169248",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 57.0,
      "key": "cup-chopped-1-2-pieces-loosely-packed",
      "kind": "unit",
      "label": "cup, chopped (1/2\" pieces, loosely packed)"
    },
    {
      "gramsPerUnit": 755.0,
      "key": "head-large",
      "kind": "unit",
      "label": "head, large"
    },
    {
      "gramsPerUnit": 539.0,
      "key": "head-medium-6-dia",
      "kind": "unit",
      "label": "head, medium (6\" dia)"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "leaf-large",
      "kind": "unit",
      "label": "leaf, large"
    },
    {
      "gramsPerUnit": 72.0,
      "key": "cup-shredded",
      "kind": "unit",
      "label": "cup shredded"
    },
    {
      "gramsPerUnit": 5.0,
      "key": "leaf-small",
      "kind": "unit",
      "label": "leaf, small"
    },
    {
      "gramsPerUnit": 324.0,
      "key": "head-small",
      "kind": "unit",
      "label": "head, small"
    },
    {
      "gramsPerUnit": 89.0,
      "key": "nlea-serving",
      "kind": "unit",
      "label": "NLEA Serving"
    },
    {
      "gramsPerUnit": 8.0,
      "key": "leaf-medium",
      "kind": "unit",
      "label": "leaf, medium"
    }
  ],
  "name": "Lettuce, iceberg (includes crisphead types), raw",
  "nutritionPerBasis": {
    "calcium_mg": 18.0,
    "carbs_g": 2.97,
    "energy_kcal": 14.0,
    "fat_g": 0.14,
    "fibre_g": 1.2,
    "folate_ug": 29.0,
    "iron_mg": 0.41,
    "magnesium_mg": 7.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 20.0,
    "potassium_mg": 141.0,
    "protein_g": 0.9,
    "salt_g": 0.025,
    "sat_fat_g": 0.018,
    "sodium_mg": 10.0,
    "sugar_g": 1.97,
    "vitamin_a_ug": 25.0,
    "vitamin_c_mg": 2.8,
    "vitamin_e_mg": 0.18,
    "vitamin_k_ug": 24.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169248",
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
