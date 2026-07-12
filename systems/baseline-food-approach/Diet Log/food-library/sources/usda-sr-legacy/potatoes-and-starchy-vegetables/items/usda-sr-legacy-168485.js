/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "cup-mashed",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-168485",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 255.0,
      "key": "cup-mashed",
      "kind": "unit",
      "label": "cup, mashed"
    },
    {
      "gramsPerUnit": 200.0,
      "key": "cup-pieces",
      "kind": "unit",
      "label": "cup pieces"
    }
  ],
  "name": "Sweet potato, canned, vacuum pack",
  "nutritionPerBasis": {
    "calcium_mg": 22.0,
    "carbs_g": 21.1,
    "energy_kcal": 382.0,
    "fat_g": 0.2,
    "fibre_g": 1.8,
    "folate_ug": 17.0,
    "iron_mg": 0.89,
    "magnesium_mg": 22.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 49.0,
    "potassium_mg": 312.0,
    "protein_g": 1.65,
    "salt_g": 0.1325,
    "sat_fat_g": 0.041,
    "sodium_mg": 53.0,
    "sugar_g": 5.0,
    "vitamin_a_ug": 399.0,
    "vitamin_c_mg": 26.4,
    "vitamin_e_mg": 1.0,
    "vitamin_k_ug": 2.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168485",
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
