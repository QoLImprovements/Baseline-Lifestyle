/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "cup",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-170083",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 228.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 638.0,
      "key": "can-404-x-307",
      "kind": "unit",
      "label": "can (404 x 307)"
    }
  ],
  "name": "Sweet potato, canned, syrup pack, solids and liquids",
  "nutritionPerBasis": {
    "calcium_mg": 15.0,
    "carbs_g": 20.9,
    "energy_kcal": 89.0,
    "fat_g": 0.2,
    "fibre_g": 2.5,
    "folate_ug": 7.0,
    "iron_mg": 0.8,
    "magnesium_mg": 13.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 27.0,
    "potassium_mg": 185.0,
    "protein_g": 0.98,
    "salt_g": 0.0725,
    "sat_fat_g": 0.041,
    "sodium_mg": 29.0,
    "sugar_g": 15.4,
    "vitamin_a_ug": 377.0,
    "vitamin_c_mg": 10.5,
    "vitamin_e_mg": 0.94,
    "vitamin_k_ug": 2.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170083",
  "state": "Canned",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "canned",
    "potatoes-and-starchy-vegetables",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
