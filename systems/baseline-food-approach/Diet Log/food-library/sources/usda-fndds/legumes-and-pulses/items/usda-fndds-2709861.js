/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Legumes & Pulses",
  "defaultMeasure": "1-cup",
  "description": "String beans",
  "id": "usda-fndds-2709861",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
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
      "gramsPerUnit": 2.0,
      "key": "1-cut-piece",
      "kind": "unit",
      "label": "1 cut piece"
    },
    {
      "gramsPerUnit": 6.0,
      "key": "1-bean",
      "kind": "unit",
      "label": "1 bean"
    }
  ],
  "name": "Green beans, frozen, cooked with oil",
  "nutritionPerBasis": {
    "calcium_mg": 41.0,
    "carbs_g": 6.24,
    "energy_kcal": 53.0,
    "fat_g": 3.07,
    "fibre_g": 2.9,
    "folate_ug": 22.0,
    "iron_mg": 0.64,
    "magnesium_mg": 18.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 28.0,
    "potassium_mg": 154.0,
    "protein_g": 1.44,
    "salt_g": 0.2825,
    "sat_fat_g": 0.431,
    "sodium_mg": 113.0,
    "sugar_g": 1.82,
    "vitamin_a_ug": 20.0,
    "vitamin_c_mg": 4.0,
    "vitamin_e_mg": 0.59,
    "vitamin_k_ug": 39.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709861",
  "state": "Frozen",
  "subcategory": "String beans",
  "tags": [
    "frozen",
    "legumes-and-pulses",
    "string-beans"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
