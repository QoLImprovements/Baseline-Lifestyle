/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "1-loaf",
  "description": "Biscuits, muffins, quick breads",
  "id": "usda-fndds-2707852",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 537.0,
      "key": "1-loaf",
      "kind": "unit",
      "label": "1 loaf"
    },
    {
      "gramsPerUnit": 7.0,
      "key": "1-cubic-inch",
      "kind": "unit",
      "label": "1 cubic inch"
    },
    {
      "gramsPerUnit": 74.0,
      "key": "1-slice",
      "kind": "unit",
      "label": "1 slice"
    },
    {
      "gramsPerUnit": 74.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Bread, Irish soda",
  "nutritionPerBasis": {
    "calcium_mg": 105.0,
    "carbs_g": 51.1,
    "energy_kcal": 301.0,
    "fat_g": 8.96,
    "fibre_g": 2.3,
    "folate_ug": 43.0,
    "iron_mg": 2.63,
    "magnesium_mg": 24.0,
    "omega3_g": 0.005,
    "phosphorus_mg": 120.0,
    "potassium_mg": 276.0,
    "protein_g": 6.48,
    "salt_g": 1.1125,
    "sat_fat_g": 4.49,
    "sodium_mg": 445.0,
    "sugar_g": 21.9,
    "vitamin_a_ug": 90.0,
    "vitamin_c_mg": 0.8,
    "vitamin_e_mg": 0.16,
    "vitamin_k_ug": 1.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707852",
  "state": "Unspecified",
  "subcategory": "Biscuits, muffins, quick breads",
  "tags": [
    "beverages",
    "biscuits-muffins-quick-breads",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
