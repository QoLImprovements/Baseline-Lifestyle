/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "1-cup",
  "description": "Other dark green vegetables",
  "id": "usda-fndds-2709580",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 135.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 68.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Collards, fresh, cooked, fat added, NS as to fat type",
  "nutritionPerBasis": {
    "calcium_mg": 242.0,
    "carbs_g": 5.65,
    "energy_kcal": 58.0,
    "fat_g": 3.37,
    "fibre_g": 4.2,
    "folate_ug": 101.0,
    "iron_mg": 0.49,
    "magnesium_mg": 28.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 26.0,
    "potassium_mg": 222.0,
    "protein_g": 3.15,
    "salt_g": 0.37,
    "sat_fat_g": 0.773,
    "sodium_mg": 148.0,
    "sugar_g": 0.48,
    "vitamin_a_ug": 260.0,
    "vitamin_c_mg": 25.7,
    "vitamin_e_mg": 2.76,
    "vitamin_k_ug": 457.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709580",
  "state": "Cooked",
  "subcategory": "Other dark green vegetables",
  "tags": [
    "cooked",
    "other-dark-green-vegetables",
    "vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
