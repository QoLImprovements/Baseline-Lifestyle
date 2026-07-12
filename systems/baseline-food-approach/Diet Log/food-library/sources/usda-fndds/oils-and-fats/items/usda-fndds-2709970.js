/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Oils & Fats",
  "defaultMeasure": "1-cup",
  "description": "Other starchy vegetables",
  "id": "usda-fndds-2709970",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 165.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 83.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Green peas, canned, cooked with oil",
  "nutritionPerBasis": {
    "calcium_mg": 22.0,
    "carbs_g": 11.0,
    "energy_kcal": 92.0,
    "fat_g": 3.69,
    "fibre_g": 4.8,
    "folate_ug": 29.0,
    "iron_mg": 1.15,
    "magnesium_mg": 17.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 65.0,
    "potassium_mg": 103.0,
    "protein_g": 4.34,
    "salt_g": 0.6625,
    "sat_fat_g": 0.528,
    "sodium_mg": 265.0,
    "sugar_g": 2.9,
    "vitamin_a_ug": 42.0,
    "vitamin_c_mg": 3.7,
    "vitamin_e_mg": 0.92,
    "vitamin_k_ug": 38.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709970",
  "state": "Canned",
  "subcategory": "Other starchy vegetables",
  "tags": [
    "canned",
    "oils-and-fats",
    "other-starchy-vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
