/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "0-5-cup",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-170017",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 80.0,
      "key": "0-5-cup",
      "kind": "unit",
      "label": "0.5 cup"
    },
    {
      "gramsPerUnit": 253.0,
      "key": "package-10-oz-yields",
      "kind": "unit",
      "label": "package (10 oz) yields"
    }
  ],
  "name": "Peas, green, frozen, cooked, boiled, drained, without salt",
  "nutritionPerBasis": {
    "calcium_mg": 24.0,
    "carbs_g": 14.3,
    "energy_kcal": 78.0,
    "fat_g": 0.27,
    "fibre_g": 4.5,
    "folate_ug": 59.0,
    "iron_mg": 1.52,
    "magnesium_mg": 22.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 77.0,
    "potassium_mg": 110.0,
    "protein_g": 5.15,
    "salt_g": 0.18,
    "sat_fat_g": 0.049,
    "sodium_mg": 72.0,
    "sugar_g": 4.4,
    "vitamin_a_ug": 105.0,
    "vitamin_c_mg": 9.9,
    "vitamin_e_mg": 0.03,
    "vitamin_k_ug": 24.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170017",
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
