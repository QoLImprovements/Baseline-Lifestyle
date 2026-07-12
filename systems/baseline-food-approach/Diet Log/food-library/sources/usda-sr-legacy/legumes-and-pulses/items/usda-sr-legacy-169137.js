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
  "id": "usda-sr-legacy-169137",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 124.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Mung beans, mature seeds, sprouted, cooked, boiled, drained, without salt",
  "nutritionPerBasis": {
    "calcium_mg": 12.0,
    "carbs_g": 4.19,
    "energy_kcal": 88.0,
    "fat_g": 0.09,
    "fibre_g": 0.8,
    "folate_ug": 29.0,
    "iron_mg": 0.65,
    "magnesium_mg": 14.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 28.0,
    "potassium_mg": 101.0,
    "protein_g": 2.03,
    "salt_g": 0.025,
    "sat_fat_g": 0.025,
    "sodium_mg": 10.0,
    "sugar_g": 2.84,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 11.4,
    "vitamin_e_mg": 0.07,
    "vitamin_k_ug": 22.7
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169137",
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
