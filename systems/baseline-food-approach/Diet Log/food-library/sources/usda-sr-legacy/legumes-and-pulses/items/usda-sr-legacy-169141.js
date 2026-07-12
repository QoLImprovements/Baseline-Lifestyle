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
  "id": "usda-sr-legacy-169141",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 125.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Beans, snap, green, cooked, boiled, drained, without salt",
  "nutritionPerBasis": {
    "calcium_mg": 44.0,
    "carbs_g": 7.88,
    "energy_kcal": 147.0,
    "fat_g": 0.28,
    "fibre_g": 3.2,
    "folate_ug": 33.0,
    "iron_mg": 0.65,
    "magnesium_mg": 18.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 29.0,
    "potassium_mg": 146.0,
    "protein_g": 1.89,
    "salt_g": 0.0025,
    "sat_fat_g": 0.064,
    "sodium_mg": 1.0,
    "sugar_g": 3.63,
    "vitamin_a_ug": 32.0,
    "vitamin_c_mg": 9.7,
    "vitamin_e_mg": 0.46,
    "vitamin_k_ug": 47.9
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169141",
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
