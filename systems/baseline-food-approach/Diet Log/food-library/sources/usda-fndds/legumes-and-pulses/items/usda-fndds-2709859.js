/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Legumes & Pulses",
  "defaultMeasure": "1-bean",
  "description": "String beans",
  "id": "usda-fndds-2709859",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 6.0,
      "key": "1-bean",
      "kind": "unit",
      "label": "1 bean"
    },
    {
      "gramsPerUnit": 73.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 145.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 2.0,
      "key": "1-cut-piece",
      "kind": "unit",
      "label": "1 cut piece"
    }
  ],
  "name": "Green beans, fresh, cooked with oil",
  "nutritionPerBasis": {
    "calcium_mg": 40.0,
    "carbs_g": 7.47,
    "energy_kcal": 68.0,
    "fat_g": 3.31,
    "fibre_g": 3.0,
    "folate_ug": 28.0,
    "iron_mg": 0.66,
    "magnesium_mg": 28.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 41.0,
    "potassium_mg": 292.0,
    "protein_g": 1.99,
    "salt_g": 0.2925,
    "sat_fat_g": 0.455,
    "sodium_mg": 117.0,
    "sugar_g": 2.35,
    "vitamin_a_ug": 34.0,
    "vitamin_c_mg": 10.5,
    "vitamin_e_mg": 0.99,
    "vitamin_k_ug": 47.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709859",
  "state": "Cooked",
  "subcategory": "String beans",
  "tags": [
    "cooked",
    "legumes-and-pulses",
    "string-beans"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
