/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "whole-without-shell",
  "description": "Dairy and Egg Products",
  "id": "usda-foundation-748967",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 50.3,
      "key": "whole-without-shell",
      "kind": "unit",
      "label": "whole without shell"
    },
    {
      "gramsPerUnit": 50.0,
      "key": "racc",
      "kind": "unit",
      "label": "RACC"
    }
  ],
  "name": "Eggs, Grade A, Large, egg whole",
  "nutritionPerBasis": {
    "calcium_mg": 48.0,
    "carbs_g": 0.96,
    "energy_kcal": 148.0,
    "fat_g": 9.96,
    "fibre_g": 0.0,
    "folate_ug": 71.0,
    "iron_mg": 1.67,
    "magnesium_mg": 11.4,
    "omega3_g": 0.0,
    "phosphorus_mg": 184.0,
    "potassium_mg": 132.0,
    "protein_g": 12.4,
    "salt_g": 0.3225,
    "sat_fat_g": 3.2,
    "sodium_mg": 129.0,
    "sugar_g": 0.2,
    "vitamin_a_ug": 180.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA Foundation Foods April 2026",
  "sourceId": "748967",
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
