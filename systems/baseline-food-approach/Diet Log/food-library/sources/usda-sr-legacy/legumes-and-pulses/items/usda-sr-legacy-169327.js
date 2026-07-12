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
  "id": "usda-sr-legacy-169327",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 135.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Beans, snap, yellow, frozen, cooked, boiled, drained, with salt",
  "nutritionPerBasis": {
    "calcium_mg": 49.0,
    "carbs_g": 6.45,
    "energy_kcal": 117.0,
    "fat_g": 0.17,
    "fibre_g": 3.0,
    "folate_ug": 23.0,
    "iron_mg": 0.88,
    "magnesium_mg": 24.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 31.0,
    "potassium_mg": 126.0,
    "protein_g": 1.49,
    "salt_g": 0.6125,
    "sat_fat_g": 0.044,
    "sodium_mg": 245.0,
    "sugar_g": 1.88,
    "vitamin_a_ug": 6.0,
    "vitamin_c_mg": 4.1,
    "vitamin_e_mg": 0.04,
    "vitamin_k_ug": 38.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169327",
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
