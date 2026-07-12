/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "cup-whole",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-170443",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 300.0,
      "key": "cup-whole",
      "kind": "unit",
      "label": "cup, whole"
    },
    {
      "gramsPerUnit": 454.0,
      "key": "can-303-x-406",
      "kind": "unit",
      "label": "can (303 x 406)"
    }
  ],
  "name": "Potatoes, canned, solids and liquids",
  "nutritionPerBasis": {
    "calcium_mg": 39.0,
    "carbs_g": 9.89,
    "energy_kcal": 184.0,
    "fat_g": 0.11,
    "fibre_g": 1.4,
    "folate_ug": 5.0,
    "iron_mg": 0.72,
    "magnesium_mg": 14.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 22.0,
    "potassium_mg": 205.0,
    "protein_g": 1.2,
    "salt_g": 0.5425,
    "sat_fat_g": 0.029,
    "sodium_mg": 217.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 7.6,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170443",
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
