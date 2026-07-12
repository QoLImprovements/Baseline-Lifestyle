/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "1-biscuit",
  "description": "Biscuits, muffins, quick breads",
  "id": "usda-fndds-2707802",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 45.0,
      "key": "1-biscuit",
      "kind": "unit",
      "label": "1 biscuit"
    },
    {
      "gramsPerUnit": 45.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 8.5,
      "key": "1-cubic-inch",
      "kind": "unit",
      "label": "1 cubic inch"
    }
  ],
  "name": "Biscuit, from refrigerated dough",
  "nutritionPerBasis": {
    "calcium_mg": 27.0,
    "carbs_g": 49.0,
    "energy_kcal": 324.0,
    "fat_g": 11.2,
    "fibre_g": 2.8,
    "folate_ug": 63.0,
    "iron_mg": 2.57,
    "magnesium_mg": 18.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 446.0,
    "potassium_mg": 152.0,
    "protein_g": 6.79,
    "salt_g": 2.5,
    "sat_fat_g": 5.51,
    "sodium_mg": 1000.0,
    "sugar_g": 8.19,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.67,
    "vitamin_k_ug": 9.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707802",
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
