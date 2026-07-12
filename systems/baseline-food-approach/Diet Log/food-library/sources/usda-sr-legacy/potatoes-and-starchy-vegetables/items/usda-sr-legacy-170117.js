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
  "id": "usda-sr-legacy-170117",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 50.0,
      "key": "10-strips",
      "kind": "unit",
      "label": "10 strips"
    },
    {
      "gramsPerUnit": 198.0,
      "key": "package-9-oz-yields",
      "kind": "unit",
      "label": "package (9 oz) yields"
    }
  ],
  "name": "Potatoes, frozen, french fried, par fried, cottage-cut, prepared, heated in oven, with salt",
  "nutritionPerBasis": {
    "calcium_mg": 10.0,
    "carbs_g": 34.0,
    "energy_kcal": 218.0,
    "fat_g": 8.2,
    "fibre_g": 3.2,
    "folate_ug": 17.0,
    "iron_mg": 1.49,
    "magnesium_mg": 22.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 65.0,
    "potassium_mg": 480.0,
    "protein_g": 3.44,
    "salt_g": 0.7025,
    "sat_fat_g": 3.89,
    "sodium_mg": 281.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 9.5,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170117",
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
