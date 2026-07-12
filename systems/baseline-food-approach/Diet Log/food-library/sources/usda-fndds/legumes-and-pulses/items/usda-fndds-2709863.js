/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Legumes & Pulses",
  "defaultMeasure": "1-cut-piece",
  "description": "String beans",
  "id": "usda-fndds-2709863",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 2.0,
      "key": "1-cut-piece",
      "kind": "unit",
      "label": "1 cut piece"
    },
    {
      "gramsPerUnit": 145.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 73.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 6.0,
      "key": "1-bean",
      "kind": "unit",
      "label": "1 bean"
    }
  ],
  "name": "Green beans, canned, cooked with oil",
  "nutritionPerBasis": {
    "calcium_mg": 35.0,
    "carbs_g": 3.99,
    "energy_kcal": 50.0,
    "fat_g": 3.29,
    "fibre_g": 1.8,
    "folate_ug": 22.0,
    "iron_mg": 0.76,
    "magnesium_mg": 13.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 22.0,
    "potassium_mg": 94.0,
    "protein_g": 1.01,
    "salt_g": 0.685,
    "sat_fat_g": 0.48,
    "sodium_mg": 274.0,
    "sugar_g": 1.25,
    "vitamin_a_ug": 17.0,
    "vitamin_c_mg": 2.4,
    "vitamin_e_mg": 0.58,
    "vitamin_k_ug": 40.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709863",
  "state": "Canned",
  "subcategory": "String beans",
  "tags": [
    "canned",
    "legumes-and-pulses",
    "string-beans"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
