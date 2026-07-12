/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "pepper",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-170106",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 45.0,
      "key": "pepper",
      "kind": "unit",
      "label": "pepper"
    },
    {
      "gramsPerUnit": 75.0,
      "key": "0-5-cup-chopped-or-diced",
      "kind": "unit",
      "label": "0.5 cup, chopped or diced"
    }
  ],
  "name": "Peppers, hot chili, red, raw",
  "nutritionPerBasis": {
    "calcium_mg": 14.0,
    "carbs_g": 8.81,
    "energy_kcal": 40.0,
    "fat_g": 0.44,
    "fibre_g": 1.5,
    "folate_ug": 23.0,
    "iron_mg": 1.03,
    "magnesium_mg": 23.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 43.0,
    "potassium_mg": 322.0,
    "protein_g": 1.87,
    "salt_g": 0.0225,
    "sat_fat_g": 0.042,
    "sodium_mg": 9.0,
    "sugar_g": 5.3,
    "vitamin_a_ug": 48.0,
    "vitamin_c_mg": 144.0,
    "vitamin_e_mg": 0.69,
    "vitamin_k_ug": 14.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170106",
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
