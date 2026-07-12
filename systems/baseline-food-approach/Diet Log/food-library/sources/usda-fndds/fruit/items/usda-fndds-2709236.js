/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "1-cup",
  "description": "Other fruits and fruit salads",
  "id": "usda-fndds-2709236",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 250.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "1-fig",
      "kind": "unit",
      "label": "1 fig"
    },
    {
      "gramsPerUnit": 125.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Fig, canned",
  "nutritionPerBasis": {
    "calcium_mg": 26.0,
    "carbs_g": 19.4,
    "energy_kcal": 76.0,
    "fat_g": 0.24,
    "fibre_g": 2.2,
    "folate_ug": 3.0,
    "iron_mg": 0.28,
    "magnesium_mg": 13.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 10.0,
    "potassium_mg": 157.0,
    "protein_g": 0.56,
    "salt_g": 0.0025,
    "sat_fat_g": 0.045,
    "sodium_mg": 1.0,
    "sugar_g": 17.2,
    "vitamin_a_ug": 4.0,
    "vitamin_c_mg": 1.2,
    "vitamin_e_mg": 0.08,
    "vitamin_k_ug": 3.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709236",
  "state": "Canned",
  "subcategory": "Other fruits and fruit salads",
  "tags": [
    "canned",
    "fruit",
    "other-fruits-and-fruit-salads"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
