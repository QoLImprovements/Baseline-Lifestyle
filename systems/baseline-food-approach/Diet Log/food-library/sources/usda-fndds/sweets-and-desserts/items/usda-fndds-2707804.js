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
  "id": "usda-fndds-2707804",
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
    },
    {
      "gramsPerUnit": 8.5,
      "key": "1-cubic-inch",
      "kind": "unit",
      "label": "1 cubic inch"
    }
  ],
  "name": "Biscuit, home recipe",
  "nutritionPerBasis": {
    "calcium_mg": 231.0,
    "carbs_g": 44.9,
    "energy_kcal": 350.0,
    "fat_g": 16.0,
    "fibre_g": 1.4,
    "folate_ug": 59.0,
    "iron_mg": 3.22,
    "magnesium_mg": 20.0,
    "omega3_g": 0.011,
    "phosphorus_mg": 162.0,
    "potassium_mg": 134.0,
    "protein_g": 7.03,
    "salt_g": 2.0025,
    "sat_fat_g": 8.54,
    "sodium_mg": 801.0,
    "sugar_g": 4.57,
    "vitamin_a_ug": 155.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.04,
    "vitamin_k_ug": 1.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707804",
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
