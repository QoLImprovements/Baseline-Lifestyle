/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "0-25-cup",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-170485",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 0.8,
      "key": "0-25-cup",
      "kind": "unit",
      "label": "0.25 cup"
    },
    {
      "gramsPerUnit": 0.2,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    }
  ],
  "name": "Leeks, (bulb and lower-leaf portion), freeze-dried",
  "nutritionPerBasis": {
    "calcium_mg": 360.0,
    "carbs_g": 74.6,
    "energy_kcal": 1340.0,
    "fat_g": 2.1,
    "fibre_g": 10.4,
    "folate_ug": 366.0,
    "iron_mg": 7.6,
    "magnesium_mg": 161.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 346.0,
    "potassium_mg": 2400.0,
    "protein_g": 15.2,
    "salt_g": 0.0875,
    "sat_fat_g": 0.279,
    "sodium_mg": 35.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 14.0,
    "vitamin_c_mg": 118.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170485",
  "state": "Dried",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "dried",
    "vegetables",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
