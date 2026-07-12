/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "cup",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-170021",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 180.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Peas and onions, frozen, cooked, boiled, drained, without salt",
  "nutritionPerBasis": {
    "calcium_mg": 14.0,
    "carbs_g": 8.63,
    "energy_kcal": 45.0,
    "fat_g": 0.2,
    "fibre_g": 2.2,
    "folate_ug": 20.0,
    "iron_mg": 0.94,
    "magnesium_mg": 13.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 34.0,
    "potassium_mg": 117.0,
    "protein_g": 2.54,
    "salt_g": 0.0925,
    "sat_fat_g": 0.036,
    "sodium_mg": 37.0,
    "sugar_g": 3.77,
    "vitamin_a_ug": 53.0,
    "vitamin_c_mg": 6.9,
    "vitamin_e_mg": 0.02,
    "vitamin_k_ug": 12.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170021",
  "state": "Boiled",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "boiled",
    "vegetables",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
