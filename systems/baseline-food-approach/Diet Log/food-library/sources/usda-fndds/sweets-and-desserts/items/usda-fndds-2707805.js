/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "quantity-not-specified",
  "description": "Biscuits, muffins, quick breads",
  "id": "usda-fndds-2707805",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 45.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 45.0,
      "key": "1-biscuit",
      "kind": "unit",
      "label": "1 biscuit"
    }
  ],
  "name": "Biscuit, wheat",
  "nutritionPerBasis": {
    "calcium_mg": 70.0,
    "carbs_g": 43.9,
    "energy_kcal": 362.0,
    "fat_g": 18.2,
    "fibre_g": 4.5,
    "folate_ug": 84.0,
    "iron_mg": 3.15,
    "magnesium_mg": 45.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 501.0,
    "potassium_mg": 184.0,
    "protein_g": 7.5,
    "salt_g": 2.325,
    "sat_fat_g": 11.2,
    "sodium_mg": 930.0,
    "sugar_g": 3.71,
    "vitamin_a_ug": 17.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.52,
    "vitamin_k_ug": 4.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707805",
  "state": "Unspecified",
  "subcategory": "Biscuits, muffins, quick breads",
  "tags": [
    "biscuits-muffins-quick-breads",
    "sweets-and-desserts",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
