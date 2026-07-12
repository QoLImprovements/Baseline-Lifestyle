/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "1-100-calorie-package",
  "description": "Biscuits, muffins, quick breads",
  "id": "usda-fndds-2707832",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 25.0,
      "key": "1-100-calorie-package",
      "kind": "unit",
      "label": "1 100 calorie package"
    },
    {
      "gramsPerUnit": 25.0,
      "key": "1-miniature",
      "kind": "unit",
      "label": "1 miniature"
    },
    {
      "gramsPerUnit": 10.0,
      "key": "1-bite-size",
      "kind": "unit",
      "label": "1 bite size"
    },
    {
      "gramsPerUnit": 130.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 130.0,
      "key": "1-medium",
      "kind": "unit",
      "label": "1 medium"
    },
    {
      "gramsPerUnit": 70.0,
      "key": "1-small",
      "kind": "unit",
      "label": "1 small"
    },
    {
      "gramsPerUnit": 180.0,
      "key": "1-large",
      "kind": "unit",
      "label": "1 large"
    }
  ],
  "name": "Muffin, chocolate chip",
  "nutritionPerBasis": {
    "calcium_mg": 146.0,
    "carbs_g": 55.4,
    "energy_kcal": 402.0,
    "fat_g": 19.0,
    "fibre_g": 1.8,
    "folate_ug": 38.0,
    "iron_mg": 2.49,
    "magnesium_mg": 33.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 129.0,
    "potassium_mg": 175.0,
    "protein_g": 5.77,
    "salt_g": 0.765,
    "sat_fat_g": 5.4,
    "sodium_mg": 306.0,
    "sugar_g": 32.9,
    "vitamin_a_ug": 34.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 2.41,
    "vitamin_k_ug": 13.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707832",
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
