/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "cup-whole",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-170010",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 63.0,
      "key": "cup-whole",
      "kind": "unit",
      "label": "cup, whole"
    },
    {
      "gramsPerUnit": 34.0,
      "key": "10-pea-pods",
      "kind": "unit",
      "label": "10 pea pods"
    },
    {
      "gramsPerUnit": 98.0,
      "key": "cup-chopped",
      "kind": "unit",
      "label": "cup, chopped"
    }
  ],
  "name": "Peas, edible-podded, raw",
  "nutritionPerBasis": {
    "calcium_mg": 43.0,
    "carbs_g": 7.55,
    "energy_kcal": 42.0,
    "fat_g": 0.2,
    "fibre_g": 2.6,
    "folate_ug": 42.0,
    "iron_mg": 2.08,
    "magnesium_mg": 24.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 53.0,
    "potassium_mg": 200.0,
    "protein_g": 2.8,
    "salt_g": 0.01,
    "sat_fat_g": 0.039,
    "sodium_mg": 4.0,
    "sugar_g": 4.0,
    "vitamin_a_ug": 54.0,
    "vitamin_c_mg": 60.0,
    "vitamin_e_mg": 0.39,
    "vitamin_k_ug": 25.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170010",
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
