/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Legumes & Pulses",
  "defaultMeasure": "cup",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-170477",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 62.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Winged beans, immature seeds, cooked, boiled, drained, without salt",
  "nutritionPerBasis": {
    "calcium_mg": 61.0,
    "carbs_g": 3.21,
    "energy_kcal": 159.0,
    "fat_g": 0.66,
    "fibre_g": 0.0,
    "folate_ug": 35.0,
    "iron_mg": 1.09,
    "magnesium_mg": 30.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 25.0,
    "potassium_mg": 274.0,
    "protein_g": 5.31,
    "salt_g": 0.01,
    "sat_fat_g": 0.181,
    "sodium_mg": 4.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 4.0,
    "vitamin_c_mg": 9.8,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170477",
  "state": "Boiled",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "boiled",
    "legumes-and-pulses",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
