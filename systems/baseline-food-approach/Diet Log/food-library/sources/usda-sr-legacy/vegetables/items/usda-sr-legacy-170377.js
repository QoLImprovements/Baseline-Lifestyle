/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "broadbean",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-170377",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 8.0,
      "key": "broadbean",
      "kind": "unit",
      "label": "broadbean"
    },
    {
      "gramsPerUnit": 109.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Broadbeans, immature seeds, raw",
  "nutritionPerBasis": {
    "calcium_mg": 22.0,
    "carbs_g": 11.7,
    "energy_kcal": 301.0,
    "fat_g": 0.6,
    "fibre_g": 4.2,
    "folate_ug": 96.0,
    "iron_mg": 1.9,
    "magnesium_mg": 38.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 95.0,
    "potassium_mg": 250.0,
    "protein_g": 5.6,
    "salt_g": 0.125,
    "sat_fat_g": 0.138,
    "sodium_mg": 50.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 18.0,
    "vitamin_c_mg": 33.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170377",
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
