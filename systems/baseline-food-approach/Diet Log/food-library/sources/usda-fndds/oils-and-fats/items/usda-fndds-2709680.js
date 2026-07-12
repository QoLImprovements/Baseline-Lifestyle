/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Oils & Fats",
  "defaultMeasure": "1-cup",
  "description": "Carrots",
  "id": "usda-fndds-2709680",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 160.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 80.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 235.0,
      "key": "1-cup-mashed",
      "kind": "unit",
      "label": "1 cup, mashed"
    },
    {
      "gramsPerUnit": 5.0,
      "key": "1-piece-slice",
      "kind": "unit",
      "label": "1 piece/slice"
    }
  ],
  "name": "Carrots, canned, reduced sodium, cooked with oil",
  "nutritionPerBasis": {
    "calcium_mg": 30.0,
    "carbs_g": 5.2,
    "energy_kcal": 49.0,
    "fat_g": 3.05,
    "fibre_g": 1.7,
    "folate_ug": 7.0,
    "iron_mg": 0.51,
    "magnesium_mg": 9.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 19.0,
    "potassium_mg": 153.0,
    "protein_g": 0.57,
    "salt_g": 0.0825,
    "sat_fat_g": 0.413,
    "sodium_mg": 33.0,
    "sugar_g": 2.39,
    "vitamin_a_ug": 542.0,
    "vitamin_c_mg": 1.7,
    "vitamin_e_mg": 1.26,
    "vitamin_k_ug": 12.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709680",
  "state": "Canned",
  "subcategory": "Carrots",
  "tags": [
    "canned",
    "carrots",
    "oils-and-fats"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
