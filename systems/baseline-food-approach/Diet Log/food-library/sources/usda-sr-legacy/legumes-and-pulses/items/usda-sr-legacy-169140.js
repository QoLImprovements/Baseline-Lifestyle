/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Legumes & Pulses",
  "defaultMeasure": "g",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-169140",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Beans, navy, mature seeds, sprouted, cooked, boiled, drained, without salt",
  "nutritionPerBasis": {
    "calcium_mg": 16.0,
    "carbs_g": 15.0,
    "energy_kcal": 325.0,
    "fat_g": 0.81,
    "fibre_g": 0.0,
    "folate_ug": 106.0,
    "iron_mg": 2.11,
    "magnesium_mg": 111.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 103.0,
    "potassium_mg": 317.0,
    "protein_g": 7.07,
    "salt_g": 0.035,
    "sat_fat_g": 0.098,
    "sodium_mg": 14.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 17.3,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169140",
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
