/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "1-cup",
  "description": "Other vegetables and combinations",
  "id": "usda-fndds-2709684",
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
    }
  ],
  "name": "Peas and carrots, fresh, cooked, no added fat",
  "nutritionPerBasis": {
    "calcium_mg": 29.0,
    "carbs_g": 12.8,
    "energy_kcal": 67.0,
    "fat_g": 0.39,
    "fibre_g": 4.6,
    "folate_ug": 45.0,
    "iron_mg": 0.84,
    "magnesium_mg": 23.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 77.0,
    "potassium_mg": 272.0,
    "protein_g": 3.3,
    "salt_g": 0.42,
    "sat_fat_g": 0.053,
    "sodium_mg": 168.0,
    "sugar_g": 5.41,
    "vitamin_a_ug": 431.0,
    "vitamin_c_mg": 20.3,
    "vitamin_e_mg": 0.41,
    "vitamin_k_ug": 19.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709684",
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
