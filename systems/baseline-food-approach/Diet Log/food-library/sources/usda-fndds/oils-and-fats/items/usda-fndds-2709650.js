/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Oils & Fats",
  "defaultMeasure": "1-piece",
  "description": "Broccoli",
  "id": "usda-fndds-2709650",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 10.0,
      "key": "1-piece",
      "kind": "unit",
      "label": "1 piece"
    },
    {
      "gramsPerUnit": 10.0,
      "key": "1-floweret",
      "kind": "unit",
      "label": "1 floweret"
    },
    {
      "gramsPerUnit": 160.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 40.0,
      "key": "1-spear",
      "kind": "unit",
      "label": "1 spear"
    },
    {
      "gramsPerUnit": 80.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Broccoli, fresh, cooked with oil",
  "nutritionPerBasis": {
    "calcium_mg": 47.0,
    "carbs_g": 6.32,
    "energy_kcal": 67.0,
    "fat_g": 3.37,
    "fibre_g": 2.4,
    "folate_ug": 56.0,
    "iron_mg": 0.7,
    "magnesium_mg": 21.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 68.0,
    "potassium_mg": 306.0,
    "protein_g": 2.59,
    "salt_g": 0.3825,
    "sat_fat_g": 0.444,
    "sodium_mg": 153.0,
    "sugar_g": 1.41,
    "vitamin_a_ug": 8.0,
    "vitamin_c_mg": 78.3,
    "vitamin_e_mg": 0.73,
    "vitamin_k_ug": 106.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709650",
  "state": "Cooked",
  "subcategory": "Broccoli",
  "tags": [
    "broccoli",
    "cooked",
    "oils-and-fats"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
