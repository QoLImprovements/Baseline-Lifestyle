/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "1-slice-chunk",
  "description": "Mango and papaya",
  "id": "usda-fndds-2709244",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 25.0,
      "key": "1-slice-chunk",
      "kind": "unit",
      "label": "1 slice/chunk"
    },
    {
      "gramsPerUnit": 75.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 150.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Mango, frozen",
  "nutritionPerBasis": {
    "calcium_mg": 11.0,
    "carbs_g": 15.0,
    "energy_kcal": 60.0,
    "fat_g": 0.38,
    "fibre_g": 1.6,
    "folate_ug": 43.0,
    "iron_mg": 0.16,
    "magnesium_mg": 10.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 14.0,
    "potassium_mg": 168.0,
    "protein_g": 0.82,
    "salt_g": 0.0025,
    "sat_fat_g": 0.092,
    "sodium_mg": 1.0,
    "sugar_g": 13.7,
    "vitamin_a_ug": 54.0,
    "vitamin_c_mg": 36.4,
    "vitamin_e_mg": 0.9,
    "vitamin_k_ug": 4.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709244",
  "state": "Frozen",
  "subcategory": "Mango and papaya",
  "tags": [
    "frozen",
    "fruit",
    "mango-and-papaya"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
