/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Oils & Fats",
  "defaultMeasure": "1-cup-mashed",
  "description": "Carrots",
  "id": "usda-fndds-2709675",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 235.0,
      "key": "1-cup-mashed",
      "kind": "unit",
      "label": "1 cup, mashed"
    },
    {
      "gramsPerUnit": 160.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 5.0,
      "key": "1-piece-slice",
      "kind": "unit",
      "label": "1 piece/slice"
    },
    {
      "gramsPerUnit": 80.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Carrots, canned, cooked with oil",
  "nutritionPerBasis": {
    "calcium_mg": 24.0,
    "carbs_g": 5.38,
    "energy_kcal": 50.0,
    "fat_g": 3.1,
    "fibre_g": 1.5,
    "folate_ug": 8.0,
    "iron_mg": 0.63,
    "magnesium_mg": 8.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 23.0,
    "potassium_mg": 174.0,
    "protein_g": 0.62,
    "salt_g": 0.5875,
    "sat_fat_g": 0.424,
    "sodium_mg": 235.0,
    "sugar_g": 2.41,
    "vitamin_a_ug": 542.0,
    "vitamin_c_mg": 2.4,
    "vitamin_e_mg": 1.27,
    "vitamin_k_ug": 12.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709675",
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
