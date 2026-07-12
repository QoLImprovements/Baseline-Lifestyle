/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Oils & Fats",
  "defaultMeasure": "1-cup",
  "description": "Spinach",
  "id": "usda-fndds-2709624",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 220.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 110.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Spinach, frozen, cooked with oil",
  "nutritionPerBasis": {
    "calcium_mg": 148.0,
    "carbs_g": 4.65,
    "energy_kcal": 59.0,
    "fat_g": 3.75,
    "fibre_g": 3.6,
    "folate_ug": 117.0,
    "iron_mg": 1.9,
    "magnesium_mg": 79.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 48.0,
    "potassium_mg": 292.0,
    "protein_g": 3.88,
    "salt_g": 0.515,
    "sat_fat_g": 0.54,
    "sodium_mg": 206.0,
    "sugar_g": 0.49,
    "vitamin_a_ug": 584.0,
    "vitamin_c_mg": 2.1,
    "vitamin_e_mg": 3.98,
    "vitamin_k_ug": 526.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709624",
  "state": "Frozen",
  "subcategory": "Spinach",
  "tags": [
    "frozen",
    "oils-and-fats",
    "spinach"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
