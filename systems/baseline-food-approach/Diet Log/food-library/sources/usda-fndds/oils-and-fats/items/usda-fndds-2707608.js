/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Oils & Fats",
  "defaultMeasure": "1-slice",
  "description": "Yeast breads",
  "id": "usda-fndds-2707608",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 25.0,
      "key": "1-slice",
      "kind": "unit",
      "label": "1 slice"
    },
    {
      "gramsPerUnit": 25.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Bread, lard, Puerto Rican style",
  "nutritionPerBasis": {
    "calcium_mg": 14.0,
    "carbs_g": 56.1,
    "energy_kcal": 282.0,
    "fat_g": 3.26,
    "fibre_g": 2.0,
    "folate_ug": 97.0,
    "iron_mg": 3.57,
    "magnesium_mg": 18.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 75.0,
    "potassium_mg": 97.0,
    "protein_g": 7.33,
    "salt_g": 1.0825,
    "sat_fat_g": 0.98,
    "sodium_mg": 433.0,
    "sugar_g": 7.05,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.05,
    "vitamin_k_ug": 0.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707608",
  "state": "Unspecified",
  "subcategory": "Yeast breads",
  "tags": [
    "oils-and-fats",
    "unspecified",
    "yeast-breads"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
