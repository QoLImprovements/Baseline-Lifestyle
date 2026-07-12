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
  "id": "usda-sr-legacy-169956",
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
    },
    {
      "gramsPerUnit": 311.0,
      "key": "package-10-oz-yields",
      "kind": "unit",
      "label": "package (10 oz) yields"
    }
  ],
  "name": "Lima beans, immature seeds, frozen, baby, cooked, boiled, drained, without salt",
  "nutritionPerBasis": {
    "calcium_mg": 28.0,
    "carbs_g": 19.4,
    "energy_kcal": 439.0,
    "fat_g": 0.3,
    "fibre_g": 4.8,
    "folate_ug": 16.0,
    "iron_mg": 1.96,
    "magnesium_mg": 56.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 112.0,
    "potassium_mg": 411.0,
    "protein_g": 6.65,
    "salt_g": 0.0725,
    "sat_fat_g": 0.068,
    "sodium_mg": 29.0,
    "sugar_g": 1.37,
    "vitamin_a_ug": 8.0,
    "vitamin_c_mg": 5.8,
    "vitamin_e_mg": 0.64,
    "vitamin_k_ug": 5.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169956",
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
