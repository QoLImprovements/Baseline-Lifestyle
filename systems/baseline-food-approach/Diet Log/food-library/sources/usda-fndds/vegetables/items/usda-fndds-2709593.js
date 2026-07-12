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
  "id": "usda-fndds-2709593",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 130.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 65.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Greens, fresh, cooked, no added fat",
  "nutritionPerBasis": {
    "calcium_mg": 235.0,
    "carbs_g": 5.16,
    "energy_kcal": 37.0,
    "fat_g": 0.97,
    "fibre_g": 4.2,
    "folate_ug": 74.0,
    "iron_mg": 1.14,
    "magnesium_mg": 31.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 43.0,
    "potassium_mg": 302.0,
    "protein_g": 2.97,
    "salt_g": 0.3975,
    "sat_fat_g": 0.106,
    "sodium_mg": 159.0,
    "sugar_g": 0.74,
    "vitamin_a_ug": 254.0,
    "vitamin_c_mg": 46.6,
    "vitamin_e_mg": 1.66,
    "vitamin_k_ug": 419.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709593",
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
