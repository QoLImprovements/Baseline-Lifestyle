/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "1-regular",
  "description": "Other vegetables and combinations",
  "id": "usda-fndds-2709976",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 120.0,
      "key": "1-regular",
      "kind": "unit",
      "label": "1 regular"
    },
    {
      "gramsPerUnit": 30.0,
      "key": "1-miniature",
      "kind": "unit",
      "label": "1 miniature"
    },
    {
      "gramsPerUnit": 78.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 155.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 10.0,
      "key": "1-piece",
      "kind": "unit",
      "label": "1 piece"
    }
  ],
  "name": "Peppers, green, cooked",
  "nutritionPerBasis": {
    "calcium_mg": 8.0,
    "carbs_g": 4.83,
    "energy_kcal": 47.0,
    "fat_g": 2.76,
    "fibre_g": 0.9,
    "folate_ug": 19.0,
    "iron_mg": 0.2,
    "magnesium_mg": 9.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 17.0,
    "potassium_mg": 165.0,
    "protein_g": 0.74,
    "salt_g": 0.315,
    "sat_fat_g": 0.752,
    "sodium_mg": 126.0,
    "sugar_g": 2.42,
    "vitamin_a_ug": 29.0,
    "vitamin_c_mg": 85.3,
    "vitamin_e_mg": 0.77,
    "vitamin_k_ug": 9.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709976",
  "state": "Cooked",
  "subcategory": "Other vegetables and combinations",
  "tags": [
    "cooked",
    "other-vegetables-and-combinations",
    "vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
