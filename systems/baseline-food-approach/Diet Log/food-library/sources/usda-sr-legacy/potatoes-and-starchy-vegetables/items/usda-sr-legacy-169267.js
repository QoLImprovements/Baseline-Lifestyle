/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "10-strips",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-169267",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 65.0,
      "key": "10-strips",
      "kind": "unit",
      "label": "10 strips"
    },
    {
      "gramsPerUnit": 255.0,
      "key": "package-9-oz",
      "kind": "unit",
      "label": "package (9 oz)"
    }
  ],
  "name": "Potatoes, frozen, french fried, par fried, extruded, unprepared",
  "nutritionPerBasis": {
    "calcium_mg": 9.0,
    "carbs_g": 30.2,
    "energy_kcal": 1090.0,
    "fat_g": 15.0,
    "fibre_g": 2.9,
    "folate_ug": 22.0,
    "iron_mg": 1.32,
    "magnesium_mg": 18.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 77.0,
    "potassium_mg": 430.0,
    "protein_g": 2.83,
    "salt_g": 1.225,
    "sat_fat_g": 4.54,
    "sodium_mg": 490.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 6.3,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169267",
  "state": "Fried",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "fried",
    "potatoes-and-starchy-vegetables",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
